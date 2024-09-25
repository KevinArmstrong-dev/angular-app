import { Component, EventEmitter, Input, Output ,output} from "@angular/core";


@Component({
    selector: 'app-task', //we use dash to avoid single words to avoid clashing with built in parts like using 'header'
    // template: '', this is not advisable in general because it is only recommended for 3 liners or less  instead use ext file
    templateUrl:'./task.component.html', 
    standalone:true,
    styleUrls: ['./task.component.css',]
})


export class TaskComponent{
     //all the properties here are available in the template
    @Input({required:true})name!:string;

     //it is possible to use signals for the input by using the input from the core
     //ex: avatar = input.required<string>()
    // get imagePath(){
    //     return 'assets/users/' + this.avatar;
    // }

    // onSelectedUser(){
    //     this.selectedTask.emit(this.userId);
    // }
}