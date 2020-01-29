import { LightningElement, api } from 'lwc';

export default class Name extends LightningElement {
    @api
    name = 'John';
    employer = 2;

    companies = [
        { id: 1, name: 'Salesforce' },
        { id: 2, name: 'Commerce cloud' },
        { id: 3, name: 'Shoppify' }
    ];

    get viewCompanies() {
        return this.companies.map(company => ({
            ...company,
            selected: this.employer === company.id
        }));
    }

    update(event) {
        this.dispatchEvent(
            new CustomEvent('namechange', {
                bubbles: true,
                composed: true,
                detail: event.target.value
            })
        );
    }
}
