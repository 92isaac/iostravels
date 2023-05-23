import Footer from "components/navigation/footer";
import Navbar from "components/navigation/navbar";
import Cheapflight from "components/universal/cheapflight";
import Newsletter from "components/universal/newsletter";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import downarrow from "assets/icons/downarrow.svg";
import harshil from "assets/backgrounds/harshil.png";
import { Link, useSearchParams } from "react-router-dom";
import HttpServices from "services/HttpServices";
import ApiRoutes from "services/ApiRoutes";
import spins from '../../assets/backgrounds/spins.gif'

function Holiday() {
  const [searchParams] = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [packs, setPacks] = useState({})

  // get all packages
  const getAllPackages = useCallback(async () => {
    const getSearchParams = (val = "") => {
      const data = searchParams.get(val);
      return data ?? "";
    };
    (async function explore_on_mount() {
        searchParams.get("trip_type") &&
        searchParams.get("budget") &&
        searchParams.get("month")

        const res = await HttpServices.get(
          ApiRoutes.package.all_packages
        )
        const { data } = res
        if (data.success) {
          const { packages } = data.data
          setLoading(false)
          // fliter through the data's payload and return based on the search params if exists
          setPacks(packages)
        }
    })()
  }, [searchParams])
  useEffect(() => {
    getAllPackages()
  }, [getAllPackages])

  const [budget, setBudget] = useState(false);
  const openBudget = () => {
    setBudget(!budget);
  };
  const [outings, setoutings] = useState(false);
  const openoutings = () => {
    setoutings(!outings);
  };
  const [month, setmonth] = useState(false);
  const openmonth = () => {
    setmonth(!month);
  };
  return (
    <>
      <Navbar />
      <Wrapper>
        <HolidayWrapper>
          <HolidayTitle>
            <Title>Holiday Packages</Title>
          </HolidayTitle>
        </HolidayWrapper>
        <SectionWrapper>
          <HolidayHero>
            <HeroSectionWrapper>
              <LeftSection>
                <CardWrapper>
                  <CardSections>
                    <InfoSection>
                      <Filter>Filter</Filter>
                      <Filt>Filter Packages</Filt>
                    </InfoSection>
                    <Clear>Clear All</Clear>
                  </CardSections>
                  <HeroSections>
                    <CtrlSection>
                      <Filter>Budget</Filter>
                      <Img src={downarrow} alt="arrow" onClick={openBudget} />
                    </CtrlSection>
                    {budget ? (
                      <Input
                        type="range"
                        min="1"
                        max="100"
                        className="slider"
                      />
                    ) : null}
                  </HeroSections>
                  <HeroSections>
                    <CtrlSection>
                      <Filter>Trip Type</Filter>
                      <Img src={downarrow} alt="arrow" onClick={openoutings} />
                    </CtrlSection>
                    {outings ? (
                      <OutingsWrapper>
                        <OutWrap className="container">
                          <Radio type="radio" name="radio" />
                          <span class="checkmark"></span>
                          <Item>Private Trip</Item>
                        </OutWrap>
                        <OutWrap className="container">
                          <Radio type="radio" name="radio" />
                          <span class="checkmark"></span>
                          <Item>Group Trip</Item>
                        </OutWrap>
                        <OutWrap className="container">
                          <Radio type="radio" name="radio" />
                          <span class="checkmark"></span>
                          <Item>Customized Trip </Item>
                        </OutWrap>
                      </OutingsWrapper>
                    ) : null}
                  </HeroSections>
                  <HeroSections>
                    <CtrlSection>
                      <Filter>Month</Filter>
                      <Img src={downarrow} alt="arrow" onClick={openmonth} />
                    </CtrlSection>
                    {month ? (
                      <OutingWrapper>
                        <OutWrap className="container">
                          <Radio type="radio" name="radio" />
                          <span class="checkmark"></span>
                          <Item>January </Item>
                        </OutWrap>
                        <OutWrap className="container">
                          <Radio type="radio" name="radio" />
                          <span class="checkmark"></span>
                          <Item>February </Item>
                        </OutWrap>
                        <OutWrap className="container">
                          <Radio type="radio" name="radio" />
                          <span class="checkmark"></span>
                          <Item>March </Item>
                        </OutWrap>
                        <OutWrap className="container">
                          <Radio type="radio" name="radio" />
                          <span class="checkmark"></span>
                          <Item>April </Item>
                        </OutWrap>
                        <OutWrap className="container">
                          <Radio type="radio" name="radio" />
                          <span class="checkmark"></span>
                          <Item>May </Item>
                        </OutWrap>
                        <OutWrap className="container">
                          <Radio type="radio" name="radio" />
                          <span class="checkmark"></span>
                          <Item>June </Item>
                        </OutWrap>
                        <OutWrap className="container">
                          <Radio type="radio" name="radio" />
                          <span class="checkmark"></span>
                          <Item>July </Item>
                        </OutWrap>
                        <OutWrap className="container">
                          <Radio type="radio" name="radio" />
                          <span class="checkmark"></span>
                          <Item>August </Item>
                        </OutWrap>
                        <OutWrap className="container">
                          <Radio type="radio" name="radio" />
                          <span class="checkmark"></span>
                          <Item>September </Item>
                        </OutWrap>
                        <OutWrap className="container">
                          <Radio type="radio" name="radio" />
                          <span class="checkmark"></span>
                          <Item>October </Item>
                        </OutWrap>
                        <OutWrap className="container">
                          <Radio type="radio" name="radio" />
                          <span class="checkmark"></span>
                          <Item>November </Item>
                        </OutWrap>
                        <OutWrap className="container">
                          <Radio type="radio" name="radio" />
                          <span class="checkmark"></span>
                          <Item>December </Item>
                        </OutWrap>
                      </OutingWrapper>
                    ) : null}
                  </HeroSections>
                </CardWrapper>
              </LeftSection>

              <RightSection>
                {loading ? <div className='w-fit mx-auto'><img src={spins} alt={spins} /></div> :
                  packs.map((item, i) => (
                    <Link to={`/package/${item._id}`} key={i}>
                      <LocationCard key={i}>
                          <TopSection style={{ backgroundImage: `linear-gradient(180deg, #171b4a00 0%, #15172c 100%), url(${item.media[0].url})` }}></TopSection>
                        <BottomSection>
                          <BottomLeft>
                            <Place>UNITED ARAB EMIRATES</Place>
                            <Route>
                              {item.name}
                            </Route>
                          </BottomLeft>
                          <BottomRight>
                            <Cost>₦{item.price.toLocaleString()}</Cost>
                            <Share>Per person sharing</Share>
                          </BottomRight>
                        </BottomSection>
                      </LocationCard>
                    </Link>
                  ))
                }
              </RightSection>
            </HeroSectionWrapper>
          </HolidayHero>
          <NewsWrapper>
            <Newsletter />
          </NewsWrapper>
        </SectionWrapper>
      </Wrapper>
      <Footer />
    </>
  );
}

export default Holiday;

const Wrapper = styled.div``;
const HolidayWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1160px;
  padding: 0 20px;
`;
const HolidayTitle = styled.div`
  margin: 20px 0;
`;
const Title = styled.h4`
  font-size: 20px;
`;
const SectionWrapper = styled.div`
  width: 100%;
  background: #f4f8fa;
  padding: 0 20px;
`;
const NewsWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1160px;
  padding: 50px 0;
`;

const HolidayHero = styled.div`
  padding-top: 20px;
`;
const HeroSectionWrapper = styled.div`
  width: 100%;
  margin: 50px auto;
  max-width: 1160px;
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 20px;

  @media only screen and (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;
const LeftSection = styled.div``;
const RightSection = styled.div``;

const CardWrapper = styled.div`
  background: #fff;
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
`;
const CtrlSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const Input = styled.input`
  margin-top: 30px;
`;

const OutingsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const OutingWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const OutWrap = styled.label`
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
`;

const LocationCard = styled.div`
  background: #fff;
  margin-bottom: 30px;
`;
const TopSection = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 310px;
  width: 100%;
`;
const BottomSection = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;
const BottomLeft = styled.div``;
const Place = styled.p`
  font-size: 12px;
`;
const Route = styled.h4`
  font-size: 18px;
  margin-top: 10px;
  @media only screen and (max-width: 850px) {
    font-size: 16px;
    white-space: break-spaces;
  }
`;
const BottomRight = styled.div``;
const Cost = styled.h4`
  font-size: 24px;
`;
const Share = styled.p`
  font-size: 12px;
`;
const Radio = styled.input``;
const Item = styled.h4`
  color: #171b4a;
  font-weight: 500;
  margin: 0 8px;
`;
