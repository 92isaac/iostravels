import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import logo from "assets/icons/logo.png";
import usa from "assets/icons/usa.png";
import ngn from "assets/icons/ngn.png";
import search from "assets/icons/search.svg";
import bluesearch from "assets/icons/bluesearch.png";
import feathersearch from "assets/icons/feathersearch.svg";
import downarrow from "assets/icons/downarrow.svg";
import forwardarrow from "assets/icons/forwardarrow.svg";
import hamburger from "assets/icons/hamburger.svg";
import close from "assets/icons/close.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showCurrency, setShowCurrency] = useState(false);

  const modalRef = useRef(null);
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowMenu(false);
      setShowCurrency(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  // HANDLE NAVIGATION
  const [isOpen, setIsOpen] = useState(false);
  const [searchisOpen, setsearchIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleSearch = () => {
    setsearchIsOpen(!searchisOpen);
    setIsOpen(false);
  };

  return (
    <Wrapper>
      {" "}
      {/* MOBILE MENU */}
      <div className={isOpen ? "_blurmodal" : ""}>
        <nav className="_nav">
          <Link to="/">
            <Logo src={logo} />
          </Link>
          <ul className={isOpen ? "menu-open" : "menu-closed"}>
            <Link to="/">
              <li>
                Flight <Arrow src={forwardarrow} />
              </li>
            </Link>
            <Link to="/packages">
              <li>
                Holiday Packages
                <Arrow src={forwardarrow} />
              </li>
            </Link>
            <Link to="/visa">
              <li>
                Visa
                <Arrow src={forwardarrow} />
              </li>{" "}
            </Link>

            <Link to="/affiliate">
              <li>
                Affiliates
                <Arrow src={forwardarrow} />
              </li>
            </Link>

            <Link to="/corporate">
              <li>
                Corporates
                <Arrow src={forwardarrow} />
              </li>
            </Link>
            <Link to="/blog">
              <li>
                Blog
                <Arrow src={forwardarrow} />
              </li>
            </Link>
            <li>
              Login
              <Arrow src={forwardarrow} />
            </li>
          </ul>
          <div className="_gz">
            <LinksWrapper>
              <Links
                onClick={() => setShowCurrency(!showCurrency)}
                className="mobileLink"
              >
                <SmallC>
                  <CountryLogo src={usa} /> USD
                </SmallC>
                <Icon
                  src={downarrow}
                  onClick={() => setShowCurrency(!showCurrency)}
                />
                {showCurrency ? (
                  <div className="mobiledropdown-menu" ref={modalRef}>
                    <SubLinks>
                      <CountryLogo src={usa} /> USD
                    </SubLinks>
                    <SubLinks>
                      <CountryLogo src={ngn} /> NGN
                    </SubLinks>
                  </div>
                ) : null}
              </Links>
              <SearchIcon src={search} onClick={toggleSearch} />
            </LinksWrapper>
            {isOpen ? (
              <HamMenu src={close} onClick={toggleMenu} />
            ) : (
              <HamMenu src={hamburger} onClick={toggleMenu} />
            )}
          </div>
        </nav>
      </div>
      {/* /* DESKTOP VERSION----------------------------- * /} */}
      <NavWrap>
        <LeftSection>
          <LinkWrapper>
            <Links>
              <Link to="/">
                <Logo src={logo} />
              </Link>
            </Links>
            <Link to="/">
              <Links>Flight</Links>
            </Link>
            <Link to="/packages">
              <Links>Holiday Packages</Links>
            </Link>

            <Link to="/visa">
              <Links>Visa</Links>
            </Link>
            <Links onClick={() => setShowMenu(!showMenu)}>
              More
              <Icon src={downarrow} onClick={() => setShowMenu(!showMenu)} />
              {showMenu ? (
                <ul className="dropdown-menu" ref={modalRef}>
                  <Link to="/affiliate">
                    <SubLinks>Affiliates</SubLinks>
                  </Link>
                  <Link to="/corporate">
                    <SubLinks>Corporates</SubLinks>
                  </Link>
                  <Link to="/blog">
                    <SubLinks>Blog</SubLinks>
                  </Link>
                </ul>
              ) : null}
            </Links>
          </LinkWrapper>
        </LeftSection>
        <RightSection>
          <LinkWrapper>
            <Links onClick={() => setShowCurrency(!showCurrency)}>
              <SmallC className="mr-4">
                <CountryLogo src={usa} /> USD
              </SmallC>
              <Icon
                src={downarrow}
                onClick={() => setShowCurrency(!showCurrency)}
              />
              {showCurrency ? (
                <ul className="dropdown-menu" ref={modalRef}>
                  <SubLinks>
                    <CountryLogo src={usa} /> USD
                  </SubLinks>
                  <SubLinks>
                    <CountryLogo src={ngn} /> NGN
                  </SubLinks>
                </ul>
              ) : null}
            </Links>
            <Links>Login</Links>
            <SearchIcon src={search} onClick={toggleSearch} />
          </LinkWrapper>
        </RightSection>
      </NavWrap>
      {/* ---------------search handler--------------- */}
      <div className={searchisOpen ? "searchmenu-open" : "searchmenu-closed"}>
        <div className={searchisOpen ? "_blurSearchmodal" : ""}>
          <div className="_searchWrapper">
            <div className="_searcholder">
              <span className="_sm">
                Search for anything travel related. We got you covered
              </span>
              <div className="_inputWrapper">
                <span>
                  <SearchIcon src={feathersearch} />
                </span>
                <input
                  type="text"
                  placeholder="Search Anything"
                  className="_input"
                />
                <span className="_close" onClick={toggleSearch}>
                  <Ham src={close} />
                </span>
              </div>
              <div className="_popular">
                <span className="_pop">Popular Searches</span>
                <div className="_search">
                  <span className="searchResults">Visa Procurement</span>
                  <span className="searchResults">Medical Travel</span>
                  <span className="searchResults">Cheap Holidays</span>
                  <span className="searchResults">
                    Insurance and Protection
                  </span>
                  <span className="searchResults">Requirements</span>
                </div>
              </div>
              <div className="_searchAny">
                <h6 className="searchTitle"> Search for anything</h6>
                <div className="_smSearch">
                  <div className="_searchWrap">
                    <div>
                      <SearchIcon src={bluesearch} className="" />
                    </div>
                    <div className="_smSe">
                      <h6>Search for your flight</h6>
                      <p>
                        You can search and view your flight using your reference
                        ID
                      </p>
                    </div>
                  </div>
                  <div className="_searchWrap">
                    <div>
                      <SearchIcon src={bluesearch} className="" />
                    </div>
                    <div className="_smSe">
                      <h6>Search for your flight</h6>
                      <p>
                        You can search and view your flight using your reference
                        ID
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;
const NavWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1160px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  @media only screen and (max-width: 968px) {
    display: none;
  }
`;
const Icon = styled.img`
  margin-left: 5px;
`;
const LeftSection = styled.div`
  width: 100%;
`;
const LinkWrapper = styled.ul`
  list-style: none;
  color: #171b4a;
  font-weight: 600;
  max-width: 750px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
  font-family: CircularStd-Bold;
`;
const Links = styled.li`
  margin-right: 30px;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
`;
const SubLinks = styled.li`
  margin: 20px 0;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  display: flex;
`;
const Logo = styled.img`
  width: 100px;
`;
const Ham = styled.img`
  width: 17px;
  height: 14px;

  @media (max-width: 680px) {
    width: 10px;
  } ;
`;
const HamMenu = styled.img`
  width: 17px;
  height: 14px;
`;
const RightSection = styled.div`
  z-index: 10;
  position: relative;
  cursor: pointer;
`;

const SearchIcon = styled.img`
  @media (max-width: 680px) {
    width: 15px;
  } ;
`;
const CountryLogo = styled.img`
  margin-right: 2px;
  position: relative;
`;

const SmallC = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Arrow = styled.img``;

const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
