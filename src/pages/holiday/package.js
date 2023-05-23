import Footer from "components/navigation/footer";
import Navbar from "components/navigation/navbar";
import ImageSliderComponent from "image-slider.component";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import cam1 from "assets/carousel/cam1.png";
import cam2 from "assets/carousel/cam2.png";
import cam6 from "assets/carousel/cam6.png";
import Bookpackage from "components/modals/bookpackage";
import HttpServices from "services/HttpServices";
import ApiRoutes from "services/ApiRoutes";
import { useParams, useSearchParams } from "react-router-dom";
import spins from '../../assets/backgrounds/spins.gif'
import tick from "assets/icons/tick.svg";

function Package() {
  const [openPackage, setopenPackage] = useState(false);
  const [loading, setLoading] = useState(true)
  const [pack, setpack] = useState({})
  const [screen, setScreen] = useState(false)
  const { id } = useParams()

  const getPackage = useCallback(async () => {
    const response = await HttpServices.get(
      `${ApiRoutes.package.get_package}/${id}`
    )
    const { data } = response
    if (data.success) {
      setLoading(false)
      const payload = data.data
      setpack(payload)
    }
  }, [id])

  useEffect(() => {
    getPackage()
  }, [getPackage])

  const handleOpenPackage = () => {
    setopenPackage(!openPackage);
  };

  const sendSignal = () => {
    setScreen(true)
    setopenPackage(false)
  }

  return (
    <>
      <Navbar />
      <Wrapper>
        {!screen && loading ? <div className='w-fit mx-auto'><img src={spins} alt={spins} /></div> : null}
        {!screen && !loading ? <SliderWrapper>
          <SlideText>
            <Left>
              <PlaceTitle>
                {pack.name}
              </PlaceTitle>
              <LocationTxt>Dubai, United Arab Emirates</LocationTxt>
            </Left>
            <Right>Fulfilled by: OneTravels Services</Right>
          </SlideText>
          <ImageSliderComponent media={pack.media} />
        </SliderWrapper> : null}

        {!screen && !loading ? <DesciptionWrapper>
          <LeftSection>
            <Title>Description</Title>
            <Desc>
              {pack.description}
            </Desc>
          </LeftSection>
          <RIghtSection>
            <div>
              <Price>&#8358;{pack.price.toLocaleString()}</Price>
              <Number>Per person sharing</Number>
            </div>
            <BookingBtn onClick={handleOpenPackage}>Make Booking</BookingBtn>
          </RIghtSection>
        </DesciptionWrapper> : null}

        {!screen && !loading ? <ItirenaryWrapper>
          <Title>Itirenary</Title>
          {pack.packagePlan.map((item, i) => (
            <ItirenaryContent key={i}>
              <DayWrapper>
                <Day>{item.title.slice(0, 3)}</Day>
                <Num>{item.title.slice(-1) < 9 ? `0${item.title.slice(-1)}` : item.title.slice(-1)}</Num>
              </DayWrapper>
              <ItirenaryDesc>
                {item.description}
              </ItirenaryDesc>
            </ItirenaryContent>
          ))}
        </ItirenaryWrapper> : null}

        {screen ? <div className="border-b border-slate-200 py-16 mb-10">
          <div className='flex items-center gap-2 w-full max-w-3xl mx-auto'>
            <img alt={tick} src={tick} className='' />
            <div className=''>
              <div className='text-2xl font-semibold drop-shadow-lg'>Package reserved successfully</div>
              <div className='text-sm text-slate-500'>Your package request has been reserved, one of our consultants will reach out to you shortly</div>
            </div>
          </div>
        </div> : null}
        <div className="_act">
          <h4>Activities and Side attraction</h4>

          <ActivityWrapper>
            <div className="activity">
              <Img src={cam1} />
              <h6>Skydiving Experience: Burj Tower and Jump roll</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur volutpat turpis
              </p>
            </div>
            <div className="activity">
              <Img src={cam2} />
              <h6>Skydiving Experience: Burj Tower and Jump roll</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur volutpat turpis
              </p>
            </div>
            <div className="activity">
              <Img src={cam6} />
              <h6>Skydiving Experience: Burj Tower and Jump roll</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur volutpat turpis
              </p>
            </div>
          </ActivityWrapper>
        </div>
      </Wrapper>
      <Footer />
      {openPackage && (
        <Bookpackage
          setopenPackage={setopenPackage}
          openPackage={openPackage}
          pack={pack}
          sendSignal={sendSignal}
        />
      )}
    </>
  );
}

export default Package;

const Wrapper = styled.div`
  background: #f4f8fa;
`;
const SliderWrapper = styled.div`
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;
const SlideText = styled.div`
  display: flex;
  padding-top: 80px;
  padding-bottom: 40px;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div``;
const PlaceTitle = styled.h4`
  font-size: 30px;
  margin-bottom: 10px;
`;
const LocationTxt = styled.p`
  color: #2e61e6;
  font-size: 14px;
`;
const Right = styled.p`
  font-size: 14px;
  color: #171b4a;
`;

const DesciptionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  grid-template-areas: "price description";
  max-width: 1160px;
  width: 100%;
  margin: 20px auto;
  padding: 20px;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas: "description" " price";
    padding: 0 20px;
    margin: 0 auto;
  }
`;
const LeftSection = styled.div`
  grid-area: price;
`;
const RIghtSection = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  grid-area: description;
  @media only screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
  }
`;

const Title = styled.h4`
  font-size: 24px;
  margin-bottom: 10px;
`;
const Desc = styled.p`
  font-size: 16px;
`;

const Price = styled.h4`
  font-size: 30px;
  text-align: center;
  @media only screen and (max-width: 768px) {
    text-align: left;
  }
`;
const Number = styled.p`
  font-size: 14px;
`;
const BookingBtn = styled.button`
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
  margin-top: 30px;
`;

const ItirenaryWrapper = styled.div`
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
`;
const ItirenaryContent = styled.div`
  display: grid;
  grid-template-columns: 150px 500px;
  margin: 20px 0;

  @media only screen and (max-width: 670px) {
    display: flex;
    gap: 20px;
  }
`;

const DayWrapper = styled.div`
  width: 98px;
  height: 98px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: 670px) {
    width: 55px;
    height: 55px;
    padding: 20px;
  }
`;
const Day = styled.p`
  font-size: 12px;
`;
const Num = styled.h4`
  font-size: 24px;
`;

const ItirenaryDesc = styled.div`
  background: #fff;
  padding: 30px;
`;

// ----------------activity section

const ActivityWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1160px;
  width: 100%;
  margin: 30px auto;
  gap: 30px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Img = styled.img`
  width: 100%;
`;
