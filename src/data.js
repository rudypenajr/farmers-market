const data = [
  { 
    id: 'CH1',
    name: 'Chai',
    price: 3.11,
    promo: [{
      dependent: 'MK1',
      limit: 1,
      price: 0.00,
    }],
    alert: 'Purchase a box of Chai and get milk free. (Limit 1)'
  },
  { 
    id: 'AP1',
    name: 'Apples',
    price: 6.00,
    promo: [{
      dependent: 'AP1',
      limit: 3,
      price: 4.50
    }],
    alert: 'If you buy 3 or more bags of Apples, the price drops to $4.50.'
  },
  { 
    id: 'CF1',
    name: 'Coffee',
    price: 11.23,
    promo: [{
      dependent: 'CF1',
      limit: 1,
      price: 0.00
    }],
    alert: 'BOGO -- Buy-One-Get-One-Free Special on Coffee. (Unlimited)'
  },
  { 
    id: 'MK1',
    name: 'Milk',
    price: 4.75
  },
  { 
    id: 'OM1',
    name: 'Oatmeal',
    price: 3.69,
    promo: '',
    dependent: 'AP1',
    alert: 'Purchase a bag of Oatmeal and get 50% off a bag of Apples'
  }
]

export default data