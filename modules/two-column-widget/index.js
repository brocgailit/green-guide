module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Two Column'
  },
  fields: {
    add: {
      columnOne: {
        type: 'area',
        label: 'Column One',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            'contact-info': {}
          }
        }
      },
      columnTwo: {
        type: 'area',
        label: 'Column Two',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            'contact-info': {}
          }
        }
      }
    }
  }
};
