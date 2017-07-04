import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAndOutputComponent } from './input-and-output.component';

describe('InputAndOutputComponent', () => {
  let component: InputAndOutputComponent;
  let fixture: ComponentFixture<InputAndOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputAndOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAndOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
