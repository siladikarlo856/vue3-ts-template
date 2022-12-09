import { DpmButton } from "@pidpm/component-library";

export default {
  title: "common/DpmButton",
  component: DpmButton,
  argTypes: {
    onClick: {},
  },
};

const Template = (args) => ({
  //👇 Your template goes here
  components: { DpmButton },
  setup() {
    return { args };
  },
  // eslint-disable-next-line quotes
  template: `<DpmButton v-bind="args" />`,
});

export const _00_Playground = Template.bind({});
_00_Playground.args = {
  text: "DpmButton",
  action: false,
  actionDropdown: false,
};
