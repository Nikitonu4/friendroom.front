import{k as f,b as v,C as s,D as t,E as l,F as y,G as _,O as g,P as T,B as F,A as P}from"./vue.esm-bundler.c02555e9.js";import{_ as V}from"./plugin-vue_export-helper.21dcd24c.js";const u=f({__name:"FrTabs",props:{initValue:{default:""},disabled:{type:Boolean,default:!1},options:null},emits:["update:value"],setup(e,{emit:m}){const c=e,n=v({get(){return c.initValue},set(r){m("update:value",r)}});return(r,o)=>{const d=s("q-tab"),b=s("q-tabs");return t(),l(b,{modelValue:F(n),"onUpdate:modelValue":o[0]||(o[0]=a=>P(n)?n.value=a:null),class:"fr-tabs bg-white","no-caps":"","indicator-color":"primary","active-class":"fr-tabs__active","active-color":"primary"},{default:y(()=>[(t(!0),_(T,null,g(e.options,a=>(t(),l(d,{key:a.value,disable:e.disabled,name:a.value,label:a.label,ripple:!1},null,8,["disable","name","label"]))),128))]),_:1},8,["modelValue"])}}});var i=V(u,[["__scopeId","data-v-24761a12"]]);u.__docgenInfo={exportName:"default",displayName:"FrTabs",description:"",tags:{},props:[{name:"initValue",required:!0,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"options",required:!0,type:{name:"Array",elements:[{name:`{
  label: string;
  value: string;
}`}]}}],events:[{name:"update:value",type:{names:["string"]}}]};var E={title:"\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B/\u0410\u0442\u043E\u043C\u044B/FrTabs",component:i,parameters:{storySource:{source:`import FrTabs from './FrTabs.vue';
import { Story } from '@storybook/vue3';
import { FrTabsProps } from 'components/atoms/FrTabs/FrTabs.interfaces';

export default {
  title: '\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B/\u0410\u0442\u043E\u043C\u044B/FrTabs',
  component: FrTabs,
  parameters: {},
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

const Template: Story<FrTabsProps> = (args: FrTabsProps) => ({
  components: { FrTabs },
  setup() {
    return { args };
  },
  template: '<fr-tabs v-bind="args" @value="console.log($event.target.value)" />',
});

export const Primary = Template.bind({});
Primary.storyName = 'Playground';
Primary.args = {
  initValue: 'flat',
  options: [
    {
      label: '\u041D\u0430\u0439\u0442\u0438 \u0441\u043E\u0441\u0435\u0434\u0430',
      value: 'roommate',
    },
    {
      label: '\u041D\u0430\u0439\u0442\u0438 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443',
      value: 'flat',
    },
  ],
};
`,locationsMap:{primary:{startLoc:{col:37,line:16},endLoc:{col:2,line:22},startBody:{col:37,line:16},endBody:{col:2,line:22}}}}},argTypes:{disabled:{control:{type:"boolean"}}}};const x=e=>({components:{FrTabs:i},setup(){return{args:e}},template:'<fr-tabs v-bind="args" @value="console.log($event.target.value)" />'}),p=x.bind({});p.storyName="Playground";p.args={initValue:"flat",options:[{label:"\u041D\u0430\u0439\u0442\u0438 \u0441\u043E\u0441\u0435\u0434\u0430",value:"roommate"},{label:"\u041D\u0430\u0439\u0442\u0438 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443",value:"flat"}]};const k=["Primary"];export{p as Primary,k as __namedExportsOrder,E as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnJUYWJzLnN0b3JpZXMuMWI0ZGJjZWQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2F0b21zL0ZyVGFicy9GclRhYnMudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtdGFic1xuICAgIHYtbW9kZWw9XCJ2YWx1ZVwiXG4gICAgY2xhc3M9XCJmci10YWJzIGJnLXdoaXRlXCJcbiAgICBuby1jYXBzXG4gICAgaW5kaWNhdG9yLWNvbG9yPVwicHJpbWFyeVwiXG4gICAgYWN0aXZlLWNsYXNzPVwiZnItdGFic19fYWN0aXZlXCJcbiAgICBhY3RpdmUtY29sb3I9XCJwcmltYXJ5XCJcbiAgPlxuICAgIDxxLXRhYlxuICAgICAgdi1mb3I9XCJ0YWIgaW4gb3B0aW9uc1wiXG4gICAgICA6a2V5PVwidGFiLnZhbHVlXCJcbiAgICAgIDpkaXNhYmxlPVwiZGlzYWJsZWRcIlxuICAgICAgOm5hbWU9XCJ0YWIudmFsdWVcIlxuICAgICAgOmxhYmVsPVwidGFiLmxhYmVsXCJcbiAgICAgIDpyaXBwbGU9XCJmYWxzZVwiXG4gICAgLz5cbiAgPC9xLXRhYnM+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnO1xuXG5pbnRlcmZhY2UgRnJUYWJzUHJvcHMge1xuICBpbml0VmFsdWU6IHN0cmluZztcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBvcHRpb25zOiB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB2YWx1ZTogc3RyaW5nO1xuICB9W107XG59XG5cbmNvbnN0IHByb3BzID0gd2l0aERlZmF1bHRzKGRlZmluZVByb3BzPEZyVGFic1Byb3BzPigpLCB7XG4gIGluaXRWYWx1ZTogJycsXG4gIGRpc2FibGVkOiBmYWxzZSxcbn0pO1xuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzPHtcbiAgKGU6ICd1cGRhdGU6dmFsdWUnLCBuZXdWYWx1ZTogc3RyaW5nKTogdm9pZDtcbn0+KCk7XG5cbmNvbnN0IHZhbHVlID0gY29tcHV0ZWQoe1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIHByb3BzLmluaXRWYWx1ZTtcbiAgfSxcbiAgc2V0KG5ld1ZhbHVlKSB7XG4gICAgZW1pdCgndXBkYXRlOnZhbHVlJywgbmV3VmFsdWUpO1xuICB9LFxufSk7XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuLmZyLXRhYnMge1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xuICAmX19hY3RpdmUge1xuICAgIDpkZWVwKC5xLWZvY3VzLWhlbHBlcikge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxuICA6ZGVlcCgucS10YWJfX2luZGljYXRvcikge1xuICAgIGhlaWdodDogM3B4O1xuICB9XG59XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbInZhbHVlIiwiY29tcHV0ZWQiLCJwcm9wcyIsIm5ld1ZhbHVlIiwiZW1pdCJdLCJtYXBwaW5ncyI6ImdWQXdDQUEsRUFBQUMsRUFBQSxDQUF1QixLQUFBLENBRW5CLE9BQUFDLEVBQUEsU0FBYSxFQUNmLElBQUFDLEVBQUEsQ0FFRUMsRUFBQSxlQUFBRCxDQUFBLENBQTZCLENBQy9CLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
