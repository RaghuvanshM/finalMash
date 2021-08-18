export const getCartData = (isUserLogin, cart) => {
  var subTotal = 0, totalDiscount = 0, payableAmount = 0
  cart.products.map((product) => {
    if(product.maxQuantity > 0) {
      subTotal = subTotal + (product.specialPrice * product.quantity)
      totalDiscount = totalDiscount + (product.quantity * (product.price - product.specialPrice))
    }
  })
  payableAmount = isUserLogin && subTotal < cart.freeOrderDeliveryLimit ? subTotal + cart.deliveryCharge : subTotal
  return { subTotal, totalDiscount, payableAmount }
}
