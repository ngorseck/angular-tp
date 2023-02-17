import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errormessage: string = '';
  user = {email: '', password: ''};
  constructor(private router: Router, @Inject(LOCAL_STORAGE) private storage: WebStorageService) {

  }


  ngOnInit() {
  }

  getLogin() {
    // console.log(this.user.email + "    " + this.user.password);
    // tslint:disable-next-line:triple-equals
    if (this.user.email == "seck@seck.sn" && this.user.password == "passer") {
      this.storage.set("userSession", 1);
      this.router.navigate(['pages']);
      
    } else {
      this.errormessage = "Email ou mot de passe incorrect !";
      this.storage.set("userSession", 0);
    }
  }
}
