import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Hero } from "./hero";
import {Injectable, OnInit} from '@angular/core';
import { Observable, catchError, tap } from "rxjs";



@Injectable({
    providedIn:'root'
})
export class HeroService {
    private heroUrl = 'http://localhost:8080/heros';
    constructor(private http: HttpClient){

    }

  getHero(): Observable<Hero[]>{
   return this.http.get<Hero[]>(this.heroUrl).pipe(
    tap(data=> console.log(JSON.stringify(data)))
   );
  }

}