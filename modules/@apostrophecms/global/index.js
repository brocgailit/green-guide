// modules/@apostrophecms/global/index.js
module.exports = {
  fields: {
    add: {
      ctaLabel: {
        type: 'string',
        label: 'Label',
        def: 'Book now!'
      },
      ctaColor: {
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
      ctaXolaId: {
        type: 'string',
        label: 'Xola Button ID',
        def: '5a2c4f14cf8b9c10628b45e6'
      },
      organization: {
        type: 'string',
        label: 'Company/Organization Name',
        def: 'Your Company Name'
      },
      phone: {
        type: 'string',
        label: 'Phone Number',
        def: '+15551235555'
      },
      priceRange: {
        type: 'range',
        label: 'Price Range',
        help: '1 = cheap, 5 = expensive',
        min: 1,
        max: 5,
        step: 1
      },
      streetAddress: {
        label: 'Street Address',
        type: 'string'
      },
      addressLocality: {
        label: 'City',
        type: 'string'
      },
      addressRegion: {
        label: 'State',
        type: 'string',
        min: 2,
        max: 2
      },
      postalCode: {
        label: 'Zip Code',
        type: 'string',
        min: 5,
        max: 10
      },
      addressCountry: {
        label: 'Country',
        type: 'string',
        max: 2,
        min: 2,
        def: 'US'
      },
      hours: {
        type: 'array',
        label: 'Hours',
        titleField: 'name',
        fields: {
          add: {
            name: {
              type: 'string',
              label: 'Name',
              required: true,
              help: 'Example: "Office Hours", "Holiday Hours", "Weekday Hours", etc.'
            },
            dayOfWeek: {
              type: 'checkboxes',
              label: 'Days of Week',
              choices: [
                {
                  label: 'Monday',
                  value: 'Monday'
                },
                {
                  label: 'Tuesday',
                  value: 'Tuesday'
                },
                {
                  label: 'Wednesday',
                  value: 'Wednesday'
                },
                {
                  label: 'Thursday',
                  value: 'Thursday'
                },
                {
                  label: 'Friday',
                  value: 'Friday'
                },
                {
                  label: 'Saturday',
                  value: 'Saturday'
                },
                {
                  label: 'Sunday',
                  value: 'Sunday'
                }
              ]
            },
            opens: {
              type: 'time',
              label: 'Opening Time'
            },
            closes: {
              type: 'time',
              label: 'Closing Time'
            }
          }
        }
      }
    },
    group: {
      basics: {
        label: 'Company/Organization Details',
        fields: [ 'organization', 'phone', 'priceRange' ]
      },
      cta: {
        label: 'Call to Action',
        fields: [ 'ctaLabel', 'ctaColor', 'ctaXolaId' ]
      },
      hours: {
        label: 'Hours',
        fields: [ 'hours' ]
      },
      address: {
        label: 'Postal Address',
        fields: [
          'streetAddress',
          'addressLocality',
          'addressRegion',
          'postalCode',
          'addressCountry'
        ]
      }
    }
  },
  helpers(self) {
    return {
      currentYear() {
        return new Date().getFullYear();
      }
    };
  }

};
