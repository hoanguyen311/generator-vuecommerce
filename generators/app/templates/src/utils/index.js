import random from 'lodash.random';

const PALETTE = [
  '#E0E8ED',
  '#E0EAE8',
  '#E7E7EC',
  '#E8E8E8',
  '#EBE6E2',
  '#EDE0D8',
  '#EFE8EE',
  '#EFEBDF',
];

export const randomHEXColor = () => {
  const colorIdx = random(0, PALETTE.length - 1);

  return PALETTE[colorIdx];
};

export default { randomHEXColor };
