import { Moment } from 'moment';
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';

/**
 * A month picker
 *
 * @export
 * @class MonthPicker
 * @extends {Vue}
 */
@Component<MonthPicker>({
  components: { },
})
export default class MonthPicker extends Vue {

  @Prop()
  private inputDate!: Moment;

  @Prop()
  private date!: Moment;

  private workDate: Moment = this.date.clone();

  private cols: string[] = ['Col1', 'Col2', 'Col3', 'Col4'];

  private months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  private monthsTable: any[] = new Array<any>();

  @Watch('date')
  private updateWorkDate() {
    this.workDate = this.date.clone();
    this.generateMonthsTable();
  }

  private created() {
    this.generateMonthsTable();
  }

  private generateMonthsTable() {
    this.monthsTable.splice(0, this.monthsTable.length);
    for (let i = 0; i < (this.months.length / this.cols.length); i++) {
      const monthsRow: any = {};
      for (let j = 0; j < this.cols.length; j++) {
        const currentMonthNumber: number = j + i * (this.months.length / this.cols.length);
        const currentMonth: string = this.months[currentMonthNumber];
        monthsRow[this.cols[j]] = {
          month: currentMonth,
          monthNumber: currentMonthNumber,
          currentMonth: this.inputDate.month() === currentMonthNumber,
        };
      }
      this.monthsTable.push(monthsRow);
    }
  }

  private selectMonth(monthNumber: number) {
    this.$emit('setMonth', monthNumber);
  }
}
