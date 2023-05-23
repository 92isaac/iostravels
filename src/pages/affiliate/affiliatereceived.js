import Footer from "components/navigation/footer";
import Navbar from "components/navigation/navbar";
import React from "react";
import styled from "styled-components";
import tick from "assets/icons/tick.svg";
import Newsletter from "components/universal/newsletter";
import Cheapflight from "components/universal/cheapflight";

function Affiliatereceived() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <ContentWrapper>
          <SmallWrap>
            <Img src={tick} alt="tick icon" />
            <SmallHolder>
              <Title>Your GeoTravel Affiliate request is received.</Title>
              <Existing>
                Kindly check your mail to verify your GeoTravel Affiliate
                account.
              </Existing>
            </SmallHolder>
          </SmallWrap>
          <Btn>Go to Homepage</Btn>
        </ContentWrapper>
        <NewsWrapper>
          <Newsletter />
        </NewsWrapper>

        <Cheapflight />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default Affiliatereceived;

const Wrapper = styled.div`
  background: #f4f8fa;
`;

const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1160px;
  padding: 40px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eaeaea;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
const NewsWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1160px;
  padding: 50px 0;
`;
const SmallWrap = styled.div`
  display: flex;
  align-items: center;
`;
const SmallHolder = styled.div``;
const Img = styled.img`
  margin-right: 20px;
`;

const Title = styled.h4`
  font-family: CircularStd-Bold;
  font-size: 20px;
  line-height: 2;
`;

const Btn = styled.button`
  border: none;
  outline: none;
  color: #fff;
  font-size: 14px;
  font-family: CircularStd-Bold;
  max-width: 180px;
  width: 100%;
  height: 54px;
  background: #2e61e6;
  border-radius: 27px;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    margin-top: 30px;
  }
`;
const Existing = styled.p``;
