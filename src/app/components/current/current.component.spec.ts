import { TestBed, getTestBed } from '@angular/core/testing';
import { CurrentService } from 'src/app/services/current.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CurrentService', () => {
    let injector: TestBed;
    let service: CurrentService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [CurrentService],
      });
      injector = getTestBed();
      service = injector.get(CurrentService);
      httpMock = injector.get(HttpTestingController);
    });

    afterEach(() => {
      httpMock.verify();
    });

    it('getWeather() should return data', () => {
        this.service.getWeather('medellin').subscribe((res) => {
            expect(res).toBe('location');
        });
    });
});
