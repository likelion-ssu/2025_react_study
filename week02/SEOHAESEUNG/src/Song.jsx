import styled from "styled-components";
import likeButton from "./assets/likeButton.png";

const SongSection = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    gap: 10px;
    img {
        width: 200px;
    }
    div {
    }
`;

function Song({title, artist, albumArt, likeNum, buttonFunction}) {
    return (
        <SongSection>
            <img src={albumArt} alt= {`${title} 제목`}/>
            <div>
                <p className="title">
                제목 : {title}
            </p>
            <p className="artist">
                가수 : {artist}
            </p>
            <img src={likeButton} alt="좋아요 버튼" onClick={buttonFunction}/>
            <p>{likeNum}</p>
            </div>
        </SongSection>
    );
}


export default Song;
