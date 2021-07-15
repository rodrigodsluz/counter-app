import * as S from './styles';

/**
 * @export
 * @component
 * @name ExperienceBar
 *
 * @description
 * Experience Bar component
 */
const ExperienceBar = (): JSX.Element => (
  <S.Container>
    <S.MinExperienceLevel>0 xp</S.MinExperienceLevel>
    <S.ExperienceBar>
      {/* <S.ExperienceBarProgress ProgressLevel={percentToNextLevel} />

        <S.ProgressLevel Left={percentToNextLevel}>
          {currentExperience} xp
        </S.ProgressLevel> */}
    </S.ExperienceBar>
    <S.MaxExperienceLevel>600 xp</S.MaxExperienceLevel>
  </S.Container>
);

export default ExperienceBar;
