import axios from "axios";

export class ContactService {
  static serverURL = "https://contact-manager-directory.herokuapp.com";

  static getGroups() {
    let dataURL = `${this.serverURL}/groups`;
    return axios.get(dataURL);
  }

  static getGroup(contact) {
    let groupId = contact.groupId;
    let dataURL = `${this.serverURL}/groups/${groupId}`;
    return axios.get(dataURL);
  }

  static getAllContacts() {
    let dataURL = `${this.serverURL}/contacts`;
    return axios.get(dataURL);
  }

  static getContact(contactId) {
    let dataUrl = `${this.serverURL}/contacts/${contactId}`;
    return axios.get(dataUrl);
  }

  static createContact(contact) {
    let dataURL = `${this.serverURL}/contacts`;
    return axios.post(dataURL, contact);
  }

  static updateContact(contact, contactId) {
    let dataUrl = `${this.serverURL}/contacts/${contactId}`;
    return axios.put(dataUrl, contact);
  }

  static deleteContact(contactId) {
    let dataUrl = `${this.serverURL}/contacts/${contactId}`;
    return axios.delete(dataUrl);
  }
}
