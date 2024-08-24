import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Test } from '@nestjs/testing';
describe(UsersService.name, async () => {
  let service: UsersService;
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [UsersService],
      controllers: [UsersController],
    }).compile();

    service = moduleRef.get<UsersService>(UsersService);
  });
  it('should create a user on passing valid arguments', async () => {
    const id = await service.createUser({
      age: 15,
      email: 'tanish.baidya@gmail.com',
      name: 'Tanish baidya',
    });

    expect(id).toBeTruthy();
  });
});
