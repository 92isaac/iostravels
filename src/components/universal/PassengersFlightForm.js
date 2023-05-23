import { DatePicker } from 'antd';
import moment from 'moment';
import React, { useState } from 'react'
import styled from 'styled-components';
import { Dialcodes } from "components/utils/countrycodes";
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayjs from "dayjs";

dayjs.extend(customParseFormat);
// eslint-disable-next-line arrow-body-style
const disabledForwardDate = (current) => {
    // Can not select days before today
    return current && current > dayjs().endOf('day');
    //   return current && current < dayjs().day(1);
    // return current && current < dayjs().endOf('day');
};
const disabledBackwardDate = (current) => {
    return current && current < dayjs().day(2);
}

const PassengersFlightForm = (props) => {
    const [view, setView] = useState(false)
    const Icon = !view ? SlArrowDown : SlArrowUp
    const localData = JSON.parse(localStorage.getItem('passengerList'))

    const [personalData, setPersonalData] = useState({
        passengerType: "adult",
        firstName: localData[props.indexs]?.firstName || "",
        lastName: localData[props.indexs]?.lastName || "",
        dob: localData[props.indexs]?.dob || "",
        gender: localData[props.indexs]?.gender || "",
        title: localData[props.indexs]?.title || "",
        email: localData[props.indexs]?.email || "",
        phoneNumber: localData[props.indexs]?.phoneNumber || "",
    })
    const [passengerData, setpassengerData] = useState({
        number: localData[props.indexs]?.documents.number || "",
        issuingDate: localData[props.indexs]?.documents.issuingDate || "",
        expiryDate: localData[props.indexs]?.documents.expiryDate || "",
        issuingCountry: localData[props.indexs]?.documents.issuingCountry || "",
        nationalityCountry: localData[props.indexs]?.documents.nationalityCountry || "",
        documentType: "passport",
        holder: true,
    });

    const handlePersonalData = e => {
        setPersonalData({ ...personalData, [e.target.name]: e.target.value })
    }

    const handlePassengerData = e => {
        setpassengerData({ ...passengerData, [e.target.name]: e.target.value })
    }

    const saveContactData = () => {
        if (!personalData.firstName || !personalData.lastName || !personalData.dob || !personalData.gender || !personalData.title || !personalData.email || !personalData.phoneNumber) return Swal.fire({
            title: 'Something went wrong',
            text: `You have an incomplete passenger's personal details yet to be filled`,
            icon: 'info',
            showConfirmButton: false
        })
        if (!passengerData.number || !passengerData.issuingDate || !passengerData.expiryDate || !passengerData.issuingCountry || !passengerData.nationalityCountry) return Swal.fire({
            title: 'Something went wrong',
            text: `You have an incomplete passenger's passport details yet to be filled`,
            icon: 'info',
            showConfirmButton: false
        })
        const data = {
            ...personalData,
            documents: {
                ...passengerData
            }
        }
        toast.success('Details Saved', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        const localData = JSON.parse(localStorage.getItem('passengerList'))
        if (localData) {
            localData.push(data)
            localStorage.setItem('passengerList', JSON.stringify(localData))
        }
        setView(!view)
    }
    return (
        <div>
            <div className='flex ites-center justify-between p-3 border-b'>
                <div>Paassengers flight details form ({props.indexs + 1})</div>
                <div onClick={() => setView(!view)} className='cursor-pointer'> <Icon /> </div>
            </div>
            {view ?
                <FormSection className='mb-10'>
                    <FormWrap>
                        <Input
                            placeholder="First Name"
                            name="firstName"
                            value={personalData.firstName}
                            onChange={handlePersonalData}
                        />
                        <Input
                            placeholder="Last Name"
                            name='lastName'
                            value={personalData.lastName}
                            onChange={handlePersonalData}
                        />
                    </FormWrap>
                    <FormWrap>
                        <Input
                            placeholder="Gender"
                            name="gender"
                            value={personalData.gender}
                            onChange={handlePersonalData}
                        />
                        <SelectInput
                            name="title"
                            value={personalData.title}
                            onChange={handlePersonalData}
                        >
                            <option value="">Select Title</option>
                            <option value="mr">Mr</option>
                            <option value="mrs">Mrs</option>
                            <option value="miss">Miss</option>
                            <option value="master">Master</option>
                        </SelectInput>
                    </FormWrap>
                    <FormWrap>
                        <DatePicker
                            disabledDate={disabledForwardDate}
                            className='h-[54px] bg-white border rounded-2 my-3 px-7 w-full outline-none'
                            placeholder={`${localData[props.indexs]?.dob || `Date-of-Birth ${moment().format('YYYY-MM-DD')}`}`}
                            name="dob"
                            onChange={(e) => {
                                const val = moment(new Date(e)).format('YYYY-MM-DD');
                                setPersonalData((prevState) => {
                                    return {
                                        ...prevState,
                                        dob: val
                                    };
                                });
                            }}
                        // value={personalData.dob}
                        />
                        <Input
                            placeholder="Email Address"
                            name="email"
                            value={personalData.email}
                            onChange={handlePersonalData}
                        />
                    </FormWrap>
                    <FormWrap>
                        <Input
                            type='number'
                            placeholder="Phone Number"
                            pattern="/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/"
                            name="phoneNumber"
                            value={personalData.phoneNumber}
                            onChange={handlePersonalData}
                        />
                    </FormWrap>
                    <TitleSection>
                        <SmallWrapper>
                            <InfoTitle className='mt-5'>Passport Details</InfoTitle>
                            <FieldInfo>
                                All fields are required unless otherwise stated.
                            </FieldInfo>
                        </SmallWrapper>
                    </TitleSection>
                    <FormWrap>
                        <SelectInput
                            name="nationalityCountry"
                            value={passengerData.nationalityCountry}
                            onChange={handlePassengerData}
                        >
                            <option value="">Nationality</option>
                            {Dialcodes.map((item, i) => (
                                <option key={i} value={item.name}> {item.name}</option>
                            ))}
                        </SelectInput>
                        <Input
                            name="number"
                            placeholder="Passport Number or ID"
                            value={passengerData.number}
                            onChange={handlePassengerData}
                        />
                    </FormWrap>
                    <FormWrap>
                        <DatePicker
                            disabledDate={disabledForwardDate}
                            name="issuingDate"
                            className='h-[54px] bg-white border rounded-2 my-3 px-7 w-full outline-none'
                            placeholder={localData[props.indexs]?.documents.issuingDate || `Issuing Date ${moment().format('D/MMMM/YYYY')}`}
                            onChange={(e) => {
                                const val = moment(new Date(e)).format('YYYY-MM-DD');
                                setpassengerData((prevState) => {
                                    return {
                                        ...prevState,
                                        issuingDate: val
                                    };
                                });
                            }
                            }
                        />
                        <DatePicker
                            disabledDate={disabledBackwardDate}
                            name="expiryDate"
                            className='h-[54px] bg-white border rounded-2 my-3 px-7 w-full outline-none'
                            placeholder={localData[props.indexs]?.documents.expiryDate || `Expiry Date ${moment().format('D/MMMM/YYYY')}`}
                            onChange={(e) => {
                                const val = moment(new Date(e)).format('YYYY-MM-DD');
                                setpassengerData((prevState) => {
                                    return {
                                        ...prevState,
                                        expiryDate: val
                                    };
                                });
                            }
                            }
                        />
                    </FormWrap>
                    <Input
                        name="issuingCountry"
                        placeholder="Issuing Authority"
                        value={passengerData.issuingCountry}
                        onChange={handlePassengerData}
                    />

                    <div onClick={saveContactData} className='w-fit ml-auto mt-3'>
                        <button className='bg-blue-700 rounded-full capitalize text-sm font-semiold text-white py-2 px-7'>save</button>
                    </div>
                </FormSection>
                : null}

            <ToastContainer />
        </div>
    )
}

export default PassengersFlightForm

const SelectInput = styled.select`
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
