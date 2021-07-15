import * as S from './styles';
import { background } from '../../styles/Theme/colors';

/**
 * @export
 * @component
 * @name Profile
 *
 * @description
 * Profile component
 */
const Profile = (): JSX.Element => (
  <S.Container>
    <S.ProfileImage
      src="https://github.com/rodrigodsluz.png"
      alt="Rodrigo Luz"
    />
  </S.Container>
);

export default Profile;
