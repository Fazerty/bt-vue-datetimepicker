import { Moment } from 'moment';
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';

/**
 * A hour picker
 *
 * @export
 * @class HourPicker
 * @extends {Vue}
 */
@Component<HourPicker>({
  components: { },
})
export default class HourPicker extends Vue {

  @Prop()
  private inputTime!: Moment;

  @Prop()
  private use24Hours!: boolean;

  @Prop()
  private time!: Moment;

  private workTime: Moment = this.time.clone();

  private cols: string[] = ['Col1', 'Col2', 'Col3', 'Col4'];

  private hoursTable: any[] = new Array<any>();

  @Watch('time')
  private updateWorkTime() {
    this.workTime = this.time.clone();
    this.generateHoursTable();
  }

  private created() {
    this.generateHoursTable();
  }

  private generateHoursTable() {
    this.hoursTable.splice(0, this.hoursTable.length);
    const currenthour: number = this.inputTime.hour();
    const starthour: number = 1;
    const step: number = this.use24Hours ? 2 : 1;
    for (let i = 0; i < 3; i++) {
      const hoursRow: any = {};
      for (let j = 0; j < this.cols.length; j++) {
        const hour: number = starthour + j * step + i * 4 * step;
        hoursRow[this.cols[j]] = {
          hour,
          currentHour: hour === currenthour,
          // currentHour: hour === currenthour - (currenthour % this.step) ,
        };
      }
      this.hoursTable.push(hoursRow);
    }
  }

  private selectHour(hour: number) {
    this.$emit('setHour', hour);
  }

}
