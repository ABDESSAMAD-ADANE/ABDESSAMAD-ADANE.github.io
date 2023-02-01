import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';
  expression = '';

  addNumber(number: string) {
    this.expression += number;
  }

  addOperator(operator: string) {
    this.expression += operator;
  }

  calculate() {
    this.expression = eval(this.expression);
  }
}
