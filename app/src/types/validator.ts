import * as Types from '.';

export function isUser(entity: unknown): entity is Types.User {
  const { id, name, email, age } = entity as Types.User;
  return (
    typeof id === 'string' &&
    typeof name === 'string' &&
    typeof email === 'string' &&
    typeof age === 'number'
  );
}
