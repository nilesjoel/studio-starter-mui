import Head from 'next/head';
import { SplashPage, Logo, LogoImage, LogoTitle } from '../components/StyledComponents'; // Import styled components
import ProTip from '../components/ProTip';

const Home: React.FC = () => {
  return (
    <SplashPage>
      <Head>
        <title>Studio</title>
        <link rel="stylesheet" href="https://use.typekit.net/lan5nnc.css" />
      </Head>
      <Logo>
        {/* <LogoImage src="bw-logo.png" alt="Logo" /> */}
        <LogoTitle>Studio Starting Point</LogoTitle>
      </Logo>
    </SplashPage>
  );
};

export default Home;
