const randomNumUmATrintaESeis = () => Math.floor(Math.random() * 36) + 1;

const Values = {
  '1': 'a',
  '2': 'b',
  '3': 'c',
  '4': 'd',
  '5': 'e',
  '6': 'f',
  '7': 'g',
  '8': 'h',
  '9': 'i',
  '10': 'j',
  '11': 'k',
  '12': 'l',
  '13': 'm',
  '14': 'n',
  '15': 'o',
  '16': 'p',
  '17': 'q',
  '18': 'r',
  '19': 's',
  '20': 't',
  '21': 'u',
  '22': 'v',
  '23': 'w',
  '24': 'x',
  '25': 'y',
  '26': 'z',
  '27': '0',
  '28': '1',
  '29': '2',
  '30': '3',
  '31': '4',
  '32': '5',
  '33': '6',
  '34': '7',
  '35': '8',
  '36': '9'
}

const generateRandomPatter = () => {
  const value = [Values[randomNumUmATrintaESeis()]+Values[randomNumUmATrintaESeis()]+
  Values[randomNumUmATrintaESeis()]+Values[randomNumUmATrintaESeis()]+'-'+
  Values[randomNumUmATrintaESeis()]+Values[randomNumUmATrintaESeis()]+
  Values[randomNumUmATrintaESeis()]+Values[randomNumUmATrintaESeis()]+'-'+
  Values[randomNumUmATrintaESeis()]+Values[randomNumUmATrintaESeis()]+
  Values[randomNumUmATrintaESeis()]+Values[randomNumUmATrintaESeis()]+'-'+
  Values[randomNumUmATrintaESeis()]+Values[randomNumUmATrintaESeis()]+
  Values[randomNumUmATrintaESeis()]+Values[randomNumUmATrintaESeis()]]

  return value.join()
}

console.log(generateRandomPatter())