import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelierComponent } from './relier.component';

describe('RelierComponent', () => {
  let component: RelierComponent;
  let fixture: ComponentFixture<RelierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
