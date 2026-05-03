import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IoexampleComponent } from './ioexample.component';

describe('IoexampleComponent', () => {
  let component: IoexampleComponent;
  let fixture: ComponentFixture<IoexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IoexampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IoexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
