import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Element5Component } from './element5.component';

describe('Element5Component', () => {
  let component: Element5Component;
  let fixture: ComponentFixture<Element5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Element5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Element5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
