import { hashPassword, comparePassword } from '../../src/utils/hash.utils';

describe('Hash Utils', () => {
  test('hash and compare password', async () => {
    const password = '1234';
    const hashed = await hashPassword(password);
    const match = await comparePassword(password, hashed);
    expect(match).toBe(true);
  });
});
