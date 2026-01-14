import { createUser, getUser } from '../../src/services/user.service';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

describe('User Service', () => {
  test('should create and retrieve user', async () => {
    const user = await createUser('testuser', 'test@mail.com', '1234');
    const fetched = await getUser(user.id);

    expect(fetched).toBeDefined();
    expect(fetched.username).toBe('testuser');
  });
});
