import styled from "@emotion/styled";
import { colors, breakpoints } from "../../theme/variables";
import bgDesktop from "../../images/bg-intro-desktop.png";
import bgMobile from "../../images/bg-intro-mobile.png";

const S: any = {};
S.Section = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${bgDesktop}),
    linear-gradient(to right, ${colors.red}, ${colors.red});

  /* Also we can to it this another way */
  /* background-image: url(${bgDesktop});
  background-color: ${colors.red}; */

  /* 
  If we used rems on mediaqueries they are always realted to the default browser
  font-size, we cannot ever overrite (it won't work). Check this awesome post on stackoverflow:
  https://stackoverflow.com/questions/47409585/using-rem-units-in-media-queries-and-as-width#answer-51993054
  */
  @media (max-width: ${breakpoints.mobile}) {
    background-image: url(${bgMobile}),
      linear-gradient(to right, ${colors.red}, ${colors.red});
  }
`;

const SignupPage = () => {
  return (
    <S.Section>
      <h2>Hi from Signup page</h2>
    </S.Section>
  );
};

export default SignupPage;

// - Mobile: 375px
// - Desktop: 1440px
