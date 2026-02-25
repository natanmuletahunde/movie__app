// Learn more https://docs.expo.dev/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

// Get default Expo config
const config = getDefaultConfig(__dirname);

// Export config with NativeWind
module.exports = withNativeWind(config, {
  input: "./app/globals.css",
  inlineRem: 16,
  configPath: "./tailwind.config.js",
});
