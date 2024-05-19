import { Meta, Story } from '@storybook/vue3';
import Input from './Input.vue';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta<typeof Input>;

const Template: Story<typeof Input> = (args, { argTypes }) => ({
  components: { Input },
  props: Object.keys(argTypes),
  template: '<Input v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  id: 'input-1',
  type: 'text',
  label: 'Label',
  placeholder: 'Placeholder text',
  modelValue: '',
  errors: null,
  help: null,
  symbol: null,
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  errors: 'Error message',
};

export const Help = Template.bind({});
Help.args = {
  ...Default.args,
  help: 'Help text',
};
