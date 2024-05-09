import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Element3Component } from './element3.component';

describe('Element3Component', () => {
  let component: Element3Component;
  let fixture: ComponentFixture<Element3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Element3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Element3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
