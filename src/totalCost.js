const totalCost = (list) =>
  list.map((item) => item.price * item.quantity).reduce((a, b) => a + b, 0)

module.exports = {
  totalCost
}
