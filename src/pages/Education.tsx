import styled from "styled-components";

const Heading1 = styled.h1`
    text-align: center; 
    color: #2c3e50; 
    margin-top: -250px; 
`;

const MainContent = styled.div`
  margin: 20px;
  margin-left: 80px;
  margin-right: 20px;

      @media screen and (max-width: 750px) {

      margin-left: 20px;

}
`;

function Education() {
    return (
      <MainContent>
        <Heading1>Education</Heading1>
        <ul style={{ listStyle: 'none', borderLeft: '5px solid #dce79a', paddingLeft: '10px', marginLeft: '120px', marginRight: '80px'}}>
          <li>
            High School Diploma from <u>Hanover Park High School</u> <em>2017-2021</em>
          </li>
        </ul>
  
        <ul style={{ listStyle: 'none', borderLeft: '5px solid #dce79a', paddingLeft: '10px', marginLeft: '120px', marginRight: '80px' }}>
          <li>
            B.A. in Computer Science from <u>Boston University</u> <em>2022-2025 (expected)</em>
          </li>
        </ul>
      </MainContent>
    );
  }
  
  export default Education;