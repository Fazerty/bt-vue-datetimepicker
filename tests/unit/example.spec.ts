import { expect } from 'chai';
import { shallowMount, createLocalVue, mount } from '@vue/test-utils';
import DateTimePicker from '@/components/DateTimePicker.vue';
import moment, { Moment } from 'moment';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@/fontawesome';

// create an extended `Vue` constructor
const localVue = createLocalVue();

// install plugins as normal
localVue.use(BootstrapVue);

// pass the `localVue` to the mount options
/*mount(Component, {
  localVue
})*/


describe('DateTimePicker.vue', () => {
  it('text field contains date texte well formatted', () => {
    const date: Moment = moment();
    const dateFormat: string = 'HH:mm DD-MM-YY';
    const dateText: string = date.format(dateFormat);
    const wrapper = mount(DateTimePicker, {
      localVue,
      propsData: { date, format: dateFormat },

    });
    const input = wrapper.find('input');
    expect((input.element as any).value).to.contain(dateText);
  });

  it('click button renders dialog', () => {
    const date: Moment = moment();
    const dateText: string = date.format('DD-MM-YY HH:mm');
    const wrapper = mount(DateTimePicker, {
      localVue,
      propsData: { date },
    });
    const button = wrapper.find('button');
    button.trigger('click');
    const input = wrapper.find('input');
    expect((input.element as any).value).to.contain(dateText);
  });
});
