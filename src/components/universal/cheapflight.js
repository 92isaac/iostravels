import React from "react";
import styled from "styled-components";

function Cheapflight() {
  return (
    <>
      <CheapFlightsSection>
        <CheapFlightWrapper>
          <Title>Cheap flights from Nigeria</Title>
          <FlightsWrapper>
            <Flights>
              <FlightName>African Flights</FlightName>
              <FlightLocations>Flights to Accra</FlightLocations>
              <FlightLocations> Flights to Nairobi</FlightLocations>
              <FlightLocations> Flights to Cape Town</FlightLocations>
              <FlightLocations>Flights to Johannesburg</FlightLocations>
            </Flights>
            <Flights>
              <FlightName>European Flights</FlightName>

              <FlightLocations> Flights to Istanbul</FlightLocations>
              <FlightLocations> Flights to Manchester</FlightLocations>
              <FlightLocations> Flights to Paris</FlightLocations>
              <FlightLocations>Flights to London</FlightLocations>
            </Flights>
            <Flights>
              <FlightName>African Flights</FlightName>
              <FlightLocations>Flights to Accra</FlightLocations>
              <FlightLocations> Flights to Nairobi</FlightLocations>
              <FlightLocations> Flights to Cape Town</FlightLocations>
              <FlightLocations>Flights to Johannesburg</FlightLocations>
            </Flights>
            <Flights>
              <FlightName>Asian Flights</FlightName>

              <FlightLocations>Flights to Dubai </FlightLocations>
              <FlightLocations> Flights to Abu Dhabi</FlightLocations>
              <FlightLocations> Flights to Guangzhou</FlightLocations>
              <FlightLocations>Flights to New Delhi</FlightLocations>
            </Flights>
          </FlightsWrapper>
        </CheapFlightWrapper>
      </CheapFlightsSection>
    </>
  );
}

export default Cheapflight;

const CheapFlightsSection = styled.div`
  padding: 0 20px;
`;
const CheapFlightWrapper = styled.div`
  width: 100%;
  margin: 50px auto;
  max-width: 1160px;
  padding-bottom: 50px;
`;
const Title = styled.h4`
  font-family: CircularStd-Bold;
  font-size: 20px;
  line-height: 46px;
`;
const FlightsWrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  @media only screen and (max-width: 580px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const Flights = styled.div``;
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