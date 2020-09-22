/** @jsx jsx */
/** @jsxFrag React.Fragment */

// eslint-disable-next-line no-unused-vars
import React from 'react';
import { jsx, css } from '@emotion/core';
import './index.css';

import learn from './images/learn.png';

const centeredContainerStyles = css`
  max-width: 1920px;
  padding-left: 15px;
  padding-right: 15px;
`;

const headerStyles = css`
  width: 100%;
  background: #13b0ff;
  padding: 15px 0;
  position: fixed;
  top: 0;
  font-size: 13px;
`;
const headerInnerStyles = css`
  ${centeredContainerStyles};
  display: flex;
  justify-content: space-between;
  background-color: #13b0ff;
`;

const buttonStyleLeft = css`
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;
const buttonStyleRight = css`
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;
const sectionStyle = css`
  > div {
    ${centeredContainerStyles}

    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
  }
`;

const firstSectionStyle = css`
  ${sectionStyle};

  > div {
    padding: 140px;
    background-color: #13b0ff;
    height: 1400px;
  text-align: center;

}
span {
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
  margin: auto;
}

  }
  h1 {
    text-align: center;
    color: white;
    font-size: 76px;
    font-weight: 900;
    letter-spacing: 1px;
    margin-bottom: 15px;
    line-height: 1,1;


  }
  img {
    vertical-align: middle;
  }

  h2 {
    padding-top: 70px;
    text-align: center;
    color: white;
    font-size: 25px;

  }
`;

const secondSectionStyle = css`
  ${sectionStyle};

  > div {
    padding: 140px;
    background-color: #f5f9fc;
    height: 950px;
  text-align: center;

}
span {
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
  margin: auto;
}

  }
  h1 {
    text-align: center;
    color: white;
    font-size: 60px;

  }
  img {
    vertical-align: middle;
  }

  h2 {
    padding-top: 70px;
    text-align: center;
    color: white;
    font-size: 25px;
  }
`;

const thirdSectionStyle = css`
  ${sectionStyle};

  > div {
    padding: 140px;
    background-color: #fff;
    height: 800px;
  text-align: center;

}
span {
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
  margin: auto;
}

  }
  h1 {
    text-align: center;
    color: white;
    font-size: 60px;

  }
  img {
    vertical-align: middle;
  }

  h2 {
    padding-top: 70px;
    text-align: center;
    color: white;
    font-size: 25px;
  }
`;

const fourthSectionStyle = css`
  ${sectionStyle};

  > div {
    padding: 140px;
    background-color: #f5f9fc;
    height: 950px;
  text-align: center;

}
span {
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
  margin: auto;
}

  }
  h1 {
    text-align: center;
    color: white;
    font-size: 60px;

  }
  img {
    vertical-align: middle;
  }

  h2 {
    padding-top: 70px;
    text-align: center;
    color: white;
    font-size: 25px;
  }
`;

const footerSectionStyle = css`
  ${centeredContainerStyles};
  display: flex;
  justify-content: space-between;
  background-color: #13b0ff;
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
              <button>Sign up</button>
            </span>
          </div>
        </section>
        <section css={secondSectionStyle}>
          <div>
            <a href="#a">
              <img src={learn} alt="Learn" />
            </a>
            <h1>Swipe more productively</h1>
            <p>
              You deserve more than mindless Instagram and Facebook feeds. Put
              those spare minutes to use and learn something meaningful. Become
              a history buff, learn about the universe, understand how
              blockchain works, and beyond.
            </p>
          </div>
        </section>
        <section css={thirdSectionStyle}>
          <div>
            <h1>60 seconds</h1>
            <p>
              Is how long it'll take to casually learn something new. Swipe
              through all or part of a topic at your own pace, while lounging
              around at home, or on the go.
            </p>
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
              <img src={learn} alt="Learn" />
            </a>
            <button>Download</button>
          </div>
        </section>
      </main>
      <footer css={footerSectionStyle}>
        <div>
          <div>
            <h2>brainfood</h2>
            <p>© Copyright 2020 Brainfood, Inc. All rights reserved.</p>
          </div>
          <div>
            <h2>Company</h2>
            <a href="#a">Contact Us</a>
            <a href="#a">Jobs</a>
            <a href="#a">About</a>
          </div>
          <div>
            <h2>Social networks</h2>
            <a href="#a">
              <img alt="Instagram" />
            </a>
            <a href="#a">
              <img alt="Twitter" />
            </a>
            <a href="#a">
              <img alt="Facebook" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
