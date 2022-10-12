const curr = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
})

export const currency = (amt) => curr.format(amt || 0)

export const number = (num) => num || 0
