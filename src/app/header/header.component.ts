import { Component } from "@angular/core";

@Component({
    selector: 'app-header', //we use dash to avoid single words to avoid clashing with built in parts like using 'header'
    // template: '', this is not advisable in general because it is only recommended for 3 liners or less  instead use ext file
    templateUrl:'./header.component.html', 
    standalone:true,
    styleUrls: ['./header.component.css',]
})

export class HeaderComponent{}