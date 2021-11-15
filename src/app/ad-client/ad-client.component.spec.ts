import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdClientComponent } from './ad-client.component';

describe('AdClientComponent', () => {
  let component: AdClientComponent;
  let fixture: ComponentFixture<AdClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
