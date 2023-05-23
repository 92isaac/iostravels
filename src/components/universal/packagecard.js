import React, { useState } from "react";
import styled from "styled-components";
// import botharrow from "assets/icons/botharrow.svg";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function Packagecard({ show, toggleFlight }) {
  const navigate = useNavigate()
  const [forms, setForms] = useState({
    trip_type: '',
  })
  
  const handleForms = e => {
    setForms({...forms, [e.target.name]:e.target.value})
  }
  const handleError = (msg) => {
    toast.error(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  const searchPackage = async () => {
    if(!forms.trip_type) return handleError('Select Trip type')
    
    const newlink = `/packages?trip_type=${forms.trip_type}`
    navigate(newlink)
  }
  return (
    <Wrapper>
      <CardHolder>
        <RoutesWrapper>
          <RouteItem></RouteItem>
        </RoutesWrapper>
        <div className='grid grid-cols-6 w-full md:w-3/5 mx-auto gap-3'>
          <ItemWrapper className='col-span-4'>
            <SelectWrapper1>
              <select className='w-full' name='trip_type' onChange={handleForms} value={forms.trip_type}>
                <option value="">-Select Trip Type-</option>
                <option value='private'> Private Package</option>
                <option value='group'> Group Package</option>
              </select>
            </SelectWrapper1>
          </ItemWrapper>
          <ExploreBtn className='col-span-2' onClick={searchPackage}>Explore</ExploreBtn>
        </div>
      </CardHolder>
    </Wrapper>
  );
}

export default Packagecard;

const Wrapper = styled.div`
  width: 100%;
  padding: 0 20px;
  z-index: 9;
  position: relative;
`;
const CardHolder = styled.div`
  overflow-x: auto;
  height: auto;
  max-width: 964px;
  width: 100%;
  background: transparent;
  margin: 0 auto;
  padding: 30px;
`;

const RoutesWrapper = styled.div`
  display: flex;
  max-width: 200px;
  justify-content: space-between;
`;
const RouteItem = styled.div`
  font-weight: 600;
  text-align: left;
  font-size: 14px;
  letter-spacing: 0px;
  color: #171b4a;
  display: flex;
  align-items: center;
`;

// const DirectionsWrapper = styled.div`
//   margin: 30px 0;
//   display: flex;
//   @media only screen and (max-width: 568px) {
//     flex-direction: column;
//     align-items: center;
//     width: 100%;
//   }
// `;
const ItemWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  @media only screen and (max-width: 568px) {
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
  }
`;
const SelectWrapper1 = styled.div`
  select {
    font-size: 14px;
    color: #171b4a;
    height: 54px;
    border: 1px solid #eaeaea;
    background: #fff;
    border-radius: 4px;
    padding: 0 20px;
    font-size: 14px;
    color: #171b4a;
    margin-right: 8px;

    :active,
    :focus {
      outline: none;
      border: 1px solid #eaeaea;
    }
    @media only screen and (max-width: 568px) {
      width: 100%;
    }
  }
  @media only screen and (max-width: 568px) {
    width: 100%;
    margin-bottom: 5px;
  }
`;
const ExploreBtn = styled.button`
  width: 121px;
  height: 54px;
  background: #2e61e6;
  border-radius: 27px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  outline: none;
  border: none;
  box-shadow: none;
  flex-shrink: 0;
  @media only screen and (max-width: 568px) {
    width: 100%;
  }
`;
