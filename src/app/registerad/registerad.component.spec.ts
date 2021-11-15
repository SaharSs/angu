import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteradComponent } from './registerad.component';

describe('RegisteradComponent', () => {
  let component: RegisteradComponent;
  let fixture: ComponentFixture<RegisteradComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteradComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
