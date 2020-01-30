import { Injectable } from '@angular/core';
import { QuizzService } from './quizz.service';
import { HttpClient } from '@angular/common/http';
import { Quizz } from '../entities/quizz';
import { QuizzMap } from '../interface/quizz-map';

@Injectable({
  providedIn: 'root'
})
export class QuizzHttpService extends QuizzService {
  constructor(private http: HttpClient) {
    super();
    console.log('http quizz service');
    this.refresh();
  }

  refresh() {
    this.http.get<QuizzMap>('http://localhost:3000/v1/quizz').subscribe({
      next: quizzList => console.log('data :',  data),
      error: err => console.log('err :',  err),
      complete: () => {}
    });
  }
}
