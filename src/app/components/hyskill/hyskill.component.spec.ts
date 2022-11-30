import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyskillComponent } from './hyskill.component';

describe('HyskillComponent', () => {
  let component: HyskillComponent;
  let fixture: ComponentFixture<HyskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HyskillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HyskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
