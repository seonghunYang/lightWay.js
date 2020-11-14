import produce from "immer";

const initialState = {
  courses: [
    {
      id: 0,
      name: "성교육",
      teacher: "양성훈",
      grade: 1,
      videos: [],
      category: "sex"
    },
    {
      id: 1,
      name: "인성교육",
      teacher: "김민정",
      grade: 1,
      videos: [
        {
          v_id: 0,
          v_name: "행복하게 사는법",
        },
        {
          v_id: 1,
          v_name: "행복하게 사는법2",
        },
        {
          v_id: 2,
          v_name: "행복하게 사는법3",
        }
    ],
    category: "etiquett"
    },
    {
      id: 2,
      name: "진로교육",
      teacher: "정지환",
      grade: 2,
      videos: [],
      category: "smoke"
    },
    {
      id: 3,
      name: "성교육",
      teacher: "김지현",
      grade: 1,
      videos: [],
      category: "roadmap"
    },
    {
      id: 4,
      name: "성교육",
      teacher: "김지현",
      grade: 3,
      videos: [],
      category: "heart"
    },
    {
      id: 5,
      name: "성교육",
      teacher: "김지현",
      grade: 1,
      videos: [],
      category: "sex"
    },
],
  selectedCourses: null,
}

const reducer = produce((state, action) => {
  switch(action.type) {
    case "SELECT_COURSES":
      state.selectedCourses = action.payload;
  }
}, initialState);

export default reducer;