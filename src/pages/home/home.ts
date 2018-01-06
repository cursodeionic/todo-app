import { TodoProvider } from './../../providers/todo/todo';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [TodoProvider]
})
export class HomePage {
  public todos: {userId: number, id: number, title: string, completed: boolean}[];
  constructor(private navCtrl: NavController, private TodoProvider: TodoProvider) {}

  ionViewDidLoad() {
    this.TodoProvider.getTodos().subscribe(
      data => {
        this.todos = data;
      }
    );
  }
}
