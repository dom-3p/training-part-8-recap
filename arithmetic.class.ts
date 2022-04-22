import IAnswer  from "./answer.interface";
import IComplexQuestion from "./complex-question.interface";
import IQuestion from "./question.interface";

class Arithmetic {

    AddNumbers(questions: IQuestion[]): IAnswer[] {
        const answers: IAnswer[] = [];

        for (let i = 0; i < questions.length; i++) {
            answers.push({ answer: questions[i].a + questions[i].b})
        }
        
        return answers;
    }

    AddThreeNumbers(input: IComplexQuestion): IAnswer {
        const answer: IAnswer = { answer: (input.a + input.b)};
        return answer;
    }

    SubtractNumbers(a:number, b:number): number {
        return a - b;
    }
}

export default Arithmetic;