require('apostrophe')({
  shortName: 'green-guide',
  // baseUrl: 'http://localhost:3000/',
  modules: {
    // Apostrophe module configuration
    // *******************************
    //
    // NOTE: most configuration occurs in the respective modules' directories.
    // See modules/@apostrophecms/page/index.js for an example.
    //
    // Any modules that are not present by default in Apostrophe must at least
    // have a minimal configuration here to turn them on: `moduleName: {}`
    // ***********************************************************************
    // `className` options set custom CSS classes for Apostrophe core widgets.
    '@apostrophecms/rich-text-widget': {
      options: {
        className: 'gg-rich-text'
      }
    },
    '@apostrophecms/image-widget': {
      options: {
        className: 'gg-image-widget'
      }
    },
    '@apostrophecms/video-widget': {
      options: {
        className: 'gg-video-widget'
      }
    },
    // '@apostrophecms/seo': {},
    // `asset` supports the project's webpack build for client-side assets.
    asset: {},
    // The project's first custom page type.
    'default-page': {},
    'coming-soon-page': {},
    tour: {
      options: {
        sellerId: '5980ecb1e017980a598b45d9'
      }
    },
    'tour-cards-widget': {},
    'reviews-widget': {},
    'news-widget': {},
    'two-column-widget': {},
    'multi-item-button-widget': {},
    'contact-info-widget': {},
    'hero-widget': {}
  }
});
