module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Tour Cards Widget'
    // icon: 'chevron-up-icon'
  },
  fields: {
    add: {
      heading: {
        type: 'string',
        label: 'Heading'
      },
      subheading: {
        type: 'string',
        label: 'Subheading'
      },
      details: {
        type: 'area',
        label: 'Details',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {}
          }
        }
      },
      _tours: {
        type: 'relationship',
        label: 'Tours',
        withType: 'tour',
        withRelationships: [ '_images' ],
        builders: {
          // Include only the information you need with a projection
          project: {
            title: 1,
            subtitle: 1,
            price: 1,
            description: 1,
            xolaId: 1,
            priceUnit: 1,
            _images: 1,
            ctaLabel: 1,
            ctaColor: 1,
            features: 1
          }
        }
      }
    }
  }
};
