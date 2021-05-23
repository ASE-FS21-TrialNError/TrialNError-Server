import { Test, TestingModule } from "@nestjs/testing";
import { getModelForClass, getModelWithString } from "@typegoose/typegoose";
import { getModelToken } from "nestjs-typegoose";
import { AppsService } from "./apps.service"
import { Apps } from "./models/apps";
import { AppsModule } from "./apps.module";

describe ('AppsService', () => {
    let service: AppsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppsService,
                {
                    provide: getModelForClass(Apps),
                    useValue: {}
                },
            ],
        })
        .overrideProvider(AppsService)
        .useValue(AppsService)
        .compile();

        service = module.get<AppsService>(AppsService);
    });

    it('AppsService should be defined', () => {
        expect(service).toBeDefined();
    });
});