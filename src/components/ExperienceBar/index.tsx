import * as S from './styles';
import { GlobalContainer } from '../../styles/Global';

/**
 * @export
 * @component
 * @name IndexScreen
 *
 * @description
 * Experience Bar component
 */
const ExperienceBar = (): JSX.Element => (
  <GlobalContainer>
    <S.Container>
      <S.MinExperienceLevel>0 xp</S.MinExperienceLevel>
      <S.ExperienceBar />
      <S.MaxExperienceLevel>600 xp</S.MaxExperienceLevel>
    </S.Container>
  </GlobalContainer>
);

export default ExperienceBar;
