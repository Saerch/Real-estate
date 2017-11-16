import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test1aComponent } from './test1a.component';

describe('Test1aComponent', () => {
  let component: Test1aComponent;
  let fixture: ComponentFixture<Test1aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test1aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test1aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
