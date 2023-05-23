import React from 'react'
import styled from 'styled-components';

const PopularAirportsFrom = (props) => {
    return (
        <InputSuggestWrapper1 className='w-full md:w-[35rem] shadow-lg'>
            <div className='bg-blue-50 p-3 mb-5 rounded-tr-md text-lg rounded-tl-md'>Popular Cities</div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3 shadow-2xl'>
                <div onClick={() => props.fetchOriginAirportsClick(`lagos`)} className="cursor-pointer capitalize p-2">lagos</div>
                <div onClick={() => props.fetchOriginAirportsClick(`abuja`)} className="cursor-pointer capitalize p-2">abuja</div>
                <div onClick={() => props.fetchOriginAirportsClick(`dubai`)} className="cursor-pointer capitalize p-2">dubai</div>
                <div onClick={() => props.fetchOriginAirportsClick(`london`)} className="cursor-pointer capitalize p-2">london</div>
                <div onClick={() => props.fetchOriginAirportsClick(`owerri`)} className="cursor-pointer capitalize p-2">owerri</div>
                <div onClick={() => props.fetchOriginAirportsClick(`portharcourt`)} className="cursor-pointer capitalize p-2">portharcourt</div>
                <div onClick={() => props.fetchOriginAirportsClick(`johannesburg`)} className="cursor-pointer capitalize p-2">Johannesburg</div>
                <div onClick={() => props.fetchOriginAirportsClick(`asaba`)} className="cursor-pointer capitalize p-2">asaba</div>
                <div onClick={() => props.fetchOriginAirportsClick(`benin`)} className="cursor-pointer capitalize p-2">benin</div>
                <div onClick={() => props.fetchOriginAirportsClick(`istanbul`)} className="cursor-pointer capitalize p-2">Istanbul</div>
            </div>
        </InputSuggestWrapper1>
    )
}

export default PopularAirportsFrom


const InputSuggestWrapper1 = styled.div`
  display: grid;
  gap: 20px;
  max-height: 400px;
  overflow-y: auto;
  position: absolute;
  background-color: white;
  z-index: 9;
`;
