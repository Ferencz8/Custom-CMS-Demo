import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicsiteComponent } from './publicsite.component';

describe('PublicsiteComponent', () => {
  let component: PublicsiteComponent;
  let fixture: ComponentFixture<PublicsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
