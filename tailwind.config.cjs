module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        // palette : https://colors.muz.li/palette/361d32/543c52/f55951/edd2cb/f1e8e6
        'primary': '#361d32',
        'secondary': '#543c52',
        'primary-dark': '#111E49',
        'primary-contrast': '#B5AA9D',
      }
    },
    fontFamily: {
      serif: ['Aleo', 'ui-serif', 'Georgia']
    }
  },
  plugins: [require('daisyui')]
};
