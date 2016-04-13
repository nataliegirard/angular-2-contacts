import {Component} from 'angular2/core';
import {ListComponent} from './list.component';
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ListComponent]
})
export class AppComponent {
    title = 'Contacts';
}