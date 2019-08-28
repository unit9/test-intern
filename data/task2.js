const colors = [
  0xff0000,
  0x00ff00,
  0x0000ff,
  0xffff00,
  0xff00ff,
  0x00ffff,
  0xfed64a,
  0x8920a7,
];

const rgb = [
  { r: 0xff, g: 0, b: 0 },
  { r: 0, g: 0xff, b: 0 },
  { r: 0, g: 0, b: 0xff },
  { r: 0xff, g: 0xff, b: 0 },
  { r: 0xff, g: 0, b: 0xff },
  { r: 0, g: 0xff, b: 0xff },
  { r: 254, g: 214, b: 74 },
  { r: 137, g: 32, b: 167 },
];

export default {
  inputs: colors,
  expectedResults: rgb,
  defaultIterations: 10000,
};
