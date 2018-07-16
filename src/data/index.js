const data = [
  { 
    id: 'CH1',
    name: 'Chai',
    price: 3.11,
    discount: 0,
    promo: [{
      name: 'CHMK',
      dependent: 'MK1',
      limit: 1,
      price: 0.00,
      children: false,
      active: true
    }],
    alert: 'Purchase a box of Chai and get milk free. (Limit 1)'
  },
  { // Check
    id: 'AP1',
    name: 'Apples',
    price: 6.00,
    discount: 0,
    promo: [{
      name: 'APPL',
      dependent: 'AP1',
      limit: 3,
      price: 4.50,
      children: true,
      active: true
    }, {
      name: 'APOM',
      dependent: 'OM1',
      limit: 6,
      price: 3.00,
      children: true,
      active: false
    }],
    alert: 'APPL -- If you buy 3 or more bags of Apples, the price drops to $4.50.'
  },
  { // Check
    id: 'CF1',
    name: 'Coffee',
    price: 11.23,
    discount: 0,
    promo: [{
      name: 'BOGO',
      dependent: 'CF1',
      limit: 1,
      price: 0.00,
      children: false,
      active: true
    }],
    alert: 'BOGO -- Buy-One-Get-One-Free Special on Coffee. (Unlimited)'
  },
  { 
    id: 'MK1',
    name: 'Milk',
    price: 4.75,
    discount: 0,
    promo: [{
      name: 'CHMK'
    }]
  },
  { 
    id: 'OM1',
    name: 'Oatmeal',
    price: 3.69,
    discount: 0,
    promo: [{
      name: 'APOM',
      dependent: 'AP1',
      limit: 6,
      price: 3.00,
      children: true,
      active: true
    }],
    alert: 'APOM -- Purchase a bag of Oatmeal and get 50% off a bag of Apples'
  }
]

export default data