import { Injectable } from "@angular/core";
import { ApiService } from "../_services/api.service";
import { Observable } from "rxjs";
import { Settings } from "./settings.model";




@Injectable()
export class SettingsService {

    constructor(private apiService: ApiService) {}

    public getSettings(): Observable<Settings> {
        const obs = this.apiService.getSettings();
        obs.subscribe((settings: Settings) => {

        }, (error) => console.log('Settings Service error: ' + error.message));

        return obs;
    }

}
