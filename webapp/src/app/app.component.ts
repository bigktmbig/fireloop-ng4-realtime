import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Todo, FireLoopRef } from './shared/sdk/models';
import { RealTime, TodoApi } from './shared/sdk/services';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	private title   	: string = 'Todo app works!';
	private todo    	: Todo   = new Todo();
	private todos   	: Todo[] = new Array<Todo>();
	private todoRef 	: FireLoopRef<Todo>;
	private todoList 	: TodoApi[];

	constructor(private rt: RealTime, private todoApi: TodoApi) {
		this.rt.onReady().subscribe(() => {
			this.todoRef = this.rt.FireLoop.ref<Todo>(Todo);
			this.todoRef.on('change').subscribe((todos: Todo[]) => this.todos = todos);
			this.getTodo();
		});
	}

	getTodo(): void {
		this.todoApi.find({
		}).subscribe((todoList: TodoApi[]) => {
			this.todoList = todoList;
		});
	}

	create(): void {
		this.todoRef.create(this.todo).subscribe(() => this.todo = new Todo());
	}

	update(todo: Todo): void {
		this.todoRef.upsert(todo).subscribe();
	}

	remove(todo: Todo): void {
		this.todoRef.remove(todo).subscribe();
	}
}
