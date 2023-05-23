import React from "react";
import styled from "styled-components";
import comparearrows from "assets/icons/comparearrows.svg";

function FlightLoader({ loading }) {
  const { flightData, open } = loading;
  return open ? (
    <Wrapper>
      <LoaderContainer>
        <Small>Getting the best fares</Small>
        <LocationWrapper>
          <FlightLocation>{flightData.origin}</FlightLocation>
          <AnimatorWrapper>
            <AnimateDirection src={comparearrows} />
            <Direction src={comparearrows} />
          </AnimatorWrapper>
          <FlightLocation>{flightData.destination}</FlightLocation>
        </LocationWrapper>
        <Small className='capitalize'>{flightData.passenger} Passenger{flightData.passenger !== "1" ? 's': null}, {flightData.cabin}</Small>
      </LoaderContainer>
    </Wrapper>
  ) : (
    <></>
  );
}

export default FlightLoader;

const Wrapper = styled.div`
  position: fixed;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999999;
`;

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  width: 269px;
  height: 269px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 10px;
`;
const Small = styled.p`
  color: #171b4a;
  font-size: 12px;
`;
const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const FlightLocation = styled.h4`
  font-size: 24px;
`;
const AnimatorWrapper = styled.div`
  position: relative;
  width: fit-content;
  display: block;
  margin: 0 10px;
`;
const AnimateDirection = styled.img`
  position: absolute;
  opacity: 0.75;
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
`;
const Direction = styled.img`
`;
