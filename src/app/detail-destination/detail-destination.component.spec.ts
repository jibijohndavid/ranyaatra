import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDestinationComponent } from './detail-destination.component';

describe('DetailDestinationComponent', () => {
  let component: DetailDestinationComponent;
  let fixture: ComponentFixture<DetailDestinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDestinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
