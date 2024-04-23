import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default (firstName, lastName, fileName) => Promise.all(
  [signUpUser(firstName, lastName), uploadPhoto(fileName)],
);
