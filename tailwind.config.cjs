module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      serif: ['Aleo', 'ui-serif', 'Georgia']
    }
  },
  plugins: [require('daisyui')]
};
