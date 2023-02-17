import {Component, Inject, OnInit} from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  loadPage: string = "";
  constructor(private router: Router, @Inject(LOCAL_STORAGE) private storage: WebStorageService) {

  }

  ngOnInit() {
    // tslint:disable-next-line:triple-equals
    if (this.storage.get("userSession") != 1) {
      this.router.navigate(['login']);
    }
    this.loadPage = AppComponent.loadPage;
  }

}
