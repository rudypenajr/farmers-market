import _ from 'lodash'

// i.e. Coffee
export const isSelfPromoSubsequentFree = (p) => {
  let modified = []
  for (let i = 0; i < p.quantity; i++) {
    let cloned = _.clone(p)
    if (i < p.promo.limit) {
      modified.push(cloned)
    } else {
      cloned.price = p.promo.price
      modified.push(cloned)
    }
  }
  return modified
}

// i.e. Apples
export const isSelfPromoSubsequentDiscounted = (p) => {
  let modified = []
  for (let i = 0; i < p.quantity; i++) {
    let cloned = _.clone(p)
    cloned.price = p.promo.price
    modified.push(cloned)
  }
  return modified
}

export const otherPromos = (product, promoProduct) => {
  let idxLimit = (product.promo.limit - 1)
  let modified = []

  if (product.promo.children) {
    for (let i = 0; i < promoProduct.length; i++) {  
      let cloned = _.clone(promoProduct[i])
      cloned.price = product.promo.price
      modified.push(cloned)
    }
  } else {
    for (let i = 0; i < promoProduct.length; i++) {  
      let cloned = _.clone(promoProduct[i])
      if (i === idxLimit) {
        cloned.price = product.promo.price
      }
      modified.push(cloned)
    }
  }

  return modified
}