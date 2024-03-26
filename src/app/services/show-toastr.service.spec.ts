import { TestBed } from '@angular/core/testing';
import { ShowToastrService } from './show-toastr.service';

describe('ToastrService', () => {
  let service: ShowToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowToastrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
