import React, { useState } from 'react'
import styled from 'styled-components';

const FilterByAirline = (props) => {
    const [stops, setStops] = useState('')
    const [forms, setForms] = useState({
        all: false,
        france: false,
        emirates: false,
        ethiopia: false,
        qatar: false,
        canada: false,
        etihad: false,
    })
    const handleCLickEvents = val => {
        val === 'all' ? setStops('all') : val === 'air france' ? setStops('air france') : val === 'fly emirates' ? setStops('fly emirates') : val === 'ethiopian airlines' ? setStops('ethiopian airlines') : val === 'qatar airways' ? setStops('qatar airways') : val === 'air canada' ? setStops('air canada') : val === 'etihad' ? setStops('etihad') : setStops('')
        props.storeAirline(val)
    }
    return (
        <div className='grid grid-cols-1 w-full'>
            <OutWrap className="_container">
                <div>
                    <input type="checkbox" name='all' checked={stops === 'all' ? true : false} onClick={() => handleCLickEvents('all')} onChange={e => setForms({...forms, all: e.target.checked})} />
                    <span className="_checkmark"></span>
                    <Item>All </Item>
                </div>
                <div>from ₦1,087,088</div>
            </OutWrap>
            <OutWrap className="_container">
                <div>
                    <input type="checkbox" name='france' checked={stops === 'air france' ? true : false} onClick={() => handleCLickEvents('air france')} onChange={e => setForms({...forms, france: e.target.checked})} />
                    <span className="_checkmark"></span>
                    <Item>Air France </Item>
                </div>
                <div>from ₦1,087,088</div>
            </OutWrap>
            <OutWrap className="_container">
                <div>
                    <input type="checkbox" name='emirates' checked={stops === 'fly emirates' ? true : false} onClick={() => handleCLickEvents('fly emirates')} onChange={e => setForms({...forms, emirates: e.target.checked})} />
                    <span className="_checkmark"></span>
                    <Item>Fly Emirates </Item>
                </div>
                <div>from ₦1,087,088</div>
            </OutWrap>
            <OutWrap className="_container">
                <div>
                    <input type="checkbox" name='ethiopia' checked={stops === 'ethiopian airlines' ? true : false} onClick={() => handleCLickEvents('ethiopian airlines')} onChange={e => setForms({...forms, ethiopia: e.target.checked})} />
                    <span className="_checkmark"></span>
                    <Item>Ethiopian Airlines </Item>
                </div>
                <div>from ₦1,087,088</div>
            </OutWrap>
            <OutWrap className="_container">
                <div>
                    <input type="checkbox" name='qatar' checked={stops === 'qatar airways' ? true : false} onClick={() => handleCLickEvents('qatar airways')} onChange={e => setForms({...forms, qatar: e.target.checked})} />
                    <span className="_checkmark"></span>
                    <Item>Qatar Airways </Item>
                </div>
                <div>from ₦1,087,088</div>
            </OutWrap>
            <OutWrap className="_container">
                <div>
                    <input type="checkbox" name='canada' checked={stops === 'air canada' ? true : false} onClick={() => handleCLickEvents('air canada')} onChange={e => setForms({...forms, canada: e.target.checked})} />
                    <span className="_checkmark"></span>
                    <Item>Air Canada</Item>
                </div>
                <div>from ₦1,087,088</div>
            </OutWrap>
            <OutWrap className="_container">
                <div>
                    <input type="checkbox" name='etihad' checked={stops === 'etihad' ? true : false} onClick={() => handleCLickEvents('etihad')} onChange={e => setForms({...forms, etihad: e.target.checked})} />
                    <span className="_checkmark"></span>
                    <Item>Etihad</Item>
                </div>
                <div>from ₦1,087,088</div>
            </OutWrap>
        </div>
    )
}

export default FilterByAirline

const OutWrap = styled.label`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 20px;
  gap: 10px;
`;

const Item = styled.h4`
  color: #171b4a;
  font-weight: 600;
  margin: 0 8px;
`;