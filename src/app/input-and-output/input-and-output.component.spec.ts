import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputAndOutputComponent } from './input-and-output.component';
import {DashboardHeroComponent} from './dashboard-hero/dashboard-hero.component';
import {UsersService} from '../dependency/user.service';
import {DashboardHeroTestHostComponent} from './dashboard-hero-test-host-component/dashboard-hero-test-host-com.component';


describe('InputAndOutputComponent', () => {
  let component: InputAndOutputComponent;
  let fixture: ComponentFixture<InputAndOutputComponent>;
  let userService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ InputAndOutputComponent, DashboardHeroComponent, DashboardHeroTestHostComponent ],
        providers: [ UsersService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAndOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // UserService from the root injector
      userService = TestBed.get(UsersService);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
