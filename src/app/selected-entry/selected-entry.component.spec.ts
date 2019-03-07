import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedEntryComponent } from './selected-entry.component';

describe('SelectedEntryComponent', () => {
  let component: SelectedEntryComponent;
  let fixture: ComponentFixture<SelectedEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
