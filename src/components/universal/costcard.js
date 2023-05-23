import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ApiRoutes from "services/ApiRoutes";
import HttpServices from "services/HttpServices";
import styled from "styled-components";
import Swal from "sweetalert2";

function Costcard(props) {
  const { activeTab, changePage, setActiveTab, pageItem, flightDetails } = props
  const { passenger } = useSelector(state => state.data)
  // console.log(flightDetails)

  const HandleButtonEvent = async () => {
    if (pageItem === 2) {
      const passengersData = {
        passengers: [...passenger]
      }
      const response = await HttpServices.post(
        `${ApiRoutes.flights.book_flight}/${flightDetails.id}`,
        passengersData
      )
      console.log(response)
      // changePage()
    } else {
      // activeTab.tag === 1 && setActiveTab({ tag: 2, text: 'Confirm Payment' });
      if(activeTab.tag === 1) {
        return props.CardPayment()
      }
      if (activeTab.tag === 2) {
        const response = await HttpServices.get(
          `${ApiRoutes.flights.getPrice}/${flightDetails.id}`,
        )
        const { data } = response
        const payload = data
        if (payload.success) {
          setActiveTab({ ...activeTab, tag: 3 })
          
          // const { data } = bookflight
          // const res = data
          // if (res.success) {
          //   return setTimeout(() => {
          //     localStorage.removeItem('passengerList')
          //     changePage()
          //   }, 3000);
          // } else {
          //   Swal.fire({
          //     title: 'Request Failed',
          //     text: 'Looks like you have encountered an error while booking your flight, kindly cross check your details and check back again',
          //     icon: 'error',
          //     showConfirmButton: false
          //   })
          //   // console.log(bookflight)
          // }
        }
      }
    }
  }
  return (
    <>
      <RightContentItem>
        <CostPrice>Cost</CostPrice>
        <BottomSection>
          {/* <PassengersWrapper>
            <PassHolder>
              <Hold>
                <GeneralTitle>Passengers - 1 Adult </GeneralTitle>
                <Cost>$790</Cost>
              </Hold>
              <PriceHold>
                <Per>Price per adult</Per>
                <CostPer>$730</CostPer>
              </PriceHold>
            </PassHolder>
            <Hold>
              <GeneralTitle> Flight Protection </GeneralTitle>
              <Cost>$790</Cost>
            </Hold>
            <PassHolder>
              <Hold>
                <GeneralTitle>Visa Assistance</GeneralTitle>
                <Cost>$690</Cost>
              </Hold>
              <PriceHold>
                <Per>Taxes and Fees</Per>
                <CostPer>$730</CostPer>
              </PriceHold>
            </PassHolder>
          </PassengersWrapper> */}
          <PassengersWrapper>
            <div className='font-semibold text-slate-700 mb-3 text-lg'>Flight Base Fare</div>
            <PassHolder>
              <Hold>
                <GeneralTitle>Adult x {flightDetails.priceSummary.map((item, i) => (
                  <span key={i}>{item.quantity}</span>
                ))}</GeneralTitle>
              </Hold>
              <Hold>
                <GeneralTitle>Base Fare</GeneralTitle>
                <Cost>{flightDetails.currency}{(flightDetails.amount / flightDetails.priceSummary.map((item) => item.quantity)).toLocaleString()}</Cost>
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

        {activeTab.tag !== 3 ? <AmountBtn onClick={HandleButtonEvent}> {activeTab?.text}</AmountBtn> : null}
      </RightContentItem>
    </>
  );
}

export default Costcard;

const RightContentItem = styled.div`
  background: #fff;
  padding: 20px 30px;
`;
const BottomSection = styled.div`
  padding: 10px 0;
  border-bottom: 3px dotted #eaeaea;
`;
const CostPrice = styled.h4`
  border-bottom: 3px dotted #eaeaea;
  padding: 10px 0;
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
const Per = styled.p`
  font-size: 14px;
`;
const CostPer = styled.p`
  font-size: 14px;
`;
const Cost = styled.h4`
  font-size: 14px;
`;

const AmountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;
const AmountBtn = styled.button`
  border: none;
  outline: none;
  color: #fff;
  font-size: 14px;
  font-family: CircularStd-Bold;
  width: 187px;
  height: 54px;
  background: #2e61e6;
  border-radius: 27px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto;
`;
const Total = styled.h4`
  font-size: 14px;
`;
const TotalCost = styled.h4`
  font-size: 20px;
`;
const GeneralTitle = styled.h4`
  font-size: 14px;
  margin-bottom: 5px;
`;
