import {Injectable, inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {QuestionBase} from './question-base';
@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {
  group= new FormGroup({})
  toFormGroup(questions: QuestionBase<string>[], group: FormGroup) {
    
    questions.forEach((question) => {
      group.addControl(question.key, new FormControl(question.value || '', Validators.required))
    });
    return group
  }
}
