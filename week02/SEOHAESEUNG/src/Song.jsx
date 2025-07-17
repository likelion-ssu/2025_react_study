import styled from "styled-components";
import likeButton from "./assets/likeButton.png";
import { useState } from "react";

const SongSection = styled.div`
    display: flex;
    align-items: center;
    margin: 20px;
    gap: 20px;
    img {
        width: 200px;
    }
`;

const InfoSection = styled.div`
    display: flex;
    flex-direction: column;
`

const LikeSection = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    img {
        width: 20px;
    }
`

function Song({title, artist, albumArt, likes}) {
    const [likeNum, setLikeNum] = useState(likes);

    function handleLike() {
        setLikeNum(i => i + 1);
    }

    return (
        <SongSection>
            <img src={albumArt} alt= {`${title} 제목`}/>
            <InfoSection>
                <p className="title">
                제목 : {title}
            </p>
            <p className="artist">
                가수 : {artist}
            </p>
            <LikeSection>
                <img src={likeButton} alt="좋아요 버튼" onClick={handleLike}/>
                <p>{likeNum}</p>
            </LikeSection>
            </InfoSection>
        </SongSection>
    );
}


export default Song;
