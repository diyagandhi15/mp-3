import styled from 'styled-components';
import profilePic from '../assets/profile.png';

// Styled Components
const MainContent = styled.div`
    text-align: center; 
    margin: 20px; 
`;

const ProfileImage = styled.img`
    display: block;
    margin: 20px auto; 
    width: 300px; 
    height: auto; 
    border-radius: 70px; 
`;

const Heading1 = styled.h1`
    text-align: center; 
    color: #2c3e50; 
    margin-top: 20px; 
`;

const Paragraph = styled.p`
    text-align: center; 
    max-width: 800px; 
    margin: 0 auto; 
    padding: 0 20px; 
`;

function Home() {
    return (
        <MainContent>
            <Heading1>Home</Heading1>
            <ProfileImage src={profilePic} alt="profile" id="profile-pic" />
            <Paragraph>
                Hi! My name is Diya Gandhi, I am a Rising Senior studying Computer Science with an expected graduation of 2025.
                I have a passion for Product Management as well as Software Engineering.
                Welcome to my website, I hope you enjoy :)
            </Paragraph>
        </MainContent>
    );
};

export default Home;