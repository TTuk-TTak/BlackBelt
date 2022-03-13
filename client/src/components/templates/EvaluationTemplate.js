import styled, { keyframes } from "styled-components";
import { fontFamily, fontSize, fontWeight } from "../../_foundation/typography";
import { colors } from "../../_foundation/colors";
import { icons } from "_foundation";
// import { ReactComponent as.div} from "public\icons\star.svg";

function EvaluationTemplate({ grade, gradeNum }) {
  return (
    <Background>
      <Middle>
        <Grade>{grade}</Grade>
        <StarContainer>
          <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 70 70">
            {gradeNum > 0 ? icons["goldStar"] : icons["blackStar"]}
          </Svg>
          <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 70 70">
            {gradeNum > 1 ? icons["goldStar"] : icons["blackStar"]}
          </Svg>
          <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 70 70">
            {gradeNum > 2 ? icons["goldStar"] : icons["blackStar"]}
          </Svg>
        </StarContainer>
      </Middle>
    </Background>
  );
}

export default EvaluationTemplate;

const breatheAnimation = keyframes`
0% { opacity: 0.0; }
10% { opacity: 0.1; }
20% { opacity: 0.2; }
30% { opacity: 0.3; }
40% { opacity: 0.4; }
50% { opacity: 0.5; }
60% { opacity: 0.6; }
70% { opacity: 0.7; }
80% { opacity: 0.8; }
90% { opacity: 0.9; }
100% { opacity: 1; }
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  animation-name: ${breatheAnimation};
  animation-duration: 0.5s;
`;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 25%;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 50%;
  background: rgba(0, 0, 0, 0.7);
  // opacity: 0;
  transition: 1s linear;
`;

const Grade = styled.div`
  font-size: ${fontSize.h1};
  font-family: ${fontFamily.sans};
  font-weight: ${fontWeight.extrabold};
  color: ${colors.gray0};
`;

const StarContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`;

const Svg = styled.svg`
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  width: 60px;
  height: 60px;
  padding: 0 5px;
`;