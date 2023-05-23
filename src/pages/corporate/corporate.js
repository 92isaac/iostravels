import Footer from "components/navigation/footer";
import Navbar from "components/navigation/navbar";
import React from "react";
import styled from "styled-components";
import appointment from "assets/people/appointment.png";
import arrow from "assets/icons/arrow.svg";
import { Link } from "react-router-dom";

function Corporate() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <ContentWrapper>
          <LeftSection>
            <Title>A better corporate travel with Geotravel</Title>

            <Description>
              GeoTravel takes off your corporate travel stress so staff can
              concentrate on productivity. At GeoTravel, we help organizations
              irrespective of the size, to actualise their business value by
              guaranteeing personalized business travel programmes and bringing
              ease to every part of their travel experience.
              <br /> <br /> We cover every part of the globe, that is why we use
              the right tools and approach to help organizations make viable
              decisions about their travel.
              <br /> <br />
              Why choose us?
            </Description>
            <ContentWrap>
              <Icon src={arrow} />
              <Desc>
                Easy travel request: Our Travel process comes with simplicity,
                interesting travel options and faster turnaround time.
              </Desc>
            </ContentWrap>
            <ContentWrap>
              <Icon src={arrow} />
              <Desc>
                24/7 travel support: Our stand-by team is ever ready to attend
                to your requests all the time without any lapse.
              </Desc>
            </ContentWrap>
            <ContentWrap>
              <Icon src={arrow} />
              <Desc>
                Assigned Account Manager: A dedicated Key Account Manager that
                will help your organization to drive its corporate travel
                objectives and ensure the service meets the best global
                standards at the most cost effective rates.
              </Desc>
            </ContentWrap>
            <ContentWrap>
              <Icon src={arrow} />
              <Desc>
                Credit facility: Our business travel programmes for corporates
                come with a perk of credit facilities that help organizations
                meet with travel appointments without delays associated with
                payment.
              </Desc>
            </ContentWrap>
            <ContentWrap>
              <Icon src={arrow} />
              <Desc>
                Flexible payment: We have flexible payment options that suit
                every corporate needs.
              </Desc>
            </ContentWrap>
            <BtnWrapper>
              <Link to="/corporateappointment">
                {" "}
                <Btn>Request a call now?</Btn>{" "}
              </Link>
            </BtnWrapper>
          </LeftSection>
          <RightSection>
            <Img src={appointment} alt="man travelling" />
          </RightSection>
        </ContentWrapper>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default Corporate;

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
  margin: 50px 0;
`;
const Btn = styled.button`
  border: none;
  outline: none;
  color: #fff;
  font-size: 14px;
  font-family: CircularStd-Bold;
  width: 213px;
  height: 54px;
  background: #2e61e6;
  border-radius: 27px;
  width: 100%;
  cursor: pointer;
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
