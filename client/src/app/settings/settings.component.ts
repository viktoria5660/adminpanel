import {Component, OnInit} from '@angular/core';
import {SettingsService} from './settings.service';
import {Settings} from './settings.model';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    error: string;
    message : string;
    public form: FormGroup;
    constructor(private settingsService: SettingsService,
                private fb: FormBuilder) {
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
            defaultCorrectFB: [settings.defaultCorrectFB, Validators.required],
            defaultInCorrectFB: [settings.defaultInCorrectFB, Validators.required],
            timeLimitForQ : [settings.timeLimitForQ, Validators.required ],
            lowToMed: [settings.lowToMed, Validators.required ],
            medToHigh: [settings.medToHigh,Validators.required],
            timetToSendToLogin: [settings.timetToSendToLogin ,Validators.required ],
            EnableGame : [settings.EnableGame ,Validators.required],
            minBet : [settings.minBet ,Validators.required ],
            gameOp: [settings.gameOp, Validators.required]

        });
    }

    public onSubmit(): void {
        this.message = '';
        this.settingsService.updateSettings(this.form.value).subscribe((response) => {
            this.message = response.message;
        },  (error) => this.message = error.message);
    
    }

}

