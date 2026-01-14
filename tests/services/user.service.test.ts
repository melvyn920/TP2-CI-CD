import { createUser, getUser } from '../../src/services/user.service';

describe('User Service', () => {
  test('should create and retrieve user', async () => {
    // Création de l'utilisateur
    const user = await createUser('testuser', 'test@mail.com', '1234');

    // Récupération de l'utilisateur
    const fetched = await getUser(user.id);

    // Vérification que l'utilisateur existe
    expect(fetched).not.toBeNull();

    // Vérification des champs
    expect(fetched!.username).toBe('testuser');
    expect(fetched!.email).toBe('test@mail.com');
  });
});
