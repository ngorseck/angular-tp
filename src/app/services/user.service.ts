import {Inject, Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from "../model/User.model";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { LOCAL_STORAGE, WebStorageService } from "angular-webstorage-service";

@Injectable()
export class UserService {

  constructor(private http: HttpClient, private router: Router, @Inject(LOCAL_STORAGE) private storage: WebStorageService) {}

  isLoggedIn(): boolean {
    if (this.storage.get("userSession") == 1) {
      return true;
    } else {
      return false;
    }
  }

  getAllUsers(): Observable<any> {
    return this.http.get("http://localhost:8081/projects/angularProjects/gestionusers/allusers.php");
  }

  getUser(id: number): Observable<any> {
    return this.http.get("http://localhost:8081/projects/angularProjects/gestionusers/allusers.php?id=" + id);
    // return this.http.get("http://localhost/mesprojets/angularProjects/gestioncontacts/getcontactToken.php?id=+"+id,
    // {headers: new HttpHeaders({'Authorization': 'myToken'})}).toPromise();
  }

  saveUser(user: User): Observable<any> {
    const formData = new FormData();
    formData.append('id', user.id.toString());
    formData.append('nom', user.nom);
    formData.append('prenom', user.prenom);
    formData.append('email', user.email);
    formData.append('password', user.password);

    let headers = new HttpHeaders();
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('enctype', 'multipart/form-data');

    return this.http.post("http://localhost:8081/projects/angularProjects/gestionusers/allusers.php", 
                            formData, {headers}
                          );
  }

  updateUser(user): Observable<any> {
    const formData = new FormData();
    formData.append('id', user.id.toString());
    formData.append('nom', user.nom);
    formData.append('prenom', user.prenom);
    formData.append('email', user.email);
    formData.append('password', user.password);

    let headers = new HttpHeaders();
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('enctype', 'multipart/form-data');
    
    return this.http.put("http://localhost:8081/projects/angularProjects/gestionusers/allusers.php", 
                          formData, {headers}
                        );
  }

  deleteUser(id: number) {
    return this.http.delete("http://localhost:8081/projects/angularProjects/gestionusers/deleteUser.php?id=" + id).toPromise();
  }
}
