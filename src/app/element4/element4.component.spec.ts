import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Element4Component } from './element4.component';

describe('Element4Component', () => {
  let component: Element4Component;
  let fixture: ComponentFixture<Element4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Element4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Element4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
