import axios from 'axios';

export function selectCourses(selectedCourses) {
  return {
    type: "SELECT_COURSES",
    payload: selectedCourses,
  }
}