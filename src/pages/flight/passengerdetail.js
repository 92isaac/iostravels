import Flightnavbar from "components/navigation/flightnavbar";
import Footer from "components/navigation/footer";
import Navbar from "components/navigation/navbar";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tooltip from "assets/icons/tooltip.png";
import downplane from "assets/icons/downplane.svg";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { storePassenger } from "app/dataSlice";
import PassengersFlightForm from "components/universal/PassengersFlightForm";


  function Passengerdetail({ changePage, flightDetails, backtoFlight }) {
  // function Passengerdetail({ changePage, backtoFlight }) {
  const localData = JSON.parse(localStorage.getItem('passengerList'))
  const [passengers, setPassengers] = useState(localData || [])
  const dispatch = useDispatch()
  const { state: flightState } = useLocation(); //assign location state to "flightState"


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

  const [agree, setAgree] = useState(false)
  const alertError = (value) => {
    Swal.fire({
      title: 'request Failed',
      text: value,
      icon: 'error',
      showConfirmButton: false
    })
  }
  

  const getFormDetails = () => {
    // make sure there is a passenger detail filled
    if(localData.length > flightDetails.travelersPrice.length) return alertError(`Invalid Extra passenger's information detected`)
    if(localData.length < flightDetails.travelersPrice.length) return alertError(`Incomplete passenger's information detected, kindly fill out all passengers information to proceed`)
    if (localData.length < 1) return alertError('Your passenger\'s information is required to be filled out')
    if (!agree) return alertError('agree to the terms and conditions to confirm your booking')

    // book this flight
    dispatch(storePassenger(localData))
    changePage()
  }

  return (
    <>
      {/* <Navbar /> */}
      <Wrapper>
        <WrapContent>Passenger Details</WrapContent>
      </Wrapper>
      <FlightNav>
        <Flightnavbar active={2} />
      </FlightNav>
      <SectionWrapper>
        <SectionContent>
          <LeftContent>
            <FormCard>
              <TitleSection>
                <SmallWrapper>
                  <InfoTitle>Personal Information</InfoTitle>
                  <FieldInfo>
                    All fields are required unless otherwise stated.
                  </FieldInfo>
                </SmallWrapper>
              </TitleSection>
              {new Array(flightDetails.travelersPrice.length).fill().map((item, i) => (
                <PassengersFlightForm key={i} indexs={i} />
              ))}
            </FormCard>

            <FormCard>
              <TitleSection>
                <SmallWrapper>
                  <InfoTitle>Flight Addons</InfoTitle>
                </SmallWrapper>
              </TitleSection>
              <FormSection>
                <>
                  <AddonWrapper>
                    <CheckboxInput type="checkbox" />

                    <Details>
                      <Title>Add the flight protection plan to my flight</Title>
                      <Info>
                        Coverage includes trip cancellation, trip interruption,
                        and much more. See top benefits:
                      </Info>
                      <List>
                        <ListItems>
                          1. 100% flight reimbursement if you’re sick and can’t
                          travel.
                        </ListItems>
                        <ListItems>
                          2. $1,000 for covered lost baggage, including laptop,
                          phone or camera
                        </ListItems>
                        <ListItems>
                          3. $50,000 for covered emergency medical
                          transportation
                        </ListItems>
                      </List>
                    </Details>

                    <Amount>$680</Amount>
                  </AddonWrapper>
                  <AddonWrapper>
                    <CheckboxInput type="checkbox" />

                    <Details>
                      <Title>
                        Add the Flight Arrival Escorts Plan to my flight
                      </Title>
                      <Info>
                        Coverage includes trip cancellation, trip interruption,
                        and much more. See top benefits:
                      </Info>
                    </Details>

                    <Amount>$680</Amount>
                  </AddonWrapper>

                  <AddonWrapper>
                    <CheckboxInput type="checkbox" />

                    <Details>
                      <Title>Visa Assistance</Title>
                      <Info>
                        Coverage includes trip cancellation, trip interruption,
                        and much more. See top benefits:
                      </Info>
                      <List>
                        <ListItems>
                          1. Get access to full support and a dedicated
                          consultancy team to help with Visa procurement and
                          processes
                        </ListItems>
                        <ListItems>
                          2. Safe and secure channels aligned with the UAE
                          foreign affairs
                        </ListItems>
                      </List>
                    </Details>

                    <Amount>$680</Amount>
                  </AddonWrapper>
                </>
              </FormSection>
            </FormCard>

            <FormCard>
              <TitleSection>
                <SmallWrapper>
                  <InfoTitle>Agreement</InfoTitle>
                </SmallWrapper>
              </TitleSection>
              <FormSection>
                <label className="flex gap-3">
                  <input
                    checked={agree}
                    onChange={e => setAgree(e.target.checked)}
                    type="checkbox" style={{ marginRight: "5px" }} />{" "}
                  <Info>
                    By checking this box, I confirm that I have read the Terms and
                    Conditions. I also confirm that the names on the booking match
                    those on the passports of those travelling.
                  </Info>
                </label>
              </FormSection>
            </FormCard>

            <BookingBtn onClick={getFormDetails}>
              Continue Booking
            </BookingBtn>
          </LeftContent>
          <RightContent>
            <RightContentItem>
              <FormCard>
                <TitleSection>
                  <SmallWrapper>
                    <InfoTitle>Discount and Vouchers</InfoTitle>
                    <FieldInfo>
                      If you don’t have any codes, you may skip this
                    </FieldInfo>
                  </SmallWrapper>
                </TitleSection>
                <FormSection>
                  <FormWrap>
                    <Input placeholder="Voucher Code" />
                    <div></div>
                  </FormWrap>
                </FormSection>
              </FormCard>
              <TopSection>
                <TopWrap>
                  <InfoTitle>Flight Details</InfoTitle>
                  <Flight onClick={backtoFlight}>Edit Flight</Flight>
                </TopWrap>
                <FlightSection>
                  <ImgSection>
                    <Img src={downplane} />
                  </ImgSection>
                  <DepatureHolder>
                    {flightDetails.outbound.map((item, i) => (
                      <DepartureWrapper key={i}>
                        <DepatureItems>
                          <GeneralTitle>Departure</GeneralTitle>
                          <DepatureInfo>
                            {item.departureTime} — {item.arrivalTime}
                            {`${item.airportFrom.name} (${item.airportFrom.airportCode})`}
                            —{" "}
                            {`${item.airportTo.name} (${item.airportTo.airportCode})`}
                            <div className='uppercase'>{item.cabinType} Class</div>
                          </DepatureInfo>
                        </DepatureItems>
                        <DepatureImg
                          src={item.airlineDetails.logo}
                          alt={item.airlineDetails.name} />
                      </DepartureWrapper>
                    ))}

                    {Array.isArray(flightDetails.inbound) &&
                      flightDetails.inbound.length > 0 && flightDetails.inbound.map((item, i) => (
                        <ReturnWrapper key={i}>
                          <DepatureItems>
                            <GeneralTitle>Return </GeneralTitle>
                            <DepatureInfo>
                              {item.departureTime} — {item.arrivalTime}
                              {`${item.airportFrom.name} (${item.airportFrom.airportCode})`}
                              —{" "}
                              {`${item.airportTo.name} (${item.airportTo.airportCode})`}
                              <div className='uppercase'>{item.cabinType} Class</div>
                            </DepatureInfo>
                          </DepatureItems>
                          <DepatureImg
                            src={item.airlineDetails.logo}
                            alt={item.airlineDetails.name} />
                        </ReturnWrapper>
                      ))}
                  </DepatureHolder>
                </FlightSection>
              </TopSection>
              <BottomSection>
                <PassengersWrapper>
                  <div className='font-semibold text-slate-700 mb-3 text-lg'>Flight Base Fare</div>
                  <PassHolder>
                    <Hold>
                      <GeneralTitle>Adult x {flightDetails.priceSummary.map((item, i) => (
                        <span key={i}>{item.quantity.toLocaleString()}</span>
                      ))}</GeneralTitle>
                    </Hold>
                    <Hold>
                      <GeneralTitle>Base Fare</GeneralTitle>
                      <Cost>{flightDetails.currency}{flightDetails.amount.toLocaleString()}</Cost>
                    </Hold>
                    <PriceHold>
                      <Per>Discount</Per>
                      <CostPer>{flightDetails.currency} {0}</CostPer>
                    </PriceHold>
                    <PriceHold>
                      <Per>Total Fare</Per>
                      {flightDetails.priceSummary.map((item, i) => (
                        <CostPer key={i}>{flightDetails.currency} {item.totalPrice.toLocaleString()}</CostPer>
                      ))}
                    </PriceHold>
                  </PassHolder>
                </PassengersWrapper>
              </BottomSection>
              <AmountWrapper>
                <Total>Total Amount</Total>
                {flightDetails.priceSummary.map((item, i) => (
                  <TotalCost key={i}>{flightDetails.currency} {item.totalPrice.toLocaleString()}</TotalCost>
                ))}
              </AmountWrapper>
            </RightContentItem>
          </RightContent>
        </SectionContent>
      </SectionWrapper>

      {/* <Footer /> */}
    </>
  );
}

export default Passengerdetail;
const Wrapper = styled.div``;
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
const FlightNav = styled.div`
  background: #171b4a;
  padding: 20px;
  width: 100%;
`;

const SectionWrapper = styled.div`
  background: #f4f8fa;
  padding-top: 50px;
  padding-bottom: 50px;
`;
const SectionContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
  grid-gap: 20px;
  padding: 0 20px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const LeftContent = styled.div``;
const FormCard = styled.div`
  background: #fff;
  padding: 40px 30px;
  margin-bottom: 30px;

  @media only screen and (max-width: 550px) {
    padding: 20px 15px;
  }
`;
const TitleSection = styled.div`
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 20px;
`;
const SmallWrapper = styled.div``;
const InfoTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 5px;
`;
const FieldInfo = styled.div`
  font-size: 14px;
`;

const FormSection = styled.div`
  margin-top: 30px;
`;
const FormWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;

  @media only screen and (max-width: 550px) {
    flex-direction: column;
    gap: unset;
  }
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

const AddonWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
`;
const Details = styled.div`
  width: 100%;
`;
const Title = styled.h4`
  margin-bottom: 10px;
  font-size: 18px;
`;
const Info = styled.div`
  font-size: 14px;
`;
const List = styled.ul``;
const ListItems = styled.li`
  list-style: none;
  margin: 20px 0;
  font-size: 14px;
`;
const Amount = styled.h4`
  font-size: 20px;
`;
const CheckboxInput = styled.input`
  margin-top: 5px;
  margin-right: 20px;

  @media only screen and (max-width: 550px) {
    margin-right: 5px;
  }
`;
const BookingBtn = styled.button`
  border: none;
  outline: none;
  color: #fff;
  font-size: 14px;
  font-family: CircularStd-Bold;
  max-width: 187px;
  width: 100%;
  height: 54px;
  background: #2e61e6;
  border-radius: 27px;
  cursor: pointer;
`;

const RightContent = styled.div`
  @media only screen and (max-width: 550px) {
    display: none;
  }
`;

const RightContentItem = styled.div`
  background: #fff;
  padding: 40px 30px;
`;
const TopSection = styled.div``;

const TopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 10px;
`;
const Flight = styled.h4`
  font-size: 14px;
  color: #2e61e6;
`;

const FlightSection = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;
const ImgSection = styled.div``;
const Img = styled.img`
  padding-right: 20px;
`;
const DepartureWrapper = styled.div`
  display: flex;
  padding-bottom: 30px;
`;

const DepatureHolder = styled.div``;
const ReturnWrapper = styled.div`
  display: flex;
  padding-top: 30px;
  border-top: 3px dotted #eaeaea;
`;
const DepatureItems = styled.div``;
const GeneralTitle = styled.h4`
  font-size: 14px;
  margin-bottom: 5px;
  text-transform: capitalize;
`;
const DepatureInfo = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;
const DepatureImg = styled.img`
  width: 32px;
  height: 32px;
`;

const BottomSection = styled.div`
  padding: 20px 0;
  border-top: 3px dotted #eaeaea;
  border-bottom: 3px dotted #eaeaea;
`;

const PassengersWrapper = styled.div``;
const PassHolder = styled.div`
  margin: 25px 0;
`;
const Hold = styled.div`
  display: flex;
  justify-content: space-between;
`;
const PriceHold = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Per = styled.div`
  font-size: 14px;
`;
const CostPer = styled.div`
  font-size: 14px;
`;
const Cost = styled.h4`
  font-size: 14px;
`;

const AmountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;
const Total = styled.h4`
  font-size: 14px;
`;
const TotalCost = styled.h4`
  font-size: 20px;
`;
