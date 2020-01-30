import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/services/quizz.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  f = new FormGroup({
    givenAnswer: new FormControl('', Validators.required)
  });

  constructor(public quizzService: QuizzService, private router: Router) {}

  ngOnInit() {}

  submit() {
    console.log('submit...');
    const givenAnswer = this.f.value.givenAnswer;
    console.log('givenAnswer: ', givenAnswer);
    const correctAnswer = this.quizzService.current.questions[
      this.quizzService.progress.questionId
    ].correctAnswer;
    console.log('correctAnswer: ', correctAnswer);
    if (correctAnswer === givenAnswer) {
      this.quizzService.progress.score++;
    }
    this.quizzService.progress.questionId++;
    this.quizzService.saveProgress();
    if (this.quizzService.progress.questionId === this.quizzService.current.questions.length) {
      this.router.navigateByUrl('/score');
      return;
    }
    this.f.reset();
  }
}
