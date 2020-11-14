import produce from "immer";

const initialState = {
  courses: [
    {
      id: 1,
      name: "성교육",
      teacher: "양성훈",
      grade: 1,
      videos: []
    },
    {
      id: 2,
      name: "인성교육",
      teacher: "김민정",
      grade: 1,
      videos: []
    },
    {
      id: 3,
      name: "진로교육",
      teacher: "정지환",
      grade: 2,
      videos: []
    },
    {
      id: 4,
      name: "성교육",
      teacher: "김지현",
      grade: 1,
      videos: []
    },
    {
      id: 5,
      name: "성교육",
      teacher: "김지현",
      grade: 3,
      videos: []
    },
    {
      id: 6,
      name: "성교육",
      teacher: "김지현",
      grade: 1,
      videos: []
    },
],
  selectedCourses: [],
}

const reducer = produce((state, action) => {
  switch(action.type) {
  }
}, initialState);

export default reducer;