import { Test, TestingModule } from '@nestjs/testing';
import { AppsController } from './apps.controller';
import { AppsService } from './apps.service';

  describe('AppsController', () => {
    let appsService: AppsService;
    let appsController: AppsController;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
       controllers: [AppsController],
        providers:  [
          {
             provide: AppsService,
             useValue: {},
          },
         ],
      }).compile();
      appsService = module.get<AppsService>(AppsService);
      appsController = module.get<AppsController>(AppsController);
      
    });
  
    describe('Apps', () => {
      it('List  Apps',async  () => {
        let result ;
        jest.spyOn(appsController, 'getAllApps').mockImplementation(() => result);
        expect(await appsController.getAllApps);
      });
    });
});

