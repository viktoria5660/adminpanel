import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';
import {Company} from './company.model';
import {ApiService} from '../_services/api.service';
import {FullCompany} from './full.company.model';


@Injectable()
export class CompanyService {
    private companiesSubject: ReplaySubject<FullCompany[]> = new ReplaySubject<FullCompany[]>(1);
    companies$: Observable<FullCompany[]> = this.companiesSubject.asObservable();
    constructor(private apiService: ApiService) {
        // call api once to load all companies. every place that needs companies, should subscribe to companies$ instead of making api call.
        this.loadCompanies();
    }

    updateCompanies(newCompanies: FullCompany[]): void {
        this.companiesSubject.next(_.cloneDeep(newCompanies));
    }

    private loadCompanies(): void {
        this.apiService.getCompanies().subscribe((companies: FullCompany[]) => {
            this.updateCompanies(companies);
        }, (error) => {

        });
    }
}

