import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz.service';
import { Question } from 'src/app/interface/question';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  f = new FormGroup({
    questionLabel: new FormControl("What's my age again ?", [
      Validators.required,
      Validators.maxLength(200)
    ]),
    answerA: new FormControl('Bruxelles', Validators.required),
    answerB: new FormControl('Paris', Validators.required),
    answerC: new FormControl('Moscou', Validators.required),
    answerD: new FormControl('Bucarest', Validators.required),
    correctAnswer: new FormControl('', Validators.required)
  });

  constructor(private router: Router, private quizzService: QuizzService) {}

  ngOnInit() {}

  submitQuestion() {
    console.log('question submitted');
    this.quizzService.addQuestion(this.f.value as Question);
    this.router.navigateByUrl('/setup');
  }
}
