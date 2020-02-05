import { LightningElement } from 'lwc';

export default class Name extends LightningElement {
    name = 'John';

    update(event) {
        this.name = event.target.value;
    }
}
