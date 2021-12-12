const UserService = require('../user_service');
const UserClient = require('../user_client');
jest.mock('../user_client');

describe('UserService', () => {
  const loginMock = jest.fn(async () => 'success');
  UserClient.mockImplementation(() => {
    return {
      login : loginMock
    };
  });
  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  it('calls login() on UserClient when tries to login', async () => {
    await userService.login('abc', 'abc');
    expect(login.mock.calls.length).toBe(1);
  });

  it('should not call login() on UserClient again if already logged in', async () => {
    await userService.login('abc', 'abc');
    await userService.login('abc', 'abc');
    // 로그인이 2번 호출되어도 한번만 실행되어야 하기 떄문에.


    expect(login.mock.calls.length).toBe(1);
  });
});
