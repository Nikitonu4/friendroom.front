import{F as o}from"./FrDropbox.369f1edb.js";import"./vue.esm-bundler.c02555e9.js";import"./plugin-vue_export-helper.21dcd24c.js";var l={title:"\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B/\u0410\u0442\u043E\u043C\u044B/FrDropbox",component:o,parameters:{storySource:{source:`import FrDropbox from './FrDropbox.vue';
import { Story } from '@storybook/vue3';
import { FrDropboxProps } from 'components/atoms/FrDropbox/FrDropbox.interfaces';

export default {
  title: '\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B/\u0410\u0442\u043E\u043C\u044B/FrDropbox',
  component: FrDropbox,
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

const Template: Story<FrDropboxProps> = (args: FrDropboxProps) => ({
  components: { FrDropbox },
  setup() {
    return { args };
  },
  template: '<fr-dropbox v-bind="args" />',
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
`,locationsMap:{primary:{startLoc:{col:40,line:30},endLoc:{col:2,line:36},startBody:{col:40,line:30},endBody:{col:2,line:36}}}}},argTypes:{label:{control:{type:"text"}},size:{control:{type:"select"},options:["S","M","L"]},style:{control:{type:"select"},options:["primary","secondary","outline"]},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}};const t=r=>({components:{FrDropbox:o},setup(){return{args:r}},template:'<fr-dropbox v-bind="args" />'}),n=t.bind({});n.storyName="Playground";n.args={label:"Button",mainIcon:{name:""},leftIcon:{name:""},rightIcon:{name:""}};const s=["Primary"];export{n as Primary,s as __namedExportsOrder,l as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnJEcm9wYm94LnN0b3JpZXMuMTBhOTk5MGYuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
