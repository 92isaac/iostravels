import Footer from "components/navigation/footer";
import Navbar from "components/navigation/navbar";
import Cheapflight from "components/universal/cheapflight";
import FlightCard from "components/universal/flightcard";
import Newsletter from "components/universal/newsletter";
import React, { useEffect, useRef, useState, useMemo } from "react";
import styled from "styled-components";
import downarrow from "assets/icons/downarrow.svg";
import lady from "assets/people/lady.png";
import FlightOffer from "./flightOffer";
import Flightnavbar from "components/navigation/flightnavbar";
import Flightitenary from "components/modals/flightitenary";
import HttpServices from "services/HttpServices";
import ApiRoutes from "services/ApiRoutes";
import FlightLoader from "components/universal/flightLoader";
import { useParams, useSearchParams } from "react-router-dom";
import Passengerdetail from "./passengerdetail";
import Tripsummary from "./tripsummary";
import Payment from "./payment";
import Success from "./success";
import { useCallback } from "react";
import FilterStops from "components/universal/filterStops";
import FilterByAirline from "components/universal/filterByAirline";


function Flight({ show }) {
  // LIST OF STATES------------------
  const [searchParams, setSearchParams] = useSearchParams();
  const [flightError, setFlightError] = useState(`No Flight available at the moment, check your flight date and try again!.`)
  const [flightList, setFlightList] = useState([]);
  const [flightList2, setFlightList2] = useState([]);
  const [isopen, setisopen] = useState(false);
  const [budget, setBudget] = useState(false);
  const [loadflight, setLoadflight] = useState(true)
  const [displayed_flight, set_displayed_flight] = useState({
    open: false,
    data: null,
  });
  const [outings, setoutings] = useState(false);
  const [airline, setairline] = useState(false);
  const [refunds, setrefunds] = useState(false);
  let maxsortPrice = useRef()
  const slideVal = useRef()
  const flightData = JSON.parse(localStorage.getItem("flightData"))
  // console.log(flightData)

  // eslint-disable-next-line
  // const [filterData, setFilterData] = useState({
  //   price_min: 0,
  //   price_max: 0,
  //   airline: null,
  // });
  const [filterData, setFilterData] = useState(0);

  // Flight Loader state
  const [flightLoading, setFlightLoading] = useState({
    open: false,
    flightData: {
      origin: "",
      destination: "",
      passenger: "",
      cabin: ""
    },
  });
  const getSearchParams = (val = "") => {
    const data = searchParams.get(val);
    return data ?? "";
  };

  // GET FLIGHT INFORMATION

  // FORM HANDLER----------------------

  // const filteredFlights = () => {
  //   const _flights = flightList;
  //   const _filters = filterData;
  //   if (_flights.length > 0) {
  //     const _filtered = _flights.filter((flight) => {
  //       // Check if price is within range
  //       return (
  //         flight.amount >= _filters.price_min &&
  //         flight.amount <= _filters.price_max
  //       );
  //     });
  //     return _filtered;
  //   } else {
  //     return _flights;
  //   }
  // };

  // API HANDLER---------------
  // const exploreFlight = async () => {
  //   Object.keys(flightData).map((item) => {
  //     return searchParams.set(item, flightData[item]);
  //   });
  //   setSearchParams(searchParams);
  // };

  // const filterHandle = (e) => {
  //   setFilterData({...filterData, [e.target.name]: e.target.value})
  // };
  const filterInput = () => {
    slideVal.current = filterData
    const searchFilter = flightList.find((item) => item.amount <= slideVal.current)
    if (searchFilter.length > 0) {
      setFlightList(searchFilter)
    }
    // flightList.filter((item) => item.amount <= filterData)
    // setFlightList(flightList.filter((item) => item.amount <= filterData))
    // console.log('flightinf', flightList)
  }
  // console.log(flightList)

  const getDataForFilteration = async () => {
    setLoadflight(true)

    const response = await HttpServices.post(
      ApiRoutes.flights.search_flight,
      flightData
    );
    setLoadflight(false)
    const { data } = response;
    const payload = data;
    return payload
  }
  // filter flight with stops
  const storeStops = async val => {
    const payload = await getDataForFilteration()
    for (let i = 0; i < payload.data.length; i++) {
      if (payload.data[i].outboundStops === val) {
        setFlightList(payload.data)
      } else {
        setFlightList([])
        setFlightError(`Looks like there are no flights at the moment with ${val} stops`)
      }
    }
  }

  // filtr flight by airline
  const storeAirline = async (val) => {
    const payload = await getDataForFilteration()
    payload.data.map((item) => {
      const {outbound} = item
      outbound.map((data) => {
        const {name} = data.airlineDetails 
        if(val === 'all') {
          return setFlightList(payload.data)
        }
        if(name.toLowerCase() === val) {
          return setFlightList(payload.data)
        }
        setFlightList([])
        return setFlightError(`Looks like there are no flights from ${val} at the moment`)
      })
      return false
    })
    // for (let i = 0; i < payload.data.length; i++) {
    //   console.log(payload.data[i])
    //   // for (let j = 0; j < payload.data[i].outbound.length; j++) {
    //   //   if(val === 'all') {
    //   //     return setFlightList(payload.data)
    //   //   }
    //   //   return console.log(payload.data, val, 'check smiliarity')
    //   //   // if (payload.data[i].outbound[j].airlineDetails.name === val) {
    //   //   //   return setFlightList(payload.data)
    //   //   // }
    //   // }
    // }
    // setFlightList([])
    // setFlightError(`There is no available flight from ${val}`)
  }

  // ACCORDIONS START-----------------

  const openBudget = () => {
    setBudget(!budget);
  };
  //Start Open Flight Details Modal-------------------
  const displayFlight = (flight) => {
    const valid_flight = typeof flight === "object" ? flight : false;
    if (valid_flight) {
      set_displayed_flight((prevState) => {
        return {
          ...prevState,
          open: true,
          data: valid_flight,
        };
      });
    } else {
      return false;
    }
  };
  // close modal
  const closeDisplay = () => {
    set_displayed_flight({
      open: false,
      data: null,
    });
  };
  //End Open Flight Details Modal-------------------
  const openoutings = () => {
    setoutings(!outings);
  };
  const openairline = () => {
    setairline(!airline);
  };
  const openrefunds = () => {
    setrefunds(!refunds);
  };
  // console.log(flightData, 'flighted')
  // ACCORDIONS END-------------------

  const handleFlightEffectV2 = useCallback(async () => {
    (async function explore_on_mount() {
      // Loading state
      if (
        searchParams.get("origin") &&
        searchParams.get("destination") &&
        searchParams.get("departureDate")
      ) {
        setFlightLoading((prevState) => {
          return {
            ...prevState,
            open: true,
            flightData: {
              origin: getSearchParams("origin"),
              destination: getSearchParams("destination"),
              passenger: flightData.adults + flightData.children + flightData.infants,
              cabin: flightData.cabin
            },
          };
        });
        const response = await HttpServices.post(
          ApiRoutes.flights.search_flight,
          flightData
        );
        const { data } = response;
        const payload = data;
        if (payload.success) {
          // Remove loader
          setFlightLoading((prevState) => {
            return {
              ...prevState,
              open: false,
            };
          });
          setLoadflight(false)
          if (Array.isArray(payload.data) && payload.data.length > 0) {
            setFlightList(payload.data);
            setFlightList2(payload.data)
          } else {
            setFlightList([]);
            setFlightList2([]);
          }
          // sorting through the data to get the highest price
          let amtArr = []
          payload?.data?.map((item) => {
            amtArr.push(item.amount)
            amtArr.sort((a, b) => a.amount - b.amount)
            return amtArr
          })
          maxsortPrice.current = amtArr.slice(-1).toString()
        }
      }
    })();
  }, [])
  useEffect(() => {
    handleFlightEffectV2()
  }, [handleFlightEffectV2])

  // PAGES HANDLER--------------------------
  const [pageItem, setpageItem] = useState(0);
  const changePage = (val) => {
    setpageItem(val);
  };



  return (
    <>
      <FlightLoader loading={flightLoading} />
      <Navbar />
      {pageItem === 0 && (
        <>
          <Wrapper>
            <WrapContent>Flight Details</WrapContent>
          </Wrapper>
          <FlightNav>
            <Flightnavbar active={1} />
          </FlightNav>
          <FlightCard show={false} />
          <SectionHolder>
            <Section>
              <LeftSection>
                <CardWrapper>
                  <CardSections>
                    <InfoSection>
                      <Filter onClick={(val) => changePage((val = 1))}>
                        Filter
                      </Filter>
                      <Filt>Filter Packages</Filt>
                    </InfoSection>
                    <Clear>Clear All</Clear>
                  </CardSections>
                  <HeroSections>
                    <CtrlSection>
                      <Filter>Price</Filter>
                      <Img src={downarrow} alt="arrow" onClick={openBudget} />
                    </CtrlSection>
                    <div className='w-full'>
                      <div>
                        <div> <SliderInput type="range" min="30000" max={maxsortPrice.current} value={filterData} onInput={filterInput} onChange={e => setFilterData(e.target.value)} steps='1' className='w-full appearance-none h-2 bg-slate-200 rounded-xl outline-none border-none' /> </div>
                        <div className='relative w-full flex items-center justify-end'>
                          <div className="relative">
                            <div className='absolute top-0 right-0 font-semibold text-lg text-orange-500' ref={slideVal}> {flightList?.currency} {filterData} </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </HeroSections>
                  <HeroSections>
                    <CtrlSection>
                      <Filter>Stops</Filter>
                      <Img src={downarrow} alt="arrow" onClick={openoutings} />
                    </CtrlSection>
                    {outings ? (
                      <FilterStops
                        storeStops={storeStops}
                      />
                    ) : null}
                  </HeroSections>
                  <HeroSections>
                    <CtrlSection>
                      <Filter>Refunds</Filter>
                      <Img src={downarrow} alt="arrow" onClick={openrefunds} />
                    </CtrlSection>
                    {refunds ? (
                      <OutingsWrapper>
                        <OutWrap className="container">
                          <Radio type="radio" name="radio" />
                          <span className="checkmark"></span>
                          <Item>Refundable</Item>
                        </OutWrap>
                        <OutWrap className="container">
                          <Radio type="radio" name="radio" />
                          <span className="checkmark"></span>
                          <Item> Non-Refundable</Item>
                        </OutWrap>
                      </OutingsWrapper>
                    ) : null}
                  </HeroSections>

                  <HeroSections>
                    <CtrlSection>
                      <Filter>Airline</Filter>
                      <Img src={downarrow} alt="arrow" onClick={openairline} />
                    </CtrlSection>
                    {airline ? (
                      <FilterByAirline
                        flightList={flightList2}
                        storeAirline={storeAirline}
                      />
                    ) : null}
                  </HeroSections>
                </CardWrapper>
                <BottomCard>
                  <ExploreWrapper>
                    <Small>
                      Explore the sandy dunes and hot deserts of the United
                      Emirates
                    </Small>
                    <Explore>Starting from $699</Explore>
                  </ExploreWrapper>
                  <ExploreBtn>Explore Deals</ExploreBtn>
                </BottomCard>
              </LeftSection>
              <RightSection>
                {/* Flight Offers */}
                <FlightOffer
                  isopen={isopen}
                  handleOpen={displayFlight}
                  setisopen={setisopen}
                  loadflight={loadflight}
                  flightError={flightError}
                  flightList={flightList}
                />
              </RightSection>
            </Section>
            <Newsletter />
            <Cheapflight />
          </SectionHolder>
        </>
      )}
      {displayed_flight.open && (
        <Flightitenary
          isopen={displayed_flight.open}
          close={closeDisplay}
          flightDetails={displayed_flight.data}
          changePage={() => {
            changePage((1)); set_displayed_flight((prevState) => {
              return {
                ...prevState,
                open: false,
              };
            });
          }}
        />
      )}
      {/*----------------------------PAGES----------------------------- */}
      {pageItem === 1 && <Passengerdetail flightDetails={displayed_flight.data} changePage={() => changePage((2))} backtoFlight={() => changePage(0)} />}
      {pageItem === 2 && <Tripsummary pageItem={pageItem} flightDetails={displayed_flight.data} changePage={() => changePage((3))} backToPassenger={() => changePage((1))} />}
      {pageItem === 3 && <Payment pageItem={pageItem} flightDetails={displayed_flight.data} changePage={() => changePage((4))} />}
      {pageItem === 4 && <Success flightDetails={displayed_flight.data} changePage={() => null} />}
      {/*----------------------------PAGES----------------------------- */}
      <Footer />
    </>
  );
}

export default Flight;

const Wrapper = styled.div``;
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

const SliderInput = styled.input`
::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 1.8rem;
  height: 1.8rem;
  border: 0.3rem solid white;
  box-shadow: 1px 2px 6px lightgrey;
  background: red;
  border-radius: 50%;
  cursor: pointer;
}
::-webkit-progress-bar {
  background-color: #777;
  border-radius: 20px;
}

::-webkit-progress-value {
  background-color: rgb(20, 240, 221);
  border-radius: 20px;
}
`;

const FlightNav = styled.div`
  background: #171b4a;
  padding: 20px;
  width: 100%;
`;
const SectionHolder = styled.div`
  background: #f4f8fa;
  width: 100%;
  padding: 20px 0;
`;
const Section = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1160px;
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 20px;
  padding: 0 20px 100px;

  @media only screen and (max-width: 996px) {
    grid-template-columns: 1fr;
  }
`;
const LeftSection = styled.div`
  @media only screen and (max-width: 996px) {
    display: none;
  }
`;
const RightSection = styled.div``;

const CardWrapper = styled.div`
  background: #fff;
`;
const BottomCard = styled.div`
  background: url(${lady});
  width: 100%;
  height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 35px;
`;
const CardSections = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: 1px solid #e1e3e4;

  padding: 35px;
`;
const HeroSections = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border-bottom: 1px solid #e1e3e4;
  padding: 35px;
  place-items: flex-start;
`;
const CtrlSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const InfoSection = styled.div``;
const Filter = styled.h4`
  font-size: 16px;
`;
const Filt = styled.p`
  font-size: 14px;
`;
const Clear = styled.h4`
  color: #2e61e6;
  font-size: 14px;
  cursor: pointer;
`;

const Img = styled.img`
  cursor: pointer;
`;

// const Input = styled.input`
//   margin-top: 30px;
// `;

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

const ExploreWrapper = styled.div``;
const Explore = styled.p`
  font-size: 14px;
  color: #fff;
`;
const ExploreBtn = styled.button`
  width: 100%;
  max-width: 159px;
  height: 54px;
  border: none;
  outline: none;
  color: #fff;
  font-size: 14px;
  font-family: CircularStd-Bold;
  width: 163px;
  height: 54px;
  background: #2e61e6;
  border-radius: 27px;
  cursor: pointer;
`;
const Small = styled.h4`
  font-size: 20px;
  color: #fff;
  margin-bottom: 15px;
`;

const PriceWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 15px;
  margin: 30px 0 0;
`;

const PriceInput = styled.input`
  display: inline-block;
  width: 100%;
  padding: 10px;
  font-size: 18px;
  border: 1px solid #282c34;
  border-radius: 5px;
`;
