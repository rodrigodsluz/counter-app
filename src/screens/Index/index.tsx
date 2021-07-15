import Head from 'next/head';
import ExperienceBar from '@components/ExperienceBar';

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
    <Head>
      <title>Counter App</title>
    </Head>
    <ExperienceBar />
  </>
);

export default IndexScreen;
