import { LightningElement, api } from 'lwc';

export default class Employer extends LightningElement {
    @api
    profileImage;

    @api
    street;

    @api
    name;

    @api
    employer;

    companies = [
        { id: '1', name: 'Salesforce' },
        { id: '2', name: 'Commerce Cloud' },
        { id: '3', name: 'Community Cloud' }
    ];

    get viewCompanies() {
        return this.companies.map(company => ({
            ...company,
            selected: this.employer === company.id
        }));
    }
}
