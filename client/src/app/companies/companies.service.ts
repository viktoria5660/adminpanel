import { Injectable } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import {Company } from './company.model';
import { ReplaySubject } from 'rxjs';
import {BehaviorSubject} from 'rxjs/Rx';




@Injectable()
export class CompaniesService {
    private companiesSubject: BehaviorSubject<Company[]> = new BehaviorSubject<Company[]>([]);
    companies$: Observable<Company[]> = this.companiesSubject.asObservable();
    constructor(private apiService: ApiService) {
        // from api once to load all companies.
        this.loadCompanies();
    }

    public updateCompanies(newCompanies: Company[]): void {
        this.companiesSubject.next(_.cloneDeep(newCompanies));
    }

    public getCompaniesValue(): Company[] {
        return _.cloneDeep(this.companiesSubject.getValue());
    }

    private loadCompanies(): void {
        this.apiService.getAllCompanies().subscribe((companies: Company[]) => {
            this.updateCompanies(companies);
        }, (error) => {

        });
    }

    public addCompany(newCompany: Company): Observable<any> {
        const companies: Company[] = this.getCompaniesValue();
        companies.push(newCompany);
        this.updateCompanies(companies);

        const obs = this.apiService.addCompany(newCompany);
        obs.subscribe(res => {
            // this.fullSettingsArr.push(newSettings);
            console.log('New Company Added!');
        }, (error) => {
            // can log error here
        });

        return obs;
    }

    public updateCompany(updateCompany: Company): Observable<any> {
        const companies: Company[] = this.getCompaniesValue();
        const index = companies.findIndex((company: Company) => company.companyName ===  updateCompany.companyName);
        if (index > -1) {
            companies[index] = updateCompany;
            this.updateCompanies(companies);
        }

        return this.apiService.updateCompany(updateCompany);
    }

    public deleteCompany(companyName: string): Observable<any> {
        const companies: Company[] = this.getCompaniesValue();
        const index = companies.findIndex((company: Company) => company.companyName ===  companyName);
        if (index > -1) {
            companies.splice(index, 1);
            this.updateCompanies(companies);
        }
        return this.apiService.deleteCompany(companyName);
    }

    public getAllCompanies(): Observable<Company[]> {
        return this.apiService.getAllCompanies();
    }

}
