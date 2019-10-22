
const multiple = {
  weekly: 52,
  'bi-weekly': 26,
  monthly: 12,
  yearly: 1,
  once: 1,
}

export default function calculateExpenseCost(expenses, productCount) {
  let expenseCost = 0
  const expensesPerItem = expenses.map(({ _id, icon, name, frequency, cost }) => {
    const yearlyCost = cost * multiple[frequency]
    const costPerItem = yearlyCost / productCount
    expenseCost += costPerItem
    return { _id, icon, name, costPerItem }
  })
  expenseCost = Math.round(expenseCost)
  return { expenseCost, expensesPerItem }
}
