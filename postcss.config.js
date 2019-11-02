const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './public/**/*.html',
    './src/**/*.tsx',
  ],

  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

const cssnano = require('cssnano')({
  preset: 'default',
});

module.exports = {
  plugins: [
    tailwindcss('./tailwind.js'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production'
      && [purgecss, cssnano]
      || [purgecss, cssnano]
    )
  ],
};
