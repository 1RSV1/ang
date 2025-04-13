import {Component, inject, input} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {DynamicFormQuestionComponent} from '../dynamic-form-question/dynamic-form-question.component';
import {QuestionBase} from '../question-base';
import {QuestionControlService} from '../question-control.service';
import { QuestionService } from '../question.service';
@Component({
  selector: 'app-dynamic-form',
  template: `
  <div>
  <form (ngSubmit)="onSubmit()" [formGroup]="form">
    @for (question of questions(); track question) {
      <div class="form-row">
        <app-question [question]="question" [form]="form" />
      </div>
    }
    <div class="form-row">
      <button type="submit" [disabled]="!form.valid">Save</button>
    </div>
  </form>
  @if (payLoad) {
    <div class="form-row"><strong>Saved the following values</strong><br />{{ payLoad }}</div>
  }
</div>
@if (!isValid) {
    <div class="errorMessage">form is required</div>
  }

  `,
  
  imports: [DynamicFormQuestionComponent, ReactiveFormsModule],
  providers: [QuestionService]
})
export class DynamicFormComponent {
  qcs = inject(QuestionControlService);
  questions = input<QuestionBase<string>[] | null>([]);
  form = new FormGroup({})
  ngOnInit(){
    this.qcs.toFormGroup(this.questions() as QuestionBase<string>[], this.form);
  }
  
  payLoad = '';
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
  get isValid() {
    return this.form.valid
  }

}
