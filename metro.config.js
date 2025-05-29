// metro.config.js  –  Expo SDK 53+
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Force Metro to load the ESM build of every @firebase/* package
config.resolver.resolveRequest = (context, moduleImport, platform) => {
  if (moduleImport.startsWith('@firebase/')) {
    return context.resolveRequest(
      { ...context, isESMImport: true },
      moduleImport,
      platform
    );
  }
  return context.resolveRequest(context, moduleImport, platform);
};

module.exports = config;