import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  static message: any = {confirmation: ''};
  id: number;
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.deleteUser(this.route.snapshot.params.id).then(data => {
      DeleteUserComponent.message = data;
      // console.log(DeleteUserComponent.message);
    });
    //AppComponent.loadPage = "list";
    //this.router.navigate(['pages/users']);
  }

}
