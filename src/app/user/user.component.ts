import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {DeleteUserComponent} from '../delete-user/delete-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users = [];
  confirmation: string = '';
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.confirmation = DeleteUserComponent.message;
    console.log(this.confirmation);
    this.userService.getAllUsers().subscribe(data => this.users = data);
    AppComponent.loadPage = "list";
    //this.router.navigate(['Sante-Animal/list']);
  }

}
