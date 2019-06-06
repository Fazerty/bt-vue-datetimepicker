import moment, { Moment, MomentCreationData } from 'moment';
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import { DateTimeTexts } from '../dateTimeTexts';
import CenturyPicker from './CenturyPicker.vue';
import DayPicker from './DayPicker.vue';
import DecadePicker from './DecadePicker.vue';
import MonthPicker from './MonthPicker.vue';
import YearPicker from './YearPicker.vue';

type pickerMode = 'days' | 'months' | 'years' | 'decades' | 'centuries';

/**
 * A date picker
 *
 * @export
 * @class DatePicker
 * @extends {Vue}
 */
@Component<DatePicker>({
  components: { DayPicker, DecadePicker, MonthPicker, YearPicker, CenturyPicker },
})
export default class DatePicker extends Vue {
  @Prop()
  private texts!: DateTimeTexts;

  @Prop({ default: () => moment() })
  private date!: Moment;

  // Date used by all the child components
  private workDate: Moment = moment(this.date.locale(moment.locale())).locale(moment.locale());

  private changeButtonTitle!: string;
  private changeButtonTooltip!: string;
  private pickerPreviousButtonTooltip!: string;
  private pickerNextButtonTooltip!: string;

  private pickerMode: pickerMode = 'days';

  private viewModes: pickerMode[] = ['days', 'months', 'years', 'decades', 'centuries'];

  @Watch('date')
  private updateWorkDate() {
    this.workDate = this.date.clone().locale(moment.locale());
    this.getChangeButtonTitle();
  }

  private created() {
    // https://github.com/moment/moment/issues/1797
    this.date.locale(moment.locale());
    this.workDate.locale(moment.locale());
    this.getChangeButtonTitle();
  }

  private setDate(newDate: Moment) {
    this.$emit('setDateTime', newDate);
  }

  private getPreviousPickerMode() {
    this.pickerMode = this.viewModes[this.viewModes.indexOf(this.pickerMode) - 1];
    this.getChangeButtonTitle();
  }

  private setMonth(monthNumber: number) {
    this.workDate.month(monthNumber);
    this.getPreviousPickerMode();
  }

  private setYear(year: number) {
    this.workDate.year(year);
    this.getPreviousPickerMode();
  }

  private setDecade(decade: number) {
    this.workDate.year(decade);
    this.getPreviousPickerMode();
  }

  private setCentury(century: number) {
    this.workDate.year(century);
    this.getPreviousPickerMode();
  }

  private changePickerMode() {
    this.pickerMode = this.viewModes[(this.viewModes.indexOf(this.pickerMode) + 1) % 5];
    this.getChangeButtonTitle();
  }

  private pickerNext() {
    switch (this.pickerMode) {
      case 'days':
        this.workDate = this.workDate.clone().add(1, 'months');
        break;
      case 'months':
        this.workDate = this.workDate.clone().add(1, 'years');
        break;
      case 'years':
        this.workDate = this.workDate.clone().add(10, 'years');
        break;
      case 'decades':
        this.workDate = this.workDate.clone().add(100, 'years');
        break;
      case 'centuries':
        this.workDate = this.workDate.clone().add(1000, 'years');
        break;
    }
    this.getChangeButtonTitle();
  }

  private pickerPrevious() {
    switch (this.pickerMode) {
      case 'days':
        this.workDate = this.workDate.clone().subtract(1, 'months');
        break;
      case 'months':
        this.workDate = this.workDate.clone().subtract(1, 'years');
        break;
      case 'years':
        this.workDate = this.workDate.clone().subtract(10, 'years');
        break;
      case 'decades':
        this.workDate = this.workDate.clone().subtract(100, 'years');
        break;
      case 'centuries':
        this.workDate = this.workDate.clone().subtract(1000, 'years');
        break;
    }
    this.getChangeButtonTitle();
  }

  private getChangeButtonTitle() {
    switch (this.pickerMode) {
      case 'days':
        this.changeButtonTitle = this.workDate.format('MMMM YYYY');
        this.changeButtonTooltip = this.texts.selectMonth;
        this.pickerPreviousButtonTooltip = this.texts.prevMonth;
        this.pickerNextButtonTooltip = this.texts.nextMonth;
        break;
      case 'months':
        this.changeButtonTitle = this.workDate.format('YYYY');
        this.changeButtonTooltip = this.texts.selectYear;
        this.pickerPreviousButtonTooltip = this.texts.prevYear;
        this.pickerNextButtonTooltip = this.texts.nextYear;
        break;
      case 'years':
        this.changeButtonTitle = this.workDate.format('YYYY');
        const startYear = (this.workDate.year() - this.workDate.year() % 10) - 10;
        this.changeButtonTitle = startYear + ' - ' + (startYear + 29);
        this.changeButtonTooltip = this.texts.selectDecade;
        this.pickerPreviousButtonTooltip = this.texts.prevDecade;
        this.pickerNextButtonTooltip = this.texts.nextDecade;
        break;
      case 'decades':
        this.changeButtonTitle = this.workDate.format('YYYY');
        const startDecade = (this.workDate.year() - this.workDate.year() % 100) - 100;
        this.changeButtonTitle = startDecade + ' - ' + (startDecade + 290);
        this.changeButtonTooltip = this.texts.selectCentury;
        this.pickerPreviousButtonTooltip = this.texts.prevCentury;
        this.pickerNextButtonTooltip = this.texts.nextCentury;
        break;
      case 'centuries':
        this.changeButtonTitle = this.workDate.format('YYYY');
        const startCentury = (this.workDate.year() - this.workDate.year() % 1000) - 1000;
        this.changeButtonTitle = startCentury + ' - ' + (startCentury + 2900);
        this.changeButtonTooltip = this.texts.selectDate;
        this.pickerPreviousButtonTooltip = this.texts.prevCentury;
        this.pickerNextButtonTooltip = this.texts.prevCentury;
        break;
    }
  }
}
