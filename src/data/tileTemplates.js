const tileTemplates = {
  1: {
    color: 'white',
    isLit: false
  },
  2: {
    color: 'black',
    isLit: false
  },
  3: {
    color: 'magenta',
    isLit: false
  },
  4: {
    color: 'red',
    isLit: false
  },
  5: {
    color: 'orange',
    isLit: false
  },
  6: {
    color: 'yellow',
    isLit: false
  },
  7: {
    color: 'green',
    isLit: false
  },
  8: {
    color: 'blue',
    isLit: false
  },
  9: {
    color: 'indigo',
    isLit: false
  },
  10: {
    color: 'purple',
    isLit: false
  },
  11: {
    color: 'white',
    isLit: true
  },
  12: {
    color: 'black',
    isLit: true
  },
  13: {
    color: 'magenta',
    isLit: true
  },
  14: {
    color: 'red',
    isLit: true
  },
  15: {
    color: 'orange',
    isLit: true
  },
  16: {
    color: 'yellow',
    isLit: true
  },
  17: {
    color: 'green',
    isLit: true
  },
  18: {
    color: 'blue',
    isLit: true
  },
  19: {
    color: 'indigo',
    isLit: true
  },
  20: {
    color: 'purple',
    isLit: true
  }
};

const pulseTile = (tileNum, isLit) => {
  if (isLit) {
    return tileNum - 10;
  }
  return tileNum + 10;
};


const invertColor = (tileNum, isLit) => {
  switch (tileNum) {
    case 1:
      return 2;
    case 2:
      return 1;
    case 3:
      return 8;
    case 4:
      return 7;
    case 5:
      return 9;
    case 6:
      return 10;
    case 7:
      return 4;
    case 8:
      return 3;
    case 9:
      return 5;
    case 10:
      return 6;
    case 11:
      return 12;
    case 12:
      return 11;
    case 13:
      return 18;
    case 14:
      return 17;
    case 15:
      return 19;
    case 16:
      return 20;
    case 17:
      return 14;
    case 18:
      return 13;
    case 19:
      return 15;
    case 20:
      return 16;
    default:
      return null;
  }
};

const pulseAndInvert = (tileNum, isLit) => {
  return invertColor(pulseTile(tileNum, isLit));
};

export { tileTemplates, invertColor, pulseTile, pulseAndInvert };
