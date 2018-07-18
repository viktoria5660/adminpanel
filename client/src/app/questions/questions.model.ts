import {Answer} from './_models/answer.model';
export class Question {
    content: string;
    template: number;
    picture: string;
    difficulty: number;
    company: string;
    groups:  string;
    answers: Answer[];
    constructor() {}
}
