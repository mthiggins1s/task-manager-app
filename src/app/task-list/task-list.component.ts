// task-list.component.ts
import { Component, Signal, signal } from '@angular/core';
import { TaskComponent } from '../task/task.component';

interface Task {
  id: number;
  title: string | undefined;
  completed: boolean;
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  imports: [TaskComponent],
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  tasks = signal<Task[]>([
    { id: 1, title: 'Fix the bug!', completed: false },
    { id: 2, title: 'Understand Signals', completed: true },
    { id: 3, title: undefined, completed: false },
  ]);

  toggleCompletion(taskId: number) {
    const updatedTasks = this.tasks().map((task) => {
      if (task.id === taskId) {
        task.completed = !task.completed;
      }
      return task;
    });

    // Update the signal here
    this.tasks.set(updatedTasks);
  }
  changeFilter(type:string){
    console.log(type)
  }
}