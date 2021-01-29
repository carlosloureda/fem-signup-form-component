import React, { SyntheticEvent } from "react";

import styled from "@emotion/styled";
import { colors, breakpoints, hugeFontSize } from "../../theme/variables";
import bgDesktop from "../../images/bg-intro-desktop.png";
import Button from "../atoms/Button";
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
    animation: moveInLeftHeading 0.5s ease-out;
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
  .subheading {
    animation: moveInLeftSubheading 1s ease-in;
  }

  @keyframes moveInLeftHeading {
    0% {
      opacity: 0;
      transform: translateX(-20rem);
    }
    70% {
      transform: translateX(5rem);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  }

  @keyframes moveInLeftSubheading {
    0% {
      opacity: 0;
      transform: translateX(-20rem);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
`;

S.FormContainer = styled.div`
  @media (min-width: ${breakpoints.mobileBig}) {
    max-width: 54rem;
    flex: 1;
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

    &:focus {
      outline: none;
      border: 0.25rem solid ${colors.green};

      &:invalid {
        border: 0.25rem solid ${colors.red};
      }
    }
  }

  .form__input-required {
    position: absolute;
    background-color: ${colors.red};
    width: 2.4rem;
    height: 2.4rem;
    top: 2rem;
    right: 1.6rem;
    border-radius: 50%;
    display: none;
  }

  .form__group.error {
    > .form__input-required {
      display: inline;
    }
    > .input {
      border: 0.25rem solid ${colors.red};
      color: ${colors.red};
      &::placeholder,
      &::-webkit-input-placeholder,
      &::-ms-input-placeholder {
        color: transparent;
      }
    }
    > .form__label-error {
      display: block;
    }
  }

  .form__group {
    /* TODO: see how to improve this once the errors are there! */
    margin-bottom: 1.6rem;
    position: relative;
  }

  .form__label-error {
    color: ${colors.red};
    display: block;
    text-align: right;
    font-size: 1.1rem;
    line-height: 1.6rem;
    font-style: italic;
    font-weight: 500;
    margin-top: 0.6rem;
    display: none;
    /* &.error {
      display: block;
    } */
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

  .successHeading {
    color: ${colors.green};
    padding: 2rem 0;
  }
`;

type FormErrors = {
  firstName?: String;
  lastName?: String;
  email?: String;
  password?: String;
};

export const IDLE_STATUS = "idle";
export const LOADING_STATUS = "loading";
export const SUCCESS_STATUS = "success";
export const ERROR_STATUS = "error";

/**
 * Validates an email
 * @param email {string} - The email to be validated
 * @returns boolean - True if it is a valid email, false otherwise
 *
 * Attribution to Sayantini: https://www.edureka.co/blog/javascript-email-validation/
 */
const validateEmail = (email: String): Boolean => {
  const mailformat = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return email.match(mailformat) ? true : false;
};

const SignupPage = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = React.useState<FormErrors>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [status, setStatus] = React.useState<String>(IDLE_STATUS);

  const onChange = (e: SyntheticEvent & { target: HTMLInputElement }): void => {
    const target = e.target;
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const onSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
    console.log("Sending");
    setStatus(LOADING_STATUS);

    const _errors: FormErrors = {};
    const { firstName, lastName, email, password } = formData;
    if (!firstName) {
      _errors.firstName = `First Name cannot be empty`;
    }
    if (!lastName) {
      _errors.lastName = `Last Name cannot be empty`;
    }
    if (!email) {
      _errors.email = `Email cannot be empty`;
    } else if (!validateEmail(email)) {
      _errors.email = `Looks like this is not an email`;
    }
    if (!password) {
      _errors.password = `Password cannot be empty`;
    }

    setFormErrors(_errors);

    if (
      !_errors.firstName &&
      !_errors.lastName &&
      !_errors.email &&
      !_errors.password
    ) {
      setTimeout(() => {
        console.log("Faking http request");
        setStatus(SUCCESS_STATUS);
      }, 2000);
    } else {
      setStatus(IDLE_STATUS);
    }
  };

  return (
    <S.Section>
      <S.HomeTitle>
        <h2 className="heading">Learn to code by watching others</h2>
        <p className="subheading">
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
        <S.Form onSubmit={onSubmit} noValidate>
          {status === SUCCESS_STATUS && (
            <h1 className="successHeading">Thanks for registering!</h1>
          )}
          <div
            className={`form__group ${formErrors?.firstName ? "error" : ""}`}
          >
            <span className="form__input-required">&#33;</span>
            <input
              className="input"
              type="text"
              placeholder="First Name"
              required
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={onChange}
            />
            <label htmlFor="firstName" className="form__label-error">
              {formErrors?.firstName}
            </label>
          </div>
          <div className={`form__group ${formErrors?.lastName ? "error" : ""}`}>
            <span className="form__input-required">&#33;</span>
            <input
              className="input"
              type="text"
              placeholder="Last Name"
              required
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={onChange}
            />
            <label htmlFor="lastName" className="form__label-error">
              {formErrors?.lastName}
            </label>
          </div>
          <div className={`form__group ${formErrors?.email ? "error" : ""}`}>
            <span className="form__input-required">&#33;</span>
            <input
              className="input"
              type="email"
              placeholder="Email Address"
              required
              id="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              autoComplete="email"
            />
            <label htmlFor="email" className="form__label-error">
              {formErrors?.email}
            </label>
          </div>
          <div className={`form__group ${formErrors?.password ? "error" : ""}`}>
            <span className="form__input-required">&#33;</span>
            Valid names are: label element, title undefined, aria-label
            undefined, aria-labelledby undefined.
            <input
              className="input"
              aria-label="password"
              type="password"
              placeholder="Password"
              required
              name="password"
              id="password"
              value={formData.password}
              onChange={onChange}
              autoComplete="current-password"
            />
            <label htmlFor="password" className="form__label-error">
              {formErrors?.password}
            </label>
          </div>
          <Button type={"submit"} disabled={status === LOADING_STATUS}>
            claim your free trial
          </Button>

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
