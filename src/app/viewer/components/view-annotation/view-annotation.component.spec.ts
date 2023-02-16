import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAnnotationComponent } from './view-annotation.component';

describe('ViewAnnotationComponent', () => {
  let component: ViewAnnotationComponent;
  let fixture: ComponentFixture<ViewAnnotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAnnotationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAnnotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
