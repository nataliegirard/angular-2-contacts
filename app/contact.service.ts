import {Injectable} from 'angular2/core';
import {Contact} from './contact';
import {CONTACTS} from './mock-contacts';

@Injectable()
export class ContactService {
    getContacts(ordered = false) {
        var contacts = CONTACTS;
        if (ordered) {
            contacts.sort(function(a,b) {
                if (a.identity > b.identity) {
                    return 1;
                } else if (a.identity < b.identity) {
                    return -1;
                } else {
                    return 0;
                }
            });
        }
        return Promise.resolve(contacts);
    }
}
