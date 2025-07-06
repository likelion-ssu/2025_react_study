import styled from "styled-components"

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

function Song({title, artist, albumArt}) {
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
            </div>
        </SongSection>
    );
}

export default Song