import styled, { css } from "styled-components";
import { colors, fontSize, fontWeight, fontFamily } from "../../_foundation";
import { useTranslation } from "react-i18next";
// import SmallCarousel from "components/molecules/Carousel/SmallCarousel";
import { useEffect, useState } from "react";
// import TempCarousel from "components/atoms/Carousel/TempCarousel";
import SmallCarousel from "components/molecules/Carousel/SmallCarousel";
import BottomButtonList from "components/molecules/BottomButtonList";
// import SSCarousel from "components/atoms/Carousel/SSCarousel";

function ComboTemplate({
  buttons,
  selectedPoomsaeIdx,
  changePoomsae,
  selectedPoomsaeInfo,
  selectedChapterIdx,
  changeChapter,
  goToStage,
}) {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Container>
        <TopContainer>
          <TextContainer>
            <Title language={t("language")}>
              {t("language") === "KOR"
                ? selectedPoomsaeInfo.poomsaeName
                : selectedPoomsaeInfo.poomsaeNameE}
            </Title>
            <SubTitle language={t("language")}>
              {t("language") === "KOR"
                ? selectedChapterIdx + 1 + " 단락"
                : "Chapter " + selectedChapterIdx + 1}
            </SubTitle>
            {selectedPoomsaeInfo.comboList && (
              <Description>
                {t("language") === "KOR"
                  ? selectedPoomsaeInfo.comboList[selectedChapterIdx].comboExplain
                  : selectedPoomsaeInfo.comboList[selectedChapterIdx].comboExplainE}
              </Description>
            )}
          </TextContainer>
          <CarouselContainer>
            <SmallCarousel
              items={[0, 1, 2, 3]}
              active={selectedChapterIdx}
              setActive={changeChapter}
              goToStage={goToStage}
            ></SmallCarousel>
          </CarouselContainer>
        </TopContainer>
        <ButtonContainer>
          <BottomButtonList
            buttons={buttons}
            selectedPoomsaeIdx={selectedPoomsaeIdx}
            changePoomsae={changePoomsae}
          />
        </ButtonContainer>
      </Container>
      <BackgroundImage />
    </>
  );
}

export default ComboTemplate;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  color: ${colors.gray0};
  overflow: hidden;
`;

const TopContainer = styled.div`
  display: flex;
  height: 80%;
`;

const TextContainer = styled.div`
  width: 35%;
  height: 100%;
  padding: 25vh 90px 0 150px;
`;

const Title = styled.div`
  ${(props) =>
    props.language === "ENG" &&
    css`
      font-family: Dry Brush;
      font-size: 5rem;
      line-height: 150%;
    `}
  ${(props) =>
    props.language === "KOR" &&
    css`
      font-family: Dokdo;
      font-size: 6.5rem;
      line-height: 120%;
    `}
`;

const SubTitle = styled.div`
  ${(props) =>
    props.language === "ENG" &&
    css`
      font-family: Dry Brush;
      font-size: 3rem;
      line-height: 150%;
    `}
  ${(props) =>
    props.language === "KOR" &&
    css`
      font-family: Dokdo;
      font-size: 3.5rem;
      line-height: 120%;
    `}
`;

const Description = styled.div`
  padding-top: 20px;
  font-family: inherit;
  font-size: ${fontSize.xl};
  letter-spacing: 0.5px;
`;

const CarouselContainer = styled.div`
  width: 65%;
  height: 100%;
  /* padding: 100px 110px 0 0; */
  position: relative;
  flex-wrap: wrap;
  align-content: center;
`;

const BackgroundImage = styled.div`
  filter: gray;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url("/images/promotionBackground.jpg");
  background-size: 100% 100%;
  filter: grayscale(100%) brightness(20%);
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
`;

const ButtonContainer = styled.div`
  /* height: 20%; */
  padding-top: 40px;
`;
