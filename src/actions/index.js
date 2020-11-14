import axios from 'axios';

export function selectedCourses(selectedCourses) {
  return {
    type: "SELECT_COURSES",
    payload: selectedCourses,
  }
}