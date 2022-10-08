import { InlineConfig, mergeConfig } from 'vite';
// import { StorybookViteConfig } from '@storybook/builder-vite';
import { resolve } from "path";

const projectRootDir = resolve(__dirname);
const config = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/vue3",
  core: {
    builder: "@storybook/builder-vite",
    disableTelemetry: true,
  },
  features: {
    storyStoreV7: true
  },
  async viteFinal(config, options) {
    const cfg: InlineConfig = {
      resolve: {
        // fundamental to allow Storybook resolves components
        alias: {
          "src": resolve(projectRootDir, "/src"),
          "components": resolve(projectRootDir, "/src/components"),
        }
      },
      build: {
        sourcemap: 'inline'
      },
      server: {

      }
    }
    return mergeConfig(config, cfg)
  }
  // webpackFinal: async (config, { configType }) => {
  //   config.module.rules.push({
  //     test: /\.(scss|sass)$/,
  //     use: ['style-loader', 'css-loader', 'sass-loader'],
  //     include: path.resolve(__dirname, '../')
  //   });
  //   config.module.rules.push({
  //     test: /\.stories\.ts?$/,
  //     use: [
  //       {
  //         loader: require.resolve('@storybook/source-loader'),
  //         options: { parser: 'typescript' }
  //       }
  //     ],
  //     enforce: 'pre'
  //   });
  //
  //   config.module.rules.push( {
  //     test: /\.mdx?$/,
  //     use: ['babel-loader', '@mdx-js/vue-loader'],
  //   },)
  //
  //   return config
  // }
}

export default config;
