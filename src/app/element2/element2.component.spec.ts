import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Element2Component } from './element2.component';

describe('Element2Component', () => {
  let component: Element2Component;
  let fixture: ComponentFixture<Element2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Element2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Element2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
