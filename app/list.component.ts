import {Component, OnInit} from 'angular2/core';
import {Contact} from './contact';
import {ContactService} from './contact.service';
@Component({
    selector: 'contact-list',
    templateUrl: 'app/list.component.html',
    styleUrls: ['app/list.component.css'],
    providers: [ContactService]
})
export class ListComponent {
    title = 'Contacts';
    contacts: Contact[];
    constructor(private _contactService: ContactService) { }
    
    getContacts() {
        this._contactService.getContacts(true).then(contacts => this.contacts = contacts);
    }
    
    ngOnInit() {
        this.getContacts();
    }
}