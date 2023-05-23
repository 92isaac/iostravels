import Flightnavbar from "components/navigation/flightnavbar";
import Footer from "components/navigation/footer";
import Navbar from "components/navigation/navbar";
import Costcard from "components/universal/costcard";
import React, { useState } from "react";
import styled from "styled-components";
import error from "assets/icons/error.svg";
import lock from "assets/icons/lock.svg";
import tick from "assets/icons/tick.svg";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import HttpServices from "services/HttpServices";
import ApiRoutes from "services/ApiRoutes";

function Payment({ flightDetails, pageItem, changePage }) {
  const [activeTab, setActiveTab] = useState({ tag: 1, text: 'Make Payment' });
  const navigate = useNavigate()
  const [forms, setForms] = useState({
    email: '',
    name: '',
    phone: ''
  })

  const handleForms = e => {
    setForms({ ...forms, [e.target.name]: e.target.value })
  }

  const handleTabClick = (tabIndex, tabText) => {
    setActiveTab({ tag: tabIndex, text: tabText });
  };
  const Notify = (val) => {
    toast.error(val, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
  const CardPayment = async () => {
    if (!forms.name) return Notify('Name is required')
    if (!forms.email) return Notify('Email is required')
    if (!forms.phone) return Notify('Phone number is required')

    const data = {
      invoiceCode: "CEMPMUX5W8AMVGCYFU",
      paymentChannel: "WEB",
      customer: {...forms},
      redirectUrl: "http://localhost.com/verify-payment"
    }
    const res = await HttpServices.post(
      ApiRoutes.payment.flight_pay,
      data
    )
    console.log(res)
  }
  return (
    <>
      {/* <Navbar /> */}
      <Wrap>
        <WrapContent>Payment</WrapContent>
      </Wrap>

      <FlightNav>
        <Flightnavbar />
      </FlightNav>
      <Wrapper>
        <PaymentWrapper>
          <LeftSection>
            <Navigation>
              <CeditCardNav
                className={activeTab.tag === 1 ? "active" : ""}
                onClick={() => handleTabClick(1, 'Make Payment')}
              >
                Credit Card
              </CeditCardNav>
              <BankNav
                className={activeTab.tag === 2 ? "active" : ""}
                onClick={() => handleTabClick(2, 'Confirm Payment')}
              >
                Bank Transfer
              </BankNav>
              {/* <BankNav
                className={activeTab.tag === 3 ? "active" : ""}
                onClick={() => handleTabClick(3)}
              >
                Succesful
              </BankNav> */}
            </Navigation>

            {activeTab.tag === 1 && (
              <CreditCardSection>
                <CardContent>
                  <div className='w-full'>
                    <form>
                      <div className='mb-2'>
                        <Input type="text" name="name" value={forms.name} onChange={handleForms} placeholder='Enter Fullname' />
                      </div>
                      <div className='mb-2'>
                        <Input type="text" name="email" value={forms.email} onChange={handleForms} placeholder='Enter Email' />
                      </div>
                      <div className='mb-3'>
                        <Input type="text" name="phone" value={forms.phone} onChange={handleForms} placeholder='Enter Phone Number' />
                      </div>
                    </form>
                  </div>
                </CardContent>
              </CreditCardSection>
            )}

            {activeTab.tag === 2 && (
              <BankSection>
                <CardContent>
                  <Cost>{flightDetails.currency}{flightDetails.amount.toLocaleString()}</Cost>
                  <Desc>
                    Transfer this exact ticket amount to the account below and
                    get confirmation instantly
                  </Desc>

                  <DetailsWrapper>
                    <InfoWrap>
                      <InfoTitle>Bank Name</InfoTitle>
                      <InfoDetail>Providus Bank</InfoDetail>
                    </InfoWrap>
                    <InfoWrap>
                      <InfoTitle>Bank Name</InfoTitle>
                      <InfoDetail>Providus Bank</InfoDetail>
                    </InfoWrap>
                    <InfoWrap>
                      <InfoTitle>Bank Name</InfoTitle>
                      <InfoDetail>Providus Bank</InfoDetail>
                    </InfoWrap>
                  </DetailsWrapper>

                  <AccountInfo>
                    The above account details is unique to this particular
                    transaction. Do not use for other transaction
                  </AccountInfo>

                  <Expiration>
                    Account details will expire in <TIme>14:23</TIme>
                  </Expiration>

                  <SecureWrapper>
                    <SecureImg src={lock} alt="lock" />
                    100% PROTECTED AND SECURED
                  </SecureWrapper>
                </CardContent>
              </BankSection>
            )}

            {activeTab.tag === 3 && (
              <BankSection>
                <CardContent>
                  <Tickmg src={tick} alt="tick" />
                  <Desc>Payment successfully recieved</Desc>
                  <Cost>{flightDetails.currency}{flightDetails.amount.toLocaleString()}</Cost>

                  <Expiration>Redirecting you to your ticket page</Expiration>

                  <SecureWrapper>
                    <SecureImg src={lock} alt="lock" />
                    100% PROTECTED AND SECURED
                  </SecureWrapper>
                </CardContent>
              </BankSection>
            )}
          </LeftSection>
          <RightSection>
            <Costcard
              flightDetails={flightDetails}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              changePage={changePage}
              pageItem={pageItem}
              CardPayment={CardPayment}
            />
          </RightSection>
        </PaymentWrapper>
        <ToastContainer />
      </Wrapper>
      {/* <Footer /> */}
    </>
  );
}

export default Payment;

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
const PaymentWrapper = styled.div`
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  padding: 120px 20px;
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 20px;

  @media only screen and (max-width: 750px) {
    grid-template-columns: 1fr;
    padding: 50px 20px;
  }
`;

const LeftSection = styled.div``;
const RightSection = styled.div``;

const Navigation = styled.div`
  background: #fff;
  padding: 20px 30px;
  display: flex;
`;
const CeditCardNav = styled.h4`
  margin-right: 20px;
  font-size: 14px;

  cursor: pointer;
  :active {
    color: #2e61e6;
  }
`;
const BankNav = styled.h4`
  font-size: 14px;
  margin-right: 20px;
  cursor: pointer;
  :active {
    color: #2e61e6;
  }
`;
const CreditCardSection = styled.div``;

const CardContent = styled.div`
  background: #fff;
  padding: 50px 30px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CardImg = styled.img`
  margin-bottom: 30px;
`;
const Note = styled.h4`
  font-size: 14px;
`;
const Info = styled.div`
  font-size: 12px;
`;

const BankSection = styled.div``;

const Cost = styled.h4`
  font-size: 24px;
  color: #2e61e6;
  margin-bottom: 15px;
`;
const Desc = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;
const DetailsWrapper = styled.div`
  background: #f4fbfe;
  padding: 20px 30px;

  max-width: 364px;
  width: 100%;
  margin: 20px 0;
`;
const InfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;
const InfoTitle = styled.p`
  font-weight: 600;
`;
const InfoDetail = styled.p`
  font-weight: 600;
`;
const AccountInfo = styled.p`
  font-size: 12px;
`;
const Expiration = styled.p`
  color: #b4b5c4;
  font-size: 12px;
  margin: 5px 0;
`;
const TIme = styled.span`
  color: #fb2b56;
  font-size: 12px;
`;
const SecureWrapper = styled.div`
  background: #fff7e9;
  padding: 5px;
  font-size: 12px;
  margin: 20px;
  display: flex;
  align-items: center;
`;
const SecureImg = styled.img`
  margin-right: 10px;
`;

const Tickmg = styled.img`
  width: 35px;
  height: 35px;
`;
