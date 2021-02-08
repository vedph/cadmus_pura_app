import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadmusPuraPartPgComponent } from './cadmus-pura-part-pg.component';

describe('CadmusPuraPartPgComponent', () => {
  let component: CadmusPuraPartPgComponent;
  let fixture: ComponentFixture<CadmusPuraPartPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadmusPuraPartPgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadmusPuraPartPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
