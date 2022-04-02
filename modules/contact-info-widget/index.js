module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Contact Info Widget',
    alias: 'contactInfoWidget'
  },
  fields: {
    add: {
      heading: {
        type: 'string',
        label: 'Heading',
        def: 'Contact Us'
      }
    }
  },
  helpers(self) {
    return {
      formatPhone(phone) {
        const tenDigit = phone.replace(/\D/, '').slice(-10);
        const area = tenDigit.slice(0, 3);
        const firstThree = tenDigit.slice(3, 6);
        const lastFour = tenDigit.slice(-4);
        return `(${area}) ${firstThree}-${lastFour}`;
      }
    };
  }
};
