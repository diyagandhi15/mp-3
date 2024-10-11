import styled from "styled-components";

const Heading1 = styled.h1`
    text-align: center; 
    color: #2c3e50; 
    margin-top: 20px; 
`;

function Achievements() {
    return (
      <div className="main-content">
        <Heading1>Achievements</Heading1>
        <ul style={{ listStyle: 'none', borderLeft: '5px solid #dce79a', paddingLeft: '10px' }}>
          <li>
            <strong>Dean's List Spring 2024</strong>
            <ul style={{ listStyle: 'circle', paddingLeft: '20px' }}>
              <li>
                An honor awarded to CAS students who earned at least 15 academic credits and had a semester GPA of 3.5 or higher. A notation has been made on your transcript.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Achievements;