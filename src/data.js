const data = [
  { 
    code: 'CH1',
    name: 'Chai',
    price: 3.11,
    promo: [{
      dependent: 'MK1',
      limit: 1,
      price: 0.00,
    }]
  },
  { 
    code: 'AP1',
    name: 'Apples',
    price: 6.00,
    promo: [{
      dependent: 'AP1',
      limit: 3,
      price: 4.50
    }]
  },
  { 
    code: 'CF1',
    name: 'Coffee',
    price: 11.23,
    promo: [{
      dependent: 'CF1',
      limit: 1,
      price: 0.00
    }]
  },
  { 
    code: 'MK1',
    name: 'Milk',
    price: 4.75
  },
  { 
    code: 'OM1',
    name: 'Oatmeal',
    price: 3.69,
    promo: '',
    dependent: 'AP1'
  }
]

export default data