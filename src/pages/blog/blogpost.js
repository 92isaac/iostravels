import Footer from "components/navigation/footer";
import Navbar from "components/navigation/navbar";
import React from "react";
import styled from "styled-components";
import seychelles from "assets/blog/seychelles.png";
import man from "assets/people/man.png";
import happy from "assets/blog/happy.png";
import tropical from "assets/blog/tropical.png";

function Blogpost() {
  const cardItems = [
    {
      img: happy,
    },
    {
      img: tropical,
    },
  ];
  return (
    <>
      <Navbar />
      <Wrapper>
        <BlogSectionWrapper>
          <Title>
            Self-Transfer That Includes Spending Steadily For Your Stay In
            Zanzibar
          </Title>
          <BlogImg src={seychelles} alt="blog location" />
          <InfoWrapper>
            <Info>
              <Author>By Akinleye Ogunleye</Author>
              <Time>• 5mins Read</Time>
            </Info>
            <Date>Sun, 5th Feb, 2023</Date>
          </InfoWrapper>
          <BlogPost>
            Lorem ipsum dolor sit amet consectetur. At sagittis iaculis arcu
            dolor aenean odio. Cursus pharetra pulvinar amet a aliquet. Sed
            morbi egestas et nullam facilisi ullamcorper condimentum ut
            pellentesque. Risus ac sed felis proin. Mauris at arcu just nulla. A
            tempor tortor semper amet diam nunc. Venenatis commodo hendrerit
            iaculis cursus odio. Luctus sagittis non nulla malesuada. Duis arcu
            commodo netus lectus sagittis ultricies fusce elementum. Diam
            maecenas facilisi fames amet et. Nulla diam mor nulla amet posuere.
            Nunc volutpat egestas nulla aliquet etiam morbi non. Nulla quam
            elementum arcu placerat mollis tort. Diam ut parturient lectus velit
            etiam. Parturient in porttitor dapibus eu. Pharetra amet netus lorem
            quam nisi ipsum ultricies volutpat sed. Urna scelerisque interdum
            nunc dis feugiat adipiscing blandit et nulla. Amet ut tristique
            consectetur quis nibh lacinia et sit morbi. Fermentum proin id
            congue hendrerit gravida ut. Nunc facilisi velit non quam amet odio
            mattis dui. Odio nulla lobortis scelerisque tellus aliquet
            scelerisque ut. Semper viverra nibh malesuada ullamcorper integer.
            Ultricies quis a dui vestibulum proin ornare id nisl augue.
            Imperdiet posuere accumsan elit volutpat lorem ullamcorper duis
            curabitur. Integer elementum donec blandit eget vulputate. Amet
            commodo luctus facilisis malesuada nam at ultrices. Vulputate
            ullamcorper morbi non posuere dignissim imperdiet amet. Elementum
            feugiat donec tellus ullamcorper porttitor nisl. Molestie sodales in
            in tempus. Est cras faucibus mauris in at au. Convallis magna aenean
            turpis faucibus. Ante at arcu at aenean nisi suspendisse est. Porta
            sem consectetur sed eget ean aliquam vel vortor phasellus sit
            pharetra et massa et. Suspendisse vel duis fames phasellus massa
            aliquam sapien pulv. Eu pretium ultricies molestie pharetra placerat
            aliquam eu massa tempus. Pellentesque mi praesent id quis lectus
            ipsum ullamcorper adipiscing. Massa diam urna ut nunc ultricies
            penatibus risus. Eu pellentesque pellentesque interdum mauris
            ridiculus varius. Sagittis neque eu semper euismod purus non purus.
          </BlogPost>
          <CommentBtn>Leave a comment</CommentBtn>
        </BlogSectionWrapper>

        <Comments>
          <CommentWrapper>
            <CommentCard>
              <AuthorImg src={man} />
              <CommentInfo>
                <AuthorInfo>
                  <Info>
                    <Author>By Akinleye Ogunleye</Author>
                    <Day>2 days ago</Day>
                  </Info>
                  <CommentText>
                    Here’s a few way to start planning for your baecation mode.
                    Conversely, the auditors should modify their. Reports as
                    necessary if they find the comments valid.
                  </CommentText>
                </AuthorInfo>
              </CommentInfo>
            </CommentCard>
            <CommentCard>
              <AuthorImg src={man} />
              <CommentInfo>
                <AuthorInfo>
                  <Info>
                    <Author>By Akinleye Ogunleye</Author>

                    <Day>2 days ago</Day>
                  </Info>
                  <CommentText>
                    Here’s a few way to start planning for your baecation mode.
                    Conversely, the auditors should modify their. Reports as
                    necessary if they find the comments valid.
                  </CommentText>
                </AuthorInfo>
              </CommentInfo>
            </CommentCard>
            <CommentCard>
              <AuthorImg src={man} />
              <CommentInfo>
                <AuthorInfo>
                  <Info>
                    <Author>By Akinleye Ogunleye</Author>
                    <Day>2 days ago</Day>
                  </Info>
                  <CommentText>
                    Here’s a few way to start planning for your baecation mode.
                    Conversely, the auditors should modify their. Reports as
                    necessary if they find the comments valid.
                  </CommentText>
                </AuthorInfo>
              </CommentInfo>
            </CommentCard>
          </CommentWrapper>
        </Comments>

        <OtherPostsWrapper>
          <BlogSection>
            <Head>You can also read these;</Head>
            <BlogWrapper>
              {cardItems.map((item, index) => (
                <BlogCards key={index}>
                  <TopSection>
                    <Img src={`${item.img}`} alt="location" />
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
              ))}
            </BlogWrapper>
          </BlogSection>
        </OtherPostsWrapper>
      </Wrapper>
      <Footer />
    </>
  );
}

export default Blogpost;

const Wrapper = styled.div``;
const Comments = styled.div`
  background: #f2f8fa;
`;
const BlogSectionWrapper = styled.div`
  width: 100%;
  margin: 50px auto;
  max-width: 1160px;
  padding: 0 20px;
`;
const Title = styled.h4`
  font-size: 30px;
  line-height: 46px;
  margin-bottom: 30px;
`;
const BlogImg = styled.img`
  width: 100%;
`;
const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 25px 0;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Author = styled.p`
  font-family: CircularStd-Bold;
`;

const BlogPost = styled.p`
  margin: 30px 0;
  border-top: 1px solid #eaeaea;
  padding-top: 30px;
  line-height: 2;
`;
const CommentBtn = styled.button`
  border: none;
  outline: none;
  color: #fff;
  font-size: 14px;
  font-family: CircularStd-Bold;
  width: 185px;
  height: 54px;
  background: #2e61e6;
  border-radius: 27px;
  cursor: pointer;
`;

const CommentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 50px 20px;
  max-width: 900px;
`;
const CommentCard = styled.div`
  background: #fff;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 30px 0;
`;
const AuthorImg = styled.img``;
const CommentInfo = styled.div``;
const AuthorInfo = styled.p``;
const Day = styled.p`
  color: #2cadd0;
  font-size: 14px;
`;
const CommentText = styled.p`
  font-size: 14px;
  margin: 10px 0;
`;

const OtherPostsWrapper = styled.div``;
const Head = styled.h4`
  font-size: 20px;
`;

const BlogSection = styled.div`
  background: #fff;
  margin: 0 auto;
  max-width: 1200px;
  padding: 50px 20px;
`;
const BlogWrapper = styled.div`
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin: 0 auto;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;
const BlogCards = styled.div`
  width: 100%;
  max-width: 439px;
  height: auto;
  background: #fff;
  padding: 40px 30px;
  border: 1px solid #eaeaea;
`;
const Img = styled.img`
  width: 100%;
`;
const TopSection = styled.div`
  position: relative;
`;
const Time = styled.div`
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
