import React, { useState } from "react";
import styled from "styled-components";
import close from "assets/icons/close.svg";
import moment from "moment";
import Swal from "sweetalert2";
import HttpServices from "services/HttpServices";
import ApiRoutes from "services/ApiRoutes";
import { DatePicker } from "antd";
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

dayjs.extend(customParseFormat);
// eslint-disable-next-line arrow-body-style
const disabledDate = (current) => {
  // Can not select days before today
  // return current && current > dayjs().day(1);
  return current && current > dayjs().endOf('day');
};


function Bookpackage({ setopenPackage, openPackage, pack, sendSignal }) {
  const [agree, setAgree] = useState(false)
  const [loading, setLoading] = useState(false)
  const [forms, setForms] = useState({
    name: '',
    email: '',
    phone: '',
    comment: '',
    departureDate: '',
    adults: 1,
    children: 1,
  })
  const handleForms = e => {
    setForms({ ...forms, [e.target.name]: e.target.value })
  }

  const getErrors = () => {
    if(!forms.name) return Swal.fire({ title: 'Request Failed', text: 'Enter your fullname as required', icon: 'info', showConfirmButton: false })
    if(!forms.email) return Swal.fire({ title: 'Request Failed', text: 'Enter your email address as required', icon: 'info', showConfirmButton: false })
    if(!forms.phone) return Swal.fire({ title: 'Request Failed', text: 'Enter your contact as required', icon: 'info', showConfirmButton: false })
    if(!forms.departureDate) return Swal.fire({ title: 'Request Failed', text: 'Specify the departure date', icon: 'info', showConfirmButton: false })
    if(!agree) return Swal.fire({ title: 'Request Failed', text: 'agree to our terms and conditions to automate your booking process', icon: 'info', showConfirmButton: false })
  }

  const BookTour = async () => {
    const errors = getErrors()
    if(!errors) {
      const dataFields = {
        package: pack._id,
        packageOwners: [
          forms
        ]
      }
      setLoading(true)
      const res = await HttpServices.post(
        ApiRoutes.package.book_package,
        dataFields
      )
      const {data} = res 
      setLoading(false)
      if(data.success) {
        Swal.fire({ title: 'Request Successful', text: `Your request to book ${pack.name} has been successfully recieved`, icon: 'info', showConfirmButton: false })
        setTimeout(() => {
          sendSignal()
        }, 3000);
      }else {
        Swal.fire({ title: 'Request Failed', text: data.data, icon: 'info', showConfirmButton: false })
      }
    }
  }
  return (
    <div className="_blurSearchmodal flex items-center justify-center">
        <div className='w-11/12 scrolls max-w-xl mx-auto px-10 pb-10 pt-16 mt-16 md:mt-0 bg-white rounded-xl max-h-[85vh] overflow-y-auto'>
          <TopHeader>
            <div>
              <Back>Book {pack.name} @ &#8358;{pack.price.toLocaleString()}</Back>

              <SmallDesc>
                All fields are required unless otherwise stated.
              </SmallDesc>
            </div>
            <span onClick={() => setopenPackage(!openPackage)}>
              <CloseImg src={close} />
            </span>
          </TopHeader>

          <Detail> Personal Information</Detail>

          <FormWrapper>
            <Form>
              <Input placeholder="Full Name" name='name' value={forms.name} onChange={handleForms} />
              

              <FormWrap>
                <Input placeholder="Email Address" name='email' value={forms.email} onChange={handleForms} />
                <Input placeholder="Phone Number" name='phone' value={forms.phone} onChange={handleForms} />
              </FormWrap>

              <Detail> Travel Information</Detail>
              <div className="text-xs">Departure</div>
              <div className='grid grid-cols-3 gap-3'>
                <div>
                <DatePicker 
                disabledDate={disabledDate}
                name='departureDate'
                className='h-[54px] mt-2'
                placeholder={moment().format('YYYY-MM-DD')}
                onChange={val => {
                  const date = moment(new Date(val)).format('YYYY-MM-DD')
                  setForms({...forms, departureDate: date})
                }}
                />
                </div>

                <TravelInput>
                  <small>Adults</small>
                  <select name='adults' value={forms.adults} onChange={handleForms}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </TravelInput>
                <TravelInput>
                  <small>Children</small>
                  <select name='children' value={forms.children} onChange={handleForms}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </TravelInput>
              </div>
              <InputSelect rows='5' placeholder='Add Comments (Optional)' name='comment' value={forms.comment} onChange={handleForms}></InputSelect>
            </Form>
          </FormWrapper>
          <Small>
            <input type="checkbox" id="check" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
            <label htmlFor="check">
              I have read, understood and I agree to GeoTravels’ Privacy Policy,
              and Terms & conditions.
            </label>
          </Small>

          <BtnWrapper>
            <Btn disabled={loading ? true : false} onClick={BookTour} className='flex items-center gap-2 justify-center'>Book tour {loading && <div className="spin"></div> }</Btn>
          </BtnWrapper>
        </div>
    </div>
  );
}

export default Bookpackage;

const Wrapper = styled.div``;

const Back = styled.h4``;
const BtnWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 20px;
  @media only screen and (max-width: 450px) {
    flex-direction: column;
  }
`;
const Btn = styled.button`
  border: none;
  outline: none;
  color: #fff;
  font-size: 14px;
  font-family: CircularStd-Bold;
  width: 137px;
  height: 54px;
  background: #2e61e6;
  border-radius: 27px;
  cursor: pointer;
`;

const Small = styled.p`
  font-size: 14px;
  color: #171b4a;
  margin: 25px 0;
  display: flex;
  align-items: flex-start;
  gap: 5px;
`;
const SmallDesc = styled.p`
  font-size: 14px;
  color: #171b4a;
  margin: 15px 0;
`;
const FormWrapper = styled.div`
  width: 100%;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
const InputSelect = styled.textarea`
  width: 100%;
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
const FormWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const CloseImg = styled.img``;
const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #efefef;
  margin-bottom: 20px;
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

const Detail = styled.p`
  font-size: 14px;
  color: #171b4a;
  margin: 25px 0;
  position: relative;
  overflow-x: hidden;
  font-size: 14px;

  ::after {
    content: "";
    position: absolute;
    top: 9px;
    width: 80%;
    height: 1px;
    background: #efefef;
  }
`;

const TravelInput = styled.div`
  width: 100%;
  height: 54px;
  background: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  margin: 10px 0;
  padding: 5px 15px;
  display: flex;
  flex-direction: column;

  input {
    outline: none;
    border: none;
  }
  select {
    border: none;
    outline: none;
    font-family: CircularStd-Bold;
    font-size: 14px;
    color: #171b4a;
    background: #fff;
    padding: 5px;
  }
  small {
    color: #8b8da4;
    font-size: 12px;
    margin-top: 3px;
  }
`;
