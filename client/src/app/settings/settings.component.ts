import {Component, OnInit} from '@angular/core';
import {SettingsService} from './settings.service';
import {Settings} from './settings.model';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Company} from '../company/company.model';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    error: string;
    message: string;
    form: FormGroup;
    companies = [
        {id: 1, name: 'HP'},
        {id: 2, name: 'DELL'}
        ]; // todo: get from api
    selectedCompany: Company;
    constructor(private settingsService: SettingsService,
                private fb: FormBuilder) {
    }

    public ngOnInit(): void {
        this.selectedCompany = this.companies[0];
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
            medToHigh: [settings.medToHigh, Validators.required],
            timetToSendToLogin: [settings.timetToSendToLogin, Validators.required ],
            EnableGame : [settings.EnableGame, Validators.required],
            minBet : [settings.minBet, Validators.required ],
            gameOp: [settings.gameOp, Validators.required]

        });
    }

    public changeCompany(): void {
        // todo: get selected company from settings api
        // this.settingsService.getSettingsByCompany(this.selectedCompany.id).subscribe((settings: Settings) => {
        //     this.error = '';
        //     this.buildForm(settings[0]);
        // }, (error) => this.error = error.message);
    }

    public onSubmit(): void {
        this.message = '';
        this.settingsService.updateSettings(this.form.value).subscribe((response) => {
            this.message = response.message;
        },  (error) => this.message = error.message);
    
    }

}

