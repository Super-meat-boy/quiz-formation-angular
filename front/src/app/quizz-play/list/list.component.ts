import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/services/quizz.service';
import { Quizz } from 'src/app/entities/quizz';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  constructor(public quizzService: QuizzService, private router: Router) {}

  ngOnInit() {}

  select(q: Quizz) {
    this.quizzService.setCurrent(q);
    this.router.navigateByUrl('/question');
  }
}
