import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThesisCatalogComponent } from './thesis-catalog.component';

describe('ThesisCatalogComponent', () => {
  let component: ThesisCatalogComponent;
  let fixture: ComponentFixture<ThesisCatalogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThesisCatalogComponent]
    });
    fixture = TestBed.createComponent(ThesisCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
