import Footer from "components/navigation/footer";
import Navbar from "components/navigation/navbar";
import React from "react";
import styled from "styled-components";
import appointment from "assets/people/appointment.png";
import { Link } from "react-router-dom";

function Corporateappointment() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <ContentWrapper>
          <RightSection>
            <Img src={appointment} />
          </RightSection>
          <LeftSection>
            <Link to="/corporate">
              <Back>Back to GeoCorporate</Back>
            </Link>

            <Title>Book an appointment</Title>
            <SmallDesc>
              Fill the form below to book an appointment with us
            </SmallDesc>

            <FormWrapper>
              <Form>
                <Input placeholder="Company Name" />
                <Input placeholder="Office Address" />
                <FormWrap>
                  <Input placeholder="Email Address" />
                  <Input placeholder="Company Size" />
                </FormWrap>
                <FormWrap>
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </FormWrap>
                <FormWrap>
                  <Input placeholder="Phone Number " />
                  <Input placeholder="Address" />
                </FormWrap>
                <Input placeholder="Destination" />
              </Form>
            </FormWrapper>
            <BtnWrapper>
              <Btn>Book appointment</Btn>
            </BtnWrapper>
          </LeftSection>
        </ContentWrapper>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default Corporateappointment;

const Wrapper = styled.div``;
const ContentWrapper = styled.div`
  width: 100%;
  margin: 50px auto;
  padding: 0 20px;
  max-width: 1160px;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;

  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;
const LeftSection = styled.div``;
const RightSection = styled.div`
  text-align: center;
  @media only screen and (max-width: 650px) {
    display: none;
  }
`;
const Img = styled.img``;

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
  margin: 20px 0;
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

  @media only screen and (max-width: 650px) {
    flex-direction: column;
  }
`;
