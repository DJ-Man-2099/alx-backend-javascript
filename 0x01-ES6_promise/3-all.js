import { uploadPhoto, createUser } from './utils';

export default async () => {
  const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
  console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
};
