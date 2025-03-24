import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuDetailComponent } from './stu-detail.component';

describe('StuDetailComponent', () => {
  let component: StuDetailComponent;
  let fixture: ComponentFixture<StuDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StuDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
