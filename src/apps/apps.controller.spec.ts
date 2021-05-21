import { Test, TestingModule } from '@nestjs/testing';
import { AppsController } from './apps.controller';
import { AppsService } from './apps.service';

  describe('AppsController', () => {
    // let appsService: AppsService;
    let appsController: AppsController;
  
    const mockAppsService = {
      getAllApps: jest.fn((page, limit) => {
        return {
          totalPages: 500,
          items: [],
          total: 4999,
        }
      })
    };

    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
       controllers: [AppsController],
        providers:  [AppsService],
      })
      .overrideProvider(AppsService)
      .useValue(mockAppsService)
      .compile();
      // appsService = module.get<AppsService>(AppsService);
      appsController = module.get<AppsController>(AppsController);
      
    });

    it('AppsController should be defined', () => {
      expect(appsController).toBeDefined();
    });
  
    it('dont know yet', () => {
      expect(appsController.getAllApps(1,10)).toEqual({
        totalPages: 500,
        items: [],
        total: 4999,
      });

      expect(mockAppsService.getAllApps).toHaveBeenCalled();
    });

    describe('Apps', () => {
      it('List  Apps',async  () => {
        let result ;
        jest.spyOn(appsController, 'getAllApps').mockImplementation(() => result);
        expect(await appsController.getAllApps);
      });
    });
});

