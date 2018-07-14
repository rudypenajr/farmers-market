// Check
export const getSelectedProduct = (cart, id) => {
  return cart.find(obj => obj.id === id)
}

// Check
export const handleUpdateToCart = (cart, id, quantity) => {
  return [...cart].map(obj => {
    if (obj.id === id) {
      obj.quantity = quantity
      return obj
    }

    return obj
  })
}


export const handleUpdateToSubTotal = (selected) => {
  // Check Current Amount vs. Promo Limit
  // If Promo is TRUE, separate amount vs promo amt
  // THEN multiple promo amt by promot price, etc.
  let totalAmount =  0
  let subQuantity = 0
  let subTotal = 0
  let promoQuantity = 0
  let promoTotal = 0

  if (selected.promo) {
    // TODO: Check if promo is for same product
    let isSelfPromo = selected.id === selected.promo.dependent
    let hasMetRequirements = selected.quantity >= selected.promo.limit

    subQuantity = selected.quantity
    subTotal = subQuantity * selected.price

    // if (selected.quantity >= selected.promo.limit) {
    if (isSelfPromo && hasMetRequirements) {
      console.log('self promo and requirements met ', isSelfPromo, hasMetRequirements)
      subQuantity = selected.promo.limit
      subTotal = subQuantity * selected.price
      
      promoQuantity = selected.quantity - selected.promo.limit
      promoTotal = promoQuantity * selected.promo.price
    }
  }
  
  // Total = Sub Total + Promo Total
  console.log(subQuantity, subTotal, promoQuantity, promoTotal)
  totalAmount = subTotal + promoTotal
  console.log('totalAmt: ', totalAmount)
  
  return totalAmount
}

// Check
export const handleUpdateToTotalItems = (cart) => {
  const mapping = o => o.quantity
  const reducer = (acc, curr) => acc + curr;
  return cart.map(mapping).reduce(reducer)
}

export const handleUpdateToAlert = (ccItem, originalAlert) => {
  // let alert = this.state.alert
  // if (currentCartItem.amount >= currentCartItem.promo.limit) {
  //   alert = ''
  // }
  return ccItem.amount >= ccItem.promo.limit ? '' : originalAlert
}