// This configures the @apostrophecms/pages module to add a "home" page type to the
// pages menu

module.exports = {
  options: {
    types: [
      {
        name: '@apostrophecms/home-page',
        label: 'Home Page'
      },
      {
        name: 'default-page',
        label: 'Default'
      },
      {
        name: 'coming-soon',
        label: 'Coming Soon'
      }
    ]
  }
};
