import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotationImageDisplayComponent } from './annotation-image-display.component';

describe('AnnotationImageDisplayComponent', () => {
  let component: AnnotationImageDisplayComponent;
  let fixture: ComponentFixture<AnnotationImageDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnotationImageDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnotationImageDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
