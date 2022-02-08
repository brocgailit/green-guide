// This configures the @apostrophecms/pages module to add a "home" page type to the
// pages menu

module.exports = {
  options: {
    types: [
      {
        name: 'default-page',
        label: 'Default'
      },
      {
        name: '@apostrophecms/home-page',
        label: 'Home Page'
      },
      {
        name: 'coming-soon-page',
        label: 'Coming Soon Page'
      }
    ]
  }
};
