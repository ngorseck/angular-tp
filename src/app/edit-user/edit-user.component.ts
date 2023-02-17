import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user = {id: 0, nom: "", prenom: "", email: "", password: ""};
  id: number;
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    // console.log(this.id);
    this.userService.getUser(this.id).subscribe(data => {
            this.user = data;
          });
    //AppComponent.loadPage = "edit";
    //this.router.navigate(['pages/users']);
  }
  updateUser() {
  }
}
