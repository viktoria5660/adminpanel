import {Component, OnInit} from '@angular/core';
import {SettingsService} from './settings.service';
import {Settings} from './settings.model';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';


@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    error: string;
    public form: FormGroup;
    constructor(private settingsService: SettingsService, private fb: FormBuilder) {
    }

    public ngOnInit(): void {
        this.settingsService.getSettings().subscribe((settings: Settings) => {
            this.error = '';
            this.buildForm(settings[0]);
        }, (error) => this.error = error.message);
    }

    public buildForm(settings): void {
        this.form = this.fb.group({
            companyName: [settings.companyName, Validators.required],
            defaultCoins: [settings.defaultCoins, Validators.required],
        });
    }

}

