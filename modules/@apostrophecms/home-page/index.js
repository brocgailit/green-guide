module.exports = {
  options: {
    label: 'Home Page'
  },
  fields: {
    add: {
      navigationLabel: {
        type: 'string',
        lagel: 'Navigation Label'
      },
      _heroBackground: {
        label: 'Hero Background',
        type: 'relationship',
        withType: '@apostrophecms/image',
        max: 1
      },
      hero: {
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
                  tag: 'h1',
                  label: 'Heading 1 (H1)'
                },
                {
                  tag: 'h2',
                  label: 'Heading 2 (H2)'
                },
                {
                  tag: 'h3',
                  label: 'Heading 3 (H3)'
                },
                {
                  tag: 'p',
                  label: 'Paragraph (P)'
                }
              ]
            },
            'multi-item-button': {}
          }
        }
      },
      main: {
        type: 'area',
        options: {
          widgets: {
            hero: {},
            '@apostrophecms/rich-text': {
              toolbar: [
                'styles',
                '|',
                'bold',
                'italic',
                'strike',
                'link',
                '|',
                'bulletList',
                'orderedList'
              ],
              styles: [
                {
                  tag: 'p',
                  label: 'Paragraph (P)'
                },
                {
                  tag: 'h3',
                  label: 'Heading 3 (H3)'
                },
                {
                  tag: 'h4',
                  label: 'Heading 4 (H4)'
                }
              ]
            },
            '@apostrophecms/image': {},
            '@apostrophecms/video': {},
            'tour-cards': {},
            reviews: {},
            news: {}
          }
        }
      },
      footer: {
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {
              toolbar: [
                'styles',
                '|',
                'bold',
                'italic',
                'strike',
                'link',
                '|',
                'bulletList',
                'orderedList'
              ],
              styles: [
                {
                  tag: 'p',
                  label: 'Paragraph (P)'
                }
              ]
            },
            'two-column': {},
            'contact-info': {}
          }
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'title',
          'navigationLabel',
          'footer'
        ]
      },
      hero: {
        label: 'Hero',
        fields: [
          'hero',
          '_heroBackground'
        ]
      },
      main: {
        label: 'Main Content',
        fields: [
          'main'
        ]
      }
    }
  }
};
