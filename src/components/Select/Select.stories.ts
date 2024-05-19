import { Meta, StoryFn } from '@storybook/vue3';
import Select from './Select.vue';

interface Option {
  id: string;
  label: string;
}

export default {
  title: 'Components/Select',
  component: Select,
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Select },
  setup() {
    const options: Option[] = [
      { id: '1', label: 'Option 1' },
      { id: '2', label: 'Option 2' },
      { id: '3', label: 'Option 3' },
    ];
    return { args, options };
  },
  template: '<Select v-bind="args" :options="options" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Choose an option',
  placeholder: 'Select an option',
  errors: null,
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Choose an option',
  placeholder: 'Select an option',
  errors: 'This field is required.',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Choose an option',
  placeholder: 'Select an option',
  disabled: true,
};
