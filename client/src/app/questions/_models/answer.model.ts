import { DefaultValueAccessor } from "@angular/forms";
import { FindValueSubscriber } from "rxjs/internal/operators/find";

export interface Answer {
    content: string;
    feedback: string;
    iscorrect: boolean;
}

