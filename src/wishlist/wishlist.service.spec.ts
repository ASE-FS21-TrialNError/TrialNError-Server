import { Test, TestingModule } from "@nestjs/testing";
import { getModelToken } from "nestjs-typegoose";
import { WishlistService } from "./wishlist.service"

describe ('WishlistService', () => {
    let service: WishlistService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                WishlistService,
                {
                    provide: getModelToken('Wishlist'),
                    useValue: {}
                },
                {
                    provide: getModelToken('Apps'),
                    useValue: {}
                },
            ],
        })
        .compile();

        service = module.get<WishlistService>(WishlistService);
    });

    it('WishlistService should be defined', () => {
        expect(service).toBeDefined();
    });
});