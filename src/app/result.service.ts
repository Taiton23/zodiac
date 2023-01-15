import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  public result$ = new BehaviorSubject(undefined);
  constructor() { }
}
