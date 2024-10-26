import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTopoComponent } from './card-topo.component';

describe('CardTopoComponent', () => {
  let component: CardTopoComponent;
  let fixture: ComponentFixture<CardTopoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardTopoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardTopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
