export function report(taskName, isCorrect, time, complexity) {
  console.log(`${taskName}:\t|\tCorrectness: ${isCorrect ? 'Correct!': 'Incorrect'}\t|\tExecution time: ${time}\t|\tComplexity: ${complexity}`);
}
