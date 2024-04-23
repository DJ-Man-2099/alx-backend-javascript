import { createUser, uploadPhoto } from './utils';

export default async () => {
  try {
    const user = await createUser();
    const photo = await uploadPhoto();
    return { user, photo };
  } catch (error) {
    return { user: null, photo: null };
  }
};
