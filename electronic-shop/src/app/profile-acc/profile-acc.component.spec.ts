import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAccComponent } from './profile-acc.component';

describe('ProfileAccComponent', () => {
  let component: ProfileAccComponent;
  let fixture: ComponentFixture<ProfileAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileAccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
