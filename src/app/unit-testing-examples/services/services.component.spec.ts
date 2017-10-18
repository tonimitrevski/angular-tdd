import {TodosComponent} from './services.component';
import {TodoService} from './todo.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('Unit testing- Faking service', () => {
    let component: TodosComponent;
    let service: TodoService;

    beforeEach(() => {
        service = new TodoService(null);
        component = new TodosComponent(service);
    });

    it('should  set todos property with the items returned', () => {
        const toDos = [1, 2, 3, 4];
        spyOn(service, 'getTodos').and.callFake( () => {
            return Observable.from([ toDos ]);
            // here we return response like we will have in service
        });
        // When we call service.getTodos, functiion that is inside will be called, not service function.

        component.ngOnInit();

        expect(component.todos).toBe(toDos);
    });

    /* Test if component is calling the server */
    it('Interaction test: component should call the server to save changes', () => {
        // Arrange part
        const spy = spyOn(service, 'add').and.callFake( t => {
            // We call Observable.empty() because in this test we don't have to know what is returned from server
            return Observable.empty();
        });
        // Act part
        component.add();
        // Assertion part, check if server is called
        expect(spy).toHaveBeenCalled();

    });

    /* Test if data retriven from the server is added to existing data if success is given*/
    it('Interaction test: should add new data returned from the server', () => {
        const toDo = {id: 1};
        // Arrange part
        const spy = spyOn(service, 'add').and.returnValue(Observable.from([toDo]));
        // Act part
        component.add();
        // Assertion part, check if server is called
        expect(component.todos.indexOf(toDo)).toBeGreaterThan(-1);

    });

    /* Test if data message is set if error is returned */
    it('Interaction test: should set message if error is returned', () => {
        const errorMessage = 'Error from the server';
        // Arrange part, observable on error
        const spy = spyOn(service, 'add').and.returnValue(Observable.throw(errorMessage));
        // Act part
        component.add();
        // Assertion part, check if message is set
        expect(component.message).toBe(errorMessage);

    });

    /* Check if server is called to delete item if confirm is checked */
    it('Interaction test: Should call server to delete to do item if confirmed', () => {
        spyOn(window, 'confirm').and.returnValue(true);
        const spy = spyOn(service, 'delete').and.returnValue(Observable.empty());
        component.delete(1);
        expect(spy).toHaveBeenCalledWith(1);
    });

    /* Check if user has checked cancel button server is not called*/
    it('Interaction test: Should not call server to delete to do item if not confirmed', () => {
        spyOn(window, 'confirm').and.returnValue(false);
        const spy = spyOn(service, 'delete').and.returnValue(Observable.empty());
        component.delete(1);
        expect(spy).not.toHaveBeenCalled();
    });

});
