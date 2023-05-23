import React from "react";
import styled from "styled-components";
import jakob from "assets/backgrounds/jakob.png";

function Newsletter() {
  return (
    // <Wrapper>
    //   <div className='grid grid-cols'></div>
    // </Wrapper>
    <Wrapper>
      <NewsWrapper>
        <LeftSection>
          <Img src={jakob} />
        </LeftSection>
        <RightSection>
          <Title>Want to get the latest travel news and deals?</Title>
          <Small>Enter your email and we’ll send them your way.</Small>
          <InputWrapper>
            <Input placeholder="Your email address" />
            <Button>Subscribe</Button>
          </InputWrapper>
          <MiniText>
            Your privacy is important to us, so we’ll never spam you or share
            your info with third parties. Take a look at our privacy policy. You
            can unsubscribe at any time.
          </MiniText>
        </RightSection>
      </NewsWrapper>
    </Wrapper>
  );
}

export default Newsletter;
const Wrapper = styled.div``;

const NewsWrapper = styled.div`
  display: flex;
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 20px;
  @media only screen and (max-width: 580px) {
    flex-direction: column;
  }
`;
const LeftSection = styled.div`
height: auto;
width: 100%;
background: #f5f6ff;
@media only screen and (max-width: 720px) {
  display: none;
}`;
const Img = styled.img`
  height: 100%;
  @media only screen and (max-width: 980px) {
    width: 100%;
  }
`;
const RightSection = styled.div`
  height: auto;
  width: 100%;
  background: #f5f6ff;
  padding: 50px;
  @media only screen and (max-width: 580px) {
    padding: 20px;
  }
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
`;
const Small = styled.p`
  font-size: 14px;
`;
const MiniText = styled.p`
  color: #797979;
  font-size: 11px;
`;

const InputWrapper = styled.div`
  display: flex;
  margin: 30px 0;
  width: 100%;
  @media only screen and (max-width: 720px) {
    flex-direction: column;
  }
`;
const Input = styled.input`
  /* max-width: 376px; */
  width: 100%;
  height: 54px;
  background: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  opacity: 1;
  margin-right: 15px;
  padding-left: 15px;
  :active,
  :focus {
    border: 1px solid #eaeaea;
    outline: none;
  }
`;
const Button = styled.button`
  border: none;
  outline: none;
  max-width: 135px;
  width: 100%;
  height: 54px;
  background: #2e61e6;
  color: #fff;
  border-radius: 27px;
  cursor: pointer;

  @media only screen and (max-width: 720px) {
    margin-top: 10px;
    max-width: 100%;
  }
`;
