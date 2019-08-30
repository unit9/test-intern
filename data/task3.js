const inputs = [
  '[()]{}{[()()]()}',
  '[(])',
];

const expectedResults = [
  true,
  false
];

export default {
  inputs,
  expectedResults,
  defaultIterations: 10000,
};
