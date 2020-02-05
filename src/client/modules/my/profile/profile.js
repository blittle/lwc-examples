import { LightningElement, api } from 'lwc';

export default class Employer extends LightningElement {
    @api
    profileImage;

    @api
    street;

    @api
    name;
}
