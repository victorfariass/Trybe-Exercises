const getUserName = require('./getUserName');

describe('Usuário é ou não é encontrado?', () => {
  test('usuário encontrado', () => {
    return getUserName(4).then((user) => {
      expect(user).toBe('Mark');
    })
  })
  test('usuário não encontrado', () => {
    return getUserName(6).catch((error) => {
      expect(error).toEqual({ error: 'User with 6 not found.' });
    })
  })
})

describe('Usuário é ou não é encontrado? Async/Await', () => {
  test('usuário encontrado', async () => {
    const userName = await getUserName(4);
    expect(userName).toBe('Mark');
  })
  test('usuário não encontrado', async () => {
    try {
      await getUserName(6);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 6 not found.' })
    }
  })
})