import { validate } from './lib/validation';
import { measureTime, computeComplexity} from './lib/performance';
import { report } from './lib/reporting';
import task1Data from './data/task1';
import task2Data from './data/task2';
import task1 from './tasks/task1';
import task2 from './tasks/task2';

const tasks = [task1, task2];
const data = [task1Data, task2Data];

for (let i = 0; i < tasks.length; ++i) {
  const isCorrect = validate(tasks[i], data[i].inputs, data[i].expectedResults);
  const time = measureTime(tasks[i], data[i].inputs, data[i].defaultIterations);
  const complexity = computeComplexity(tasks[i], data[i].inputs, data[i].defaultIterations);
  report(`task${i + 1}`, isCorrect, time, complexity);
}
