import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
export declare class User {
    name: string;
    constructor(name: string);
}
/**
 * @title Display value autocomplete
 */
export declare class AutocompleteDisplayExample implements OnInit {
    myControl: FormControl;
    options: User[];
    filteredOptions: Observable<User[]>;
    ngOnInit(): void;
    filter(name: string): User[];
    displayFn(user?: User): string | undefined;
}
