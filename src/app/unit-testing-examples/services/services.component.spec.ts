import {TodosComponent} from './services.component';
import {TodoService} from './todo.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';

describe('Unit testing- Faking service', () => {
    let component: TodosComponent;
    let service: TodoService;

    beforeEach(() => {
        service = new TodoService(null);
        component = new TodosComponent(service);
    });

    it('should  set todos property with the items returned', () => {
        const toDos = [1, 2, 3, 4]
        spyOn(service, 'getTodos').and.callFake( () => {
            return Observable.from([ toDos ]);
            // here we return response like we will have in service
        });
        // When we call service.getTodos, functiion that is inside will be called, not service function.

        component.ngOnInit();

        expect(component.todos).toBe(toDos);
    });
});
