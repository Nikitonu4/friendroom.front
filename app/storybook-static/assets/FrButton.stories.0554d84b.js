import{F as n}from"./FrButton.67ed05d1.js";import"./vue.esm-bundler.c02555e9.js";import"./plugin-vue_export-helper.21dcd24c.js";var s={title:"\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B/\u0410\u0442\u043E\u043C\u044B/FrButton",component:n,parameters:{storySource:{source:`import FrButton from './FrButton.vue';
import { FrButtonProps } from './FrButton.interfaces';
import { Story } from '@storybook/vue3';

export default {
  title: '\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B/\u0410\u0442\u043E\u043C\u044B/FrButton',
  component: FrButton,
  parameters: {},
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'select' },
      options: ['S', 'M', 'L'],
    },
    style: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline'],
    },
    loading: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

const Template: Story<FrButtonProps> = (args: FrButtonProps) => ({
  components: { FrButton },
  setup() {
    return { args };
  },
  template: '<fr-button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.storyName = 'Playground';
Primary.args = {
  label: 'Button',
  mainIcon: {
    name: '',
  },
  leftIcon: {
    name: '',
  },
  rightIcon: {
    name: '',
  },
};
`,locationsMap:{primary:{startLoc:{col:39,line:30},endLoc:{col:2,line:36},startBody:{col:39,line:30},endBody:{col:2,line:36}}}}},argTypes:{label:{control:{type:"text"}},size:{control:{type:"select"},options:["S","M","L"]},style:{control:{type:"select"},options:["primary","secondary","outline"]},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}};const e=o=>({components:{FrButton:n},setup(){return{args:o}},template:'<fr-button v-bind="args" />'}),t=e.bind({});t.storyName="Playground";t.args={label:"Button",mainIcon:{name:""},leftIcon:{name:""},rightIcon:{name:""}};const p=["Primary"];export{t as Primary,p as __namedExportsOrder,s as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnJCdXR0b24uc3Rvcmllcy4wNTU0ZDg0Yi5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
