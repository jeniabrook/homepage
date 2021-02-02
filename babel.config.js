'use strict';

const plugins = [
  // https://emotion.sh/docs/@emotion/babel-plugin
  [
    '@emotion/babel-plugin',
    // https://github.com/emotion-js/emotion/tree/master/packages/babel-plugin#options
    { autoLabel: 'always', labelFormat: '[filename]--[local]' },
  ],
];

module.exports = api => {
  // https://babeljs.io/docs/en/config-files#apicache
  api.cache(true);

  return {
    // https://emotion.sh/docs/css-prop#babel-preset
    presets: [
      [
        'next/babel',
        {
          'preset-react': {
            runtime: 'automatic',
            importSource: '@emotion/react',
          },
        },
      ],
    ],
    plugins,
  };
};
