import axios from 'axios';

export function selectCourses(selectedCourses) {
  return {
    type: "SELECT_COURSES",
    payload: selectedCourses,
  }
}
export function createComment(comment) {
  return {
    type: "CREATE_COMMENT",
    payload: comment,
  }
}

export function selectVideos(selectedVideos) {
  return {
    type: "SELECT_VIDEOS",
    payload: selectedVideos,
  }
}