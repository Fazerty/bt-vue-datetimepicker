import { Moment } from 'moment';
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';

/**
 * A century picker
 *
 * @export
 * @class CenturyPicker
 * @extends {Vue}
 */
@Component<CenturyPicker>({
  components: { },
})
export default class CenturyPicker extends Vue {

  @Prop()
  private inputDate!: Moment;

  @Prop()
  private date!: Moment;

  private workDate: Moment = this.date.clone();

  private cols: string[] = ['Col1', 'Col2', 'Col3', 'Col4', 'Col5'];

  private centuries: number[] = [];

  private centuriesTable: any[] = new Array<any>();

  @Watch('date')
  private updateWorkDate() {
    this.workDate = this.date.clone();
    this.generateCenturiesTable();
  }

  private created() {
    this.generateCenturiesTable();
  }

  private generateCenturiesTable() {
    this.centuriesTable.splice(0, this.centuriesTable.length);
    const currentCentury: number = this.inputDate.year() - this.inputDate.year() % 100;
    const workingYear: number = this.workDate.year();
    const startCentury: number = (workingYear - workingYear % 1000) - 1000;
    for (let i = 0; i < 6; i++) {
      const CenturiesRow: any = {};
      for (let j = 0; j < 5; j++) {
        const century: number = startCentury + j * 100 + i * 500;
        CenturiesRow[this.cols[j]] = {
          century,
          currentCentury: century === currentCentury,
        };
      }
      this.centuriesTable.push(CenturiesRow);
    }
  }

  private selectCentury(century: number) {
    this.$emit('setCentury', century);
  }

}
