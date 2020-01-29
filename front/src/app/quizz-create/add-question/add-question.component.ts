import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  f = new FormGroup({
    questionLabel: new FormControl('What\'s my age again ?', [Validators.required, Validators.maxLength(200)]),
    answerA: new FormControl('Bruxelles', Validators.required),
    answerB: new FormControl('Paris', Validators.required),
    answerC: new FormControl('Moscou', Validators.required),
    answerD: new FormControl('Bucarest', Validators.required),
    correctAnswer: new FormControl('', Validators.required)
  })

  constructor() { }

  ngOnInit() {
  }

}
