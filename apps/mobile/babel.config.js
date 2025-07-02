module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          '@services': '../../packages/services',
          '@state': '../../packages/state',
          '@config': '../../packages/config',
          '@ui': '../../packages/ui',
        },
      },
    ],
  ],
};
