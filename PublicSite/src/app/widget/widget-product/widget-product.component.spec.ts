import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetProductComponent } from './widget-product.component';

describe('WidgetProductComponent', () => {
  let component: WidgetProductComponent;
  let fixture: ComponentFixture<WidgetProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
