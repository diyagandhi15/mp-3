import styled from "styled-components";

const Heading1 = styled.h1`
    text-align: center; 
    color: #2c3e50; 
    margin-top: -250px; 
`;

function Employment() {
    return (
        <>
        <Heading1>Employment</Heading1>
        <div style={{fontSize: 'calc(9px + .5vw)'}}>
        <ul style={{ listStyle: 'none', borderLeft: '5px solid #dce79a', paddingLeft: '10px', marginLeft: '80px', marginRight: '20px'}}>
          <li>
            <strong>Girl Scouts IT Program Management Intern</strong> <em>June 2024 - August 2024</em>
            <ul style={{ listStyle: 'circle', paddingLeft: '20px' }}>
              <li>
                Utilized Jira and Wrike to optimize project management systems, driving innovation and streamlining operations.
              </li>
              <li>
                Contributed to creating maintenance schedules and templates in Confluence, enhancing organizational productivity and setting up processes for the future.
              </li>
              <li>
                Created a Communications Dashboard using PowerBI; a one-stop-shop for all Technology communications at GSUSA.
              </li>
              <li>
                Organized content and logistics for a Technology Meeting; created a game in The Training Arcade Platform and designed meeting merchandise in Canva.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      </>
    );
  }
  
  export default Employment;