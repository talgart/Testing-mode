import {observable, action,  runInAction} from "mobx";


export default new class UserData {
  @observable contacts = null;
  @observable isLoading = true;

  @action
  async load() {
    this.isLoading = true;
    const response = await fetch('https://my-json-server.typicode.com/RomanChasovitin/demo-api/users');
    const json = await response.json();
    runInAction(() => {
      this.contacts = json.data;
      this.isLoading = false
    });
    console.log("the h " + this.contacts)

  }



}

