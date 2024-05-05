import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTesteComponent } from './app-teste.component';

describe('AppTesteComponent', () => {
  let component: AppTesteComponent;
  let fixture: ComponentFixture<AppTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTesteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
