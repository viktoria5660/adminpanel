import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';
import {Company} from './company.model';
import {ApiService} from '../_services/api.service';


@Injectable()
export class CompanyService {
    private companiesSubject: ReplaySubject<Company[]> = new ReplaySubject<Company[]>(1);
    companies$: Observable<Company[]> = this.companiesSubject.asObservable();
    constructor(private apiService: ApiService) {
        this.loadCompanies();
    }

    updateCompanies(newCompanies: Company[]): void {
        this.companiesSubject.next(_.cloneDeep(newCompanies));
    }

    private loadCompanies(): void {
        this.apiService.getCompanies().subscribe((companies: Company[]) => {
            this.updateCompanies(companies);
        }, (error) => {
            this.updateCompanies([
                {id: 1, name: 'HP'},
                {id: 2, name: 'DELL'}
            ]);
        });
    }
}

