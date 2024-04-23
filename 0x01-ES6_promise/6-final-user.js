import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default (firstName, lastName, fileName) => Promise
  .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
  .then((values) => values.map((response) => ({
    status: response.status,
    value: response.status === 'fulfilled' ? response.value : response.reason,
  })));
