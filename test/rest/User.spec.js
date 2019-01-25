const uuid = require('uuid');
const User = require('../../src/rest/User');

const ID = uuid();
const FIRST_NAME = 'John';
const FIRST_SURNAME = 'Smith';
const SECOND_SURNAME = 'Smith';

test('it should respond ok when get all users', () => {
  expect.assertions(1);
  return expect(User.getAll()).resolves.not.toBeUndefined();
});

test('it should respond ok when get one user', () => {
  expect.assertions(1);
  return expect(User.getOne(ID)).resolves.not.toBeUndefined();
});

test('it should respond ok when create a new user', () => {
  const user = {
    firstName: FIRST_NAME,
    firstSurname: FIRST_SURNAME,
    secondSurname: SECOND_SURNAME
  };
  
  expect.assertions(1);
  return expect(User.create(user)).resolves.not.toBeUndefined();
});

test('it should respond ok when update a user', () => {
  const user = {
    id: ID,
    firstName: FIRST_NAME,
    firstSurname: FIRST_SURNAME,
    secondSurname: SECOND_SURNAME
  };

  expect.assertions(1);
  return expect(User.update(ID)).resolves.not.toBeUndefined();
});

test('it should respond ok when delete a user', () => {
  expect.assertions(1);
  return expect(User.delete(ID)).resolves.not.toBeUndefined();
});