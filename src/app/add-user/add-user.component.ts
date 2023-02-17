import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import { User } from '../model/User.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user : User = {id: 0, nom: "", prenom: "", email: "", password: ""};
  userResponse = {id: 0, nom: "", prenom: "", email: "", password: ""};
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    AppComponent.loadPage = "add";
    //this.router.navigate(['Sante-Animal/adduser']);
  }
  addUser() {
    // console.log(this.user.nom);
    this.userService.saveUser(this.user).subscribe(donnees => {
      this.userResponse = donnees;
      console.log(this.userResponse);
    });
  }
}
