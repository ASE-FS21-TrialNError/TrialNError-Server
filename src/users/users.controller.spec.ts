import { Test, TestingModule } from '@nestjs/testing';
import { User } from './models/user';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Types } from 'mongoose';

describe('UsersController', () => {
    let usersController: UsersController;

    const mockUsersService = {

        findAll: jest.fn(() => {
            return {};
        }),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UsersController],
            providers: [UsersService],
        })
            .overrideProvider(UsersService)
            .useValue(mockUsersService)
            .compile();
        usersController = module.get<UsersController>(UsersController);

    });

    it('UsersController should be defined', () => {
        expect(usersController).toBeDefined();
    });

    const user = expect.any(User);
    const getUsersPromise = new Promise(function (resolve, reject) { resolve({}); });
    const userDto = {
        _id: expect.any(Types.ObjectId),
        id: '2',
        firstname: 'Albert',
        lastname: 'Einstein',
        email: 'AE@gmail.com',
    };

    it('Testing correctness of getUsers method', () => {
        // Checking the result of the getUsers method
        expect(usersController.getUsers(user)).toEqual(getUsersPromise);

        // Making sure that mockUsersService is used
        expect(mockUsersService.findAll).toHaveBeenCalled();
    });

    it('Testing correctness of getUser method', () => {
        // Checking the result of the getUser method
        expect(usersController.getUser(userDto))
            .toEqual(
                {
                    email: userDto.email,
                    id: userDto.id,
                    firstname: userDto.firstname,
                    lastname: userDto.lastname
                }
            );
    });

});