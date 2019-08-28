import isEqual from 'lodash.isequal';

export function validate(fn, inputs, expectedResults) {
  const results = inputs.map(item => fn(item));
  return isEqual(results, expectedResults);
}
