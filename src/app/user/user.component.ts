import { Component } from "@angular/core";
import { DUMMY_USERS } from "../dummy-users";

const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)

@Component({
    selector: 'app-user', //we use dash to avoid single words to avoid clashing with built in parts like using 'header'
    // template: '', this is not advisable in general because it is only recommended for 3 liners or less  instead use ext file
    templateUrl:'./user.component.html', 
    standalone:true,
    styleUrls: ['./user.component.css',]
})


export class UserComponent{
    selectedUser = DUMMY_USERS[randomIndex]; //all the properties here are available in the template
}