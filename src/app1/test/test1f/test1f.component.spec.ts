import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test1fComponent } from './test1f.component';

describe('Test1fComponent', () => {
  let component: Test1fComponent;
  let fixture: ComponentFixture<Test1fComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test1fComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test1fComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
