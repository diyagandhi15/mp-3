import styled from 'styled-components';

const Heading1 = styled.h1`
    text-align: center; 
    color: #2c3e50; 
    margin-top: -20px; 
`;

const Heading4 = styled.h4`
  margin: 10px 0;
`;

const MainContent = styled.div`
  margin: 20px;
  margin-left: 80px;
  margin-right: 20px;

      @media screen and (max-width: 750px) {

      margin-left: 20px;

}
`;

const TableContainer = styled.div`
  overflow-x: auto;
  margin-bottom: 20px;
`;

const StyledTable = styled.table`
  width: 100%;
`;

const StyledTh = styled.th`
  background-color: #dce79a;
  color: #4079a0;
  padding: 12px;
  text-align: left;
  border-radius: 10px;
`;

const StyledTd = styled.td`
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
  border-radius: 10px;
`;


function References() {
  return (
    <MainContent>
      <Heading1>References</Heading1>

      <TableContainer>
        <Heading4>Professional</Heading4>

        <StyledTable>
          <thead>
            <tr>
              <StyledTh>Name</StyledTh>
              <StyledTh>Company</StyledTh>
              <StyledTh>Position</StyledTh>
              <StyledTh>Contact</StyledTh>
            </tr>
          </thead>
          <tbody>
            <tr>
              <StyledTd>Nita Sexton</StyledTd>
              <StyledTd>Girl Scouts</StyledTd>
              <StyledTd>Manager</StyledTd>
              <StyledTd>
                <a href="mailto:nsexton@girlscouts.org">nsexton@girlscouts.org</a>
              </StyledTd>
            </tr>
            <tr>
              <StyledTd>Aaron Schnore</StyledTd>
              <StyledTd>Girl Scouts</StyledTd>
              <StyledTd>Manager</StyledTd>
              <StyledTd>
                <a href="mailto:aschnore@girlscouts.org">aschnore@girlscouts.org</a>
              </StyledTd>
            </tr>
          </tbody>
        </StyledTable>
      </TableContainer>

      <TableContainer>
        <Heading4>Personal</Heading4>

        <StyledTable>
          <thead>
            <tr>
              <StyledTh>Name</StyledTh>
              <StyledTh>Position</StyledTh>
              <StyledTh>Contact</StyledTh>
            </tr>
          </thead>
          <tbody>
            <tr>
              <StyledTd>Preethy Gandhi</StyledTd>
              <StyledTd>Mother</StyledTd>
              <StyledTd><a href="tel:973 432 0551">973 432 9698</a> </StyledTd>
            </tr>
            <tr>
              <StyledTd>Satnam Gandhi</StyledTd>
              <StyledTd>Father</StyledTd>
              <StyledTd> <a href="tel:973 432 0551">973 432 0551</a></StyledTd>
            </tr>
          </tbody>
        </StyledTable>
      </TableContainer>
    </MainContent>
  );
}

export default References;