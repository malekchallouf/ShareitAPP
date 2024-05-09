import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterDetailComponent } from './consulter-detail.component';

describe('ConsulterDetailComponent', () => {
  let component: ConsulterDetailComponent;
  let fixture: ComponentFixture<ConsulterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
