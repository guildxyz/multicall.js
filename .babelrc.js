const { NODE_ENV } = process.env;

module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          browsers: ['ie >= 11']
        },
        exclude: ['transform-async-to-generator', 'transform-regenerator'],
        modules: false,
        loose: true
      }
    ]
  ],
  plugins: [
    // don't use `loose` mode here - need to copy symbols when spreading
    NODE_ENV === 'test' && '@babel/transform-modules-commonjs',
    '@babel/plugin-proposal-optional-chaining'
  ].filter(Boolean)
};
