const colors = [
  {
    label: 'Terpine Green (Light)',
    value: 'terpine'
  },
  {
    label: 'Venture Green (Dark)',
    value: 'venture'
  },
  {
    label: 'Clarity Blue',
    value: 'clarity'
  },
  {
    label: 'Shatter Yellow',
    value: 'shatter'
  },
  {
    label: 'Vapor White',
    value: 'vapor'
  },
  {
    label: 'Smoke Grey',
    value: 'smoke'
  },
  {
    label: 'Resin Black',
    value: 'resin'
  }
];

module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Hero Widget'
  },
  fields: {
    add: {
      heading: {
        type: 'string',
        label: 'Heading',
        max: 150
      },
      headingColor: {
        label: 'Heading Color',
        type: 'select',
        def: 'vapor',
        choices: colors
      },
      subheading: {
        type: 'string',
        label: 'Subheading',
        max: 150
      },
      subheadingColor: {
        label: 'Subheading Color',
        type: 'select',
        def: 'vapor',
        choices: colors
      },
      tagline: {
        type: 'string',
        label: 'Tag Line',
        max: 150
      },
      taglineColor: {
        label: 'Tagline Color',
        type: 'select',
        def: 'vapor',
        choices: colors
      },
      content: {
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {
              toolbar: [
                'styles',
                '|',
                'bold',
                'italic',
                'link'
              ],
              styles: [
                {
                  tag: 'p',
                  label: 'Paragraph (P)'
                }
              ]
            },
            'multi-item-button': {}
          }
        }
      }
    }
  }
};
