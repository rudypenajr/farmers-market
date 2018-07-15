// Check
export const getSelectedProduct = (cart, id) => {
  return cart.find(obj => obj.id === id)
}

// Check
export const handleUpdateToProducts = (products, id, quantity) => {
  return [...products].map(obj => {
    if (obj.id === id) {
      obj.quantity = quantity
      return obj
    }

    return obj
  })
}

export const handleUpdateToCart = (products, cart) => {
  products.forEach(p => {
    const id = p.id
    const quantity = p.quantity
    
    let selected = cart[id]
    if (quantity > selected.length) {
      for (let i = 0; i <= (quantity - 1); i++) {
        cart[id].push(p)
      }
    }
  });
  
  return cart
}

export const handleUpToTotalCost = (cart) => {
  let total = 0
  const mapping = o => o.price
  const reducer = (acc, curr) => acc + curr;
  
  for (var id in cart) {
    const val = cart[id]

    if (val.length > 0) {
      let subtotal = cart[id].map(mapping).reduce(reducer)
      total += subtotal
    }
  }
  
  return total
}

// export const handleUpdateToSubTotal = (selected) => {
//   // Check Current Amount vs. Promo Limit
//   // If Promo is TRUE, separate amount vs promo amt
//   // THEN multiple promo amt by promot price, etc.
//   let totalAmount =  0
//   let subQuantity = 0
//   let subTotal = 0
//   let promoQuantity = 0
//   let promoTotal = 0

//   if (selected.promo) {
//     // TODO: Check if promo is for same product
//     let isSelfPromo = selected.id === selected.promo.dependent
//     let hasMetRequirements = selected.quantity >= selected.promo.limit

//     subQuantity = selected.quantity
//     subTotal = subQuantity * selected.price

//     // if (selected.quantity >= selected.promo.limit) {
//     if (isSelfPromo && hasMetRequirements) {
//       subQuantity = selected.promo.limit
//       subTotal = subQuantity * selected.price
      
//       promoQuantity = selected.quantity - selected.promo.limit
//       promoTotal = promoQuantity * selected.promo.price
//     }
//   }
  
  // Total = Sub Total + Promo Total
//   totalAmount = subTotal + promoTotal
  
//   return totalAmount
// }

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