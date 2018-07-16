import { ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { Observable } from 'rxjs';
/**
 * @title Chips Autocomplete
 */
export declare class ChipsAutocompleteExample {
    visible: boolean;
    selectable: boolean;
    removable: boolean;
    addOnBlur: boolean;
    separatorKeysCodes: number[];
    fruitCtrl: FormControl;
    filteredFruits: Observable<any[]>;
    fruits: string[];
    allFruits: string[];
    fruitInput: ElementRef;
    constructor();
    add(event: MatChipInputEvent): void;
    remove(fruit: any): void;
    filter(name: string): string[];
    selected(event: MatAutocompleteSelectedEvent): void;
}
