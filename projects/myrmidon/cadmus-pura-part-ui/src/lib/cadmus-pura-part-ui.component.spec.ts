import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadmusPuraPartUiComponent } from './cadmus-pura-part-ui.component';

describe('CadmusPuraPartUiComponent', () => {
  let component: CadmusPuraPartUiComponent;
  let fixture: ComponentFixture<CadmusPuraPartUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadmusPuraPartUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadmusPuraPartUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
