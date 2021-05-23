import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AuthController', () => {
    let authController: AuthController;

    const mockAuthService = {};

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AuthController],
            providers: [AuthService],
        })
            .overrideProvider(AuthService)
            .useValue(mockAuthService)
            .compile();
        authController = module.get<AuthController>(AuthController);

    });

    it('AuthController should be defined', () => {
        expect(authController).toBeDefined();
    });

});