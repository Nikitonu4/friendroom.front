// import '@quasar/extras/roboto-font/roboto-font.css'
// import '@quasar/extras/material-icons/material-icons.css'
// import '@quasar/extras/animate/fadeInUp.css'
// import '@quasar/extras/animate/fadeOutDown.css'
// import '@quasar/extras/animate/fadeInRight.css'
// import '@quasar/extras/animate/fadeOutRight.css'
import { colors, setCssVar } from 'quasar';

setCssVar('primary', '#000');
setCssVar('secondary', '#ff4c4c');
setCssVar('accent', '#00a300');

setCssVar('positive', '#45ff70');
setCssVar('negative', '#ba4553');
setCssVar('info', '#00d4ff');
setCssVar('warning', '#f2c037');

import 'quasar/dist/quasar.css';
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import { app } from '@storybook/vue3';
import { Quasar } from 'quasar';

// This is also where you would setup things such as pinia for storybook

app.use(Quasar, {});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
