export function measureTime(fn, inputs, iterations) {
  const startTime = process.hrtime();
  for (let i = 0; i < iterations; ++i) {
    for (let j = 0; j < inputs.length; ++j) {
      fn(inputs[j]);
    }
  }
  const endTime = process.hrtime(startTime);
  const ms = endTime[0] * 1000 + endTime[1] / 1000000;
  return ms;
}

export function computeComplexity(fn, inputs, iterations) {
  const increase = 100;
  const tolerance = 1.1;
  let multipleInputs = inputs.concat([]);
  for (let i = 0; i < increase; ++i) {
    multipleInputs = multipleInputs.concat(inputs);
  }
  const time1 = measureTime(fn, inputs, iterations);
  const time100 = measureTime(fn, multipleInputs, iterations) / tolerance;

  const factor = time100 / time1;
  if (factor <= 1) {
    return 'O(1)';
  } else if (factor <= Math.log2(increase)) {
    return 'O(log n)';
  } else if (factor <= increase) {
    return 'O(n)';
  } else if (factor <= increase ** 2) {
    return 'O(n2)';
  } else {
    return '>O(n2)';
  }
}
