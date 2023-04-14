const filterArray = (array) => {
  const numbers = array.filter((el) => typeof(el) === 'number');
  const letter = array.filter((el) => typeof(el) === 'string');
  const maxNumber = Math.max(...numbers)

  return [numbers, letter, maxNumber]
}

console.log(filterArray([1,'b','50','#', 20, 15, 'c', 7, 'v']))