/**
 * some people will call this const.js
 *
 * this file holds all constants
 *
 * Reason why we have below is sometimes we might use a variable in many places, instead of changing the whole thing from all files, we can simply just change it here.
 * */

// ALERT
export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';
// REGISTER
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
// AUTH
export const USER_LOADED = 'USER_LOADED';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';
// ACCOUNT
export const ACCOUNT_DELETED = 'ACCOUNT_DELETED';
// PROFILES
export const GET_PROFILE = 'GET_PROFILE';
export const GET_PROFILES = 'GET_PROFILES';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const CLEAR_PROFILE = 'CLEAR_PROFILE';
export const PROFILE_ERROR = 'PROFILE_ERROR';
export const GET_REPOS = 'GET_REPOS';
export const NO_REPOS = 'NO_REPOS';
// POSTS
export const GET_POSTS = 'GET_POSTS';
export const GET_POST = 'GET_POST';
export const DELETE_POST = 'DELETE_POST';
export const ADD_POST = 'ADD_POST';
export const POST_ERROR = 'POST_ERROR';
export const UPDATE_LIKES = 'UPDATE_LIKES';
// COMMENT
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
