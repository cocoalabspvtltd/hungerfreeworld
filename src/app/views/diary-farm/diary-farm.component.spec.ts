import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryFarmComponent } from './diary-farm.component';

describe('DiaryFarmComponent', () => {
  let component: DiaryFarmComponent;
  let fixture: ComponentFixture<DiaryFarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiaryFarmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiaryFarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
