const { totalCost } = require('./totalCost')

const createReceipt = (list) => {
  if (list.length === 0) return 'No items in the basket'

  return (
    list.map((item) => `${item.quantity} ${item.name}`).join(', ') +
        ' | ' +
        `Total Price: ${totalCost(list)}`
  )
}

module.exports = {
  createReceipt
}
