import {Component, inject} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {QuestionService} from './question.service';
import {QuestionBase} from './question-base';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form [questions]="questions$ | async" />
      <button (click)="questionService.addTextBox()">add textbox</button><button (click)="questionService.addDropDown()">adddropdown</button><button (click)="getRequest()">request</button>
    </div>
    <h1>{{value.tg_id}}</h1>
    
  `,
  providers: [QuestionService],
  imports: [AsyncPipe, DynamicFormComponent],
})
export class AppComponent {
  http = inject(HttpClient)
  questionService = inject(QuestionService)
  questions$: Observable<QuestionBase<string>[]> = this.questionService.getQuestions();
  apiUrl = 'http://localhost:8080/api'
  value!: any 
  value2: string = 'aaaa'
  
  
  getRequest(){
    this.http.get(this.apiUrl + '/1', {responseType: 'json'}).subscribe(x => this.value = x)
    console.log(this.value)
  }
  

  body = {title:'sentToDb', description:'firstRecord', published: true}
  postRequest(){
    this.http.post(this.apiUrl, this.body, {responseType: 'json' as const}).subscribe(x => this.value = x)
  }
  ngOnInit(){
    //this.getRequest()
    //this.postRequest()
    //console.log(this.value)
    
  }
}

