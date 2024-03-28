import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAddingComponent } from './subject-adding.component';

describe('SubjectAddingComponent', () => {
  let component: SubjectAddingComponent;
  let fixture: ComponentFixture<SubjectAddingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectAddingComponent]
    });
    fixture = TestBed.createComponent(SubjectAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
