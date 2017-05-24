import { TestBed, inject } from '@angular/core/testing';

import { PreloadStrategyService } from './preload-strategy.service';

describe('PreloadStrategyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreloadStrategyService]
    });
  });

  it('should ...', inject([PreloadStrategyService], (service: PreloadStrategyService) => {
    expect(service).toBeTruthy();
  }));
});
