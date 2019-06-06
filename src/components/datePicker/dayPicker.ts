import moment, { Moment } from 'moment';
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';



/**
 * A Day picker
 *
 * @export
 * @class DayPicker
 * @extends {Vue}
 */
@Component<DayPicker>({
  components: {},
})
export default class DayPicker extends Vue {

  @Prop()
  private inputDate!: Moment;

  @Prop()
  private date!: Moment;

  private workDate: Moment = this.date.clone();

  private weekDays: string[] = moment.weekdaysMin();

  private days: any[] = new Array<any>();

  @Watch('date')
  private updateWorkDate() {
    this.workDate = this.date.clone();
    this.generateDays();
  }

  private created() {
    this.generateDays();
  }

  private generateDays() {
    this.days.splice(0, this.days.length);
    const weekday: number = this.workDate.clone().startOf('month').isoWeekday();
    // => 0 being Sunday and 6 being Saturday
    const currentMonth: string = this.workDate.format('MM');
    const firstDayOfTable: Moment = this.workDate.clone().startOf('month').subtract(weekday, 'days');
    for (let i = 0; i < 6; i++) {
      const dates: any = {};
      for (let j = 0; j < 7; j++) {
        const calendarDate: Moment = firstDayOfTable.clone().add(j + i * 7, 'days');
        dates[this.weekDays[j]] = {
          day: parseInt(calendarDate.format('DD'), 10),
          date: calendarDate,
          currentMonth: (currentMonth === calendarDate.format('MM')),
          currentDay: calendarDate.format('MM-YY-DD') === this.inputDate.format('MM-YY-DD'),
        };
      }
      this.days.push(dates);
    }
  }

  private selectDay(date: Moment) {
    date.hour(this.workDate.hour());
    date.minute(this.workDate.minute());
    date.second(this.workDate.second());
    date.millisecond(this.workDate.millisecond());
    this.$emit('setDate', date);
  }

}
