import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Login } from "../models/login.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private userConnected! : boolean

    constructor(private http: HttpClient) {}

    isUserConnected() : boolean {
        return this.userConnected;
    }

    setUserConnected(userConnected:boolean): void {
        // normalement le token ne peut etre initialisé que si le login est ok
        this.userConnected = userConnected;
    }

    login(formValue: {pseudo: string, password: string}) : Observable<Login> {
        return  this.http.post<Login>(
          `http://localhost:9090/api/login`,
          formValue)
    
    }
}