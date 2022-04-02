module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'News Widget'
  },
  fields: {
    add: {
      sources: {
        label: 'News Sources',
        type: 'array',
        fields: {
          add: {
            name: {
              type: 'string',
              label: 'Name',
              required: true
            },
            _logo: {
              type: 'relationship',
              withType: '@apostrophecms/image',
              max: 1,
              required: true
            },
            headline: {
              type: 'string',
              label: 'Article Headline'
            },
            url: {
              type: 'url',
              label: 'Article URL',
              required: true
            }
          }
        }
      }
    }
  }
};
