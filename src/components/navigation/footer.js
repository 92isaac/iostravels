import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import fb from "assets/icons/fb.svg";
import ig from "assets/icons/ig.svg";
import twitter from "assets/icons/twitter.svg";

function Footer() {
  return (
    <>
      <ExclusiveDealsSection>
        <ExclusivedealWrapper>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <DealsItems className='hidden lg:block'>
              <FlightName> Get exclusive deals on our products</FlightName>
              <FlightLocations>
                Book Flights, Flight Status, Search Hotels Domestic Flights,
                International Flights Holiday Packages, Visa Assistance, Geo
                Medic, Geo Vortex
              </FlightLocations>
            </DealsItems>
            <DealsItems className='hidden lg:block'>
              <FlightName> Get inspired for your next trip</FlightName>
              <FlightLocations>
                Book Flights, Flight Status, Search Hotels Domestic Flights,
                International Flights Holiday Packages, Visa Assistance, Geo
                Medic, Geo Vortex
              </FlightLocations>
            </DealsItems>
            <DealsItems>
              <FlightName> Follow us! </FlightName>
              <FlightLocations>
                Stay tuned and access the latest deals and discounts with:
              </FlightLocations>
              <SocialIconsWrapper>
                <Img src={fb} alt="facebook icon" />
                <Img src={ig} alt="ig icon" />
                <Img src={twitter} alt="twitter icon" />
              </SocialIconsWrapper>
            </DealsItems>
          </div>
        </ExclusivedealWrapper>
      </ExclusiveDealsSection>
      <Wrapper>
        <FooterWrapper>
          <FooterContent>
            <LeftContent>
              <LinksWrapper>
                <Link to='' className='text-white'> About us </Link>
                <Link to='' className='text-white'> Terms and Conditions</Link>
                <Link to='' className='text-white'> Privacy Policy</Link>
                <Link to='' className='text-white'> Contact us </Link>
                <Link to='/blog' className='text-white'> Blog </Link>
                <Link to='/faq' className='text-white'> FaQ </Link>
              </LinksWrapper>
            </LeftContent>
            <RightContent>Copyright © 2023 GeoTravels</RightContent>
          </FooterContent>
        </FooterWrapper>
      </Wrapper>
    </>
  );
}

export default Footer;

const Wrapper = styled.div`
  background: #171b4a;
  display: flex;
  align-items: center;
  padding: 30px 20px;
`;
const FooterWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1160px;
  color: #fff;
`;
const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 80px;
  }
`;
const LeftContent = styled.div``;
const LinksWrapper = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 30px;
  @media only screen and (max-width: 768px) {
    align-items: flex-start;
    flex-wrap: wrap;
  }
`;
const RightContent = styled.div`
  font-size: 14px;
`;

const Img = styled.img`
  margin-right: 20px;
`;

const ExclusiveDealsSection = styled.div`
border-top: 3px dotted #c9c9c9;
  padding: 0 20px;
  margin: 50px auto;
  max-width: 1160px;
`;
const ExclusivedealWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1160px;
  padding: 50px 0;
`;

const DealsItems = styled.div``;

const SocialIconsWrapper = styled.div`
  margin-top: 20px;
  max-width: 150px;
  display: flex;
  justify-content: space-between;
`;
const FlightName = styled.h4`
  font-size: 14px;
  color: #171b4a;
  margin: 15px 0;
`;
const FlightLocations = styled.p`
  color: #171b4a;
  font-size: 14px;
  margin-bottom: 10px;
`;