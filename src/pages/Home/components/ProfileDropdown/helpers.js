import { Colors } from '../../../../components';

export const generateProfileImage = (userName) => {
  const imageUrl = new URL('https://ui-avatars.com/api/');
  // Here '%2B' is encoded form of whitespace. Ref : https://stackoverflow.com/a/1634293
  imageUrl.searchParams.append('name', userName.replace('%2B', '+'));
  imageUrl.searchParams.append('background', 'random');
  imageUrl.searchParams.append('color', Colors.White);
  imageUrl.searchParams.append('size', 128);
  imageUrl.searchParams.append('font-size', 0.5);
  imageUrl.searchParams.append('rounded', true);
  imageUrl.searchParams.append('format', 'svg');

  return imageUrl.toString();
};
