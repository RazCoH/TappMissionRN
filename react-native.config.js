module.exports = {
  dependencies: {
    // Disable auto-linking for this SDK — it is registered manually in MainApplication.kt
    'react-native-widget-sdk': {
      platforms: {
        android: null,
      },
    },
  },
};
