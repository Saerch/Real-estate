import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test1bComponent } from './test1b.component';

describe('Test1bComponent', () => {
  let component: Test1bComponent;
  let fixture: ComponentFixture<Test1bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test1bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test1bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
