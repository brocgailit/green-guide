module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Reviews Widget'
  },
  fields: {
    add: {
      heading: {
        type: 'string',
        label: 'Heading'
      },
      platforms: {
        label: 'Review Platforms',
        type: 'array',
        titleField: 'name',
        fields: {
          add: {
            name: {
              type: 'string',
              label: 'Platform Name',
              required: true
            },
            url: {
              label: 'URL',
              type: 'url',
              required: true
            },
            _logo: {
              label: 'Logo',
              type: 'relationship',
              withType: '@apostrophecms/image',
              max: 1,
              required: true
            },
            aggregateRating: {
              label: 'Overall Rating',
              type: 'integer',
              min: 1,
              max: 5,
              def: 5,
              required: true
            },
            ratingMax: {
              label: 'Maximum Rating',
              type: 'integer',
              min: 0,
              def: 5,
              required: true
            }
          }
        }
      }
    }
  }
};
