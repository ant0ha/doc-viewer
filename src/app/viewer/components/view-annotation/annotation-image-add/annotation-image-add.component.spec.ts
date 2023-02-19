import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotationImageAddComponent } from './annotation-image-add.component';

describe('AnnotationImageAddComponent', () => {
  let component: AnnotationImageAddComponent;
  let fixture: ComponentFixture<AnnotationImageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnotationImageAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnotationImageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
