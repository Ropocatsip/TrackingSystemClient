import { TestBed } from '@angular/core/testing';

import { GetInfomationService } from './get-infomation.service';

describe('GetInfomationService', () => {
  let service: GetInfomationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetInfomationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
