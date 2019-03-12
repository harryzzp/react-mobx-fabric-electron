const rewireMobX = require('react-app-rewire-mobx');
const {
  override,
  fixBabelImports,
  injectBabelPlugin,
  addDecoratorsLegacy
  // addLessLoader,
} = require("customize-cra");
/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireMobX(config, env);
  config = injectBabelPlugin(["@babel/plugin-proposal-decorators", { legacy: true }], config);
  return config;
}
module.exports = override(
  fixBabelImports("import", {
      libraryName: "antd",
      libraryDirectory: "es",
      style: 'css' // change importing css to less
  }),
  addDecoratorsLegacy(),
  // addLessLoader({
  //   javascriptEnabled: true,
  //   modifyVars: { "@primary-color": "#1DA57A" }
  // })
);
