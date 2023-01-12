import { Component } from '@angular/core';
import { Model } from "./model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly _model = new Model();

  getName(): string {
    return this._model.user;
  }
}
