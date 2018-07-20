import { Injectable } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { Observable } from 'rxjs';
import { Settings } from './settings.model';
import { FullCompany } from '../company/full.company.model';

@Injectable()
export class SettingsService {

    constructor(private apiService: ApiService) {}

    // public getSettings(): Observable<Settings> {
    //     const obs = this.apiService.getSettings();
    //     obs.subscribe((settings: Settings) => {

    //     }, (error) => console.log('Settings Service error: ' + error.message));

    //     return obs;
    // }

    public updateSettings(newSettings: Settings): Observable<any> {

        return this.apiService.updateSettings(newSettings);
    }
    public addSettings(newSettings: Settings): Observable<any> {
    
        return this.apiService.addSettings(newSettings);
    }
    public addGroups(newGroups: FullCompany): Observable<any> {
        return this.apiService.addGroups(newGroups);
    }
    public deleteSettings(newSettings: Settings): Observable<any> {
        return this.apiService.deleteSettings(newSettings);
    }

}
