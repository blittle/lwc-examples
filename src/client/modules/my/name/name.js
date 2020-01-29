import { LightningElement, api } from 'lwc';

export default class Name extends LightningElement {
  @api
  name = "John"

  update(event) {
    this.dispatchEvent(new CustomEvent('namechange', {
      detail: event.target.value
    }));
  }
}
