module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@constants': './src/constants',
          '@services': './src/services',
          '@assets': './src/assets',
          '@redux': './src/redux',
          '@hooks': './src/hooks',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
