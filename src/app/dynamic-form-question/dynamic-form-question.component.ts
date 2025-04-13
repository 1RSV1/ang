import {Component, input, Input} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {QuestionBase} from '../question-base';
import {DropdownQuestion} from '../question-dropdown';
import {TextboxQuestion} from '../question-textbox';
@Component({
  selector: 'app-question',
  template: `
  <div [formGroup]="form()">
  <label [attr.for]="question().key">{{ question().label }}</label>
  <div>
    @switch (question().controlType) {
      @case ('textbox') {
        <input [formControlName]="question().key" [id]="question().key" [type]="question().type"/>
      }
      @case ('dropdown') {
        <select [id]="question().key" [formControlName]="question().key">
          @for (opt of question().options; track opt) {
            <option [value]="opt.key">{{ opt.value }}</option>
          }
        </select>
      }
    }
  </div>
  @if (!isValid) {
    <div class="errorMessage">{{ question().label }} is required</div>
  }
</div>
  `,
  imports: [ReactiveFormsModule],
})
export class DynamicFormQuestionComponent {
  question = input.required<QuestionBase<string>>();
  
  form = input.required<FormGroup>();
  get isValid() {
    //console.log(this.form())
    return this.form().controls[this.question().key].valid
  }
}
