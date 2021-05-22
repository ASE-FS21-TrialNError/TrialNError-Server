import { Test, TestingModule } from '@nestjs/testing';
import { getMaxListeners } from 'node:process';
import { WishListController } from './wishlist.controller';
import { WishlistService } from './wishlist.service';
import { Types } from 'mongoose';

describe('WishListController', () => {
    let wishListController: WishListController;

    const mockWishlistService = {
        addApp: jest.fn((appID, user) => {
            return {}
        }),

        deleteApp: jest.fn((appID, user) => {
            return {}
        }),

        getAppsInWishlist: jest.fn((user) => {
            return {
                apps: [],
                userEmail: user.email,
            }
        }),

        getApps: jest.fn((user) => {
            return []
        }),        
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [WishListController],
            providers: [WishlistService],
        })
            .overrideProvider(WishlistService)
            .useValue(mockWishlistService)
            .compile();
        wishListController = module.get<WishListController>(WishListController);

    });

    it('WishListController should be defined', () => {
        expect(WishListController).toBeDefined();
    });

    const dto = {
        _id: expect.any(Types.ObjectId),
        id: '1',
        firstname: 'Vladimir',
        lastname: 'Donkov',
        email: 'user@gmail.com'
    };

    it('Testing correctness of WishList add method', () => {
        // Checking the result of the WishList add method
        expect(wishListController.add(dto, expect.any(Types.ObjectId))).toEqual({});

        // Making sure that mockWishlistService is used
        expect(mockWishlistService.addApp).toHaveBeenCalled();
    });

    it('Testing correctness of WishList delete method', () => {
        // Checking the result of the WishList delete method
        expect(wishListController.delete(dto, expect.any(Types.ObjectId))).toEqual({});

        // Making sure that mockWishlistService is used
        expect(mockWishlistService.deleteApp).toHaveBeenCalled();
    });

    it('Testing correctness of WishList getAppIDWishList method', () => {
        // Checking the result of the WishList getAppIDWishList method
        expect(wishListController.getAppIDWishList(dto)).toEqual(
            {
                apps: [],
                userEmail: 'user@gmail.com',
            });

        // Making sure that mockWishlistService is used
        expect(mockWishlistService.getAppsInWishlist).toHaveBeenCalled();
    });

    it('Testing correctness of WishList getAppsWishList method', () => {
        // Checking the result of the WishList getAppsWishList method
        expect(wishListController.getAppsWishList(dto)).toEqual([]);

        // Making sure that mockWishlistService is used
        expect(mockWishlistService.getApps).toHaveBeenCalled();
    });
});