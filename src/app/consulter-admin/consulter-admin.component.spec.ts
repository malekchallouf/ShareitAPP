import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterAdminComponent } from './consulter-admin.component';

describe('ConsulterAdminComponent', () => {
  let component: ConsulterAdminComponent;
  let fixture: ComponentFixture<ConsulterAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
