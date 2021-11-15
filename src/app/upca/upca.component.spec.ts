import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcaComponent } from './upca.component';

describe('UpcaComponent', () => {
  let component: UpcaComponent;
  let fixture: ComponentFixture<UpcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
