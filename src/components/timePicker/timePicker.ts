import moment, { Moment } from 'moment';
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import { DateTimeTexts } from '../dateTimeTexts';
import HourPicker from './HourPicker.vue';
import MinutePicker from './MinutePicker.vue';

type pickerMode = 'time' | 'hours' | 'minutes';

/**
 * A time picker
 *
 * @export
 * @class TimePicker
 * @extends {Vue}
 */
@Component<TimePicker>({
  components: { HourPicker, MinutePicker },
})
export default class TimePicker extends Vue {

  @Prop({ default: () => moment() })
  private time!: Moment;

  @Prop()
  private texts!: DateTimeTexts;

  private nextHourTooltip: string = this.texts.incrementHour;
  private nextMinuteTooltip: string = this.texts.incrementMinute;
  private nextSecondTooltip: string = this.texts.incrementSecond;
  private pickerHourTooltip: string = this.texts.pickHour;
  private pickerMinuteTooltip: string = this.texts.pickMinute;
  private pickerSecondTooltip: string = this.texts.pickSecond;
  private pickerAMPMTooltip: string = this.texts.togglePeriod;
  private previousHourTooltip: string = this.texts.decrementHour;
  private previousMinuteTooltip: string = this.texts.decrementMinute;
  private previousSecondTooltip: string = this.texts.decrementSecond;

  private workTime: Moment = moment(this.time.locale(moment.locale()));

  @Prop()
  private use24Hours!: boolean;

  private workHour: string = this.use24Hours ? this.workTime.format('HH') : this.workTime.format('hh') ;

  private workMinute: string = this.workTime.format('mm');

  private workAMPM: string = this.workTime.format('A');

  private pickerMode: pickerMode = 'time';

  @Watch('time')
  private updateWorkTime() {
    this.workTime = moment(this.time.locale(moment.locale()));
    this.workHour = this.use24Hours ? this.workTime.format('HH') : this.workTime.format('hh') ;
    this.workMinute = this.workTime.format('mm');
    this.workAMPM = this.workTime.format('A');
  }

  private created() {
    // https://github.com/moment/moment/issues/1797
    this.time.locale(moment.locale());
    this.workTime.locale(moment.locale());
    this.workAMPM = this.workTime.format('A');
  }

  private previousHour() {
    let newHour: number;
    if (this.use24Hours) {
      newHour = this.workTime.hour() - 1;
      if (newHour < 0) {
        newHour = newHour + 24;
      }
    } else {
      newHour = this.workTime.hour() - 1;
      if (newHour === -1 || newHour === 11) {
        newHour = newHour + 12;
      }
    }
    this.setHour(newHour);
  }

  private nextHour() {
    let newHour: number;
    if (this.use24Hours) {
      newHour = this.workTime.hour() + 1;
      if (newHour < 0) {
        newHour = newHour - 24;
      }
    } else {
      newHour = this.workTime.hour() + 1;
      if (newHour === 24 || newHour === 12) {
        newHour = newHour - 12;
      }
    }
    this.setHour(newHour);
  }

  private previousMinute() {
    let newMinute: number = this.workTime.minute() - 1;
    if (newMinute === -1) {
      newMinute = 59;
    }
    this.setMinute(newMinute);
  }

  private nextMinute() {
    let newMinute: number = this.workTime.minute() + 1;
    if (newMinute === 60) {
      newMinute = 0;
    }
    this.setMinute(newMinute);

  }

  private pickerHours() {
    this.pickerMode = 'hours';
  }

  private pickerMinutes() {
    this.pickerMode = 'minutes';
  }

  private pickerAMPM() {
    let newHour: number = this.workTime.hour() + 12;
    newHour = newHour % 24;
    this.setHour(newHour);
  }

  private setHour(hour: number) {
    this.pickerMode = 'time';
    this.$emit('setDateTime', this.workTime.hour(hour));
  }

  private setMinute(minute: number) {
    this.pickerMode = 'time';
    this.$emit('setDateTime', this.workTime.minute(minute));
  }

}
