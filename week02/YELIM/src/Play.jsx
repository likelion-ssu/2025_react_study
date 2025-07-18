import styled from 'styled-components';
import NextBtn from './NextBtn';
import PrevBtn from './PrevBtn';
import { ArrowLeft, ArrowRight } from 'lucide-react';
export default function Play({ nowSong, setNowPlay, isPrevDisabled, isNextDisabled }) {
  console.log('prev', isPrevDisabled);
  return (
    <StyledWrapper>
      <StyledContent bkimg={nowSong.coverImg}>
        <StyledOnContent>
          <StyledImgbox>
            <StyledImg src={nowSong.coverImg} alt="album cover img" />
          </StyledImgbox>
          <StyledText>
            <StyledSubject>{nowSong.title}</StyledSubject>
            <StyledSinger>{nowSong.singer}</StyledSinger>
            <div>{nowSong.releasedDate}</div>
          </StyledText>
          <StyledBtnSection>
            <StyledBtn disabled={isPrevDisabled} onClick={() => setNowPlay(nowSong.id - 1)}>
              <ArrowLeft size={30} />
            </StyledBtn>
            <StyledBtn disabled={isNextDisabled} onClick={() => setNowPlay(nowSong.id + 1)}>
              <ArrowRight size={30} />
            </StyledBtn>
          </StyledBtnSection>
        </StyledOnContent>
      </StyledContent>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center; // 수직 가운데
  justify-content: center; // 수평 가운데
  position: relative;
  overflow: hidden;
`;

const StyledImgbox = styled.div``;

const StyledImg = styled.img`
  width: 100px;
`;

const StyledSubject = styled.div``;

const StyledContent = styled.div`
  font-size: 16px;
  line-height: 24px;
  position: relative;
  width: 400px;
  height: 400px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url(${(props) => props.bkimg});
    background-size: cover;
    background-position: center;
    filter: blur(8px);
    z-index: 0;
  }
`;

const StyledText = styled.div``;

const StyledSinger = styled.div``;

const StyledBtn = styled.button`
  background-color: ${(props) => (props.disabled ? '#ddd' : '#fff')};
`;

const StyledBtnSection = styled.div``;

const StyledOnContent = styled.div`
  position: relative;
  z-index: 1;
`;
