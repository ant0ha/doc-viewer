import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotationTextDisplayComponent } from './annotation-text-display.component';

describe('AnnotationTextDisplayComponent', () => {
  let component: AnnotationTextDisplayComponent;
  let fixture: ComponentFixture<AnnotationTextDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnotationTextDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnotationTextDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
