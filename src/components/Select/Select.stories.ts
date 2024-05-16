import Select from './Select.vue';

// Экспортируем компонент
export default {
  title: 'Components/Select',
  component: Select,
};

// Создаем шаблон для нашей истории
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Select },
  template: '<Select v-bind="$props" />',
});

// История для компонента Select
export const Default = Template.bind({});
Default.args = {
  id: 'select-1',
  label: 'Select Label',
  options: [
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' },
    { id: 3, label: 'Option 3' },
  ],
  placeholder: 'Choose an option',
  valueKey: 'id',
  labelKey: 'label',
  errors: null,
};
