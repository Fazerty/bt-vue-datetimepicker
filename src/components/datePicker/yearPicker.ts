import { Moment } from 'moment';
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';

/**
 * A year picker
 *
 * @export
 * @class YearPicker
 * @extends {Vue}
 */
@Component<YearPicker>({
  components: { },
})
export default class YearPicker extends Vue {

  @Prop()
  private inputDate!: Moment;

  @Prop()
  private date!: Moment;

  private workDate: Moment = this.date.clone();

  private cols: string[] = ['Col1', 'Col2', 'Col3', 'Col4', 'Col5'];

  private yearsTable: any[] = new Array<any>();

  @Watch('date')
  private updateWorkDate() {
    this.workDate = this.date.clone();
    this.generateYearsTable();
  }

  private created() {
    this.generateYearsTable();
  }

  private generateYearsTable() {
    this.yearsTable.splice(0, this.yearsTable.length);
    const currentYear: number = this.inputDate.year();
    const workingYear: number = this.workDate.year();
    const startYear: number = (workingYear - workingYear % 10) - 10;
    for (let i = 0; i < 6; i++) {
      const yearsRow: any = {};
      for (let j = 0; j < 5; j++) {
        const year: number = startYear + j + i * 5;
        yearsRow[this.cols[j]] = {
          year,
          currentYear: year === currentYear,
        };
      }
      this.yearsTable.push(yearsRow);
    }
  }

  private selectYear(year: number) {
    this.$emit('setYear', year);
  }

}
