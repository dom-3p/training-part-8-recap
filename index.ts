import Arithmetic from './arithmetic.class'
import IQuestion from './question.interface';

const arithmetic = new Arithmetic()

const question: IQuestion = {a: 1, b: 2}
const add = arithmetic.AddNumbers([
    {a: 1, b: 2}, 
    {a: 3, b: 4}
]);

console.log(add);
