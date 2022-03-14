import {GameClient} from './GameClient';

describe('GameClient', () => {
  test('createConnection should connect to socket with valid url', () => {
    const url = 'This url is not valid';

    function createConnection() {
      GameClient.createConnection(url);
    }

    expect(createConnection).toThrow(new Error(`The URL '${url}' is invalid.`));
  });
  test('Create connection should return a socket object', () => {
    const socket = GameClient.createConnection();
    expect(socket).toBe(GameClient.socket);
  });
  test('return previous socket object if we have one', () => {
    const socket = GameClient.createConnection();
    expect(socket).toBe(GameClient.socket);
  });
});
