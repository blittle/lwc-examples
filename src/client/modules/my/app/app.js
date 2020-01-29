import { LightningElement } from 'lwc';

export default class App extends LightningElement {
  name = "John"

  updateName(event) {
    this.name = event.detail;
  }
}
