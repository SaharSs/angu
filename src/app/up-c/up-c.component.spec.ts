import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpCComponent } from './up-c.component';

describe('UpCComponent', () => {
  let component: UpCComponent;
  let fixture: ComponentFixture<UpCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
