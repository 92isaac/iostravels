import Footer from "components/navigation/footer";
import React from "react";
import styled from "styled-components";
import baloon from "assets/people/baloon.png";

function Affiliatesignup() {
  return (
    <div>
      <Wrapper>
        <ContentWrapper>
          <RightSection>
            <Img src={baloon} />
          </RightSection>
          <LeftSection>
            <Title>Complete account setup</Title>
            <SmallDesc>
              You’re almost done! Finish your affiliate account setup
            </SmallDesc>

            <FormWrapper>
              <Form>
                <Input placeholder="Password" type="password" />
                <Input placeholder="Confirm Password" type="password" />
              </Form>
            </FormWrapper>

            <FormWrap>
              <Small>
                <input type="radio" /> I have read, understood and I agree to
                GeoTravels’ Privacy Policy, and Terms & conditions.
              </Small>
              <Small>
                <input type="radio" /> Join GeoTravels community for exclusive
                access to updates on flight deals, tours and affiliate programs
              </Small>
            </FormWrap>

            <BtnWrapper>
              <Btn>Finish Setup</Btn>
            </BtnWrapper>
          </LeftSection>
        </ContentWrapper>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default Affiliatesignup;

const Wrapper = styled.div``;
const ContentWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas: "second first ";
  grid-template-columns: 450px 1fr;
  gap: 30px;
  @media only screen and (max-width: 850px) {
    grid-template-areas: "second" "first";
    grid-template-columns: 1fr;
  }
`;
const LeftSection = styled.div`
  margin-top: 150px;
  max-width: 600px;
  padding: 0 20px;
  grid-area: first;
  @media only screen and (max-width: 850px) {
    margin: 30px 0;
  }
`;
const RightSection = styled.div`
  grid-area: second;

  @media only screen and (max-width: 850px) {
    max-width: 100%;
    padding: 0 20px;
    display: none;
  }
`;
const Img = styled.img`
  height: 100%;
`;

const Title = styled.h4`
  font-family: CircularStd-Bold;
  font-size: 30px;
  line-height: 46px;
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  gap: 20px;
`;
const Btn = styled.button`
  border: none;
  outline: none;
  color: #fff;
  font-size: 14px;
  font-family: CircularStd-Bold;
  width: 150px;
  height: 54px;
  background: #2e61e6;
  border-radius: 27px;
  cursor: pointer;
`;
const Small = styled.p`
  font-size: 12px;
  color: #171b4a;
  margin: 15px 0;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const SmallDesc = styled.p`
  font-size: 14px;
  color: #171b4a;
  margin: 15px 0;
`;
const FormWrapper = styled.div`
  width: 100%;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Input = styled.input`
  width: 100%;
  height: 54px;
  background: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  margin: 10px 0;
  padding: 0 15px;

  :active,
  :focus {
    outline: none;
    border: 1px solid #eaeaea;
  }
`;
const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  background: #fafeff;
  width: 100%;
  gap: 20px;
  margin-bottom: 30px;
  padding: 30px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
