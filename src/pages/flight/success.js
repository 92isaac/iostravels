import Flightnavbar from "components/navigation/flightnavbar";
import Footer from "components/navigation/footer";
import Navbar from "components/navigation/navbar";
import React, { useState } from "react";
import styled from "styled-components";
import tooltip from "assets/icons/tooltip.png";
import barcode from "assets/icons/barcode.png";
import plane from "assets/icons/plane.svg";
import tick from "assets/icons/tick.svg";

  function Success({ changePage, flightDetails }) {

  // const [flightDetails] = useState(
  //   {
  //     "id": "ama_41b85b0a-6014-4160-9a61-83aaabc16d03",
  //     "fareBasis": "KREMSO",
  //     "amount": 4509848.4,
  //     "travelersPrice": [
  //       {
  //         "adult": 901969.68
  //       },
  //       {
  //         "adult": 901969.68
  //       },
  //       {
  //         "adult": 901969.68
  //       },
  //       {
  //         "adult": 901969.68
  //       },
  //       {
  //         "adult": 901969.68
  //       }
  //     ],
  //     "priceSummary": [
  //       {
  //         "passengerType": "adult",
  //         "totalPrice": 4509848.4,
  //         "quantity": 5
  //       }
  //     ],
  //     "currency": "NGN",
  //     "totalDuration": 1478,
  //     "outbound": [
  //       {
  //         "duration": 350,
  //         "equipmentType": "738",
  //         "operatingAirline": "MS",
  //         "marketingAirline": "MS",
  //         "bookingClass": "K",
  //         "airportTo": {
  //           "airportCode": "CAI",
  //           "name": "Cairo Intl",
  //           "city": "Cairo",
  //           "country": "Egypt"
  //         },
  //         "departureTime": "2:00:00 PM",
  //         "airlineDetails": {
  //           "logo": "https://image.tiqwa.com/airlines/MS.png",
  //           "name": "Egyptair",
  //           "code": "MS"
  //         },
  //         "marriageGroup": {},
  //         "arrivalTime": "8:50:00 PM",
  //         "baggage": "2 checkin allowance",
  //         "overnight": false,
  //         "cabinType": "ECONOMY",
  //         "airportFrom": {
  //           "airportCode": "LOS",
  //           "name": "Murtala Muhammed",
  //           "city": "Lagos",
  //           "country": "Nigeria"
  //         },
  //         "flightNumber": "876",
  //         "layover": 305,
  //         "departureDate": "4/3/2023",
  //         "arrivalDate": "4/3/2023"
  //       },
  //       {
  //         "duration": 690,
  //         "equipmentType": "773",
  //         "operatingAirline": "MS",
  //         "marketingAirline": "MS",
  //         "bookingClass": "K",
  //         "airportTo": {
  //           "airportCode": "YYZ",
  //           "name": "Lester B Pearson Intl",
  //           "city": "Toronto",
  //           "country": "Canada"
  //         },
  //         "departureTime": "1:55:00 AM",
  //         "airlineDetails": {
  //           "logo": "https://image.tiqwa.com/airlines/MS.png",
  //           "name": "Egyptair",
  //           "code": "MS"
  //         },
  //         "marriageGroup": {},
  //         "arrivalTime": "7:25:00 AM",
  //         "baggage": "2 checkin allowance",
  //         "overnight": true,
  //         "cabinType": "ECONOMY",
  //         "airportFrom": {
  //           "airportCode": "CAI",
  //           "name": "Cairo Intl",
  //           "city": "Cairo",
  //           "country": "Egypt"
  //         },
  //         "flightNumber": "995",
  //         "layover": 90,
  //         "departureDate": "4/4/2023",
  //         "arrivalDate": "4/4/2023"
  //       },
  //       {
  //         "duration": 43,
  //         "equipmentType": "DH4",
  //         "operatingAirline": "AC",
  //         "marketingAirline": "AC",
  //         "bookingClass": "K",
  //         "airportTo": {
  //           "airportCode": "YXU",
  //           "name": "London",
  //           "city": "London",
  //           "country": "Canada"
  //         },
  //         "departureTime": "8:55:00 AM",
  //         "airlineDetails": {
  //           "logo": "https://image.tiqwa.com/airlines/AC.png",
  //           "name": "Air Canada",
  //           "code": "AC"
  //         },
  //         "marriageGroup": {},
  //         "arrivalTime": "9:38:00 AM",
  //         "baggage": "2 checkin allowance",
  //         "overnight": false,
  //         "cabinType": "ECONOMY",
  //         "airportFrom": {
  //           "airportCode": "YYZ",
  //           "name": "Lester B Pearson Intl",
  //           "city": "Toronto",
  //           "country": "Canada"
  //         },
  //         "flightNumber": "8251",
  //         "layover": {},
  //         "departureDate": "4/4/2023",
  //         "arrivalDate": "4/4/2023"
  //       }
  //     ],
  //     "inbound": [],
  //     "totalOutboundDuration": 1478,
  //     "totalInboundDuration": 0,
  //     "outboundStops": 2,
  //     "inboundStops": 0,
  //     "pricing": {
  //       "markup": {
  //         "markupValue": 0,
  //         "markupType": "fixed"
  //       },
  //       "payable": 4509848.4
  //     }
  //   }
  // )
  // console.log(flightDetails)

  const handlePrint = () => {
    window.print()
  }
  return (
    <>
      {/* <Navbar /> */}
      <Wrap>
        <WrapContent>Booking Confirmation</WrapContent>
      </Wrap>
      <FlightNav>
        <Flightnavbar />
      </FlightNav>
      <Wrapper>
        <SuccessWrapper>
          <SuccessImg src={tick} />
          <SucWrap>
            <SuccessTitle>Booking Successful</SuccessTitle>
            <PassUser>
              An email has been sent to you containing your ticket and boarding
              pass
            </PassUser>
          </SucWrap>
        </SuccessWrapper>
        {flightDetails.outbound.map((item, i) => (
          <FlightWrap key={i}>
            <ContentWrapper>
              <FlightContent>
                <LeftContent>
                  <ImageWrapper>
                    <Img src={item.airlineDetails.logo} /> <Smdate> {item.airlineDetails.name} </Smdate>
                  </ImageWrapper>
                  <FirstSection>
                    <SectionOne>
                      <Los> {item.airportFrom.airportCode} </Los>
                      <LocationWrapper>
                        <Time>{item.departureTime}</Time>
                        <Location>
                          {item.airportFrom.city}
                          <SubLocation>
                            {item.airportFrom.name} (
                            {item.airportFrom.airportCode})
                          </SubLocation>
                        </Location>
                      </LocationWrapper>
                    </SectionOne>
                    {/* <SectionTwo>
                      <StopsWrapper>
                        <Stops> 2 Stops </Stops> <Stops> 2 Stops </Stops>
                      </StopsWrapper>
                      <StopsImg src={plane} /> <Lay> Layover~2 h </Lay>
                    </SectionTwo> */}
                    <SectionTwo>
                      <StopsWrapper>
                        <Stops>{flightDetails.outboundStops} Stops</Stops>
                        <Stops>{flightDetails.inboundStops} Stops</Stops>
                      </StopsWrapper>
                      <StopsImg src={plane} />
                      <Lay>Layover ~ 2h</Lay>
                    </SectionTwo>
                    <SectionThree>
                      <LocationWrapper>
                        <Time>{item.arrivalTime}</Time>
                        <Location>
                          {item.airportTo.city}
                          <SubLocation>
                            {item.airportTo.name} (
                            {item.airportTo.airportCode})
                          </SubLocation>
                        </Location>
                      </LocationWrapper>
                    </SectionThree>
                  </FirstSection>
                  <PassInfoWrapper>
                    <PassContent>
                      <PassUser>Passenger Name</PassUser>
                      <PassInfo>Harold Ajagu</PassInfo>
                    </PassContent>
                    <PassContent>
                      <PassUser>Booking Reference</PassUser>
                      <PassInfo>GO-2847</PassInfo>
                    </PassContent>
                    <PassContent>
                      <PassUser>Seat Number</PassUser>
                      <PassInfo>A48</PassInfo>
                    </PassContent>
                    <PassContent>
                      <PassUser>Baggage Allowance</PassUser>
                      <PassInfo>35Kgs</PassInfo>
                    </PassContent>
                    <PassContent>
                      <PassUser>Boarding Time</PassUser>
                      <PassInfo>Fri 26 Jan, 23:30</PassInfo>
                    </PassContent>
                    <PassContent>
                      <PassUser>Ticket Number</PassUser>
                      <PassInfo>647RT799</PassInfo>
                    </PassContent>
                    <PassContent>
                      <PassUser>Gate Number</PassUser>
                      <PassInfo>6</PassInfo>
                    </PassContent>
                  </PassInfoWrapper>
                </LeftContent>
                <RightContent>
                  <BarcodeImg src={barcode} alt="barcode" />
                </RightContent>
              </FlightContent>
            </ContentWrapper>
            <PrintTicketDesktop onClick={handlePrint} className='my-10'>Print Ticket</PrintTicketDesktop>
          </FlightWrap>
        ))}
        <PrintTicket>Print Ticket</PrintTicket>
      </Wrapper>
      {/* <Footer /> */}
    </>
  );
}

export default Success;

const FlightNav = styled.div`
  background: #171b4a;
  padding: 20px;
  width: 100%;
`;
const Wrap = styled.div``;
const WrapContent = styled.div`
  margin: 0 auto;
  max-width: 1160px;
  padding: 20px;
  background: #fff;
  font-size: 16px;
  font-weight: 600;
  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
const Wrapper = styled.div`
  background: #f4f8fa;
`;
const FlightWrap = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  padding: 30px 20px;
  @media only screen and (max-width: 870px) {
    height: 70vh;
  }

  @media only screen and (max-width: 690px) {
    height: 80vh;
    padding: 0;
  } ;
`;
const SuccessWrapper = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  align-items: center;
`;
const SuccessImg = styled.img``;
const SucWrap = styled.div``;
const SuccessTitle = styled.h4`
  font-size: 24px;
`;
const ContentWrapper = styled.div`
  background: #fff;
  margin: 10px 0;
  @media only screen and (max-width: 870px) {
    transform: rotate(90deg) scale(0.7);
  } ;
`;

const FlightContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 150px;
`;
const LeftContent = styled.div`
  border-right: 2px dotted #e1e3e4;
  padding: 40px 20px;
  @media only screen and (max-width: 870px) {
    background: #fff;
  } ;
`;
const RightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px 20px;
  @media only screen and (max-width: 870px) {
    background: #fff;
  } ;
`;
const BarcodeImg = styled.img`
  width: 100%;
`;
const FirstSection = styled.div`
  display: flex;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
  border-bottom: 2px solid #eaeaea;
`;
const SectionOne = styled.div`
  display: flex;
  align-items: center;
`;
const ImageWrapper = styled.div`
  padding-right: 20px;
  display: flex;
  align-items: center;
  width: 100%;
`;
const Img = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 10px;
`;
const Smdate = styled.h4`
  font-size: 16px;
`;
const LocationWrapper = styled.div`
  width: 185px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
`;
const Los = styled.h2`
  font-size: 30px;
`;
const Time = styled.h4`
  font-size: 14px;
`;
const Location = styled.p`
  font-size: 14px;
  font-family: CircularStd-Bold;
`;
const SubLocation = styled.span`
  color: #b4b5c4;
  padding-left: 2px;
`;
const SectionTwo = styled.div`
  padding: 0 30px;
  display: flex;
  flex-direction: column;
`;
const StopsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Stops = styled.div`
  width: 47px;
  height: 20px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #b4b5c4;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-family: CircularStd-Bold;
`;
const StopsImg = styled.img`
  margin: 10px 0;
`;
const Lay = styled.p`
  font-size: 10px;
  text-align: center;
`;
const SectionThree = styled.div`
  display: flex;
  align-items: center;
`;

const PassInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 20px;
`;
const PassContent = styled.div`
  margin: 10px 0;
`;
const PassUser = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;
const PassInfo = styled.h4`
  font-size: 14px;
`;

const PrintTicket = styled.button`
  width: 100%;
  max-width: 159px;
  height: 54px;
  border: none;
  outline: none;
  color: #fff;
  font-size: 14px;
  font-family: CircularStd-Bold;
  width: 163px;
  height: 54px;
  background: #2e61e6;
  border-radius: 27px;
  cursor: pointer;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
  @media only screen and (max-width: 870px) {
    display: flex;
  }
`;
const PrintTicketDesktop = styled.button`
  width: 100%;
  max-width: 159px;
  height: 54px;
  border: none;
  outline: none;
  color: #fff;
  font-size: 14px;
  font-family: CircularStd-Bold;
  width: 163px;
  height: 54px;
  background: #2e61e6;
  border-radius: 27px;
  cursor: pointer;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 870px) {
    display: none;
  }
`;
