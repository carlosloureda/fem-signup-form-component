import styled from "@emotion/styled";
import { colors, breakpoints, hugeFontSize } from "../../theme/variables";
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

  padding: 0 2.4rem;
`;

S.HomeTitle = styled.div`
  text-align: center;
  padding-top: 8.8rem;
  margin-bottom: 6.4rem;

  .heading {
    font-size: ${hugeFontSize};
    line-height: 3.6rem;
    padding-bottom: 1.6rem;
  }
`;

S.TrialBanner = styled.div`
  background-color: ${colors.violet};
  display: block;
  padding: 1.8rem 6.6rem;
  border-radius: 0.9rem;
  text-align: center;
  margin-bottom: 2.4rem;
  box-shadow: 0 0.7rem 1rem rgba(0, 0, 0, 0.6);
  font-size: 1.5rem;

  .highlighted {
    font-weight: 700;
  }
`;

const SignupPage = () => {
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
      <div>
        <S.TrialBanner>
          <span className="highlighted">Try it free 7 days</span> then $20/mo.
          thereafter
        </S.TrialBanner>
        <form action="">
          <input type="text" />
        </form>
      </div>
    </S.Section>
  );
};

export default SignupPage;

// - Mobile: 375px
// - Desktop: 1440px
