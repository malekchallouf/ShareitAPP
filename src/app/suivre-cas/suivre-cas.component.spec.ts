import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivreCasComponent } from './suivre-cas.component';

describe('SuivreCasComponent', () => {
  let component: SuivreCasComponent;
  let fixture: ComponentFixture<SuivreCasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuivreCasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuivreCasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
