import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpmComponent } from './upm.component';

describe('UpmComponent', () => {
  let component: UpmComponent;
  let fixture: ComponentFixture<UpmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
