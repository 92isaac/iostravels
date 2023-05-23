import Footer from "components/navigation/footer";

import React from "react";
import styled from "styled-components";
import visalady from "assets/people/visalady.png";
import { Link } from "react-router-dom";

function Processvisa() {
  return (
    <div>
      <Wrapper>
        <ContentWrapper>
          <RightSection>
            <Img src={visalady} />
          </RightSection>
          <LeftSection>
            <Link to="/visa">
              {" "}
              <Back>Back to Visa Application</Back>
            </Link>
            <Title>Start your Visa Process</Title>
            <SmallDesc>Kindly fill out the form appropriately</SmallDesc>

            <FormWrapper>
              <Form>
                <FormWrap>
                  <Input placeholder="Country You need Visa for" />
                  <Input placeholder="Nationality" />
                </FormWrap>
                <Small>
                  Do you have a passport?
                  <SmallInput>
                    <input type="radio" />
                    Yes
                  </SmallInput>
                  <SmallInput>
                    <input type="radio" />
                    No
                  </SmallInput>
                </Small>
                <FormWrap>
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </FormWrap>
                <FormWrap>
                  <Input placeholder="Phone Number" />
                  <Input placeholder="Marital Status" />
                </FormWrap>
                <FormWrap>
                  <Input placeholder="Date of Birth" />
                  <Input placeholder="Travel History" />
                </FormWrap>
              </Form>
            </FormWrapper>

            <BtnWrapper>
              <Link to="/processvisa">
                <Btn>Next</Btn>
              </Link>
            </BtnWrapper>
          </LeftSection>
        </ContentWrapper>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default Processvisa;

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
  margin-bottom: 100px;
  max-width: 600px;
  width: 100%;
  padding: 0 20px;
  grid-area: first;
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
  margin-top: 20px;
`;
const Btn = styled.button`
  border: none;
  outline: none;
  color: #fff;
  font-size: 14px;
  font-family: CircularStd-Bold;
  /* max-width: 173px; */
  width: 100%;
  height: 54px;
  background: #2e61e6;
  border-radius: 27px;
  cursor: pointer;
`;

const Small = styled.p`
  display: flex;
  font-size: 14px;
  color: #171b4a;
  margin: 35px 0;
`;
const SmallInput = styled.p`
  font-size: 14px;
  color: #171b4a;
  margin: 0 10px;
  display: flex;
  align-items: center;
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
