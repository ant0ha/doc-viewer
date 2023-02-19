import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotationTextAddComponent } from './annotation-text-add.component';

describe('AnnotationTextAddComponent', () => {
  let component: AnnotationTextAddComponent;
  let fixture: ComponentFixture<AnnotationTextAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnotationTextAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnotationTextAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
