import { TestBed } from '@angular/core/testing';

import { InfomationService } from './infomation.service';

describe('GetInfomationService', () => {
  let service: InfomationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfomationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
