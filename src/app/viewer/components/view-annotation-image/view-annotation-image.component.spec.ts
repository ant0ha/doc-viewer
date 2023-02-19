import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAnnotationImageComponent } from './view-annotation-image.component';

describe('ViewAnnotationImageComponent', () => {
  let component: ViewAnnotationImageComponent;
  let fixture: ComponentFixture<ViewAnnotationImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAnnotationImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAnnotationImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
