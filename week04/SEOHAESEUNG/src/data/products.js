// 이미지 상수들
export const images = {
  cabbage1: "http://localhost:3845/assets/6cef8d9837fc1eb732a41db97cd4d22432c65125.png",
  potato1: "http://localhost:3845/assets/6fe4825985976303125a5bde2d80ec461a303f9e.png",
  potato2: "http://localhost:3845/assets/9348665b0f11fa1514a2f216c47212363f1eb7fe.png",
  sweetPotato1: "http://localhost:3845/assets/f52ebc26b7282eff0c3eddb87ce6a5fd6ea0d7fe.png",
  sweetPotato2: "http://localhost:3845/assets/a7a19d257bfdaa43db99d7f679c8a1a951e7f1df.png",
  likeIcon: "http://localhost:3845/assets/2031ab1de717b52850cda2cf890a4313022047ca.svg",
  arrowIcon: "http://localhost:3845/assets/edd109adade794b5f5be1a65df15ae13f11f461e.svg",
  sortIcon: "http://localhost:3845/assets/4ad9e460916a56b0a9871f95e145f9223c3d0db1.svg",
  selectedIcon: "http://localhost:3845/assets/e0bff79c25fa390335ff926695333de458e281d3.svg",
  ellipseIcon: "http://localhost:3845/assets/03abb7afb36d2aef9edba44c322efa14cda60766.svg",
  dividerIcon: "http://localhost:3845/assets/cacb83b95ff7761e007b8da5a6e00d06b60c7e45.svg"
};

// 상품 데이터
export const products = [
  {
    id: 1,
    name: "햇 감자 2kg(박스)",
    price: 5490,
    origin: "국산",
    image: images.potato1,
    likes: 343,
    category: "potato"
  },
  {
    id: 2,
    name: "감자 1.2KG(봉)",
    price: 4490,
    origin: "국산",
    image: images.potato2,
    likes: 343,
    category: "potato"
  },
  {
    id: 3,
    name: "유명산지 여주 밤고구마",
    price: 6490,
    origin: "국산",
    image: images.sweetPotato1,
    likes: 343,
    category: "sweetPotato"
  },
  {
    id: 4,
    name: "꿀고구마 1KG(봉)",
    price: 5990,
    origin: "국산",
    image: images.sweetPotato2,
    likes: 343,
    category: "sweetPotato"
  }
];

// 카테고리 데이터
export const categories = [
  {
    id: "vegetables",
    name: "채소",
    subcategories: [
      { id: "potato", name: "고구마/감자" },
      { id: "carrot", name: "당근" },
      { id: "onion", name: "양파" }
    ]
  },
  {
    id: "fruits",
    name: "과일",
    subcategories: [
      { id: "apple", name: "사과/배" },
      { id: "citrus", name: "감귤/만감류" },
      { id: "berry", name: "딸기/체리/블루베리" }
    ]
  }
];

// 상품 상세 데이터
export const productDetails = {
  1: {
    id: 1,
    name: "햇 감자 2kg(박스)",
    price: 5490,
    origin: "국산",
    image: images.potato1,
    description: "신선한 햇 감자를 박스 단위로 제공합니다.",
    category: "potato"
  }
}; 