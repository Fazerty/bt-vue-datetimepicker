import moment, {
  Moment,
  MomentInput,
} from 'moment-timezone';
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import DatePicker from './datePicker/DatePicker.vue';
import { DateTimeTexts } from './dateTimeTexts';
import TimePicker from './timePicker/TimePicker.vue';

/**
 * A date time picker
 *
 * @export
 * @class DateTimePicker
 * @extends {Vue}
 */
@Component<DateTimePicker>({
  components: { TimePicker, DatePicker },
})
export default class DateTimePicker extends Vue {
  private texts: DateTimeTexts = DateTimeTexts.getInstance();

  @Prop({ default: () => moment() })
  private value!: Moment | null;

  private workValue: Moment = this.value
    ? moment(this.value).locale(moment.locale())
    : moment().locale(moment.locale());

  /**
   * Format used to display the date/time in the input field.
   * It's used also to parse the value entered in the input field
   * See https://momentjs.com/docs/#/parsing/string-format/
   *
   * @private
   * @type {string}
   * @memberof DateTimePicker
   */
  @Prop({ default: 'DD-MM-YY HH:mm' })
  private format!: string;

  private displayedValue: string = this.value
    ? this.value.format(this.format)
    : '';


  /**
   * The id is used to link to popover to the input field
   *
   * @private
   * @type {string}
   * @memberof DateTimePicker
   */
  private id: string = this.randomUID();

  /**
   * In the time picker
   * If true, uses the 24 hours format
   * If false, uses the am/pm format
   *
   * @private
   * @type {boolean}
   * @memberof DateTimePicker
   */
  @Prop()
  private use24Hours: boolean | undefined;
  private use24HoursProp!: boolean;

  /**
   * Positioning of the date time picker, relative to the target input date field.
   *
   * @private
   * @type {('auto' | 'top' | 'bottom' | 'left' | 'right' | 'topleft' | 'topright'
   *     | 'bottomleft' | 'bottomright' | 'lefttop' | 'leftbottom' | 'righttop' | 'rightbottom')}
   * @memberof DateTimePicker
   */
  @Prop({ default: 'bottom' })
  private placement!:
    | 'auto'
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'topleft'
    | 'topright'
    | 'bottomleft'
    | 'bottomright'
    | 'lefttop'
    | 'leftbottom'
    | 'righttop'
    | 'rightbottom';

  /**
   * Event(s) on the input field that will trigger open/close of date time picker
   * Not working, don't use : popover will close unexpectedly
   *
   * @private
   * @type {(Array<('hover' | 'focus' | 'click' | 'blur')>)}
   * @memberof DateTimePicker
   */
  @Prop({ default: () => [] })
  private triggers!: Array<'hover' | 'focus' | 'click' | 'blur'>;

  /**
   * Defines if the date time picker dialog is shown.
   *
   * @private
   * @type {boolean}
   * @memberof DateTimePicker
   */
  private showDialog: boolean = false;

  /**
   * Defines if the picker use the date picker
   *
   * @private
   * @type {(boolean | undefined)}
   * @memberof DateTimePicker
   */
  @Prop()
  private datePicker: boolean | undefined;
  private datePickerProp!: boolean;

  /**
   * Defines if the picker use the time picker
   *
   * @private
   * @type {(boolean | undefined)}
   * @memberof DateTimePicker
   */
  @Prop()
  private timePicker: boolean | undefined;
  private timePickerProp!: boolean;

  /**
   * Use to change from datePickerProp to timePickerProp and inverse in the dialog
   *
   * @private
   * @type {boolean}
   * @memberof DateTimePicker
   */
  private showDatePicker: boolean = true;

  private pickerDateButtonTooltip = this.texts.selectDate;
  private pickerTimeButtonTooltip = this.texts.selectTime;

  // TODO ... other features to implements

  @Prop({ default: null })
  private minDate!: MomentInput;

  @Prop({ default: null })
  private maxDate!: MomentInput;

  @Prop({ default: '' })
  private timeZone!: string;

  @Prop({ default: '' })
  private defaultDate!: MomentInput;

  @Prop({ default: () => new Array<string>() })
  private disabledDates!: string[]; // format : 'YYYY-MM-DD'

  @Prop({ default: () => new Array<string>() })
  private enabledDates!: string[]; // format : 'YYYY-MM-DD'

  @Prop({ default: () => new Array<string>() })
  private disabledHours!: string[]; // format : 'H'

  @Prop({ default: () => new Array<string>() })
  private enabledHours!: string[]; // format : 'H'

  @Prop({ default: () => new Array<number>() })
  private daysOfWeekDisabled!: number[]; // 0 for sunday

  @Prop({ default: false })
  private showTodayButton!: boolean;

  @Prop({ default: false })
  private showClear!: boolean;

  @Watch('value')
  private valueChanged() {
    this.displayedValue = this.value ? this.value.format(this.format) : '';
    this.workValue = this.value
      ? moment(this.value).locale(moment.locale())
      : moment().locale(moment.locale());
  }

  @Watch('texts')
  private updateTexts() {
    moment.locale(this.texts.lang);
    this.pickerDateButtonTooltip = this.texts.selectDate;
    this.pickerTimeButtonTooltip = this.texts.selectTime;
  }

  private randomUID() {
    return Math.round(Math.pow(36, 10) - Math.random() * Math.pow(36, 10))
      .toString(36)
      .slice(1);
  }

  /**
   * When the value is changed in the text field.
   *
   * @private
   * @param {string} newValue
   * @memberof DateTimePicker
   */
  private valueManuallyChanged(newValue: string) {
    const newValueValid: boolean = moment(newValue, this.format).isValid();
    if (newValueValid) {
      this.workValue = moment(newValue, this.format);
      this.$emit('input', this.workValue);
    }
  }

  private toogleDatePicker(e: Event) {
    this.showDatePicker = !this.showDatePicker;
  }

  private setDateTime(newDateTime: Moment) {
    // Shouldn't do this. Just the emit
    this.displayedValue = newDateTime.format(this.format);
    this.workValue = moment(newDateTime);
    this.$emit('input', newDateTime);
  }

  private created() {
    // Use format to deduce undefined properties
    const formatTokensOnly: string = this.format.replace(
      /\s*\[.*?\]\s*/g,
      '',
    );

    if (typeof this.timePicker !== 'undefined') {
      this.timePickerProp = this.timePicker;
    } else {
      this.timePickerProp = formatTokensOnly.match(/LT|H|h|k|a|A|m|s|S|Z/g)
        ? true
        : false;
    }

    if (typeof this.use24Hours !== 'undefined') {
      this.use24HoursProp = this.use24Hours;
    } else {
      this.use24HoursProp = formatTokensOnly.match(/h|a|A/g) ? false : true;
    }
    if (typeof this.datePicker !== 'undefined') {
      this.datePickerProp = this.datePicker;
    } else {
      this.datePickerProp = formatTokensOnly.match(
        /Y|Q|M|D|G|W|E|g|w|e|L[^T]*?/g,
      )
        ? true
        : false;
    }
  }
}
