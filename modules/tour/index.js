module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Tour',
    pluralLabel: 'Tours',
    alias: 'tour'
  },
  fields: {
    add: {
      xolaId: {
        label: 'Xola Experience ID',
        type: 'string',
        required: true
      },
      price: {
        type: 'float',
        label: 'Price',
        required: true
      },
      priceUnit: {
        type: 'string',
        label: 'Price Unit',
        help: 'i.e. Person, Group, Group of 11, etc.',
        def: 'person'
      },
      subtitle: {
        type: 'string',
        label: 'Subtitle',
        max: 150
      },
      description: {
        type: 'string',
        label: 'Description',
        textarea: true,
        required: true
      },
      _images: {
        label: 'Tour photo(s)',
        type: 'relationship',
        withType: '@apostrophecms/image',
        required: true
      },
      ctaLabel: {
        label: 'CTA Label',
        type: 'string',
        def: 'Book now!'
      },
      ctaColor: {
        label: 'CTA Color',
        type: 'select',
        def: 'clarity',
        choices: [
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
          }
        ]
      },
      features: {
        label: 'Features',
        type: 'array',
        titleField: 'label',
        fields: {
          add: {
            label: {
              type: 'string',
              label: 'Label',
              required: true,
              max: 150
            }
          }
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [ 'title', 'subtitle', 'xolaId', 'price', 'priceUnit', 'description', 'features', '_images' ]
      },
      cta: {
        label: 'CTA',
        fields: [ 'ctaColor', 'ctaLabel' ]
      }
    }
  },
  helpers(self) {
    return {
      formatPrice(tour) {
        const format = {
          style: 'currency',
          currency: 'USD'
        };
        return new Intl.NumberFormat('en-US', format).format(tour.price);
      }
    };
  }
};
