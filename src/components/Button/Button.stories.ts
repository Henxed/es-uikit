import Button from './Button.vue';

// Экспортируем компонент
export default {
  title: 'Components/Button',
  component: Button,
};

// Создаем шаблон для нашей истории
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button v-bind="$props">Кнопка</Button>',
});

// История для компонента Button
export const Default = Template.bind({});
Default.args = {
  loading: false,
};
