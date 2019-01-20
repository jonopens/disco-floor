const tileTemplates = {
  1: {
    color: 'white',
    isLit: false
  },
  2: {
    color: 'white',
    isLit: true
  },
  3: {
    color: 'black',
    isLit: false
  },
  4: {
    color: 'black',
    isLit: true
  },
  5: {
    color: 'magenta',
    isLit: false
  },
  6: {
    color: 'magenta',
    isLit: true
  },
  7: {
    color: 'red',
    isLit: false
  },
  8: {
    color: 'red',
    isLit: true
  },
  9: {
    color: 'orange',
    isLit: false
  },
  10: {
    color: 'orange',
    isLit: true
  },
  11: {
    color: 'yellow',
    isLit: false
  },
  12: {
    color: 'yellow',
    isLit: true
  },
  13: {
    color: 'green',
    isLit: false
  },
  14: {
    color: 'green',
    isLit: true
  },
  15: {
    color: 'blue',
    isLit: false
  },
  16: {
    color: 'blue',
    isLit: true
  },
  17: {
    color: 'indigo',
    isLit: false
  },
  18: {
    color: 'indigo',
    isLit: true
  },
  19: {
    color: 'purple',
    isLit: false
  },
  20: {
    color: 'purple',
    isLit: true
  }
};

const invertColor = (tileNum) => {
  switch (tileNum) {
    case 1:
      return 3;
    case 2:
      return 4;
    case 3:
      return 1;
    case 4:
      return 2;
    case 5:
      return 13;
    case 6:
      return 14;
    case 7:
      return 15;
    case 8:
      return 16;
    case 9:
      return 17;
    case 10:
      return 18;
    case 11:
      return 19;
    case 12:
      return 20;
    case 13:
      return 5;
    case 14:
      return 6;
    case 15:
      return 7;
    case 16:
      return 8;
    case 17:
      return 9;
    case 18:
      return 10;
    case 19:
      return 11;
    case 20:
      return 12;
    default:
      return null;
  }
};

export { tileTemplates, invertColor };
