module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Multi Item Button'
  },
  fields: {
    add: {
      label: {
        type: 'string',
        label: 'Label',
        def: 'Book now!'
      },
      color: {
        label: 'Color',
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
      size: {
        label: 'Size',
        type: 'select',
        def: 'md',
        choices: [
          {
            label: 'Small',
            value: 'sm'
          },
          {
            label: 'Medium',
            value: 'md'
          },
          {
            label: 'Large',
            value: 'lg'
          }
        ]
      },
      xolaId: {
        type: 'string',
        label: 'Xola Button ID',
        def: '5a2c4f14cf8b9c10628b45e6'
      }
    }
  }
};
