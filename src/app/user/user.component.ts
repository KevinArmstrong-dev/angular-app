import { Component, EventEmitter, Input, Output } from "@angular/core";
import { DUMMY_USERS } from "../dummy-users";


@Component({
    selector: 'app-user', //we use dash to avoid single words to avoid clashing with built in parts like using 'header'
    // template: '', this is not advisable in general because it is only recommended for 3 liners or less  instead use ext file
    templateUrl:'./user.component.html', 
    standalone:true,
    styleUrls: ['./user.component.css',]
})


export class UserComponent{
     //all the properties here are available in the template
    @Input({required:true})userId!:string;
    @Input({required:true})avatar!: string; //this is a decorator
    @Input({required:true})name!:string;
    @Output()selectedTask = new EventEmitter() //this serves as publisher
    
     //it is possible to use signals for the input by using the input from the core
     //ex: avatar = input.required<string>()
    get imagePath(){
        return 'assets/users/' + this.avatar;
    }

    onSelectedUser(){
        this.selectedTask.emit(this.userId);
    }
}