import React, { SyntheticEvent } from "react";

import styled from "@emotion/styled";
import { colors, breakpoints, hugeFontSize } from "../../theme/variables";
import bgDesktop from "../../images/bg-intro-desktop.png";
import bgMobile from "../../images/bg-intro-mobile.png";

import { Link } from "react-router-dom";

const S: any = {};
S.Section = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${bgDesktop}),
    linear-gradient(to right, ${colors.red}, ${colors.red});
  background-size: cover;

  /* Also we can to it this another way */
  /* background-image: url(${bgDesktop});
  background-color: ${colors.red}; */

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4.5rem;

  /* 
  If we used rems on mediaqueries they are always realted to the default browser
  font-size, we cannot ever overrite (it won't work). Check this awesome post on stackoverflow:
  https://stackoverflow.com/questions/47409585/using-rem-units-in-media-queries-and-as-width#answer-51993054
  */
  @media (max-width: ${breakpoints.mobileSmall}) {
    background-image: url(${bgMobile}),
      linear-gradient(to right, ${colors.red}, ${colors.red});
    display: block;
  }

  @media (max-width: ${breakpoints.mobileBig}) {
    display: block;
  }

  /* TODO: fix this little ñapa! How to set brackgrounds on section that fill the body ?*/
  @media (max-width: 525px) {
    height: 100%;
  }

  padding: 0 2.4rem;
  padding-bottom: 7.2rem;
  color: #fff;
  /* margin: 0 auto; */
`;

S.HomeTitle = styled.div`
  text-align: center;
  padding-top: 8.8rem;
  margin-bottom: 6.4rem;

  @media (min-width: ${breakpoints.mobileBig}) {
    max-width: 52.5rem;
    text-align: initial;
  }

  .heading {
    padding-bottom: 4.5rem;
    font-size: 5rem;
    line-height: 5.5rem;

    @media (min-width: ${breakpoints.mobileSmall}) and (max-width: ${breakpoints.tablet}) {
      font-size: 4rem;
      padding-bottom: 1.6rem;
    }

    @media (max-width: ${breakpoints.mobileSmall}) {
      font-size: ${hugeFontSize};
      line-height: 3.6rem;
      padding-bottom: 1.6rem;
    }
  }
`;

S.FormContainer = styled.div`
  @media (min-width: ${breakpoints.mobileBig}) {
    max-width: 54rem;
  }
`;

S.TrialBanner = styled.div`
  background-color: ${colors.violet};
  display: block;
  padding: 1.8rem 6.6rem;
  border-radius: 0.9rem;
  text-align: center;
  margin-bottom: 2.4rem;
  box-shadow: 0 0.8rem 0 rgba(0, 0, 0, 0.15);
  font-size: 1.5rem;

  .highlighted {
    font-weight: 700;
  }
`;

S.Form = styled.form`
  background-color: #fff;
  border-radius: 1.1rem;
  padding: 2.4rem;
  text-align: center;
  box-shadow: 0 0.8rem 0 rgba(0, 0, 0, 0.15);

  .input {
    font-size: 1.4rem;
    color: ${colors.dark};
    font-family: inherit;
    padding: 1.5rem 2rem;
    width: 100%;
    font-weight: 600;
    border: 0.1rem solid #dedede;
    border-radius: 0.5rem;
    margin-bottom: 1.6rem;

    &:focus {
      outline: none;
      border: 0.25rem solid ${colors.green};

      &:invalid {
        border: 0.25rem solid ${colors.red};
      }
    }
  }
  .btn {
    text-transform: uppercase;
    padding: 1.5rem 3rem;
    display: block;
    border-radius: 0.5rem;
    background-color: ${colors.green};
    width: 100%;
    font-size: 1.5rem;
    font-weight: 600;

    letter-spacing: 1px;
    border: none;
    cursor: pointer;
    color: #fff;

    box-shadow: inset 0 -0.4rem 0 rgba(0, 0, 0, 0.15);
    margin-bottom: 1.1rem;
  }

  .terms {
    font-size: 1.1rem;
    line-height: 2.1rem;
    font-weight: 500;
    color: #bab7d4;
    padding: 0 7%;

    .link {
      color: ${colors.red};
      text-decoration: none;
      font-weight: 700;
    }
  }
`;

const SignupPage = () => {
  const onSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
    // TODO: make everything work with React
    console.log("Submit the content after validating");
  };
  return (
    <S.Section>
      <S.HomeTitle>
        <h2 className="heading">Learn to code by watching others</h2>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </S.HomeTitle>
      <S.FormContainer>
        <S.TrialBanner>
          <span className="highlighted">Try it free 7 days</span> then $20/mo.
          thereafter
        </S.TrialBanner>
        <S.Form onSubmit={onSubmit}>
          <input
            className="input"
            type="text"
            placeholder="First Name"
            required
          />
          <input
            className="input"
            type="text"
            placeholder="Last Name"
            required
          />
          <input
            className="input"
            type="email"
            placeholder="Email Address"
            required
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            required
          />
          <button type="submit" className="btn">
            claim your free trial
          </button>
          {/* TODO: for RPG compliance you need to checkbox this! */}
          <p className="terms">
            By clicking the button, you are agreeing to our{" "}
            <Link className="link" to="/terms">
              Terms and Services
            </Link>
          </p>
        </S.Form>
      </S.FormContainer>
    </S.Section>
  );
};

export default SignupPage;
