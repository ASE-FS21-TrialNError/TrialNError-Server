import { Test, TestingModule } from '@nestjs/testing';
import { AppsController } from './apps.controller';
import { AppsService } from './apps.service';

describe('AppsController', () => {
  let appsController: AppsController;

  const mockAppsService = {
    getAllApps: jest.fn((page, limit) => {
      return {
        totalPages: 500,
        items: [],
        total: 4999,
      }
    }),

    getAppByID: jest.fn(appId => {
      return {
        _id: appId,
      }
    })
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppsController],
      providers: [AppsService],
    })
      .overrideProvider(AppsService)
      .useValue(mockAppsService)
      .compile();
    appsController = module.get<AppsController>(AppsController);

  });

  it('AppsController should be defined', () => {
    expect(appsController).toBeDefined();
  });

  it('Testing correctness of getAllApps method', () => {
    // Checking the result of the getAllApps method
    expect(appsController.getAllApps(1, 10)).toEqual({
      totalPages: 500,
      items: [],
      total: 4999,
    });

    // Making sure that mockAppService is used
    expect(mockAppsService.getAllApps).toHaveBeenCalled();
  });

  it('Testing correctness of getAppByID method', () => {
    // Checking the result of the getAppByID method
    expect(appsController.getAppByID('123')).toEqual({
      _id: '123',
    });

    // Making sure that mockAppService is used
    expect(mockAppsService.getAppByID).toHaveBeenCalled();
  });

  // describe('Apps', () => {
  //   it('List  Apps', async () => {
  //     let result;
  //     jest.spyOn(appsController, 'getAllApps').mockImplementation(() => result);
  //     expect(await appsController.getAllApps);
  //   });
  // });
});

