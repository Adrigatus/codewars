function orderWeight(strng) {
    const sum = x => x.split('').reduce((res, cur) => (res + +cur), 0);
    return str.split(' ').sort((a, b) => {
      const diff = sum(a) - sum(b);
      return diff == 0 ? (a > b ? 1 : -1) : diff;
    }).join(' ');
}