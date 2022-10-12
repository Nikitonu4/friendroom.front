import{k as g,b as d,C as m,D as c,E as b,B as f,A as y}from"./vue.esm-bundler.c02555e9.js";import{_ as B}from"./plugin-vue_export-helper.21dcd24c.js";const l=g({__name:"FrToggleButton",props:{initValue:{default:""},disabled:{type:Boolean,default:!1},options:null},emits:["update:value"],setup(e,{emit:u}){const s=e,t=d({get(){return s.initValue},set(n){u("update:value",n)}});return(n,o)=>{const p=m("q-btn-toggle");return c(),b(p,{modelValue:f(t),"onUpdate:modelValue":o[0]||(o[0]=i=>y(t)?t.value=i:null),class:"fr-toggle-button",options:e.options,disable:e.disabled,ripple:!1,padding:"17px 55px",rounded:"","toggle-color":"white","toggle-text-color":"primary",spread:"",unelevated:"","no-caps":""},null,8,["modelValue","options","disable"])}}});var a=B(l,[["__scopeId","data-v-7e84511b"]]);l.__docgenInfo={exportName:"default",displayName:"FrToggleButton",description:"",tags:{},props:[{name:"initValue",required:!0,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"options",required:!0,type:{name:"Array",elements:[{name:`{
  label: string;
  value: string;
}`}]}}],events:[{name:"update:value",type:{names:["string"]}}]};var F={title:"\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B/\u0410\u0442\u043E\u043C\u044B/FrToggleButton",component:a,parameters:{storySource:{source:`import FrToggleButton from './FrToggleButton.vue';
import { Story } from '@storybook/vue3';
import { FrToggleButtonProps } from 'components/atoms/FrToggleButton/FrToggleButton.interfaces';

export default {
  title: '\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B/\u0410\u0442\u043E\u043C\u044B/FrToggleButton',
  component: FrToggleButton,
  parameters: {},
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

const Template: Story<FrToggleButtonProps> = (args: FrToggleButtonProps) => ({
  components: { FrToggleButton },
  setup() {
    return { args };
  },
  template: '<fr-toggle-button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.storyName = 'Playground';
Primary.args = {
  initValue: 'label1',
  options: [
    {
      label: '\u0422\u0435\u0441\u0442\u043E\u0432\u044B\u0439 label1',
      value: 'label1',
    },
    {
      label: '\u0422\u0435\u0441\u0442\u043E\u0432\u044B\u0439 label2',
      value: 'label2',
    },
  ],
};
`,locationsMap:{primary:{startLoc:{col:45,line:16},endLoc:{col:2,line:22},startBody:{col:45,line:16},endBody:{col:2,line:22}}}}},argTypes:{disabled:{control:{type:"boolean"}}}};const v=e=>({components:{FrToggleButton:a},setup(){return{args:e}},template:'<fr-toggle-button v-bind="args" />'}),r=v.bind({});r.storyName="Playground";r.args={initValue:"label1",options:[{label:"\u0422\u0435\u0441\u0442\u043E\u0432\u044B\u0439 label1",value:"label1"},{label:"\u0422\u0435\u0441\u0442\u043E\u0432\u044B\u0439 label2",value:"label2"}]};const x=["Primary"];export{r as Primary,x as __namedExportsOrder,F as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnJUb2dnbGVCdXR0b24uc3Rvcmllcy44ZjI3NzBkYS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvYXRvbXMvRnJUb2dnbGVCdXR0b24vRnJUb2dnbGVCdXR0b24udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtYnRuLXRvZ2dsZVxuICAgIHYtbW9kZWw9XCJ2YWx1ZVwiXG4gICAgY2xhc3M9XCJmci10b2dnbGUtYnV0dG9uXCJcbiAgICA6b3B0aW9ucz1cIm9wdGlvbnNcIlxuICAgIDpkaXNhYmxlPVwiZGlzYWJsZWRcIlxuICAgIDpyaXBwbGU9XCJmYWxzZVwiXG4gICAgcGFkZGluZz1cIjE3cHggNTVweFwiXG4gICAgcm91bmRlZFxuICAgIHRvZ2dsZS1jb2xvcj1cIndoaXRlXCJcbiAgICB0b2dnbGUtdGV4dC1jb2xvcj1cInByaW1hcnlcIlxuICAgIHNwcmVhZFxuICAgIHVuZWxldmF0ZWRcbiAgICBuby1jYXBzXG4gIC8+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnO1xuXG5pbnRlcmZhY2UgRnJUb2dnbGVCdXR0b25Qcm9wcyB7XG4gIGluaXRWYWx1ZTogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIG9wdGlvbnM6IHtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHZhbHVlOiBzdHJpbmc7XG4gIH1bXTtcbn1cblxuY29uc3QgcHJvcHMgPSB3aXRoRGVmYXVsdHMoZGVmaW5lUHJvcHM8RnJUb2dnbGVCdXR0b25Qcm9wcz4oKSwge1xuICBpbml0VmFsdWU6ICcnLFxuICBkaXNhYmxlZDogZmFsc2UsXG59KTtcblxuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzPHtcbiAgKGU6ICd1cGRhdGU6dmFsdWUnLCBuZXdWYWx1ZTogc3RyaW5nKTogdm9pZDtcbn0+KCk7XG5cbmNvbnN0IHZhbHVlID0gY29tcHV0ZWQoe1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIHByb3BzLmluaXRWYWx1ZTtcbiAgfSxcbiAgc2V0KG5ld1ZhbHVlKSB7XG4gICAgZW1pdCgndXBkYXRlOnZhbHVlJywgbmV3VmFsdWUpO1xuICB9LFxufSk7XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuLmZyLXRvZ2dsZS1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwICFpbXBvcnRhbnQ7XG59XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbInZhbHVlIiwiY29tcHV0ZWQiLCJwcm9wcyIsIm5ld1ZhbHVlIiwiZW1pdCJdLCJtYXBwaW5ncyI6IjRUQXNDQUEsRUFBQUMsRUFBQSxDQUF1QixLQUFBLENBRW5CLE9BQUFDLEVBQUEsU0FBYSxFQUNmLElBQUFDLEVBQUEsQ0FFRUMsRUFBQSxlQUFBRCxDQUFBLENBQTZCLENBQy9CLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
