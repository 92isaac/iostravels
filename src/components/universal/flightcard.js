import React, { useState, useRef, useEffect } from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import botharrow from "assets/icons/botharrow.svg";
import downarrow from "assets/icons/downarrow.svg";
import people from "assets/icons/people.svg";
import { FilterByAny, FilterByCode } from "components/utils/airports";
import { DatePicker } from "antd";
import moment from "moment/moment";
import { FaMinus } from 'react-icons/fa'
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayjs from "dayjs";
import PopularAirportsFrom from "./PopularAirportsFrom";
import PopularAirportTo from "./PopularAirportTo";

dayjs.extend(customParseFormat);
// eslint-disable-next-line arrow-body-style
const disabledDate = (current) => {
  // Can not select days before today
  return current && current < dayjs().day(2);
  // return current && current < dayjs().endOf('day');
};

function Flightcard({ show, hidepack, mode }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation()
  // TYPE OF FLIGTH--------------------
  const [trip_type, set_trip_type] = useState({
    trip: "0",
    open: false,
  });
  const trip_enums = ["Return", "One-way", "Multi city"];
  const localData = JSON.parse(localStorage.getItem('passengerList'))
  const [togview, setTogview] = useState(false)
  const [togview2, setTogview2] = useState(false)

  const navigate = useNavigate();
  const getSearchParams = (val = "") => {
    const data = searchParams.get(val);
    return data ?? "";
  };

  const [flightData, setFlightData] = useState({
    cabin: "economy",
    origin: getSearchParams("origin"),
    destination: getSearchParams("destination"),
    departureDate: getSearchParams("departureDate"),
    adults: 1,
    children: 0,
    infants: 0,
    returnDate: getSearchParams("returnDate"),
  });

  useEffect(() => {
    if (!localData) {
      localStorage.setItem('passengerList', JSON.stringify([]))
    }
  })


  const origin_ref = useRef("");
  const destination_ref = useRef("");
  const dest_suggest = useRef("");
  const origin_suggest = useRef("");

  const [airport_origin, set_airport_origin] = useState([]);
  const [airport_dest, set_airport_dest] = useState([]);

  const fetchOriginAirports = (search) => {
    const airports_found = FilterByAny(search);
    if (Array.isArray(airports_found) && airports_found.length > 0) {
      set_airport_origin(airports_found);
    } else {
      set_airport_origin([]);
    }
  };

  const fetchDestAirports = (search) => {
    const airports_found = FilterByAny(search);
    if (Array.isArray(airports_found) && airports_found.length > 0) {
      set_airport_dest(airports_found);
    } else {
      set_airport_dest([]);
    }
  };

  const fetchAirport_code = (code) => {
    const _airports = FilterByCode(code);
    if (Array.isArray(_airports) && _airports.length > 0) {
      const _current = _airports[0];
      return `${_current.name} (${_current.iata || _current.icao})`;
    }
    return "";
  };

  // handleApi call
  const exploreFlight = async () => {
    localStorage.setItem('flightData', JSON.stringify(flightData))
    const newLink = `/selectFlight?origin=${flightData.origin}&destination=${flightData.destination}&departureDate=${flightData.departureDate}`;
    if (location.pathname === '/selectFlight') {
      window.location = newLink
    }
    navigate(newLink);
  };

  useEffect(() => {
    if (dest_suggest && dest_suggest.current) {
      dest_suggest.current.addEventListener("mouseleave", (e) => {
        fetchDestAirports("");
      });
    }
    if (origin_suggest && origin_suggest.current) {
      origin_suggest.current.addEventListener("mouseleave", (e) => {
        fetchOriginAirports("");
      });
    }

    // document.addEventListener("click", closeCity);
    // return () => {
    //   document.removeEventListener("click", closeCity);
    // };
  });

  // handle toggle between flights
  // const swapRoutes = () => {
  //   setflightData((prevState) => {
  //     return {
  //       ...prevState,
  //       origin: prevState.destination,
  //       destination: prevState.origin,
  //     };
  //   });
  // };

  // handle form change

  // const closeCityModal = useRef("");

  // const closeCity = (e) => {
  //   //   debugger;
  //   if (closeCityModal.current) {
  //     if (
  //       trip_type.open &&
  //       !e.target.closest(`#${closeCityModal.current.id}`)
  //     ) {
  //       set_trip_type((prevState) => ({ ...prevState, open: false }));
  //     }
  //   }
  // };

  // ADULTS, CHILDREN, INFANTS COUNTER

  const [passModal, setpassModal] = useState(false);
  const handlePassengers = () => {
    setpassModal(!passModal);
  };

  const fetchOriginAirportsClick = (search) => {
    const airports_found = FilterByAny(search);
    const val = airports_found[0].iata || airports_found[0].icao;
    setFlightData((prevState) => {
      return {
        ...prevState,
        origin: val,
      };
    });
    setTogview(!togview)
  }

  const fetchOriginAirportsClick2 = (search) => {
    const airports_found = FilterByAny(search);
    const val = airports_found[0].iata || airports_found[0].icao;
    setFlightData((prevState) => {
      return {
        ...prevState,
        destination: val,
      };
    });
    setTogview2(!togview2)
  }

  
  const setupDates = () => {
    return (
      <div className='flex justify-between px-5 py-3'>
        <div className='flex items-center gap-3'>
          <div className='flex flex-col'>
            <div className='text-slate-500 text-sm'>Starting From</div>
            <div className='font-semibold text-slate-600 text-base'>{moment().format('ddd D MMM')}</div>
          </div>
          <div className='text-slate-400'> <FaMinus /> </div>
          <div className='flex flex-col'>
            <div className='text-slate-500 text-sm'>Ending On</div>
            <div className='font-semibold text-slate-600 text-base'>{moment().add(5, 'days').format('ddd D MMM')}</div>
          </div>
        </div>
        <div></div>
      </div>
    )
  }

  const setupSinglDate = () => {
    return (
      <div className='flex justify-between px-5 py-3'>
        <div className='flex flex-col'>
          <div className='text-slate-500 text-sm'> Departure Date</div>
          <div className='font-semibold text-slate-600 text-base'>{moment().format('ddd D MMM')}</div>
        </div>
        <div></div>
      </div>
    )
  }

  return (
    <Wrapper>
      <CardHolder>
        <RoutesWrapper>
          <RouteItem>
            <SelectDiv
              className="my-select"
              onClick={() => {
                set_trip_type((prevState) => {
                  return {
                    ...prevState,
                    open: true,
                  };
                });
              }}
            >
              <span value="option1">{trip_enums[trip_type.trip]}</span>
              <Img src={downarrow} />
            </SelectDiv>
            {trip_type.open && (
              <SelectedDiv>
                <label htmlFor="trip_0" className="trip_type">
                  <span name="return">Return</span>
                  <input
                    type={"radio"}
                    id="trip_0"
                    name="trip_type"
                    value={"0"}
                    defaultChecked={trip_type.trip === "0"}
                    onChange={(e) => {
                      set_trip_type((prevState) => {
                        return {
                          ...prevState,
                          trip: e.target.value,
                          open: false,
                        };
                      });
                    }}
                  />
                </label>
                <label
                  htmlFor="trip_1"
                  className="trip_type"
                  name="oneway"
                  value="name"
                >
                  <span>One-Way</span>
                  <input
                    type={"radio"}
                    id="trip_1"
                    name="trip_type"
                    value={"1"}
                    defaultChecked={trip_type.trip === "1"}
                    onChange={(e) => {
                      set_trip_type((prevState) => {
                        return {
                          ...prevState,
                          trip: e.target.value,
                          open: false,
                        };
                      });
                    }}
                  />
                </label>
                <label htmlFor="trip_2" className="trip_type">
                  <span name="multi">Multi City</span>
                  <input
                    type={"radio"}
                    id="trip_2"
                    name="trip_type"
                    value={"2"}
                    defaultChecked={trip_type.trip === "2"}
                    onChange={(e) => {
                      set_trip_type((prevState) => {
                        return {
                          ...prevState,
                          trip: e.target.value,
                          open: false,
                        };
                      });
                    }}
                  />
                </label>
              </SelectedDiv>
            )}
          </RouteItem>
          <RouteItem>
            <select
              className="_select"
              name="cabin"
              onChange={(e) => {
                setFlightData((prevState) => {
                  return {
                    ...prevState,
                    cabin: e.target.value,
                  };
                });
              }}
              defaultValue={"economy"}
            >
              <option value="economy">Economy</option>
              <option value="business">Business Class</option>
              <option value="first_class">First Class</option>
              <option value="premium">Premium</option>
            </select>
          </RouteItem>

          <RouteItem>
            <PassengersList onClick={handlePassengers}>
              <Icon2 src={people} />
              <span>
                Passengers (
                {flightData.adults + flightData.children + flightData.infants})
              </span>
            </PassengersList>
            {passModal && (
              <PassengerWrapper>
                <Passengers>
                  <Group>Adult</Group>
                  <IncrementWrap>
                    <DecrementBtn
                      onClick={() => {
                        if (flightData.adults > 0) {
                          setFlightData((prevState) => {
                            let val = prevState.adults - 1;
                            return {
                              ...prevState,
                              adults: val,
                            };
                          });
                        }
                      }}
                    >
                      -
                    </DecrementBtn>
                    <input
                      value={flightData.adults}
                      onChange={(e) => {
                        setFlightData((prevState) => {
                          return {
                            ...prevState,
                            adults: e.target.value,
                          };
                        });
                      }}
                    />
                    <IncrementBtn
                      onClick={() =>
                        setFlightData((prevState) => {
                          let val = prevState.adults + 1;
                          return {
                            ...prevState,
                            adults: val,
                          };
                        })
                      }
                    >
                      +
                    </IncrementBtn>
                  </IncrementWrap>
                </Passengers>
                <Passengers>
                  <Group>Children</Group>
                  <IncrementWrap>
                    <DecrementBtn
                      onClick={() => {
                        if (flightData.children > 0) {
                          setFlightData((prevState) => {
                            let val = prevState.children - 1;
                            return {
                              ...prevState,
                              children: val,
                            };
                          });
                        }
                      }}
                    >
                      -
                    </DecrementBtn>
                    <input
                      value={flightData.children}
                      onChange={(e) => {
                        setFlightData((prevState) => {
                          return {
                            ...prevState,
                            children: e.target.value,
                          };
                        });
                      }}
                    />
                    <IncrementBtn
                      onClick={() =>
                        setFlightData((prevState) => {
                          let val = prevState.children + 1;
                          return {
                            ...prevState,
                            children: val,
                          };
                        })
                      }
                    >
                      +
                    </IncrementBtn>
                  </IncrementWrap>
                </Passengers>
                <Passengers>
                  <Group>Infants</Group>

                  <IncrementWrap>
                    <DecrementBtn
                      onClick={() => {
                        if (flightData.infants > 0) {
                          setFlightData((prevState) => {
                            let val = prevState.infants - 1;
                            return {
                              ...prevState,
                              infants: val,
                            };
                          });
                        }
                      }}
                    >
                      -
                    </DecrementBtn>
                    <input
                      value={flightData.infants}
                      onChange={(e) => {
                        setFlightData((prevState) => {
                          return {
                            ...prevState,
                            infants: e.target.value,
                          };
                        });
                      }}
                    />
                    <IncrementBtn
                      onClick={() =>
                        setFlightData((prevState) => {
                          let val = prevState.infants + 1;
                          return {
                            ...prevState,
                            infants: val,
                          };
                        })
                      }
                    >
                      +
                    </IncrementBtn>
                  </IncrementWrap>
                </Passengers>

                <DoneBtn onClick={handlePassengers}>Done</DoneBtn>
              </PassengerWrapper>
            )}
          </RouteItem>
        </RoutesWrapper>
        <DirectionsWrapper>
          <ItemWrapper>
            <SelectWrapper className='relative'>
              <DeptDay className='absolute top-0 left-5'>From</DeptDay>
              <Input
                autoComplete="off"
                name="origin"
                onClick={() => {setTogview(!togview); setTogview2(false)}}
                placeholder="City or Airport"
                onChange={(e) => {
                  fetchOriginAirports(e.target.value);
                  setTogview(false)
                }}
                ref={origin_ref}
                defaultValue={fetchAirport_code(flightData.origin)}
              />

              <InputSuggestWrapper ref={origin_suggest}>
                {airport_origin.map((airport) => {
                  return (
                    <InputSuggest
                      key={airport.id}
                      onClick={() => {
                        // Display Airport Name
                        const val = airport.iata || airport.icao;
                        setFlightData((prevState) => {
                          return {
                            ...prevState,
                            origin: val,
                          };
                        });
                        origin_ref.current.value = `${airport.name} (${airport.iata || airport.icao
                          })`;
                        fetchOriginAirports("");
                      }}
                    >
                      <div>
                        <h2 title={`${airport.city}, ${airport.country}`}>
                          {airport.city}, {airport.country}
                        </h2>
                        <p>{airport.name}</p>
                      </div>
                      <span>{airport.iata || airport.icao}</span>
                    </InputSuggest>
                  );
                })}
              </InputSuggestWrapper>
              {togview ? <PopularAirportsFrom fetchOriginAirportsClick={fetchOriginAirportsClick} /> : null}
            </SelectWrapper>
            <Icon src={botharrow} onClick={() => { }} />

            <SelectWrapper>
              <Input
                autoComplete="off"
                name="destination"
                onClick={() => {setTogview2(!togview2); setTogview(false)}}
                placeholder="Travelling to?"
                onChange={(e) => {
                  fetchDestAirports(e.target.value);
                  setTogview2(false)
                }}
                defaultValue={fetchAirport_code(flightData.destination)}
                ref={destination_ref}
              />
              <InputSuggestWrapper ref={dest_suggest}>
                {airport_dest.map((airport) => {
                  return (
                    <InputSuggest
                      key={airport.id}
                      onClick={() => {
                        // Display Airport Name
                        const val = airport.iata || airport.icao;
                        setFlightData((prevState) => {
                          return {
                            ...prevState,
                            destination: val,
                          };
                        });
                        destination_ref.current.value = `${airport.name} (${airport.iata || airport.icao
                          })`;
                        fetchDestAirports("");
                      }}
                    >
                      <div>
                        <h2 title={`${airport.city}, ${airport.country}`}>
                          {airport.city}, {airport.country}
                        </h2>
                        <p>{airport.name}</p>
                      </div>
                      <span>{airport.iata || airport.icao}</span>
                    </InputSuggest>
                  );
                })}
              </InputSuggestWrapper>
              {togview2 ? <PopularAirportTo fetchOriginAirportsClick={fetchOriginAirportsClick2} /> : null}
            </SelectWrapper>
            {trip_type.trip === '1' ?
              <DateWrapper className='gap-3'>
                <DatePicker
                  disabledDate={disabledDate}
                  className='w-full'
                  placeholder={moment().format('ddd D MMM')}
                  name="departureDate"
                  onChange={(values) => {
                    const val = moment(new Date(values)).format('YYYY-MM-DD');
                    setFlightData((prevState) => {
                      return {
                        ...prevState,
                        departureDate: val
                      };
                    });
                  }}
                  renderExtraFooter={() => setupSinglDate()} /> </DateWrapper> : null}
            {trip_type.trip === '0' || trip_type.trip === '2' ?
              <DateWrapper className='gap-3'>
                <DatePicker
                  disabledDate={disabledDate}
                  className='w-full'
                  placeholder={moment().format('ddd D MMM')}
                  name="departureDate"
                  onChange={(values) => {
                    const val = moment(new Date(values)).format('YYYY-MM-DD');
                    setFlightData((prevState) => {
                      return {
                        ...prevState,
                        departureDate: val
                      };
                    });
                  }}
                  renderExtraFooter={() => setupSinglDate()} />
                <DatePicker
                  disabledDate={disabledDate}
                  className='w-full'
                  placeholder={moment().format('ddd D MMM')}
                  name="departureDate"
                  onChange={(values) => {
                    const val = moment(new Date(values)).format('YYYY-MM-DD')
                    setFlightData((prevState) => {
                      return {
                        ...prevState,
                        returnDate: val,
                      };
                    });
                  }}
                  renderExtraFooter={() => setupDates()} />
              </DateWrapper>
              : null}
          </ItemWrapper>
          {trip_type.trip === '0' || trip_type.trip === '1' ? <ExploreBtn onClick={exploreFlight}>Explore</ExploreBtn> : null}
        </DirectionsWrapper>

        {trip_type.trip === '2' ?
          <div className='flex items-center justify-between'>
            <button className='bg-blue-600 text-white font-semibold rounded-lg py-4 px-8'>Add Flight</button>
            <ExploreBtn onClick={exploreFlight}>Explore</ExploreBtn>
          </div> : null}
      </CardHolder>
    </Wrapper >
  );
}

export default Flightcard;

const Wrapper = styled.div`
  width: 100%;
  padding: 0 20px;
  z-index: 9;
  position: relative;
`;
const CardHolder = styled.div`
  /* overflow-x: auto; */
  height: auto;
  max-width: 964px;
  width: 100%;
  background: transparent;
  margin: 0 auto;
  padding: 30px 10px;
`;

const RoutesWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
const RouteItem = styled.div`
  font-weight: 600;
  text-align: left;
  font-size: 14px;
  letter-spacing: 0px;
  color: #171b4a;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;
const SelectDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  text-transform: capitalize;
`;

const SelectedDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  z-index: 99;
  background: #fff;
  width: 150px;
  height: 135px;
  padding: 20px;
  top: 30px;
  label {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    white-space: nowrap;
  }
`;
const Img = styled.img``;
const DirectionsWrapper = styled.div`
  margin: 30px 0;
  display: flex;
  gap: 10px;
  @media only screen and (max-width: 568px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;
const ItemWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;

  @media only screen and (max-width: 768px) {
    /* flex-direction: column; */
    width: 100%;
    flex-wrap: wrap;
  }
`;
const SelectWrapper = styled.div`
  position: relative;
  @media only screen and (max-width: 568px) {
    width: 100%;
    margin-bottom: 5px;
  }
`;

const Input = styled.input`
  font-size: 14px;
  color: #171b4a;
  width: 254px;
  height: 54px;
  border: 1px solid #eaeaea;
  background: #fff;
  border-radius: 4px;
  padding: 0 20px;
  font-size: 14px;
  color: #171b4a;

  :active,
  :focus {
    outline: none;
    border: 1px solid #eaeaea;
  }
  @media only screen and (max-width: 568px) {
    width: 100%;
  }
`;
const DateInput = styled.input`
  font-size: 14px;
  color: #171b4a;
  width: 254px;
  border: none;
  background: #fff;
  border-radius: 4px;
  padding: 0 5px;
  font-size: 14px;
  color: #171b4a;
  font-family: CircularStd-Bold;
  text-transform: uppercase;

  :active,
  :focus {
    outline: none;
  }
  @media only screen and (max-width: 568px) {
    width: 100%;
  }
`;

const DateWrapper = styled.div`
  display: flex;
  height: 54px;

  @media only screen and (max-width: 568px) {
    width: 100%;
    margin-bottom: 5px;
  }
  input {
    max-width: 130px;
    margin: 0;
  }
`;

const SmallDepatureWrap = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const DeptDay = styled.span`
  font-size: 12px;
  color: #8b8da4;
  padding: 5px;
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
    margin-top: 20px;
    width: 100%;
  }
`;

const Icon = styled.img`
  position: absolute;
  top: 13px;
  left: 239px;
  z-index: 9;
  cursor: pointer;

  @media only screen and (max-width: 568px) {
    top: 39px;
    left: -5px;
  }
`;
const Icon2 = styled.img``;

const InputSuggestWrapper = styled.div`
  display: grid;
  gap: 20px;
  max-height: 400px;
  width: 100%;
  width: 250px;
  overflow-y: auto;
  position: absolute;
  background-color: white;
  z-index: 9;
`;

const InputSuggest = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  cursor: pointer;
  :hover {
    background-color: #2e61e610;
    p {
      color: #2e61e6;
    }
  }
  div {
    display: grid;
    gap: 10px;
    overflow: hidden;
    h2 {
      font-size: 14px;
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    p {
      font-size: 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  span {
    flex-shrink: 0;
    display: inline-block;
    padding: 8px 16px;
    font-size: 12px;
    font-weight: 600;
    border: 1px solid #545454;
    border-radius: 5px;
  }
`;
const PassengersList = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const PassengerWrapper = styled.div`
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  z-index: 99;
  background: #fff;
  width: 200px;
  padding: 20px;
  top: 30px;
`;
const Passengers = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`;

const Group = styled.div``;
const IncrementWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 5px;
  input {
    width: 10%;
    border: none;
    outline: none;
    font-weight: 600;
    gap: 10px;
  }
`;
const IncrementBtn = styled.button`
  padding: 4px 8px;
  border-radius: 2px;
  background-color: #f2f2f2;
  border: none;
  outline: none;
  cursor: pointer;
`;
const DecrementBtn = styled.button`
  padding: 4px 8px;
  border-radius: 2px;
  background-color: #f2f2f2;
  border: none;
  outline: none;
  cursor: pointer;
`;

const DoneBtn = styled.button`
  background: #2e61e6;
  width: 30%;
  color: #fff;
  border: none;
  outline: none;
  padding: 5px;
  font-size: 12px;
  cursor: pointer;
`;
