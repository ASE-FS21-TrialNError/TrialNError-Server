import { Test, TestingModule } from "@nestjs/testing";
import { getModelToken } from "nestjs-typegoose";
import { AppsService } from "./apps.service"

describe ('AppsService', () => {
    let service: AppsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppsService,
                {
                    provide: getModelToken('Apps'),
                    useValue: {}
                },
            ],
        })
        .compile();

        service = module.get<AppsService>(AppsService);
    });

    it('AppsService should be defined', () => {
        expect(service).toBeDefined();
    });
});