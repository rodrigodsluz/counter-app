import Head from 'next/head';
import ExperienceBar from '@components/ExperienceBar';
import Profile from '@components/Profile';
import { GlobalContainer, WrapperContent } from '../../styles/Global';

/**
 * @export
 * @component
 * @name IndexScreen
 *
 * @description
 * Index screen
 */
const IndexScreen = (): JSX.Element => (
  <>
    <GlobalContainer>
      <Head>
        <title>Counter App</title>
      </Head>

      <ExperienceBar />

      <WrapperContent>
        <div>
          <Profile /> Completed Challenges Countdown
        </div>

        <div>Challenge box</div>
      </WrapperContent>
    </GlobalContainer>
  </>
);

export default IndexScreen;
