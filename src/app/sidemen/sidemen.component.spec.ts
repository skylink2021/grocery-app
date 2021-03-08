import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidemenComponent } from './sidemen.component';

describe('SidemenComponent', () => {
  let component: SidemenComponent;
  let fixture: ComponentFixture<SidemenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidemenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidemenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
