import Footer from "components/navigation/footer";
import Navbar from "components/navigation/navbar";
import React from "react";
import styled from "styled-components";
import visalady from "assets/people/visalady.png";
import arrow from "assets/icons/arrow.svg";
import { Link } from "react-router-dom";
import Cheapflight from "components/universal/cheapflight";

function Visa() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <div className='grid grid-cols-1 mt-10 lg:grid-cols-2 w-11/12 mx-w-[80%] mx-auto gap-10'>
          <div className='order-2 lg:order-1'>
            <Title>GeoTravel Visa Application</Title>
            <div className='text-xl font-bold text-zinc-500'>Let’s help you with Visa Application Process</div>
            <Description>
              Planning a trip abroad can be an exciting experience, but navigating the visa process can be daunting. This is why we offer expert visa assistance services to help make your journey as smooth as possible. We work closely with embassies and consulates to stay up-to-date on the latest visa requirements and changes.
            </Description>

            <ContentWrap>
              <Icon src={arrow} />
              <Desc>
                Consultation: Our team of visa experts is dedicated to providing you with personalized attention and guidance throughout the visa application process. We provide you with a consultation to assess your specific visa needs and ensure that you have a clear understanding of the application requirements.
              </Desc>
            </ContentWrap>

            <ContentWrap>
              <Icon src={arrow} />
              <Desc>
                Document Preparation: GeoTravel visa experts have extensive knowledge and experience in preparing the necessary documents required for your visa application. We work closely with you to guarantee that every document is accurate, up-to-date, and meets the requirements of the embassy or consulate. This will save you time and reduce the stress associated with preparing your visa application.
              </Desc>
            </ContentWrap>

            <ContentWrap>
              <Icon src={arrow} />
              <Desc>
                Application Submission: Submitting a visa application can be a complex and time-consuming process. Our team of visa experts handles the entire application process on your behalf, thereby ensuring that all required documents and information are included, certifying your application is accurate and prompt, saving you valuable time, and minimizing the risk of errors or omissions that could result in a delay or rejection of your application.
              </Desc>
            </ContentWrap>

            <ContentWrap>
              <Icon src={arrow} />
              <Desc>
                Personalized Services: GeoTravel understands that every traveler has unique needs and requirements when it comes to visa applications. This is why we offer personalized services to meet your specific needs and confirm that your visa application is tailored to your individual circumstances. We also provide you with specialized advice and support to help you make the right visa decisions, whether it is a tourist visa, business visa, work visa, student visa, or any other form of visa.
              </Desc>
            </ContentWrap>

            <ContentWrap>
              <Icon src={arrow} />
              <Desc>
                Follow-up and Updates: We totally understand how stressful visa application processing can be, this is why we are committed to providing regular updates on the status of your application and handling any follow-up requests from the embassy or consulate. Our team of visa experts will keep you informed every step of the way, so you can focus on planning your trip with peace of mind.
              </Desc>
            </ContentWrap>

            <ContentWrap>
              <Icon src={arrow} />
              <Desc>

                Our visa assistance service guarantees peace of mind, convenience, and the confidence that your visa application will be handled accurately and swiftly.
                Contact us today to learn more about our visa assistance services and how we can help make your next trip a success!
              </Desc>
            </ContentWrap>
            <BtnWrapper>
              <Link to="/processvisa">
                <Btn>Get Started</Btn>
              </Link>
            </BtnWrapper>
          </div>
          <div className="order-1 lg:order-2">
            <img src={visalady} alt="visalady" className="w-4/5 mx-auto" />
          </div>
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default Visa;

const Wrapper = styled.div``;
const Title = styled.h4`
  font-family: CircularStd-Bold;
  font-size: 30px;
  line-height: 46px;
`;
const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin: 30px 0;
`;
const Desc = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;
const BtnWrapper = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;
const Btn = styled.button`
  border: none;
  outline: none;
  color: #fff;
  font-size: 14px;
  width: 100%;
  height: 54px;
  background: #2e61e6;
  border-radius: 27px;
  margin-top: 50px;
  cursor: pointer;
`;

const ContentWrap = styled.div`
  border: 1px solid #eaeaea;
  background: #fbfeff;
  padding: 20px;
  display: flex;
  margin: 20px 0;
`;
const Icon = styled.img`
  margin-right: 20px;
`;
