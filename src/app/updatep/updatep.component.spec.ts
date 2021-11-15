import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepComponent } from './updatep.component';

describe('UpdatepComponent', () => {
  let component: UpdatepComponent;
  let fixture: ComponentFixture<UpdatepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
