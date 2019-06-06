import { Moment } from 'moment';
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';

/**
 * A minute picker
 *
 * @export
 * @class MinutePicker
 * @extends {Vue}
 */
@Component<MinutePicker>({
  components: { },
})
export default class MinutePicker extends Vue {

  @Prop()
  private inputTime!: Moment;

  @Prop()
  private time!: Moment;

  private workTime: Moment = this.time.clone();

  private cols: string[] = ['Col1', 'Col2', 'Col3', 'Col4'];

  private minutesTable: any[] = new Array<any>();

  @Watch('time')
  private updateWorkTime() {
    this.workTime = this.time.clone();
    this.generateMinutesTable();
  }

  private created() {
    this.generateMinutesTable();
  }

  private generateMinutesTable() {
    this.minutesTable.splice(0, this.minutesTable.length);
    const currentminute: number = this.inputTime.minute();
    const startminute: number = 0;
    for (let i = 0; i < 3; i++) {
      const minutesRow: any = {};
      for (let j = 0; j < 4; j++) {
        const minute: number = startminute + j * 5 + i * 5 * 4 ;
        minutesRow[this.cols[j]] = {
          minute,
          currentMinute: minute === currentminute,
          // currentMinute: minute === currentminute - (currentminute % 5),
        };
      }
      this.minutesTable.push(minutesRow);
    }
  }

  private selectMinute(minute: number) {
    this.$emit('setMinute', minute);
  }

}
