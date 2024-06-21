import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarrypotterComponent } from './harrypotter.component';
import { ModalComponent } from '../modal/modal.component';

describe('HarrypotterComponent', () => {
  let component: HarrypotterComponent;
  let fixture: ComponentFixture<HarrypotterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HarrypotterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HarrypotterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
