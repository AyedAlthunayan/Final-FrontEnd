import {BASE_URL} from "./const";

export const APIs = {
    "USER": {
        REGISTER_USER: `${BASE_URL}api/v1/student/register`,
        LOGIN: `${BASE_URL}api/v1/student/login`,
    },
    'ADMIN': {
        LOGIN: `${BASE_URL}api/v1/admin/login`
    },
    "PROFESSOR": {
        GET_ALL_PROFESSOR_API: `${BASE_URL}api/v1/professors`,
        FIND_BY_ID: `${BASE_URL}api/v1/professors/`
    },
    "COMMENT": {
        POST_COMMENT: `${BASE_URL}api/v1/rating`,
        COMMENT_BY_PROFESSOR_ID: `${BASE_URL}api/v1/rating/comments/`,
        DELETE_BY_ID: `${BASE_URL}api/v1/rating/`,
    }
}
