# 2주차 스터디 주제 / 과제 공지

## 2주차 주제

- **JSX**: React의 jsx 이해하기

- **컴포넌트(Component)**: 리액트에서 화면 구성을 하는 함수형 컴포넌트 이해하기

- **Props**: 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 방법 이해하기.

## 2주차 과제

- **2주차 과제에 대한 아티클 작성해오기**
- **아래 명세서에 맞추어 과제 완성해오기**


## ✅ 필수 구현 사항

### `Song.jsx` 컴포넌트 생성

- `props`로 다음 세 가지 정보를 받아야 합니다.

- `title` (노래 제목)

- `artist` (가수)

- `albumArt` (앨범 이미지 URL)

- 이 컴포넌트는 전달받은 `props`를 이용해 각 노래에 대한 ui를 완성합니다.



### 데이터 배열 생성 (`App.jsx`)

- `App.jsx` 파일 안에 최소 4개 이상의 노래 정보가 담긴 배열을 직접 만듭니다.

- 각 노래 데이터는 `id`, `title`, `artist`, `albumArt` 속성을 가진 객체여야 합니다.



- **예시 데이터:**

```javascript

// App.jsx



const songs = [

{

id: 1,

title: "Hype Boy",

artist: "NewJeans",

albumArt: "URL", // 예시 이미지 URL

},

{

id: 2,

title: "Love Dive",

artist: "IVE",

albumArt: "URL", // 예시 이미지 URL

},

{

id: 3,

title: "Fearless",

artist: "LE SSERAFIM",

albumArt: "URL", // 예시 이미지 URL

},

{

id: 4,

title: "TOMBOY",

artist: "(G)I-DLE",

albumArt: "URL", // 예시 이미지 URL

},

];

```



### 목록 렌더링 (`App.jsx`)

- 위에서 만든 데이터 배열을 `.map()` 메서드로 순회합니다.

- 각 노래 데이터에 대해 `Song` 컴포넌트를 렌더링하고, `props`를 통해 해당 노래의 정보를 전달합니다.

- **주의**: `map()` 안에서 렌더링하는 각 `Song` 컴포넌트에는 React가 항목을 식별할 수 있도록 고유한 `key` prop을 반드시 전달해야 합니다. (예: `key={song.id}`)



## ✨ 추가 구현 사항 (선택)

- CSS를 이용하여 자신만의 플레이리스트를 자유롭게 꾸며보세요.

## 추가 설명

- App.jsx, Song.jsx 파일이 필요합니다.
- App.jsx에서 Song 컴포넌트를 통해 화면을 구성해야 합니다.



## 제출 안내

- **제출 기한**: 2025년 7월 11일 (금) 스터디 시작 전

- **제출 방법**

- 리액트 스터디를 진행할 폴더를 생성한다

- 그 폴더 내에서 초록색으로 된 `<> code` 버튼을 찾는다

- https 링크를 복사한다

- 생성한 폴더에서 터미널을 킨다

- git clone "복사 링크"

- git branch "자기 이름"

- git checkout "자기 이름"

- 작업

- git add .

- git commit -m "적고 싶은 메세지"

- git push origin "자기 이름"

---

### 이해가 잘 되지 않은 부분에 대해서는 편하게 질문해주세요~!