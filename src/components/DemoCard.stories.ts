import DemoCard from './DemoCard.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Components/DemoCard',
  component: DemoCard,
} as Meta<typeof DemoCard>;

const Template: StoryFn<typeof DemoCard> = (args) => ({
  components: { DemoCard },
  setup() {
    return { args };
  },
  template: `
    <div style="width: 300px; height: 300px;">
      <DemoCard v-bind="args"/>
    </div>`,
});

export const Primary = Template.bind({});
Primary.args = {
  image:
    'https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  title: 'Welcome to nature',
  message: 'This is a featured card',
  isFeatured: true,
  buttonText: 'Click Me',
};

export const NoImage = Template.bind({});
NoImage.args = {
  title: 'No image',
  message: 'This has no image and is not featured',
  isFeatured: false,
  buttonText: 'Click Me',
};
