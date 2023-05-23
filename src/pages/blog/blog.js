import Footer from "components/navigation/footer";
import Navbar from "components/navigation/navbar";
import React from "react";
import styled from "styled-components";
import happy from "assets/blog/happy.png";
import tropical from "assets/blog/tropical.png";
import travel from "assets/blog/travel.png";
import toronto from "assets/blog/toronto.png";
import seychelles from "assets/blog/seychelles.png";
import photography from "assets/blog/photography.png";
import { Link } from "react-router-dom";

function Blog() {
  const cardItems = [
    {
      img: happy,
    },
    {
      img: tropical,
    },
    {
      img: travel,
    },
    {
      img: toronto,
    },
    {
      img: seychelles,
    },
    {
      img: photography,
    },
  ];
  return (
    <>
      <Navbar />
      <HeroWrapper>
        <HeroSection>
          <Title>Broaden Your Horizon About Travels</Title>
          <Description>
            We know you love to travel for less, and it’s now easier than ever
            with Geo travel hacks, unique search options, and customizable
            filters. Discover more about how they work and go grab yourself a
            flight deal at GeoTravels
          </Description>
        </HeroSection>

        <BlogSection>
          <BlogWrapper>
            {cardItems.map((item, index) => (
              <Link to="/blogpost">
                <BlogCards key={index}>
                  <TopSection>
                    <Img src={`${item.img}`} alt="location" />
                    <Time>5 mins read</Time>
                  </TopSection>
                  <BottomSection>
                    <BlogTitle>
                      Self-transfer that includes spending steadily for Your
                      stay in Zanzibar
                    </BlogTitle>
                    <BlogDesc>
                      Our self-transfer hack helps you reach any destination
                      even if airlines don’t provide it as an existing
                      itinerary. How does it work? It’s fairly straightforward.
                      You give us the “where” and “when” and we create a travel
                      itinerary out of…
                    </BlogDesc>

                    <ControlBtnWrapper>
                      <Btn>Read More</Btn>
                      <Date>Sun 5th Feb, 2023</Date>
                    </ControlBtnWrapper>
                  </BottomSection>
                </BlogCards>
              </Link>
            ))}
          </BlogWrapper>
        </BlogSection>
      </HeroWrapper>
      <Footer />
    </>
  );
}

export default Blog;

const HeroWrapper = styled.div``;
const HeroSection = styled.div`
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
  @media only screen and (max-width: 768px) {
    margin: 50px 0;
  }
`;
const Title = styled.h4`
  font-family: CircularStd-Bold;
  font-size: 30px;
  line-height: 46px;
  margin-bottom: 15px;
`;
const Description = styled.p`
  max-width: 500px;
  font-size: 14px;
  line-height: 1.5;
`;

const BlogSection = styled.div`
  background: #f2f8fa;
`;
const BlogWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 50px 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  gap: 40px;

  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;
const BlogCards = styled.div`
  width: 100%;
  max-width: 439px;
  height: auto;
  background: #fff;
  padding: 40px 30px;
`;
const Img = styled.img`
  width: 100%;
`;
const TopSection = styled.div`
  position: relative;
`;
const Time = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  font-size: 14px;
  background: #fff;
  right: 10px;
  top: 10px;
  padding: 5px; ;
`;
const BottomSection = styled.div``;
const BlogTitle = styled.h4`
  font-size: 16px;
  margin: 20px 0;
`;
const BlogDesc = styled.p`
  font-size: 14px;
`;
const ControlBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

const Btn = styled.button`
  border: none;
  outline: none;
  color: #fff;
  font-size: 14px;
  font-family: CircularStd-Bold;
  width: 119px;
  height: 38px;
  background: #2e61e6;
  border-radius: 27px;
  cursor: pointer;
  @media only screen and (max-width: 650px) {
    width: 100px;
  }
`;
const Date = styled.p`
  font-size: 12px;
`;
