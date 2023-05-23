import Footer from "components/navigation/footer";
import Navbar from "components/navigation/navbar";
import React from "react";
import styled from "styled-components";
import travelboy from "assets/people/travelboy.png";
import arrow from "assets/icons/arrow.svg";
import { Link } from "react-router-dom";

function Affiliate() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <ContentWrapper>
          <LeftSection>
            <Title>Partner with us and earn extra income</Title>
            <Description></Description>
            <Description>
              {" "}
              GeoTravel affiliates get access to unbeatable commissions, great
              discounts on flights, hotels, airport pickup services and visa
              processing and more. The fares on the affiliate portal are highly
              discounted, enabling affiliates to mark up and make huge profit.
              <br />
              <br />
              What do GeoTravel Affiliates enjoy?
            </Description>
            <ContentWrap>
              <Icon src={arrow} />
              <Desc>
                {" "}
                Discounted fares on all travel requests: Our affiliates get
                amazing discounted fares on flight tickets, hotel booking, Visa
                assistance, insurance, airport transfer, protocol service and
                more
              </Desc>
            </ContentWrap>
            <ContentWrap>
              <Icon src={arrow} />
              <Desc>
                Assess to mark-up: GeoTravel Affiliates make good money from
                marking up discounted travel solutions.
              </Desc>
            </ContentWrap>
            <ContentWrap>
              <Icon src={arrow} />
              <Desc>
                Incentives: Earn even more from our affiliate incentive program.
                Stand a chance to get extra cash, free flight tickets, holiday
                packages etc.
              </Desc>
            </ContentWrap>
            <ContentWrap>
              <Icon src={arrow} />
              <Desc>
                Exclusive party access: Are you a party rider? Our quarterly
                affiliate get together gives you an opportunity to mingle, learn
                more about trends in travel, dine, wine, dance and have some
                fun.
              </Desc>
            </ContentWrap>
            <BtnWrapper>
              <Link to="/affiliatesignup">
                <Btn>Join our affiliate program</Btn>
              </Link>
            </BtnWrapper>
            <Existing>Already an affiliate? Login</Existing>
          </LeftSection>
          <RightSection>
            <Img src={travelboy} alt="travelboy" />
          </RightSection>
        </ContentWrapper>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default Affiliate;

const Wrapper = styled.div``;
const ContentWrapper = styled.div`
  width: 100%;
  margin: 50px auto;
  max-width: 1160px;
  display: grid;
  grid-template-areas: "first second";
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  padding: 0 20px;
  @media only screen and (max-width: 850px) {
    grid-template-areas: "second" "first";
    grid-template-columns: 1fr;
  }
`;
const LeftSection = styled.div`
  grid-area: first;
`;
const RightSection = styled.div`
  text-align: center;
  grid-area: second;
`;
const Img = styled.img`
  width: 100%;
`;

const Title = styled.h4`
  font-family: CircularStd-Bold;
  font-size: 30px;
  line-height: 46px;
`;
const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin: 30px 0;
`;
const Desc = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;
const BtnWrapper = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;
const Btn = styled.button`
  border: none;
  outline: none;
  color: #fff;
  font-size: 14px;
  width: 100%;
  height: 54px;
  background: #2e61e6;
  border-radius: 27px;
  margin-top: 50px;
  cursor: pointer;
`;
const Existing = styled.div`
  text-align: center;
`;

const ContentWrap = styled.div`
  border: 1px solid #eaeaea;
  background: #fbfeff;
  padding: 20px;
  display: flex;
  margin: 20px 0;
`;
const Icon = styled.img`
  margin-right: 20px;
`;
