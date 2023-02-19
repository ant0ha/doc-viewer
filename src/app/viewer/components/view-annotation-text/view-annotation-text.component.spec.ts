import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAnnotationTextComponent } from './view-annotation-text.component';

describe('ViewAnnotationTextComponent', () => {
  let component: ViewAnnotationTextComponent;
  let fixture: ComponentFixture<ViewAnnotationTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAnnotationTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAnnotationTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
