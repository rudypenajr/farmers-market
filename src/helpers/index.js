import _ from 'lodash'
import {
  isSelfPromoSubsequentFree,
  isSelfPromoSubsequentDiscounted,
  otherPromos
} from './promos'

// Check
export const getSelectedProduct = (cart, id) => {
  return cart.find(obj => obj.id === id)
}

// Check
export const handleUpdateToProducts = (products, id, quantity) => {
  debugger;
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

    debugger;
    if (quantity > selected.length) {
      for (let i = 0; i <= (quantity - 1); i++) {
        cart[id].push(p)
      }
    } else if (quantity < selected.length) { // probable decrement
      // cart[id].slice(0, quantity)
      cart[id].splice(0, quantity)
    }
  });
  
  return cart
}

export const handleUpToTotalCost = (cart) => {
  let total = 0
  const mapping = (o) => {
    if (o.discount && o.discount > 0) {
      return (o.price - o.discount)
    }
    return o.price
  }
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

// TODO: Refactor not following immuntiablility
export const handlePromoCheck = (products, cart) => {
  // Update Cart First
  let clonedCart = _.clone(cart)
  let promo, isInCart, isPromoInCart, isSelfPromo, isPromoForChildren
  
  products.forEach(p => {
    // Sanity Checks
    isInCart = (clonedCart.hasOwnProperty(p.id) && clonedCart[p.id].length > 0)
    isPromoInCart = false

    promo = p.promo
    if (promo instanceof Array) {
      for (let i = 0; i < promo.length; i++) {
        promo = promo[i]
        isPromoInCart = (promo && clonedCart.hasOwnProperty(promo.dependent) && clonedCart[promo.dependent].length > 0)
        // debugger;
        // TODO: Refactor - Need way to set 'active' promo such that APPLES has two possible promos
        // NEED IMMUTABILITY HERE
        if (i > 0 && isPromoInCart) {
          console.log('::::::::::::::::::::::::::')
          promo.active = true
          p.promo[i - 1] = false
        }

        if (isPromoInCart) break; 
      }
    }
    // debugger;
    isSelfPromo = (promo && p.id === promo.dependent)
    isPromoForChildren = (promo && promo.children)
    
    // debugger;
    if (isInCart && isPromoInCart) {
      if (isSelfPromo) { // i.e. Coffee & Applies

        if (isPromoForChildren) {
          // i.e. Applies -- Still check if quanity meets limits
          if (p.quantity >= promo.limit) {
            clonedCart[p.id] = isSelfPromoSubsequentDiscounted(p, promo)
          }
        } else {
          // i.e. Coffee
          clonedCart[p.id] = isSelfPromoSubsequentFree(p, promo)
        }

      } else { // i.e. Chai & Milk | Oatmeal & Apples
        
        clonedCart[promo.dependent] = otherPromos(p, clonedCart[promo.dependent], promo)

      }
    }
  })
  
  return clonedCart
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