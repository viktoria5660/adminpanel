import { Injectable } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import {FullSettings } from './fullsettings.model';
import { ReplaySubject } from 'rxjs';




@Injectable()
export class SettingsService {
    private companiesSubject: ReplaySubject<FullSettings[]> = new ReplaySubject<FullSettings[]>(1);
    companies$: Observable<FullSettings[]> = this.companiesSubject.asObservable();
    constructor(private apiService: ApiService) {
        // from api once to load all companies. 
        this.loadCompanies();
    }

    updateCompanies(newCompanies: FullSettings[]): void {
        this.companiesSubject.next(_.cloneDeep(newCompanies));
    }

    private loadCompanies(): void {
        this.apiService.getAllFullCompanys().subscribe((companies: FullSettings[]) => {
            console.log("companies:",companies)
            this.updateCompanies(companies);
        }, (error) => {

        });
    }

    public getAllFullSettings(): Observable<FullSettings[]> {
        return this.apiService.getAllFullSettings();
    }
    public updateFullSettings(newSettings: FullSettings): Observable<any> {
        return this.apiService.updateFullSettings(newSettings);
    }
    public addSettings(newSettings: FullSettings): Observable<any> {
    
        return this.apiService.addSettings(newSettings);
    }
    public deleteSettings(settings: any): Observable<any> {
            console.log("INSIDE SETTINGS SERVICES",settings)
        return this.apiService.deleteSettings(settings);
    }

}
