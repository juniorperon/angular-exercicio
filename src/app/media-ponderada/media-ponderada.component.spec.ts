import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPonderadaComponent } from './media-ponderada.component';

describe('MediaPonderadaComponent', () => {
  let component: MediaPonderadaComponent;
  let fixture: ComponentFixture<MediaPonderadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaPonderadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaPonderadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
