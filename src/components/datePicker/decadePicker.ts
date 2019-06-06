import { Moment } from 'moment';
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';

/**
 * A date picker
 *
 * @export
 * @class DatePicker
 * @extends {Vue}
 */
@Component<DatePicker>({
  components: { },
})
export default class DatePicker extends Vue {

  @Prop()
  private inputDate!: Moment;

  @Prop()
  private date!: Moment;

  private workDate: Moment = this.date.clone();

  private cols: string[] = ['Col1', 'Col2', 'Col3', 'Col4', 'Col5'];

  private decadesTable: any[] = new Array<any>();

  @Watch('date')
  private updateWorkDate() {
    this.workDate = this.date.clone();
    this.generateDecadesTable();
  }

  private created() {
    this.generateDecadesTable();
  }

  private generateDecadesTable() {
    this.decadesTable.splice(0, this.decadesTable.length);
    const currentDecade: number = (this.inputDate.year() - this.inputDate.year() % 10);
    const workingYear: number = this.workDate.year();
    const startDecade: number = (workingYear - workingYear % 100) - 100;
    for (let i = 0; i < 6; i++) {
      const decadesRow: any = {};
      for (let j = 0; j < 5; j++) {
        const decade: number = startDecade + j * 10 + i * 50;
        decadesRow[this.cols[j]] = {
          decade,
          currentDecade: decade === currentDecade,
        };
      }
      this.decadesTable.push(decadesRow);
    }
  }

  private selectDecade(decade: number) {
    this.$emit('setDecade', decade);
  }
}
