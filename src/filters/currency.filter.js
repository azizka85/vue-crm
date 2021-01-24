export default function currencyFilter(value, currency = 'RUB') {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency
  }).format(value)
}
