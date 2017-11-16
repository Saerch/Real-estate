import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackDummyComponent } from './track-dummy.component';

describe('TrackDummyComponent', () => {
  let component: TrackDummyComponent;
  let fixture: ComponentFixture<TrackDummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackDummyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
