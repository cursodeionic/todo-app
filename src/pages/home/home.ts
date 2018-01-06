import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public todos: {userId: number, id: number, title: string, completed: boolean}[]
  constructor(public navCtrl: NavController) { }

  ionViewDidLoad(){
    this.todos = [
     {userId: 1, id: 1, title: 'Tarefa 01', completed: false},
     {userId: 1, id: 2, title: 'Tarefa 02', completed: false},
     {userId: 1, id: 3, title: 'Tarefa 03', completed: false},
     {userId: 1, id: 4, title: 'Tarefa 04', completed: true},
     {userId: 1, id: 5, title: 'Tarefa 05', completed: false},
     {userId: 1, id: 6, title: 'Tarefa 06', completed: false},
     {userId: 1, id: 7, title: 'Tarefa 07', completed: true},
     {userId: 1, id: 8, title: 'Tarefa 08', completed: false},
     {userId: 1, id: 9, title: 'Tarefa 09', completed: true},
     {userId: 1, id: 10, title: 'Tarefa 10', completed: false},
    ];
  }
}
