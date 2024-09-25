import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from './task/task.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,UserComponent,TaskComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId = 'u1';
  
  get selectedUser(){
    return this.users.find((user)=>user.id === this.selectedUserId)!;
  }

  onSelectedUser(userId:string){
    this.selectedUserId = userId;
  }
}
