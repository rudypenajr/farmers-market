import _ from 'lodash'

// i.e. Coffee
export const isSelfPromoSubsequentFree = (p, promo) => {
  let modified = []
  for (let i = 0; i < p.quantity; i++) {
    let cloned = _.clone(p)
    if (i < promo.limit) {
      modified.push(cloned)
    } else {
      cloned.promoEnabled = true
      if (promo.price === 0) {
        cloned.discount = p.price
      }
      // cloned.discount = (p.price - promo.price)
      // cloned.price = promo.price
      modified.push(cloned)
    }
  }
  return modified
}

// i.e. Apples
export const isSelfPromoSubsequentDiscounted = (p, promo) => {
  let modified = []
  for (let i = 0; i < p.quantity; i++) {
    let cloned = _.clone(p)
    cloned.promoEnabled = true
    cloned.discount = (p.price - promo.price)
    // cloned.price = p.promo.price
    modified.push(cloned)
  }
  return modified
}

export const otherPromos = (product, promoProduct, promo) => {
  // let idxLimit = (product.promo.limit - 1)
  let idxLimit = (promo.limit - 1)
  let modified = []
  
  // 
  if (promoProduct.length < promo.limit) {
    return promoProduct;
  }

  // TODO: Possible to refactor both functions into 1
  if (promo.children) { // i.e. Oatmeal

    for (let i = 0; i < promoProduct.length; i++) {  
      let cloned = _.clone(promoProduct[i])
      
      cloned.promoEnabled = true
      // cloned.price = promo.price
      // debugger;
      if (promo.price === 0) {
        cloned.discount = cloned.price
      } else {
        cloned.discount = (cloned.price - promo.price)  
      }

      modified.push(cloned)
    }

  } else { // i.e. Chai
    for (let i = 0; i < promoProduct.length; i++) {
      let cloned = _.clone(promoProduct[i])
      if (i === idxLimit) {
        cloned.promoEnabled = true
        if (promo.price === 0) {
          cloned.discount = cloned.price
        } else {
          cloned.discount = (cloned.price - promo.price)  
        }
        
        // cloned.price = promo.price
      }
      modified.push(cloned)
    }

  }

  return modified
}