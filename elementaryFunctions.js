const elementaryFunctions = {
  adicao: (array) => {
    const sum = array.reduce((acc, el) => acc + el, 0);
    return sum
  },
  divisao: (x, y) => {
    if (y === 0) {
      return 'não é permitido divisão por 0';
    }
    return (x / y);
  },
  multiplicacao: (array) => {
    const mult = array.reduce((acc, el) => acc * el, 1);
    return mult
  },
  subtracao: (array) => {
    const subt = array.reduce((acc, el) => acc - el);
    return subt
  }
}

console.log(elementaryFunctions.divisao(2, 0))
console.log(elementaryFunctions.subtracao([1,2,3,5]));
console.log(elementaryFunctions.adicao([1,2,3,5]));
console.log(elementaryFunctions.multiplicacao([1,2,3,4,5]))
