import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyApiComponent } from './dummy-api.component';

describe('DummyApiComponent', () => {
  let component: DummyApiComponent;
  let fixture: ComponentFixture<DummyApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
