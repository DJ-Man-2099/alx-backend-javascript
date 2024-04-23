import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async (firstName, lastName, fileName) => {
  const user = await signUpUser(firstName, lastName).then((user) => ({
    value: user,
    status: 'fulfilled',
  })).catch((error) => ({
    value: error,
    status: 'rejected',
  }));
  const photo = await uploadPhoto(fileName).then((user) => ({
    value: user,
    status: 'fulfilled',
  })).catch((error) => ({
    value: error,
    status: 'rejected',
  }));
  return [user, photo];
};
