import React from 'react';

import {
  StyledContainer,
  PageWrap,
  PageHeader,
  PageSidebar,
  PageNav,
  PageMain,
  PageFooter,
} from './styles';

const App = () => {
  return (
    <StyledContainer>
      <PageWrap>
        <PageHeader>Header</PageHeader>
        <PageSidebar>Sidebar</PageSidebar>
        <PageNav>Nav</PageNav>
        <PageMain>Main Content</PageMain>
        <PageFooter>Footer</PageFooter>
      </PageWrap>
    </StyledContainer>
  );
};

export default App;
