/** @jsx jsx */
/** @jsxFrag React.Fragment */

// eslint-disable-next-line no-unused-vars
import React from 'react';
import { jsx, css } from '@emotion/core';
import './index.css';

import learn from './images/learn.png';
import viking from './images/viking.jpg';

const centeredContainerStyles = css`
  max-width: 100%;
`;
const headerStyles = css`
  width: 100%;
  background: #13b0ff;
  padding: 15px 0;
  position: fixed;
  top: 0;
  font-size: 26px;
  z-index: 100;
`;
const headerInnerStyles = css`
  ${centeredContainerStyles};
  display: flex;
  justify-content: space-between;
  background-color: #13b0ff;
`;

const buttonStyleLeft = css`
  margin-left: 40px;
  border: none;
  color: white;
  background-color: #13b0ff;
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  position: static;
  color: #fff;
  font-weight: 700;
  font-size: 30px;
  font-weight: 700;
`;
const buttonStyleRight = css`

  border-radius: 40px;
  left: auto;
  bottom: auto;
  display: flex;
  width: 250px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border: none;
  color: #13b0ff;
  font-weight: 700;
  font-size: 18px;
  position: static;
  margin-top: 15px;
  margin-right: 50px;
  background-color: #fff;

}
`;

const buttonStyleBottom = css`
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  left: auto;
  bottom: auto;
  display: flex;
  width: 250px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  color: #13b0ff;
  font-weight: 700;
  position: static;
  margin-left: 300px;
  background-color: #fff;
`;

const buttonStyleDownload = css`
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  left: auto;
  bottom: auto;
  display: flex;
  width: 300px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  color: #fff;
  font-weight: 700;
  position: static;
  margin-left: 770px;
  background-color: #13b0ff;
`;
const sectionStyle = css`
  > div {
    ${centeredContainerStyles}
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    text-align: center;
  }
`;

const firstSectionStyle = css`
  ${sectionStyle};

  > div {
    padding: 45px;
    background-color: #13b0ff;
    height: 1400px;
  ;

}
span {
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
  margin: auto;
}

  }
  h1 {
    position: static;
    margin-top: 70px;
    font-family: Poppins, sans-serif;
    color: #fff;
    font-size: 75px;
    line-height: 110px;
    font-weight: 700;
    text-align: center;
    letter-spacing: normal;


  }
  img {
    vertical-align: middle;
    width: 335px;
    height: 670px;
  }

  h2 {

    margin-top: 60px;
    color: #fff;
    font-size: 25px;
    line-height: 35px;
    font-weight: 700;
    text-align: center;
    vertical-align: bottom;
  }
`;

const secondSectionStyle = css`
  ${sectionStyle};

  > div {
    background-color: #f5f9fc;
    height: 950px;
    display: flex;
  }

  h1 {
    margin-top: 30px;
    text-align: left;
    font-family: Poppins, sans-serif;
    color: #004568;
    font-size: 70px;
    line-height: 80px;
    font-weight: 700;
    margin-left: 300px;
    flex-direction: column;
    align-items: flex-start;
    display: flex;
    height: 700px;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 319px;
    height: 657.25px;
    border-radius: 40px;
    vertical-align: middle;
    display: flex;
    margin-top: 25px;
    margin-left: 400px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 45px;
    background-color: #fff;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.15);
  }

  p {
    text-align: left;
    font-family: Poppins, sans-serif;
    vertical-align: bottom;
    display: flex;
    margin-right: 400;
    flex-direction: column;
    align-items: center;
    width: 450px;
    margin-top: 30px;
    color: #004568;
    font-size: 22px;
    line-height: 33px;
    font-weight: 400;
  }
`;

const thirdSectionStyle = css`
  ${sectionStyle};


  > div {
    background-color: #fff;
    height: 800px;
    display: flex;
 justify-content: space-between;

}


  }
  h1 {
    text-align: left;
    font-family: Poppins, sans-serif;
    color: #004568;
    font-size: 70px;
    font-weight: 700;
    display: flex;
    margin-left: 400px;
    flex-direction: column;
    align-items: flex-start;
    display: flex;
    justify-content: center;
    align-items: center;


  }
  img {
    width: 319px;
    height: 657.25px;
    border-radius: 40px;
    vertical-align: middle;
    display: flex;
margin-top: 0px;
    margin-right: 400px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 45px;
    background-color: #fff;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.15);
  }

  p {
    text-align: left;
    font-family: Poppins, sans-serif;
margin-left: 0px;
    width: 380px;
    margin-top: 30px;
    color: #004568;
    font-size: 22px;
    font-weight: 400;
  }
`;

const fourthSectionStyle = css`
  ${sectionStyle};

  > div {
    padding: 45px;
    background-color: #f5f9fc;
    height: 950px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

}
span {
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
  margin: auto;
}

  }
  h1 {
    padding-right: 40px;
    padding-left: 40px;
    font-family: Poppins, sans-serif;
    color: #004568;
    font-size: 70px;
    line-height: 80px;
    font-weight: 700;
    text-align: left;
    display: flex;
    justify-content: center;

  }
  img {
    vertical-align: middle;
    width: 528px;
    height: 550px;
    display: flex;
    justify-content: center;
    margin-left: 650px

  }

  p {

    width: 600px;
    font-family: Poppins, sans-serif;
    color: #004568;
    font-size: 22px;
    line-height: 33px;
    font-weight: 500;
    text-align: center;
    display: flex;
    justify-content: center;
    margin-left:600px;

  }
`;

const footerSectionStyle = css`
  ${centeredContainerStyles};
  > div {
    display: flex;
    background-color: #13b0ff;
    color: #fff;
    height: 250px;
    justify-content: center;
    padding: 10px;
  }

  h2 {
    margin-top: 30px;
    font-size: 30px;
    line-height: 20px;
    text-decoration: none;
    padding: 10px;
    margin-left: 20px;
    font-weight: 500;
  }
  h3 {
    margin-top: 30px;
    font-size: 30px;
    line-height: 20px;
    text-decoration: none;
    margin-left: 100px;
    padding: 10px;
    font-weight: 500;
  }

  h4 {
    margin-top: 30px;
    font-size: 30px;
    line-height: 20px;
    text-decoration: none;
    margin-left: 80px;
    padding: 10px;
    font-weight: 500;
  }

  p {
    font-size: 18px;
    text-decoration: none;

    font-weight: 300;
  }
`;

function App() {
  return (
    <>
      <header css={headerStyles}>
        <div css={headerInnerStyles}>
          <button css={buttonStyleLeft}>brainfood</button>
          <button css={buttonStyleRight}>Get early access</button>
        </div>
      </header>

      <main>
        <section css={firstSectionStyle}>
          <div>
            <span>
              <h1>
                <strong>
                  Delightfully animated,<br></br> bite-sized knowledge
                </strong>
              </h1>
              <br></br>
              <a href="#a">
                <img src={learn} alt="Learn" />
              </a>
              <h2>Join our early access beta! </h2>
              <button css={buttonStyleBottom}>Sign up</button>
            </span>
          </div>
        </section>
        <section css={secondSectionStyle}>
          <div>
            <a href="#a">
              <img src={learn} alt="Learn" />
            </a>
            <h1>
              Swipe more productively
              <p>
                You deserve more than mindless Instagram and Facebook feeds. Put
                those spare minutes to use and learn something meaningful.
                Become a history buff, learn about the universe, understand how
                blockchain works, and beyond.
              </p>
            </h1>
          </div>
        </section>
        <section css={thirdSectionStyle}>
          <div>
            <h1>
              60 seconds
              <p>
                Is how long it'll take to casually learn something new. Swipe
                through all or part of a topic at your own pace, while lounging
                around at home, or on the go.
              </p>
            </h1>

            <a href="#a">
              <img src={learn} alt="Learn" />
            </a>
          </div>
        </section>
        <section css={fourthSectionStyle}>
          <div>
            <h1>Become a beta user</h1>
            <p>
              We're recruiting our super users. If you love what we're building,
              fill out a 1-min survey to download the beta.
            </p>
            <a href="#a">
              <img src={viking} alt="viking" />
            </a>
            <button css={buttonStyleDownload}>Download</button>
          </div>
        </section>
      </main>
      <footer css={footerSectionStyle}>
        <div>
          <div>
            <h2>
              brainfood
              <p>
                © Copyright 2020 Brainfood, Inc.<br></br> All rights reserved.
              </p>
            </h2>
          </div>
          <div>
            <h3>
              Company{' '}
              <p>
                <a id="a1" href="#a">
                  Contact Us
                </a>
                <br></br>
                <a href="#a">Jobs</a>
                <br></br>
                <a href="#a">About</a>
              </p>
            </h3>
          </div>
          <div>
            <h4>
              Follow us
              <p>
                <a href="#a">
                  <img alt="Instagram" />
                </a>
                <br></br>
                <a href="#a">
                  <img alt="Twitter" />
                </a>
                <br></br>
                <a href="#a">
                  <img alt="Facebook" />
                </a>
              </p>
            </h4>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
