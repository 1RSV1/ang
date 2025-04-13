import {Injectable} from '@angular/core';
import {DropdownQuestion} from './question-dropdown';
import {QuestionBase} from './question-base';
import {TextboxQuestion} from './question-textbox';
import {of} from 'rxjs';
@Injectable()
export class QuestionService {
  // TODO: get from a remote source of question metadata
  questions: QuestionBase<string>[] = [
    new DropdownQuestion({
      key: 'favoriteAnimal',
      label: 'Favorite Animal',
      required: true,
      options: [
        {key: 'cat', value: 'Cat'},
        {key: 'dog', value: 'Dog'},
        {key: 'horse', value: 'Horse'},
        {key: 'capybara', value: 'Capybara'},
      ],
      order: 3,
    }),
    new TextboxQuestion({
      key: 'firstName',
      label: 'First name',
      value: 'Alex',
      required: true,
      type: 'text',
      order: 1,
    }),
    new TextboxQuestion({
      key: 'emailAddress',
      label: 'Email',
      type: 'email',
      order: 2,
      required: true,
    }),
  ];

  getQuestions() {
    
    return of(this.questions.sort((a, b) => a.order - b.order));
  }

  addTextBox(){
    this.questions.splice(1, 0, new TextboxQuestion({
      key: 'emailAddress',
      label: 'New textbox',
      type: 'email',
      order: 1,
      required: true,
    }))
    
  }

  addDropDown(){
    this.questions.push(new DropdownQuestion({
      key: 'favoriteAnimal',
      label: 'New dropdown',
      required: true,
      options: [
        {key: 'cat', value: 'Cat'},
        {key: 'dog', value: 'Dog'},
        {key: 'horse', value: 'Horse'},
        {key: 'capybara', value: 'Capybara'},
      ],
      order: 2,
    }))
    
  }
}
