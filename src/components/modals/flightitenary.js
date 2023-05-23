import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import departureplane from "assets/icons/departureplane.svg";
import tooltip from "assets/icons/tooltip.png";
import CloseIcon from "assets/icons/close.svg";
import { ReactComponent as DepartPlaneIcon } from "assets/icons/departureplane.svg";
import { ReactComponent as ReturnPlaneIcon } from "assets/icons/returnplane.svg";

function Flightitenary({ isopen, flightDetails, close, changePage }) {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  // console.log(flightDetails)

  const timeFormat = (time) => {
    if (parseInt(time)) {
      const hours = Math.floor(time / 60);
      const hourText =
        hours === 1 ? `${hours} Hour` : hours > 1 ? `${hours} Hours` : "";
      const minutes = hours >= 1 ? Math.round(time % 60) : time;
      const minuteText =
        minutes === 1
          ? `${minutes} Minute`
          : minutes > 1
            ? `${minutes} Minutes`
            : "";
      return `${hourText}, ${minuteText}`;
    }
  };
  // console.log(flightDetails, isopen);
  return (
    <Wrapper Wrapper className="_blurSearchmodal">
      <ModalWrapper>
        <TopSection>
          <SmTitle>
            <Itenary
              className={activeTab === 1 ? "active" : ""}
              onClick={() => handleTabClick(1)}
            >
              Flight Itinerary
            </Itenary>
            <Itenary
              className={activeTab === 2 ? "active" : ""}
              onClick={() => handleTabClick(2)}
            >
              Rules and Regulations
            </Itenary>
          </SmTitle>

          <span onClick={() => close()}>
            <CloseImg src={CloseIcon} />
          </span>
        </TopSection>
        {activeTab === 1 && (
          <>
            <div style={{ overflow: "auto", padding: "20px" }}>
              {flightDetails.outbound.map((item, index) => (
                <CardWrapper key={index}>
                  <DepatureWrapper>
                    <DepartPlaneIcon width={30} height={30} />
                    <DepaturetextWrapper>
                      <Dept>Departure Flight</Dept>
                      <Route>
                        {`${item.airportFrom.name} (${item.airportFrom.airportCode})`}
                        —{" "}
                        {`${item.airportTo.name} (${item.airportTo.airportCode})`}
                      </Route>
                    </DepaturetextWrapper>
                  </DepatureWrapper>
                  <FlightInfoWrappper>
                    <SectionOne>
                      <SmallTitle> {item.departureDate}</SmallTitle>
                      <SmallSectionImg
                        src={item.airlineDetails.logo}
                        alt={item.airlineDetails.name}
                      />
                    </SectionOne>
                    <SectionTwo>
                      <SmallTitle>
                        {item.departureTime} — {item.arrivalTime}
                      </SmallTitle>
                      <TextInfo>
                        {`${item.airportFrom.name} (${item.airportFrom.airportCode})`}
                        —{" "}
                        {`${item.airportTo.name} (${item.airportTo.airportCode})`}
                      </TextInfo>
                      <SmallTitle>
                        {item.airlineDetails.name}, {item.flightNumber}
                      </SmallTitle>

                    </SectionTwo>
                    <SectionThree>
                      <SmallTitle>
                        {timeFormat(flightDetails.totalDuration)}
                      </SmallTitle>
                      <TextInfo>{item.cabinType}</TextInfo>
                    </SectionThree>
                  </FlightInfoWrappper>
                </CardWrapper>
              ))}

              {/* This is useless at the moment */}
              {/* <Layover>Layover at: Istanbul, Ataturk (IST)</Layover>
              <CardWrapper>
                <FlightInfoWrappper>
                  <SectionOne>
                    <SmallTitle>Sat, Jan 07</SmallTitle>
                    <SmallSectionImg src={tooltip} />
                  </SectionOne>
                  <SectionTwo>
                    <SmallTitle>15:30 — 01:35</SmallTitle>
                    <TextInfo>
                      Lagos Muritala Into Airport (LOS) - Istanbul Ataturk
                      (IST)
                    </TextInfo>
                    <SmallTitle>Ethiopian Airways. B737</SmallTitle>

                    <SmallDiv>
                      <Class>Class B</Class>
                      <Seat>Seat H33</Seat>
                    </SmallDiv>
                  </SectionTwo>
                  <SectionThree>
                    <SmallTitle>15:30 — 01:35</SmallTitle>
                    <TextInfo>Economy</TextInfo>
                  </SectionThree>
                </FlightInfoWrappper>
              </CardWrapper> */}

              {/* This might be useless as well. */}
              {Array.isArray(flightDetails.inbound) &&
                flightDetails.inbound.length > 0 && (
                  <>
                    {flightDetails.inbound.map((item, index) => (
                      <CardWrapper key={index}>
                        <ReturnWrapper>
                          <ReturnPlaneIcon width={30} height={30} />
                          <DepaturetextWrapper>
                            <Dept>Return Flight</Dept>
                            <Route>Dubai — Lagos </Route>
                          </DepaturetextWrapper>
                        </ReturnWrapper>
                        <FlightInfoWrappper>
                          <SectionOne>
                            <SmallTitle>Sat, Jan 07</SmallTitle>
                            <SmallSectionImg src={tooltip} />
                          </SectionOne>
                          <SectionTwo>
                            <SmallTitle>15:30 — 01:35</SmallTitle>
                            <TextInfo>
                              Lagos Muritala Into Airport (LOS) - Istanbul
                              Ataturk (IST)
                            </TextInfo>
                            <SmallTitle>Ethiopian Airways. B737</SmallTitle>

                          </SectionTwo>
                          <SectionThree>
                            <SmallTitle>15:30 — 01:35</SmallTitle>
                            <TextInfo>Economy</TextInfo>
                          </SectionThree>
                        </FlightInfoWrappper>
                      </CardWrapper>
                    ))}
                    <Layover>Layover at: Istanbul, Ataturk (IST)</Layover>{" "}
                    <CardWrapper>
                      <FlightInfoWrappper>
                        <SectionOne>
                          <SmallTitle>Sat, Jan 07</SmallTitle>
                          <SmallSectionImg src={tooltip} />
                        </SectionOne>
                        <SectionTwo>
                          <SmallTitle>15:30 — 01:35</SmallTitle>
                          <TextInfo>
                            Lagos Muritala Into Airport (LOS) - Istanbul Ataturk
                            (IST)
                          </TextInfo>
                          <SmallTitle>Ethiopian Airways. B737</SmallTitle>

                        </SectionTwo>
                        <SectionThree>
                          <SmallTitle>15:30 — 01:35</SmallTitle>
                          <TextInfo>Economy</TextInfo>
                        </SectionThree>
                      </FlightInfoWrappper>
                    </CardWrapper>
                  </>
                )}
            </div>
            <div className="py-7 px-4 bg-blue-900">
              <div className="grid grid-cols-5">
                <div className='col-span-3'>
                  <div className=''>
                    <div className="text-slate-300">Total Costs</div>
                    {flightDetails.priceSummary.map((item, i) => (
                      <div className="text-slate-100 text-xl" key={i}>{flightDetails.currency} {item.totalPrice.toLocaleString()}</div>
                    ))}
                  </div>
                </div>
                <div className='col-span-2 text-right'>
                  <button
                    className="_primary-btn"
                    onClick={changePage}
                    state={flightDetails}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 2 && (
          <>
            <div style={{ padding: "20px" }}>
              <h4> Penalty Applies </h4> <br />
              On some airlines, changes are not permitted on a ticket in case of
              no-show and the ticket(s) have no value and cannot be refunded
              Please ensure that you have a valid visa before your international
              travel. Wakanow will not be held liable by airport authorities if
              you have not fulfilled your visa requirements. Tickets to Kuala
              Lumpur must not exceed 14 days, this simply means all tickets
              booked to Kuala Lumpur may be less than 14 days but must not be
              more than 14 days. Egypt Air tickets cannot be booked for one way
              routes, there should be a RESTRICTION on bookings, NO ONE WAY on
              Egypt Air. If you or anyone accompanying you has a serious health
              issue, please call us before booking. In the case of cancellation,
              amount paid for insurance will be non-refundable. This is
              applicable if insurance is booked along with a ticket. Refunds
              will be processed within 6 - 8 weeks A maximum of one infant is
              allowed to travel with one adult.
            </div>
          </>
        )}
      </ModalWrapper>{" "}
    </Wrapper>
  );
}

export default Flightitenary;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
`;
const ModalWrapper = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr;
  padding: 0;
  width: 100%;
  max-width: 680px;
  background: #ffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  height: 600px;
  @media only screen and (max-width: 615px) {
    height: 100%;
    padding: 70px 10px;
  }
`;

const CardWrapper = styled.div`
  background: #fff;
  padding: 20px;
`;
const TopSection = styled.div`
  border-bottom: 1px solid #eaeaea;
  padding: 20px;
  display: flex;
  gap: 32px;
  justify-content: space-between;
  align-items: center;

  span {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #efefef;
    cursor: pointer;
  }
`;
const Itenary = styled.h4`
  font-size: 16px;
  cursor: pointer;
`;
const DepatureWrapper = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  align-items: flex-end;
  gap: 20px;
`;
const DepatureImg = styled.img`
  margin-right: 10px;
  width: 40px;
`;
const DepaturetextWrapper = styled.div`
  display: grid;
  gap: 10px;
`;
const ReturnWrapper = styled.div`
  padding: 20px 0;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  align-items: flex-end;
  gap: 20px;
`;
const Dept = styled.h4`
  font-size: 14px;
  color: #2e61e6;
`;
const Route = styled.h4``;
const FlightInfoWrappper = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 550px) {
    flex-direction: column;
  }
`;
const SectionOne = styled.div`
  display: grid;
  place-items: center;
  @media only screen and (max-width: 550px) {
    margin-bottom: 15px;
  }
`;
const SmallTitle = styled.h4`
  font-size: 14px;
  margin-bottom: 5px;
`;
const SmallSectionImg = styled.img`
  width: 32px;
  height: 32px;
`;
const SectionTwo = styled.div`
  @media only screen and (max-width: 550px) {
    margin-bottom: 15px;
  }
`;

const SmallDiv = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 150px;
  margin-top: 5px;
`;
const Class = styled.p`
  font-size: 14px;
`;
const Seat = styled.p`
  font-size: 14px;
`;
const SectionThree = styled.div``;
const TextInfo = styled.p`
  font-size: 14px;
`;
const Layover = styled.div`
  background: #fef7ea;
  padding: 30px;
  font-size: 14px;
  font-weight: 600;
`;

const CloseImg = styled.img``;

const SmTitle = styled.div`
  display: flex;
  gap: 20px;
`;
