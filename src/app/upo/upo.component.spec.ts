import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpoComponent } from './upo.component';

describe('UpoComponent', () => {
  let component: UpoComponent;
  let fixture: ComponentFixture<UpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
