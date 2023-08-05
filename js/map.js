/**
 * detMap과 empDept를 만들고, 개발팀 직원 이름 목록을 출력하시오.
 */

const hrTeam = { id: 1, dname: '인사팀' };
const devTeam = { id: 2, dname: '개발팀' };
const depts = [hrTeam, devTeam];

const hong = { id: 1, name: 'Hong', dept: 1 };
const kim = { id: 2, name: 'Kim', dept: 2 };
const emps = [
  hong,
  kim,
  { id: 2, name: 'Park', dept: 3 },
  { id: 2, name: 'Choi', dept: 4 },
];
