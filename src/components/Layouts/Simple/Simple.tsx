import Head from 'next/head';
import { 
  StyledBody, 
  GridContainer, 
  GridCard, 
  Header, 
  Sidebar, 
  MainContent, 
  Footer 
} from './StyledComponents'; // Import styled components

const SimpleLayout: React.FC = () => {
  return (
    <StyledBody>
      <Head>
        <title>Simple Layout</title>
        <link rel="stylesheet" href="https://use.typekit.net/lan5nnc.css" />
      </Head>
      <GridContainer>
        <Header>
          <GridCard>Header</GridCard>
        </Header>
        <Sidebar>
          <GridCard>Sidebar</GridCard>
        </Sidebar>
        <MainContent>
          <GridCard>Main Content</GridCard>
        </MainContent>
        <Footer>
          <GridCard>Footer</GridCard>
        </Footer>
      </GridContainer>
    </StyledBody>
  );
};

export default SimpleLayout;
