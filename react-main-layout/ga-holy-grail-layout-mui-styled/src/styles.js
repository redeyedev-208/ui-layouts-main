import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  margin-top: 0px;
`;

const whiteColorStyle = `
  color: white;
`;

export const PageWrap = styled.div`
  padding: 0;
  background: white;
  height: calc(100vh - 10px);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.33);

  display: grid;
  grid-template-columns: minmax(10px, 1fr) minmax(10px, 3fr);
  grid-template-rows: min-content min-content 1fr min-content min-content; /* Add extra min-content */
  gap: 1px;

  > * {
    padding: 1rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-rows: auto;
    > * {
      grid-column: 1 / -1 !important;
      grid-row: auto !important;
    }
  }
`;

export const PageHeader = styled.div`
  grid-column: 1 / -1;
  background: #2d3436;
  ${whiteColorStyle}; /* Apply the white text color */
`;

export const PageSidebar = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 4;
  background: #636e72;
  ${whiteColorStyle}; /* Apply the white text color */
`;

export const PageNav = styled.div`
  grid-column: 2 / 3;
  background: #636e72;
  ${whiteColorStyle}; /* Apply the white text color */
`;

export const PageMain = styled.div`
  grid-column: 2 / 3;
  background: #636e72;
  ${whiteColorStyle}; /* Apply the white text color */
`;

export const PageFooter = styled.div`
  grid-column: 1 / -1;
  background: #2d3436;
  ${whiteColorStyle}; /* Apply the white text color */
`;
