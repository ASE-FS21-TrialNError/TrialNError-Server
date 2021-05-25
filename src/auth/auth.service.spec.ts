import { Test, TestingModule } from "@nestjs/testing";
import { getModelToken } from "nestjs-typegoose";
import { AuthService } from "./auth.service"
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { MailerService } from '@nestjs-modules/mailer';

describe ('AuthService', () => {
    let service: AuthService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AuthService,
                {
                    provide: getModelToken('UserAuth'),
                    useValue: {}
                },
                {
                    provide: getModelToken('Wishlist'),
                    useValue: {}
                },
                {
                    provide: getModelToken('EmailVerification'),
                    useValue: {}
                },
                {
                    provide: UsersService,
                    useValue: {}
                },
                {
                    provide: JwtService,
                    useValue: {}
                },
                {
                    provide: MailerService,
                    useValue: {}
                },
            ],
        })
        .compile();

        service = module.get<AuthService>(AuthService);
    });

    it('AuthService should be defined', () => {
        expect(service).toBeDefined();
    });
});