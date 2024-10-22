import styled from 'styled-components';
import AgeRestricted from '../components/AgeRestricted';
import Calculator from '../components/Calc';

const Heading1 = styled.h1`
    text-align: center; 
    color: #2c3e50; 
    margin-top: 20px; 
`;

const CalculatorContainer = styled.div`
  max-width: 1000px;
  margin: 20px auto;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
  text-align: center;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input {
    width: calc(100% - 22px);
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid rgb(173, 209, 240);
    border-radius: 5px;
    box-sizing: border-box;
  }

  button {
    width: 60px;
    height: 50px;
    margin: 5px;
    background-color: #4079a0;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 15px;

    &:hover {
      background-color: #dce79a;
    }
  }

  #output {
    font-size: 24px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

const AgeRestrictedContainer = styled.div`
  max-width: 1000px;
  margin: 20px auto;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
  text-align: center;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input {
    width: calc(100% - 22px);
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid rgb(173, 209, 240);
    border-radius: 5px;
    box-sizing: border-box;
  }

  button {
    width: 90px;
    height: 50px;
    margin: 5px;
    background-color: #4079a0;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 15px;

    &:hover {
      background-color: #dce79a;
    }
  }

  #output {
    font-size: 24px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

export default function Projects() {
  return (
    <div className="main-content">
      <Heading1>Projects</Heading1>

      
      <CalculatorContainer>
        <Calculator />
      </CalculatorContainer>

     
      <AgeRestrictedContainer>
        <AgeRestricted />
      </AgeRestrictedContainer>

      <ul style={{ listStyle: 'none', borderLeft: '5px solid #dce79a', paddingLeft: '10px', marginLeft: '40px' }}>
        <li>
          <strong>College Kitchen Website</strong>
          <ul style={{ listStyle: 'circle', paddingLeft: '20px' }}>
            <li>Implemented a user interface using the React framework, utilizing CSS and JavaScript to enhance usability and aesthetics.</li>
            <li>Called Spoonacular API and WebSpeech API to allow users to input ingredients to generate recipes.</li>
            <li>Used Firebase to store user information such as saved recipes and pantry ingredients.</li>
          </ul>
        </li>
      </ul>

      <ul style={{ listStyle: 'none', borderLeft: '5px solid #dce79a', paddingLeft: '10px', marginLeft: '40px' }}>
        <li>
          <strong>Portfolio Website</strong>
          <ul style={{ listStyle: 'circle', paddingLeft: '20px' }}>
            <li>Utilized HTML to structure the webpage, added CSS for layout arrangement and color schemes.</li>
            <li>Included interactive hamburger menu using JS for navigation visibility.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

