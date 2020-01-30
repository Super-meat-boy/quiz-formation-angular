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
      next: quizzMap => {
        this.quizzMap = this.quizzMap;
        this.saveQuizzMap();
        console.log('data :',  quizzMap)
      },
      error: err => console.log('err :',  err),
      complete: () => {}
    });
  }

  saveQuizzMap() {
    super.saveQuizzMap();
    this.http.post<QuizzMap>('http://localhost:3000/v1/quizz', this.quizzMap).subscribe({
      next: quizzMap => {

      },
      error: err => console.log('err :',  err),
      complete: () => {}
    });
  }
}
