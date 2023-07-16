// 부서 정보
const hrTeam = { id: 1, dname: '인사팀' };
const devTeam = { id: 2, dname: '개발팀' };
const depts = [hrTeam, devTeam];

// 직원 정보
const hong = { id: 1, name: 'Hong', dept: 1 };
const kim = { id: 2, name: 'Kim', dept: 2 };
const emps = [
  hong,
  kim,
  { id: 3, name: 'Park', dept: 2 },
  { id: 4, name: 'Choi', dept: 2 },
];

const deptMap = new Map();
depts.forEach(dept => deptMap.set(dept.dname, dept));
console.log(deptMap);

const empMap = new Map();
emps.forEach(emp => {
  const {id, name} = emp;
  
  let v = {id, name};

  empMap()

});

const empDept = new Map();
for(const emp of emps) {
  
}

// console.log(empDept.get(kim).dname) // 개발팀


// 개발팀 직원 이름 목록 // Kim, Park, Choi
// 개발팀 - dept === 2인 emps
console.log()