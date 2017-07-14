import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MamaProfileComponent } from './mama-profile.component';

describe('MamaProfileComponent', () => {
  let component: MamaProfileComponent;
  let fixture: ComponentFixture<MamaProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MamaProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MamaProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
