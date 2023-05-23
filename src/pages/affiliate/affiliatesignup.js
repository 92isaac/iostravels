import Footer from "components/navigation/footer";

import React from "react";
import styled from "styled-components";
import travelboy from "assets/people/travelboy.png";
import { Link } from "react-router-dom";

function completeaffiliateaccount() {
  return (
    <div>
      <Wrapper>
        <ContentWrapper>
          <RightSection>
            <Img src={travelboy} />
          </RightSection>
          <LeftSection>
            <Link to="/affiliate">
              <Back>Back to Affiliates</Back>
            </Link>
            <Title>Create an affiliate account</Title>
            <SmallDesc>
              Fill the form below to create an affiliate account on Geo Travel
            </SmallDesc>

            <FormWrapper>
              <Form>
                <Input placeholder="Travel business name" />
                <Input placeholder="Location" />

                <FormWrap>
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </FormWrap>
                <FormWrap>
                  <Input placeholder="Phone Number " />
                  <Input placeholder="Email address" />
                </FormWrap>
              </Form>
            </FormWrapper>
            <Small>
              <input type="radio" /> I have read, understood and I agree to
              GeoTravels’ Privacy Policy, and Terms & conditions.
            </Small>

            <BtnWrapper>
              <Link to="/completeaffiliateaccount">
                <Btn>Create Account</Btn>
              </Link>

              <CancelBtn>Cancel</CancelBtn>
            </BtnWrapper>
          </LeftSection>
        </ContentWrapper>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default completeaffiliateaccount;

const Wrapper = styled.div``;
const ContentWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 450px 1fr;
  grid-template-areas: "second first ";
  gap: 30px;
  @media only screen and (max-width: 850px) {
    grid-template-areas: "second" "first";
    grid-template-columns: 1fr;
  }
`;
const LeftSection = styled.div`
  margin-top: 150px;
  max-width: 600px;
  grid-area: first;
  padding: 0 20px;
  @media only screen and (max-width: 850px) {
    margin: 30px 0;
  }
`;
const RightSection = styled.div`
  grid-area: second;
  text-align: center;
`;
const Img = styled.img`
  height: 100%;
  @media only screen and (max-width: 850px) {
    margin: 30px 0;
    max-width: 100%;
    padding: 0 20px;
  }
`;

const Title = styled.h4`
  font-family: CircularStd-Bold;
  font-size: 30px;
  line-height: 46px;
`;
const Back = styled.h4`
  color: #2e61e6;
`;
const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  gap: 20px;
  @media only screen and (max-width: 450px) {
    flex-direction: column;
  }
`;
const Btn = styled.button`
  border: none;
  outline: none;
  color: #fff;
  font-size: 14px;
  font-family: CircularStd-Bold;
  width: 173px;
  height: 54px;
  background: #2e61e6;
  border-radius: 27px;
  cursor: pointer;
`;
const CancelBtn = styled.button`
  border: none;
  outline: none;
  color: #2e61e6;
  font-size: 14px;
  font-family: CircularStd-Bold;
  width: 173px;
  height: 54px;
  background: #ffffff;
  border: 2px solid #1362ef;
  border-radius: 27px;
  cursor: pointer;
`;
const Small = styled.p`
  font-size: 14px;
  color: #171b4a;
  margin: 35px 0;
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
  justify-content: space-between;
  width: 100%;
  gap: 20px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
