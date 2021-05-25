import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserDto } from '../users/dto/user.dto';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AuthController', () => {
    let authController: AuthController;

    const mockAuthService = {};
    // const createUserDto = new CreateUserDto();
    // createUserDto.firstname="ABC";
    // createUserDto.lastname="XYZ";
    // createUserDto.email="abc@xyz.com";
    // createUserDto.password="12345";

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