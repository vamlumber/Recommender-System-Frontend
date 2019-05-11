import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSketchComponent } from './project-sketch.component';

describe('ProjectSketchComponent', () => {
  let component: ProjectSketchComponent;
  let fixture: ComponentFixture<ProjectSketchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSketchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSketchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
