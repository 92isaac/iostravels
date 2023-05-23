import React, { useState } from 'react'
import styled from 'styled-components';

const FilterStops = (props) => {
    const [stops, setStops] = useState('')
    const [form ,setForm] = useState({
        none: false,
        one: false,
        two: false
    })
    const handleStops = val => {
        val === 0 ? setStops('none') : val === 1 ? setStops('one') : val === 2 ? setStops('two') : setStops('')
        props.storeStops(val)
    }
    return (
        <OutingsWrapper>
            <OutWrap className="container">
                <Radio type="radio" name='none' checked={stops === 'none' ? true : false} onClick={() => handleStops(0)} onChange={e => setForm({...form, none: e.target.checked})} />
                <span className="checkmark"></span>
                <Item> Non-stop (direct)</Item>
            </OutWrap>
            <OutWrap className="container">
                <Radio type="radio" name='one' checked={stops === 'one' ? true : false} onClick={() => handleStops(1)} onChange={e => setForm({...form, one: e.target.checked})} />
                <span className="checkmark"></span>
                <Item>One Stop</Item>
            </OutWrap>
            <OutWrap className="container">
                <Radio type="radio" name='two' checked={stops === 'two' ? true : false} onClick={() => handleStops(2)} onChange={e => setForm({...form, two: e.target.checked})} />
                <span className="checkmark"></span>
                <Item>Two Stops</Item>
            </OutWrap>
        </OutingsWrapper>
    )
}

export default FilterStops


const OutingsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const OutWrap = styled.label`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 20px;
  gap: 10px;
`;
const Radio = styled.input``;
const Item = styled.h4`
  color: #171b4a;
  font-weight: 600;
  margin: 0 8px;
`;