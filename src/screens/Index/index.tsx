import Head from 'next/head';
import ExperienceBar from '@components/ExperienceBar';
import { GlobalContainer } from '../../styles/Global';

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
    </GlobalContainer>
  </>
);

export default IndexScreen;
