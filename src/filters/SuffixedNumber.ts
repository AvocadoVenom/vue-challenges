import Vue from 'vue';
const unities = [
  { suffix: 'K', value: 1_000 },
  { suffix: 'M', value: 1_000_000 },
  { suffix: 'B', value: 1000_000_000 }
];

export default Vue.filter('suffixed-number', function(
  value: number,
  decimals: number = 2,
  trailingZero: boolean = false
) {
  if (!value || isNaN(value)) return '';

  let i = 0;
  let formatted = value.toString();

  while (i < unities.length - 1 && Math.abs(value / unities[i].value) >= 1) {
    let n = (value / unities[i].value).toFixed(decimals);
    if (!trailingZero) n = n.replace(/0+$/, '');
    if (n[n.length - 1] === '.') n = n.replace('.', '');
    formatted = `${n}${unities[i].suffix}`;
    i++;
  }

  return formatted;
});
