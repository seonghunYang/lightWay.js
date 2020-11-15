import produce from "immer";

import safetyImg from "../images/안전교육.jpg";
import sexImg from "../images/성교육.jpg";
import sexImg2 from "../images/성교육2.jpg";
import roadImg from "../images/진로교육.png";
import smokeImg from "../images/금연교육.jpg";
import etiquImg from "../images/인성교육.jpg";
import heartImg from "../images/심리교육.jpg";

const initialState = {
  courses: [
    {
      id: 0,
      name: "피임의 종류와 방법",
      teacher: "양성훈",
      grade: 3,
      videos: [],
      category: "sex",
      img: sexImg
    },
    {
      id: 1,
      name: "다양성 존중과 건전한 가치관 형성",
      teacher: "김민정",
      grade: 1,
      videos: [
        {
          v_id: 0,
          v_name: "행복하게 사는법1",
          v_link: "6IVg-FCCEnA"
        },
        {
          v_id: 1,
          v_name: "행복하게 사는법2",
          v_link: "6IVg-FCCEnA"
        },
        {
          v_id: 2,
          v_name: "행복하게 사는법3",
          v_link: "BLFam15WCko"
        },
        {
          v_id: 3,
          v_name: "행복하게 사는법4",
          v_link: "6IVg-FCCEnA"
        },
        {
          v_id: 4,
          v_name: "행복하게 사는법5",
          v_link: "6IVg-FCCEnA"
        },
        {
          v_id: 5,
          v_name: "행복하게 사는법6",
          v_link: "6IVg-FCCEnA"
        },
        {
          v_id: 6,
          v_name: "행복하게 사는법7",
          v_link: "6IVg-FCCEnA"
        }
    ],
    category: "etiquett",
    img: etiquImg
    },
    {
      id: 2,
      name: "담배의 유해성과 흡연의 폐해",
      teacher: "정지환",
      grade: 2,
      videos: [],
      category: "smoke",
      img: smokeImg
    },
    {
      id: 3,
      name: "진로 설계 및 탐색",
      teacher: "김지현",
      grade: 1,
      videos: [],
      category: "roadmap",
      img: roadImg
    },
    {
      id: 4,
      name: "심리 상담 - 스트레스와 진정",
      teacher: "김지현",
      grade: 3,
      videos: [],
      category: "heart",
      img: heartImg
    },
    {
      id: 5,
      name: "나의 역활과 관계 속의 성교육",
      teacher: "김지현",
      grade: 1,
      videos: [],
      category: "sex",
      img: sexImg2
    },
],
  selectedCourses: null,
  selectedVideos: 0,
  comments: [],
}

const reducer = produce((state, action) => {
  switch(action.type) {
    case "SELECT_COURSES":
      state.selectedCourses = action.payload;
      break;
    case "SELECT_VIDEOS":
      state.selectedVideos = action.payload;
      break;
    case "CREATE_COMMENT":
      state.comments.push(action.payload);
      break;
  }
}, initialState);

export default reducer;