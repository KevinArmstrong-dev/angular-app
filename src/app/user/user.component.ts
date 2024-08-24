import { Component, signal, computed } from "@angular/core";
import { DUMMY_USERS } from "../dummy-users";

const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);

@Component({
    selector: 'app-user', //we use dash to avoid single words to avoid clashing with built in parts like using 'header'
    // template: '', this is not advisable in general because it is only recommended for 3 liners or less  instead use ext file
    templateUrl:'./user.component.html', 
    standalone:true,
    styleUrls: ['./user.component.css',]
})


export class UserComponent{
     //all the properties here are available in the template
    // selectedUser = DUMMY_USERS[randomIndex];
    selectedUser = signal(DUMMY_USERS[randomIndex]); // Instatiating a signal
    imagePath = computed(()=>'assets/users/' +this.selectedUser().avatar)
    
    
    //This is a getter method so it is used as a property
    // get imagePath(){
    //     return 'assets/users/' +this.selectedUser().avatar; //getting data from a signal
    // }

    onSelectedUser(){
        //global variables are overwritten and this will update with the state
        const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);
        this.selectedUser.set(DUMMY_USERS[randomIndex]) //using signals for the properties
        // this.selectedUser = DUMMY_USERS[randomIndex]; 
    }
}