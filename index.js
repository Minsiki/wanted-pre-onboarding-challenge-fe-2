/**
 * @typedef {object} Todo
 * @description todo object
 * @property {string} id 아이디
 * @property {string} contents 내용
 * @property {boolean} completed 완료여부
 * @property {string} category 카테고리
 * @property {Tag[]} tags 태그들
 *
 */

/**
 * @typedef {object} Tag
 * @description tag object
 * @property {string} id 아이디
 * @property {string} contents 내용
 */

/**
 * @function addTodo
 * @param {string} id 아이디
 * @param {string} contents 내용(필수 입력)
 * @param {boolean} completed 완료여부
 * @param {string} category 카테고리
 * @param {Tag[]} tags 태그들
 */
const addTodo = (id, contents, completed = false, category, tags = []) => {};

/**
 * @function getTodo
 * @param {string} id 아이디
 * @returns {Todo[]} todos
 */
const getTodo = (id = "") => {
  return todos;
};

/**
 * @function setTodo
 * @param {string} id 아이디
 * @param {string} contents 내용(필수 입력)
 * @param {boolean} completed 완료여부
 * @param {string} category 카테고리
 * @param {Tag[]} tags 태그들
 */
const setTodo = (id, contents, completed = false, category, tags = []) => {};

/**
 * @function deleteTodo
 * @param {string} id 아이디
 */
const deleteTodo = (id) => {};

/**
 * @function deleteTodo
 * @param {string} id 아이디
 * @param {string} tagId 특정 tag 아이디
 */
const deleteTags = (id, tagId) => {};
