import {Component, OnInit} from 'angular2/core';
import {Contact} from './contact';
import {ContactService} from './contact.service';
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    providers: [ContactService]
})
export class AppComponent {
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