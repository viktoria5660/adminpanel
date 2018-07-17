import { Settings } from "../settings/settings.model";

export interface FullCompany {
    companyName: string;
    settings: Settings;
    groups:Array<any>
}
