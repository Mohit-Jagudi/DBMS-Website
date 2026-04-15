const sqlData = {
    "select": [
        {
            question: "Display all columns of the EMP table.",
            query: "SELECT * FROM SCOTT.EMP;",
            columns: ["EMPNO", "ENAME", "JOB", "MGR", "HIREDATE", "SAL", "COMM", "DEPTNO"],
            rows: [
                [7369, "SMITH", "CLERK", 7902, "17-DEC-80", 800, "NULL", 20],
                [7499, "ALLEN", "SALESMAN", 7698, "20-FEB-81", 1600, 300, 30],
                [7521, "WARD", "SALESMAN", 7698, "22-FEB-81", 1250, 500, 30],
                [7566, "JONES", "MANAGER", 7839, "02-APR-81", 2975, "NULL", 20],
                [7839, "KING", "PRESIDENT", "NULL", "17-NOV-81", 5000, "NULL", 10]
            ]
        },
        {
            question: "Display EMPNO, ENAME, and SAL of all employees.",
            query: "SELECT EMPNO, ENAME, SAL FROM SCOTT.EMP;",
            columns: ["EMPNO", "ENAME", "SAL"],
            rows: [
                [7369, "SMITH", 800],
                [7499, "ALLEN", 1600],
                [7521, "WARD", 1250],
                [7566, "JONES", 2975],
                [7839, "KING", 5000]
            ]
        },
        {
            question: "Display unique job titles from the EMP table.",
            query: "SELECT DISTINCT(JOB) FROM SCOTT.EMP;",
            columns: ["JOB"],
            rows: [["CLERK"], ["SALESMAN"], ["MANAGER"], ["ANALYST"], ["PRESIDENT"]]
        },
        {
            question: "Display employee names along with their department numbers.",
            query: "SELECT ENAME, DEPTNO FROM SCOTT.EMP;",
            columns: ["ENAME", "DEPTNO"],
            rows: [
                ["SMITH", 20],
                ["ALLEN", 30],
                ["WARD", 30],
                ["JONES", 20],
                ["KING", 10]
            ]
        },
        {
            question: "Display all details from the DEPT table.",
            query: "SELECT * FROM SCOTT.DEPT;",
            columns: ["DEPTNO", "DNAME", "LOC"],
            rows: [
                [10, "ACCOUNTING", "NEW YORK"],
                [20, "RESEARCH", "DALLAS"],
                [30, "SALES", "CHICAGO"],
                [40, "OPERATIONS", "BOSTON"]
            ]
        },
        {
            question: "Display distinct department numbers from the EMP table.",
            query: "SELECT DISTINCT(DEPTNO) FROM SCOTT.EMP;",
            columns: ["DEPTNO"],
            rows: [[10], [20], [30]]
        },
        {
            question: "Display employee name and their annual salary (SAL * 12).",
            query: "SELECT ENAME, SAL*12 AS ANNUAL_SALARY FROM SCOTT.EMP;",
            columns: ["ENAME", "ANNUAL_SALARY"],
            rows: [
                ["SMITH", 9600],
                ["ALLEN", 19200],
                ["WARD", 15000],
                ["JONES", 35700],
                ["KING", 60000]
            ]
        },
        {
            question: "Display employee name, monthly salary, and commission.",
            query: "SELECT ENAME, SAL, COMM FROM SCOTT.EMP;",
            columns: ["ENAME", "SAL", "COMM"],
            rows: [
                ["SMITH", 800, "NULL"],
                ["ALLEN", 1600, 300],
                ["WARD", 1250, 500],
                ["JONES", 2975, "NULL"]
            ]
        },
        {
            question: "Display the job and salary of all employees.",
            query: "SELECT JOB, SAL FROM SCOTT.EMP;",
            columns: ["JOB", "SAL"],
            rows: [
                ["CLERK", 800],
                ["SALESMAN", 1600],
                ["SALESMAN", 1250],
                ["MANAGER", 2975],
                ["PRESIDENT", 5000]
            ]
        },
        {
            question: "Display employee names along with their manager's ID.",
            query: "SELECT ENAME, MGR FROM SCOTT.EMP;",
            columns: ["ENAME", "MGR"],
            rows: [
                ["SMITH", 7902],
                ["ALLEN", 7698],
                ["WARD", 7698],
                ["JONES", 7839],
                ["KING", "NULL"]
            ]
        }
    ],
    "where_orderby_alias": [
        {
            question: "Display employee names whose salary is greater than 3000.",
            query: "SELECT ENAME FROM SCOTT.EMP WHERE SAL > 3000;",
            columns: ["ENAME"],
            rows: [["KING"]]
        },
        {
            question: "Display employee names working in department 10.",
            query: "SELECT ENAME FROM SCOTT.EMP WHERE DEPTNO = 10;",
            columns: ["ENAME"],
            rows: [["CLARK"], ["KING"], ["MILLER"]]
        },
        {
            question: "Display employee names whose job is 'CLERK'.",
            query: "SELECT ENAME FROM SCOTT.EMP WHERE JOB = 'CLERK';",
            columns: ["ENAME"],
            rows: [["SMITH"], ["ADAMS"], ["JAMES"], ["MILLER"]]
        },
        {
            question: "Display employee names hired after 01-JAN-81.",
            query: "SELECT ENAME FROM SCOTT.EMP WHERE HIREDATE > '01-JAN-81';",
            columns: ["ENAME"],
            rows: [["ALLEN"], ["WARD"], ["JONES"], ["BLAKE"], ["CLARK"]]
        },
        {
            question: "Display employee names whose salary is less than 1500.",
            query: "SELECT ENAME FROM SCOTT.EMP WHERE SAL < 1500;",
            columns: ["ENAME"],
            rows: [["SMITH"], ["WARD"], ["MARTIN"], ["TURNER"], ["ADAMS"], ["JAMES"], ["MILLER"]]
        },
        {
            question: "Display name, job, and salary of employees who are MANAGERS and earn more than 2000.",
            query: "SELECT ENAME, JOB, SAL FROM SCOTT.EMP WHERE SAL > 2000 AND JOB = 'MANAGER';",
            columns: ["ENAME", "JOB", "SAL"],
            rows: [["JONES", "MANAGER", 2975], ["BLAKE", "MANAGER", 2850], ["CLARK", "MANAGER", 2450]]
        },
        {
            question: "Display employee names from department 10 or 20.",
            query: "SELECT ENAME FROM SCOTT.EMP WHERE DEPTNO = 10 OR DEPTNO = 20;",
            columns: ["ENAME"],
            rows: [["SMITH"], ["JONES"], ["CLARK"], ["SCOTT"], ["KING"], ["ADAMS"], ["FORD"], ["MILLER"]]
        },
        {
            question: "Display name and salary of SALESMEN earning more than 1500.",
            query: "SELECT ENAME, SAL FROM SCOTT.EMP WHERE JOB = 'SALESMAN' AND SAL > 1500;",
            columns: ["ENAME", "SAL"],
            rows: [["ALLEN", 1600]]
        },
        {
            question: "Display employee names who are either CLERKS or ANALYSTS.",
            query: "SELECT ENAME FROM SCOTT.EMP WHERE JOB IN ('CLERK','ANALYST');",
            columns: ["ENAME"],
            rows: [["SMITH"], ["SCOTT"], ["ADAMS"], ["JAMES"], ["FORD"], ["MILLER"]]
        },
        {
            question: "Display names of employees in department 30 hired before 01-JAN-82.",
            query: "SELECT ENAME FROM SCOTT.EMP WHERE HIREDATE < '01-JAN-82' AND DEPTNO = 30;",
            columns: ["ENAME"],
            rows: [["ALLEN"], ["WARD"], ["MARTIN"], ["BLAKE"], ["TURNER"], ["JAMES"]]
        },
        {
            question: "Display employee names from departments 10, 20, or 30.",
            query: "SELECT ENAME FROM SCOTT.EMP WHERE DEPTNO IN (10,20,30);",
            columns: ["ENAME"],
            rows: [["SMITH"], ["ALLEN"], ["WARD"], ["JONES"], ["MARTIN"], ["BLAKE"], ["CLARK"], ["SCOTT"], ["KING"], ["TURNER"], ["ADAMS"], ["JAMES"], ["FORD"], ["MILLER"]]
        },
        {
            question: "Display employee names who are neither MANAGERS nor CLERKS.",
            query: "SELECT ENAME FROM SCOTT.EMP WHERE JOB NOT IN ('MANAGER','CLERK');",
            columns: ["ENAME"],
            rows: [["ALLEN"], ["WARD"], ["MARTIN"], ["SCOTT"], ["KING"], ["TURNER"], ["FORD"]]
        },
        {
            question: "Display employee names who are not in department 10.",
            query: "SELECT ENAME FROM SCOTT.EMP WHERE DEPTNO <> 10;",
            columns: ["ENAME"],
            rows: [["SMITH"], ["ALLEN"], ["WARD"], ["JONES"], ["MARTIN"], ["BLAKE"], ["SCOTT"], ["TURNER"], ["ADAMS"], ["JAMES"], ["FORD"]]
        },
        {
            question: "Display employee names with salary between 1000 and 3000.",
            query: "SELECT ENAME FROM SCOTT.EMP WHERE SAL BETWEEN 1000 AND 3000;",
            columns: ["ENAME"],
            rows: [["ALLEN"], ["WARD"], ["JONES"], ["MARTIN"], ["BLAKE"], ["CLARK"], ["SCOTT"], ["TURNER"], ["ADAMS"], ["FORD"], ["MILLER"]]
        },
        {
            question: "Display names of employees hired during the year 1981.",
            query: "SELECT ENAME FROM SCOTT.EMP WHERE HIREDATE BETWEEN '01-JAN-81' AND '31-DEC-81';",
            columns: ["ENAME"],
            rows: [["ALLEN"], ["WARD"], ["JONES"], ["BLAKE"], ["CLARK"], ["MARTIN"], ["KING"], ["TURNER"], ["JAMES"], ["FORD"]]
        },
        {
            question: "Display all employees ordered by salary in ascending order.",
            query: "SELECT * FROM SCOTT.EMP ORDER BY SAL ASC;",
            columns: ["EMPNO", "ENAME", "SAL"],
            rows: [[7369, "SMITH", 800], [7900, "JAMES", 950], [7876, "ADAMS", 1100], [7839, "KING", 5000]]
        },
        {
            question: "Display all employees ordered by salary in descending order.",
            query: "SELECT * FROM SCOTT.EMP ORDER BY SAL DESC;",
            columns: ["EMPNO", "ENAME", "SAL"],
            rows: [[7839, "KING", 5000], [7788, "SCOTT", 3000], [7902, "FORD", 3000], [7369, "SMITH", 800]]
        },
        {
            question: "Display all employees ordered by hire date.",
            query: "SELECT * FROM SCOTT.EMP ORDER BY HIREDATE;",
            columns: ["ENAME", "HIREDATE"],
            rows: [["SMITH", "17-DEC-80"], ["ALLEN", "20-FEB-81"], ["KING", "17-NOV-81"], ["ADAMS", "23-MAY-87"]]
        },
        {
            question: "Display employees ordered by department number and then by salary.",
            query: "SELECT * FROM SCOTT.EMP ORDER BY DEPTNO, SAL;",
            columns: ["DEPTNO", "ENAME", "SAL"],
            rows: [[10, "MILLER", 1300], [10, "CLARK", 2450], [10, "KING", 5000], [20, "SMITH", 800]]
        },
        {
            question: "Display employees ordered by job (ASC) and salary (DESC).",
            query: "SELECT * FROM SCOTT.EMP ORDER BY JOB ASC, SAL DESC;",
            columns: ["JOB", "ENAME", "SAL"],
            rows: [["ANALYST", "SCOTT", 3000], ["ANALYST", "FORD", 3000], ["CLERK", "MILLER", 1300], ["CLERK", "SMITH", 800]]
        },
        {
            question: "Display employee names ordered alphabetically.",
            query: "SELECT ENAME FROM SCOTT.EMP ORDER BY ENAME;",
            columns: ["ENAME"],
            rows: [["ADAMS"], ["ALLEN"], ["BLAKE"], ["CLARK"], ["FORD"]]
        },
        {
            question: "Display employees of department 30 ordered by salary.",
            query: "SELECT * FROM SCOTT.EMP WHERE DEPTNO = 30 ORDER BY SAL;",
            columns: ["ENAME", "SAL", "DEPTNO"],
            rows: [["JAMES", 950, 30], ["WARD", 1250, 30], ["ALLEN", 1600, 30]]
        },
        {
            question: "Display name and annual salary ordered by annual salary.",
            query: "SELECT ENAME, SAL*12 FROM SCOTT.EMP ORDER BY SAL*12;",
            columns: ["ENAME", "ANNUAL_SAL"],
            rows: [["SMITH", 9600], ["JAMES", 11400], ["KING", 60000]]
        },
        {
            question: "Display employees ordered by commission.",
            query: "SELECT * FROM SCOTT.EMP ORDER BY COMM;",
            columns: ["ENAME", "COMM"],
            rows: [["TURNER", 0], ["ALLEN", 300], ["WARD", 500], ["SMITH", "NULL"]]
        },
        {
            question: "Display employees ordered by job and then by name.",
            query: "SELECT * FROM SCOTT.EMP ORDER BY JOB, ENAME;",
            columns: ["JOB", "ENAME"],
            rows: [["ANALYST", "FORD"], ["ANALYST", "SCOTT"], ["CLERK", "ADAMS"]]
        },
        {
            question: "Display employee name with alias 'EMPLOYEE_NAME'.",
            query: "SELECT ENAME AS EMPLOYEE_NAME FROM SCOTT.EMP;",
            columns: ["EMPLOYEE_NAME"],
            rows: [["SMITH"], ["ALLEN"], ["KING"]]
        },
        {
            question: "Display salary with alias 'MONTHLY_SALARY'.",
            query: "SELECT SAL AS MONTHLY_SALARY FROM SCOTT.EMP;",
            columns: ["MONTHLY_SALARY"],
            rows: [[800], [1600], [5000]]
        },
        {
            question: "Display name and designation with custom aliases.",
            query: "SELECT ENAME AS NAME, JOB AS DESIGNATION FROM SCOTT.EMP;",
            columns: ["NAME", "DESIGNATION"],
            rows: [["SMITH", "CLERK"], ["KING", "PRESIDENT"]]
        },
        {
            question: "Display department number with alias 'DEPT_NO'.",
            query: "SELECT DEPTNO AS DEPT_NO FROM SCOTT.EMP;",
            columns: ["DEPT_NO"],
            rows: [[20], [30], [10]]
        },
        {
            question: "Display name and monthly salary using aliases.",
            query: "SELECT ENAME AS NAME, SAL AS SALARY FROM SCOTT.EMP;",
            columns: ["NAME", "SALARY"],
            rows: [["SMITH", 800], ["ALLEN", 1600]]
        },
        {
            question: "Display commission with alias 'INCENTIVE'.",
            query: "SELECT COMM AS INCENTIVE FROM SCOTT.EMP;",
            columns: ["INCENTIVE"],
            rows: [["NULL"], [300], [500], [0]]
        },
        {
            question: "Display name, job, and salary ordered by job.",
            query: "SELECT ENAME AS NAME, JOB AS JOB_TITLE, SAL AS SALARY FROM SCOTT.EMP ORDER BY JOB;",
            columns: ["NAME", "JOB_TITLE", "SALARY"],
            rows: [["FORD", "ANALYST", 3000], ["SMITH", "CLERK", 800]]
        },
        {
            question: "Display employees of department 30 earning more than 1500, ordered by salary.",
            query: "SELECT * FROM SCOTT.EMP WHERE DEPTNO = 30 AND SAL > 1500 ORDER BY SAL;",
            columns: ["ENAME", "SAL"],
            rows: [["ALLEN", 1600], ["BLAKE", 2850]]
        },
        {
            question: "Display employees with commission, ordered by commission value.",
            query: "SELECT * FROM SCOTT.EMP WHERE COMM IS NOT NULL ORDER BY COMM;",
            columns: ["ENAME", "COMM"],
            rows: [["TURNER", 0], ["ALLEN", 300], ["WARD", 500], ["MARTIN", 1400]]
        },
        {
            question: "Display employees with salary between 1500 and 3000, ordered by salary.",
            query: "SELECT * FROM SCOTT.EMP WHERE SAL BETWEEN 1500 AND 3000 ORDER BY SAL;",
            columns: ["ENAME", "SAL"],
            rows: [["TURNER", 1500], ["ALLEN", 1600], ["BLAKE", 2850]]
        },
        {
            question: "Display name and department, ordered by department and then name.",
            query: "SELECT ENAME, DEPTNO FROM SCOTT.EMP ORDER BY DEPTNO, ENAME;",
            columns: ["ENAME", "DEPTNO"],
            rows: [["CLARK", 10], ["KING", 10], ["MILLER", 10], ["ADAMS", 20]]
        },
        {
            question: "Display names starting with 'S', ordered by salary.",
            query: "SELECT ENAME FROM SCOTT.EMP WHERE ENAME LIKE 'S%' ORDER BY SAL;",
            columns: ["ENAME"],
            rows: [["SMITH"], ["SCOTT"]]
        },
        {
            question: "Display name and join date for employees hired before 1982, ordered by date.",
            query: "SELECT ENAME AS NAME, HIREDATE AS JOIN_DATE FROM SCOTT.EMP WHERE HIREDATE < '01-JAN-82' ORDER BY HIREDATE;",
            columns: ["NAME", "JOIN_DATE"],
            rows: [["SMITH", "17-DEC-80"], ["ALLEN", "20-FEB-81"]]
        },
        {
            question: "Display name as 'NAME' and salary as 'PAY' for department 10.",
            query: "SELECT ENAME AS NAME, SAL AS PAY FROM SCOTT.EMP WHERE DEPTNO = 10;",
            columns: ["NAME", "PAY"],
            rows: [["CLARK", 2450], ["KING", 5000], ["MILLER", 1300]]
        },

        {
            question: "Display employees without commission, ordered by salary (DESC).",
            query: "SELECT * FROM SCOTT.EMP WHERE COMM IS NULL ORDER BY SAL DESC;",
            columns: ["ENAME", "SAL", "COMM"],
            rows: [["KING", 5000, "NULL"], ["SCOTT", 3000, "NULL"]]
        },
        {
            question: "Display employee name and annual salary.",
            query: "SELECT ENAME, SAL*12 AS ANNUAL_SALARY FROM SCOTT.EMP ORDER BY SAL*12;",
            columns: ["ENAME", "ANNUAL_SALARY"],
            rows: [["SMITH", 9600], ["KING", 60000]]
        },
        {
            question: "Display salesmen who do not receive a commission.",
            query: "SELECT * FROM SCOTT.EMP WHERE COMM IS NULL AND JOB = 'SALESMAN';",
            columns: ["ENAME", "JOB", "COMM"],
            rows: []
        },
        {
            question: "Display employees without a manager earning more than 4000.",
            query: "SELECT * FROM SCOTT.EMP WHERE MGR IS NULL AND SAL > 4000;",
            columns: ["ENAME", "SAL"],
            rows: [["KING", 5000]]
        },
        {
            question: "Display employees in department 20 who have no commission.",
            query: "SELECT * FROM SCOTT.EMP WHERE COMM IS NULL AND DEPTNO = 20;",
            columns: ["ENAME", "DEPTNO", "COMM"],
            rows: [["SMITH", 20, "NULL"], ["JONES", 20, "NULL"]]
        },
        {
            question: "Display employees in department 30 who receive a commission.",
            query: "SELECT * FROM SCOTT.EMP WHERE COMM IS NOT NULL AND DEPTNO = 30;",
            columns: ["ENAME", "COMM"],
            rows: [["ALLEN", 300], ["WARD", 500], ["MARTIN", 1400], ["TURNER", 0]]
        },
        {
            question: "Display employees who have no commission or earn more than 3000.",
            query: "SELECT * FROM SCOTT.EMP WHERE COMM IS NULL OR SAL > 3000;",
            columns: ["ENAME", "SAL", "COMM"],
            rows: [["SMITH", 800, "NULL"], ["KING", 5000, "NULL"]]
        },
        {
            question: "Display employees without commission earning more than 2000.",
            query: "SELECT * FROM SCOTT.EMP WHERE COMM IS NULL AND SAL > 2000;",
            columns: ["ENAME", "SAL"],
            rows: [["JONES", 2975], ["BLAKE", 2850], ["CLARK", 2450], ["SCOTT", 3000], ["KING", 5000], ["FORD", 3000]]
        },
        {
            question: "Display all employees who have a manager.",
            query: "SELECT * FROM SCOTT.EMP WHERE MGR IS NOT NULL;",
            columns: ["ENAME", "MGR"],
            rows: [["SMITH", 7902], ["ALLEN", 7698]]
        },
        {
            question: "Display employees who do not have a manager.",
            query: "SELECT * FROM SCOTT.EMP WHERE MGR IS NULL;",
            columns: ["ENAME"],
            rows: [["KING"]]
        },
        {
            question: "Display all employees who receive a commission.",
            query: "SELECT * FROM SCOTT.EMP WHERE COMM IS NOT NULL;",
            columns: ["ENAME", "COMM"],
            rows: [["ALLEN", 300], ["WARD", 500], ["MARTIN", 1400], ["TURNER", 0]]
        },
        {
            question: "Display all employees who do not receive a commission.",
            query: "SELECT * FROM SCOTT.EMP WHERE COMM IS NULL;",
            columns: ["ENAME"],
            rows: [["SMITH"], ["JONES"], ["BLAKE"], ["CLARK"], ["SCOTT"], ["KING"], ["ADAMS"], ["JAMES"], ["FORD"], ["MILLER"]]
        },
        {
            question: "Display job title and salary with aliases.",
            query: "SELECT JOB AS JOB_TITLE, SAL AS SALARY FROM SCOTT.EMP;",
            columns: ["JOB_TITLE", "SALARY"],
            rows: [["CLERK", 800], ["SALESMAN", 1600]]
        },
        {
            question: "Display name and department with aliases.",
            query: "SELECT ENAME AS NAME, DEPTNO AS DEPARTMENT FROM SCOTT.EMP;",
            columns: ["NAME", "DEPARTMENT"],
            rows: [["SMITH", 20], ["ALLEN", 30]]
        },
        {
            question: "Display hire date with alias 'JOINING_DATE'.",
            query: "SELECT HIREDATE AS JOINING_DATE FROM SCOTT.EMP;",
            columns: ["JOINING_DATE"],
            rows: [["17-DEC-80"], ["20-FEB-81"]]
        }
    ],
    "like": [
        { question: "Display employees whose name starts with A.", query: "SELECT * FROM SCOTT.EMP WHERE ENAME LIKE 'A%';", columns: ["EMPNO", "ENAME", "JOB"], rows: [[7499, "ALLEN", "SALESMAN"], [7876, "ADAMS", "CLERK"]] },
        { question: "Display employees whose name starts with S.", query: "SELECT * FROM SCOTT.EMP WHERE ENAME LIKE 'S%';", columns: ["EMPNO", "ENAME", "JOB"], rows: [[7369, "SMITH", "CLERK"], [7788, "SCOTT", "ANALYST"]] },
        { question: "Display employees whose name starts with N.", query: "SELECT * FROM SCOTT.EMP WHERE ENAME LIKE 'N%';", columns: ["ENAME"], rows: [] },
        { question: "Display employees whose name starts with R.", query: "SELECT * FROM SCOTT.EMP WHERE ENAME LIKE 'R%';", columns: ["ENAME"], rows: [] },
        { question: "Display employees whose name starts with LL (Empty Set check).", query: "SELECT * FROM SCOTT.EMP WHERE ENAME LIKE 'LL%';", columns: ["ENAME"], rows: [] },
        { question: "Display employees whose name contains 'AR' anywhere.", query: "SELECT * FROM SCOTT.EMP WHERE ENAME LIKE '%AR%';", columns: ["ENAME"], rows: [["WARD"], ["MARTIN"], ["CLARK"]] },
        { question: "Display employees whose job title starts with M.", query: "SELECT * FROM SCOTT.EMP WHERE JOB LIKE 'M%';", columns: ["ENAME", "JOB"], rows: [["JONES", "MANAGER"], ["BLAKE", "MANAGER"], ["CLARK", "MANAGER"]] },
        { question: "Display employees whose job ends with 'AN'.", query: "SELECT * FROM SCOTT.EMP WHERE JOB LIKE '%AN';", columns: ["ENAME", "JOB"], rows: [["ALLEN", "SALESMAN"], ["WARD", "SALESMAN"], ["MARTIN", "SALESMAN"], ["TURNER", "SALESMAN"]] },
        { question: "Display employees whose job contains 'CL' anywhere.", query: "SELECT * FROM SCOTT.EMP WHERE JOB LIKE '%CL%';", columns: ["ENAME", "JOB"], rows: [["SMITH", "CLERK"], ["ADAMS", "CLERK"], ["JAMES", "CLERK"], ["MILLER", "CLERK"]] },
        { question: "Display department names located in cities starting with N.", query: "SELECT DNAME FROM SCOTT.DEPT WHERE LOC LIKE 'N%';", columns: ["DNAME"], rows: [["ACCOUNTING"]] },
        { question: "Display employees whose name has exactly 4 characters.", query: "SELECT * FROM SCOTT.EMP WHERE ENAME LIKE '____';", columns: ["ENAME"], rows: [["WARD"], ["KING"], ["FORD"]] },
        { question: "Display employees whose name has exactly 5 characters.", query: "SELECT * FROM SCOTT.EMP WHERE ENAME LIKE '_____';", columns: ["ENAME"], rows: [["SMITH"], ["ALLEN"], ["JONES"], ["BLAKE"], ["CLARK"], ["SCOTT"], ["ADAMS"], ["JAMES"]] },
        { question: "Display employees where 'A' is the second character in the name.", query: "SELECT ENAME FROM SCOTT.EMP WHERE ENAME LIKE '_A%';", columns: ["ENAME"], rows: [["WARD"], ["MARTIN"], ["JAMES"]] },
        { question: "Display employees where 'L' is the third character in the name.", query: "SELECT ENAME FROM SCOTT.EMP WHERE ENAME LIKE '__L%';", columns: ["ENAME"], rows: [["ALLEN"], ["MILLER"]] },
        { question: "Display name and job for employees with a 6-character job title.", query: "SELECT ENAME, JOB FROM SCOTT.EMP WHERE JOB LIKE '______';", columns: ["ENAME", "JOB"], rows: [["SMITH", "CLERK"], ["ADAMS", "CLERK"], ["JAMES", "CLERK"], ["MILLER", "CLERK"]] },
        { question: "Display employees whose name ends with N.", query: "SELECT ENAME FROM SCOTT.EMP WHERE ENAME LIKE '%N';", columns: ["ENAME"], rows: [["ALLEN"], ["MARTIN"]] },
        { question: "Display employees whose job ends with 'ER'.", query: "SELECT ENAME, JOB FROM SCOTT.EMP WHERE JOB LIKE '%ER';", columns: ["ENAME", "JOB"], rows: [["JONES", "MANAGER"], ["BLAKE", "MANAGER"], ["CLARK", "MANAGER"]] },
        { question: "Display employees whose name starts with A and ends with N.", query: "SELECT ENAME FROM SCOTT.EMP WHERE ENAME LIKE 'A%N';", columns: ["ENAME"], rows: [["ALLEN"]] },
        { question: "Display employees where 'E' is the third character in the name.", query: "SELECT ENAME FROM SCOTT.EMP WHERE ENAME LIKE '__E%';", columns: ["ENAME"], rows: [["JONES"], ["BLAKE"], ["JAMES"]] },
        { question: "Display employees whose name has 'A' as the second-to-last character.", query: "SELECT ENAME FROM SCOTT.EMP WHERE ENAME LIKE '%A_';", columns: ["ENAME"], rows: [["BLAKE"], ["CLARK"], ["ADAMS"], ["JAMES"]] },
        { question: "Display employees whose name contains 'E' anywhere.", query: "SELECT ENAME FROM SCOTT.EMP WHERE ENAME LIKE '%E%';", columns: ["ENAME"], rows: [["ALLEN"], ["JONES"], ["BLAKE"], ["CLARK"], ["TURNER"], ["JAMES"], ["MILLER"]] },
        { question: "Display employees whose name does NOT contain 'A'.", query: "SELECT ENAME FROM SCOTT.EMP WHERE ENAME NOT LIKE '%A%';", columns: ["ENAME"], rows: [["SMITH"], ["JONES"], ["SCOTT"], ["KING"], ["TURNER"], ["FORD"], ["MILLER"]] },
        { question: "Display employees whose job contains 'MAN'.", query: "SELECT ENAME, JOB FROM SCOTT.EMP WHERE JOB LIKE '%MAN%';", columns: ["ENAME", "JOB"], rows: [["ALLEN", "SALESMAN"], ["WARD", "SALESMAN"], ["JONES", "MANAGER"], ["MARTIN", "SALESMAN"], ["BLAKE", "MANAGER"], ["CLARK", "MANAGER"], ["TURNER", "SALESMAN"]] },
        { question: "Display employees whose job does NOT start with 'C'.", query: "SELECT ENAME, JOB FROM SCOTT.EMP WHERE JOB NOT LIKE 'C%';", columns: ["ENAME", "JOB"], rows: [["ALLEN", "SALESMAN"], ["JONES", "MANAGER"], ["SCOTT", "ANALYST"], ["KING", "PRESIDENT"]] },
        { question: "Display employees whose name contains two consecutive 'L's.", query: "SELECT ENAME FROM SCOTT.EMP WHERE ENAME LIKE '%LL%';", columns: ["ENAME"], rows: [["ALLEN"], ["MILLER"]] },
        { question: "Display employees whose name starts with J and has S somewhere after it.", query: "SELECT ENAME FROM SCOTT.EMP WHERE ENAME LIKE 'J%S%';", columns: ["ENAME"], rows: [["JONES"], ["JAMES"]] },
        { question: "Display employees whose job starts with S and ends with 'AN'.", query: "SELECT ENAME, JOB FROM SCOTT.EMP WHERE JOB LIKE 'S%AN';", columns: ["ENAME", "JOB"], rows: [["ALLEN", "SALESMAN"], ["WARD", "SALESMAN"], ["MARTIN", "SALESMAN"], ["TURNER", "SALESMAN"]] },
        { question: "Display employees whose name has 'A' as the 2nd last character (Variation).", query: "SELECT ENAME FROM SCOTT.EMP WHERE ENAME LIKE '%A_';", columns: ["ENAME"], rows: [["BLAKE"], ["ADAMS"]] },
        { question: "Display employees whose name has 'A' followed by any char and then 'E'.", query: "SELECT ENAME FROM SCOTT.EMP WHERE ENAME LIKE '%A_E%';", columns: ["ENAME"], rows: [["JAMES"]] },
        { question: "Display employees whose name starts with S and salary is above 2000.", query: "SELECT ENAME, SAL FROM SCOTT.EMP WHERE ENAME LIKE 'S%' AND SAL > 2000;", columns: ["ENAME", "SAL"], rows: [["SCOTT", 3000]] },
        { question: "Display employees whose job ends with 'MAN' in department 20.", query: "SELECT ENAME, DEPTNO FROM SCOTT.EMP WHERE JOB LIKE '%MAN' AND DEPTNO = 20;", columns: ["ENAME", "DEPTNO"], rows: [["JONES", 20]] },
        { question: "Display employees whose name has 'A' and commission is NULL.", query: "SELECT ENAME, COMM FROM SCOTT.EMP WHERE ENAME LIKE '%A%' AND COMM IS NULL;", columns: ["ENAME", "COMM"], rows: [["BLAKE", "NULL"], ["CLARK", "NULL"], ["ADAMS", "NULL"], ["JAMES", "NULL"]] },
        { question: "Display employees whose job starts with 'C' and salary is below 1500.", query: "SELECT ENAME, SAL FROM SCOTT.EMP WHERE JOB LIKE 'C%' AND SAL < 1500;", columns: ["ENAME", "SAL"], rows: [["SMITH", 800], ["ADAMS", 1100], ["JAMES", 950], ["MILLER", 1300]] },
        { question: "Display employees whose name ends with S and were hired after 1981.", query: "SELECT ENAME, HIREDATE FROM SCOTT.EMP WHERE ENAME LIKE '%S' AND HIREDATE > '31-DEC-81';", columns: ["ENAME", "HIREDATE"], rows: [["ADAMS", "23-MAY-87"]] },
        { question: "Display employees whose name starts with M and are not in department 10.", query: "SELECT ENAME, DEPTNO FROM SCOTT.EMP WHERE ENAME LIKE 'M%' AND DEPTNO <> 10;", columns: ["ENAME", "DEPTNO"], rows: [["MARTIN", 30]] },
        { question: "Display managers with salaries between 2000 and 3000 using LIKE.", query: "SELECT ENAME, JOB, SAL FROM SCOTT.EMP WHERE JOB LIKE '%ER%' AND SAL BETWEEN 2000 AND 3000;", columns: ["ENAME", "JOB", "SAL"], rows: [["JONES", "MANAGER", 2975], ["BLAKE", "MANAGER", 2850], ["CLARK", "MANAGER", 2450]] },
        { question: "Display employees where name starts with A and job starts with S.", query: "SELECT ENAME, JOB FROM SCOTT.EMP WHERE ENAME LIKE 'A%' AND JOB LIKE 'S%';", columns: ["ENAME", "JOB"], rows: [["ALLEN", "SALESMAN"]] },
        { question: "Display employees with 'I' in their job title.", query: "SELECT ENAME, JOB FROM SCOTT.EMP WHERE JOB LIKE '%I%';", columns: ["ENAME", "JOB"], rows: [["KING", "PRESIDENT"]] },
        { question: "Display employees whose name ends with N and receive commission.", query: "SELECT ENAME, COMM FROM SCOTT.EMP WHERE ENAME LIKE '%N' AND COMM IS NOT NULL;", columns: ["ENAME", "COMM"], rows: [["ALLEN", 300], ["MARTIN", 1400]] },
        { question: "Display names starting with S, ordered alphabetically.", query: "SELECT ENAME FROM SCOTT.EMP WHERE ENAME LIKE 'S%' ORDER BY ENAME;", columns: ["ENAME"], rows: [["SCOTT"], ["SMITH"]] },
        { question: "Display name and salary as 'PAY' for names containing 'A', sorted by salary.", query: "SELECT ENAME, SAL AS PAY FROM SCOTT.EMP WHERE ENAME LIKE '%A%' ORDER BY SAL;", columns: ["ENAME", "PAY"], rows: [["JAMES", 950], ["ADAMS", 1100], ["WARD", 1250], ["MARTIN", 1250]] },
        { question: "Display managers ordered by job and salary.", query: "SELECT ENAME, JOB, SAL FROM SCOTT.EMP WHERE JOB LIKE 'M%' ORDER BY JOB, SAL;", columns: ["ENAME", "JOB", "SAL"], rows: [["CLARK", "MANAGER", 2450], ["BLAKE", "MANAGER", 2850], ["JONES", "MANAGER", 2975]] },
        { question: "Display employees whose name ends with E, sorted by hire date.", query: "SELECT ENAME, HIREDATE FROM SCOTT.EMP WHERE ENAME LIKE '%E' ORDER BY HIREDATE;", columns: ["ENAME", "HIREDATE"], rows: [["BLAKE", "01-MAY-81"]] },
        { question: "Display annual salary for employees whose name starts with J.", query: "SELECT ENAME, SAL*12 AS ANNUAL_SALARY FROM SCOTT.EMP WHERE ENAME LIKE 'J%';", columns: ["ENAME", "ANNUAL_SALARY"], rows: [["JONES", 35700], ["JAMES", 11400]] },
        { question: "Display employees with 'R' in their name, sorted by department.", query: "SELECT ENAME, DEPTNO FROM SCOTT.EMP WHERE ENAME LIKE '%R%' ORDER BY DEPTNO;", columns: ["ENAME", "DEPTNO"], rows: [["CLARK", 10], ["MILLER", 10], ["WARD", 30], ["MARTIN", 30], ["TURNER", 30]] },
        { question: "Display name as 'EMPLOYEE' for those with jobs ending in 'AN'.", query: "SELECT ENAME AS EMPLOYEE, JOB FROM SCOTT.EMP WHERE JOB LIKE '%AN';", columns: ["EMPLOYEE", "JOB"], rows: [["ALLEN", "SALESMAN"], ["WARD", "SALESMAN"], ["MARTIN", "SALESMAN"], ["TURNER", "SALESMAN"]] },
        { question: "Display employees whose name starts with K, sorted by salary descending.", query: "SELECT ENAME, SAL FROM SCOTT.EMP WHERE ENAME LIKE 'K%' ORDER BY SAL DESC;", columns: ["ENAME", "SAL"], rows: [["KING", 5000]] },
        { question: "Display employees with 'L' in their name, sorted by name and salary.", query: "SELECT ENAME, SAL FROM SCOTT.EMP WHERE ENAME LIKE '%L%' ORDER BY ENAME, SAL;", columns: ["ENAME", "SAL"], rows: [["ALLEN", 1600], ["CLARK", 2450], ["MILLER", 1300]] },
        { question: "Display names starting with C, ordered by job.", query: "SELECT ENAME, JOB FROM SCOTT.EMP WHERE ENAME LIKE 'C%' ORDER BY JOB;", columns: ["ENAME", "JOB"], rows: [["CLARK", "MANAGER"]] },
        { question: "Display employees whose name is 6 characters long and ends with R.", query: "SELECT ENAME FROM SCOTT.EMP WHERE ENAME LIKE '_____R';", columns: ["ENAME"], rows: [["MILLER"]] },
        { question: "Display employees whose name has 'A' as the third character.", query: "SELECT ENAME FROM SCOTT.EMP WHERE ENAME LIKE '__A%';", columns: ["ENAME"], rows: [["BLAKE"], ["ADAMS"]] },
        { question: "Display employees whose name has 'E' followed by exactly one character.", query: "SELECT ENAME FROM SCOTT.EMP WHERE ENAME LIKE '%E_';", columns: ["ENAME"], rows: [["ALLEN"], ["JONES"], ["TURNER"], ["JAMES"], ["MILLER"]] },
        { question: "Display employees whose name contains at least two underscores' worth of characters before an 'A'.", query: "SELECT ENAME FROM SCOTT.EMP WHERE ENAME LIKE '%__A%';", columns: ["ENAME"], rows: [["WARD"], ["MARTIN"], ["BLAKE"], ["CLARK"], ["ADAMS"], ["JAMES"]] },
        { question: "Display employees whose job is exactly 'A' (Empty Set check).", query: "SELECT ENAME, JOB FROM SCOTT.EMP WHERE JOB LIKE 'A';", columns: ["ENAME", "JOB"], rows: [] },
        { question: "Display names that do NOT start with any vowel.", query: "SELECT ENAME FROM SCOTT.EMP WHERE ENAME NOT LIKE 'A%' AND ENAME NOT LIKE 'E%' AND ENAME NOT LIKE 'I%' AND ENAME NOT LIKE 'O%' AND ENAME NOT LIKE 'U%';", columns: ["ENAME"], rows: [["SMITH"], ["WARD"], ["JONES"], ["MARTIN"], ["BLAKE"], ["CLARK"], ["SCOTT"], ["KING"], ["TURNER"], ["JAMES"], ["FORD"], ["MILLER"]] },
        { question: "Display employees whose job does NOT contain 'ER'.", query: "SELECT ENAME, JOB FROM SCOTT.EMP WHERE JOB NOT LIKE '%ER%';", columns: ["ENAME", "JOB"], rows: [["ALLEN", "SALESMAN"], ["WARD", "SALESMAN"], ["MARTIN", "SALESMAN"], ["SCOTT", "ANALYST"], ["KING", "PRESIDENT"], ["TURNER", "SALESMAN"], ["FORD", "ANALYST"]] },
        { question: "Display names that start and end with the same letter.", query: "SELECT ENAME FROM SCOTT.EMP WHERE ENAME LIKE 'A%A' OR ENAME LIKE 'B%B' OR ENAME LIKE 'S%S';", columns: ["ENAME"], rows: [["SCOTT"]] },
        { question: "Display names containing both A and E in any order.", query: "SELECT ENAME FROM SCOTT.EMP WHERE ENAME LIKE '%A%E%' OR ENAME LIKE '%E%A%';", columns: ["ENAME"], rows: [["ALLEN"], ["BLAKE"], ["JAMES"]] },
        { question: "Display employees whose name does NOT start with A.", query: "SELECT ENAME FROM SCOTT.EMP WHERE ENAME NOT LIKE 'A%';", columns: ["ENAME"], rows: [["SMITH"], ["WARD"], ["JONES"], ["MARTIN"], ["BLAKE"], ["CLARK"], ["SCOTT"], ["KING"], ["TURNER"], ["ADAMS"], ["JAMES"], ["FORD"], ["MILLER"]] }
    ],
    "group": [
        { question: "Display the total number of employees.", query: "SELECT COUNT(ENAME) AS total_NofEmployees FROM SCOTT.EMP;", columns: ["TOTAL_NOFEMPLOYEES"], rows: [[14]] },
        { question: "Display the total salary of all employees.", query: "SELECT SUM(SAL) AS Salary FROM SCOTT.EMP;", columns: ["SALARY"], rows: [[29025]] },
        { question: "Display the average salary of all employees.", query: "SELECT AVG(SAL) AS Average_Salary FROM SCOTT.EMP;", columns: ["AVERAGE_SALARY"], rows: [[2073.21]] },
        { question: "Display the highest salary.", query: "SELECT MAX(SAL) AS Max_Sal FROM SCOTT.EMP;", columns: ["MAX_SAL"], rows: [[5000]] },
        { question: "Display the lowest salary.", query: "SELECT MIN(SAL) AS Min_Sal FROM SCOTT.EMP;", columns: ["MIN_SAL"], rows: [[800]] },
        { question: "Display the count of department numbers in the EMP table.", query: "SELECT COUNT(DEPTNO) AS Department FROM SCOTT.EMP;", columns: ["DEPARTMENT"], rows: [[14]] },
        { question: "Display the number of employees who are managers.", query: "SELECT COUNT(JOB) FROM SCOTT.EMP WHERE JOB='MANAGER';", columns: ["COUNT(JOB)"], rows: [[3]] },
        { question: "Display the total commission paid to employees.", query: "SELECT SUM(COMM) AS total_Comm FROM SCOTT.EMP;", columns: ["TOTAL_COMM"], rows: [[2200]] },
        { question: "Display the average commission.", query: "SELECT AVG(COMM) FROM SCOTT.EMP;", columns: ["AVG(COMM)"], rows: [[550]] },
        { question: "Display the number of employees who receive commission.", query: "SELECT COUNT(COMM) FROM SCOTT.EMP WHERE COMM IS NOT NULL;", columns: ["COUNT(COMM)"], rows: [[4]] },
        { question: "Display department-wise total salary.", query: "SELECT DEPTNO, SUM(SAL) AS total_Salary FROM SCOTT.EMP GROUP BY DEPTNO;", columns: ["DEPTNO", "TOTAL_SALARY"], rows: [[10, 8750], [20, 10875], [30, 9400]] },
        { question: "Display department-wise average salary.", query: "SELECT DEPTNO, AVG(SAL) AS total_Salary FROM SCOTT.EMP GROUP BY DEPTNO;", columns: ["DEPTNO", "TOTAL_SALARY"], rows: [[10, 2916.67], [20, 2175], [30, 1566.67]] },
        { question: "Display the number of employees in each department.", query: "SELECT DEPTNO, COUNT(ENAME) AS No_of_Employees FROM SCOTT.EMP GROUP BY DEPTNO;", columns: ["DEPTNO", "NO_OF_EMPLOYEES"], rows: [[10, 3], [20, 5], [30, 6]] },
        { question: "Display the number of employees for each job title.", query: "SELECT JOB, COUNT(ENAME) FROM SCOTT.EMP GROUP BY JOB;", columns: ["JOB", "COUNT(ENAME)"], rows: [["CLERK", 4], ["SALESMAN", 4], ["MANAGER", 3], ["ANALYST", 2], ["PRESIDENT", 1]] },
        { question: "Display job-wise total salary.", query: "SELECT JOB, SUM(SAL) AS total_Salary FROM SCOTT.EMP GROUP BY JOB;", columns: ["JOB", "TOTAL_SALARY"], rows: [["CLERK", 4150], ["SALESMAN", 5600], ["MANAGER", 8275], ["ANALYST", 6000], ["PRESIDENT", 5000]] },
        { question: "Display job-wise maximum salary.", query: "SELECT JOB, MAX(SAL) AS Max_sal FROM SCOTT.EMP GROUP BY JOB;", columns: ["JOB", "MAX_SAL"], rows: [["CLERK", 1300], ["SALESMAN", 1600], ["MANAGER", 2975], ["ANALYST", 3000], ["PRESIDENT", 5000]] },
        { question: "Display job-wise minimum salary.", query: "SELECT JOB, MIN(SAL) AS Min_Sal FROM SCOTT.EMP GROUP BY JOB;", columns: ["JOB", "MIN_SAL"], rows: [["CLERK", 800], ["SALESMAN", 1250], ["MANAGER", 2450], ["ANALYST", 3000], ["PRESIDENT", 5000]] },
        { question: "Display department-wise maximum salary.", query: "SELECT DEPTNO, MAX(SAL) AS Max_Sal FROM SCOTT.EMP GROUP BY DEPTNO;", columns: ["DEPTNO", "MAX_SAL"], rows: [[10, 5000], [20, 3000], [30, 2850]] },
        { question: "Display department-wise minimum salary.", query: "SELECT DEPTNO, MIN(SAL) AS Min_Sal FROM SCOTT.EMP GROUP BY DEPTNO;", columns: ["DEPTNO", "MIN_SAL"], rows: [[10, 1300], [20, 800], [30, 950]] },
        { question: "Display department-wise average commission.", query: "SELECT DEPTNO, AVG(COMM) FROM SCOTT.EMP GROUP BY DEPTNO;", columns: ["DEPTNO", "AVG(COMM)"], rows: [[10, "NULL"], [20, "NULL"], [30, 550]] },
        { question: "Display department and job-wise count of employees.", query: "SELECT DEPTNO, JOB, COUNT(ENAME) FROM SCOTT.EMP GROUP BY DEPTNO, JOB;", columns: ["DEPTNO", "JOB", "COUNT(ENAME)"], rows: [[10, "CLERK", 1], [10, "MANAGER", 1], [20, "ANALYST", 2], [30, "SALESMAN", 4]] },
        { question: "Display department and job-wise total salary.", query: "SELECT DEPTNO, JOB, SUM(SAL) FROM SCOTT.EMP GROUP BY DEPTNO, JOB;", columns: ["DEPTNO", "JOB", "SUM(SAL)"], rows: [[10, "PRESIDENT", 5000], [20, "CLERK", 1900], [30, "MANAGER", 2850]] },
        { question: "Display department and job-wise average salary.", query: "SELECT DEPTNO, JOB, AVG(SAL) FROM SCOTT.EMP GROUP BY DEPTNO, JOB;", columns: ["DEPTNO", "JOB", "AVG(SAL)"], rows: [[10, "CLERK", 1300], [20, "MANAGER", 2975], [30, "SALESMAN", 1400]] },
        { question: "Display department and job-wise maximum salary.", query: "SELECT DEPTNO, JOB, MAX(SAL) FROM SCOTT.EMP GROUP BY DEPTNO, JOB;", columns: ["DEPTNO", "JOB", "MAX(SAL)"], rows: [[10, "MANAGER", 2450], [20, "ANALYST", 3000], [30, "CLERK", 950]] },
        { question: "Display department and job-wise minimum salary.", query: "SELECT DEPTNO, JOB, MIN(SAL) FROM SCOTT.EMP GROUP BY DEPTNO, JOB;", columns: ["DEPTNO", "JOB", "MIN(SAL)"], rows: [[20, "CLERK", 800], [30, "SALESMAN", 1250]] },
        { question: "Display department and job-wise max salary ordered by the salary.", query: "SELECT DEPTNO, JOB, MAX(SAL) AS total_salary FROM SCOTT.EMP GROUP BY DEPTNO, JOB ORDER BY total_salary;", columns: ["DEPTNO", "JOB", "TOTAL_SALARY"], rows: [[20, "CLERK", 1100], [30, "SALESMAN", 1600], [10, "PRESIDENT", 5000]] },
        { question: "Display department and job-wise min salary ordered by the salary.", query: "SELECT DEPTNO, JOB, MIN(SAL) AS total_salary FROM SCOTT.EMP GROUP BY DEPTNO, JOB ORDER BY total_salary;", columns: ["DEPTNO", "JOB", "TOTAL_SALARY"], rows: [[20, "CLERK", 800], [30, "SALESMAN", 1250]] },
        { question: "Display department and job-wise total commission.", query: "SELECT DEPTNO, JOB, SUM(COMM) AS total_commission FROM SCOTT.EMP GROUP BY DEPTNO, JOB;", columns: ["DEPTNO", "JOB", "TOTAL_COMMISSION"], rows: [[30, "SALESMAN", 2200]] },
        { question: "Display department and job-wise employee count.", query: "SELECT DEPTNO, JOB, COUNT(ENAME) FROM SCOTT.EMP GROUP BY DEPTNO, JOB;", columns: ["DEPTNO", "JOB", "COUNT"], rows: [[10, "MANAGER", 1], [30, "CLERK", 1]] },
        { question: "Display department and job-wise maximum employee name.", query: "SELECT DEPTNO, JOB, MAX(ENAME) FROM SCOTT.EMP GROUP BY DEPTNO, JOB;", columns: ["DEPTNO", "JOB", "MAX(ENAME)"], rows: [[10, "PRESIDENT", "KING"], [20, "CLERK", "SMITH"]] },
        { question: "Display department-wise total salary for departments above 10.", query: "SELECT DEPTNO, SUM(SAL) AS total_salary FROM SCOTT.EMP WHERE DEPTNO > 10 GROUP BY DEPTNO;", columns: ["DEPTNO", "TOTAL_SALARY"], rows: [[20, 10875], [30, 9400]] },
        { question: "Display job-wise employee count for salaries above 2000.", query: "SELECT JOB, SAL, COUNT(ENAME) FROM SCOTT.EMP WHERE SAL > 2000 GROUP BY JOB, ENAME, SAL;", columns: ["JOB", "SAL", "COUNT"], rows: [["MANAGER", 2975, 1], ["ANALYST", 3000, 2]] },
        { question: "Display department-wise average salary for employees hired after 31-Dec-1981.", query: "SELECT DEPTNO, HIREDATE, AVG(SAL) AS Average_Salary FROM SCOTT.EMP WHERE HIREDATE > '31-DEC-81' GROUP BY DEPTNO, HIREDATE;", columns: ["DEPTNO", "HIREDATE", "AVERAGE_SALARY"], rows: [[20, "19-APR-87", 3000], [10, "23-JAN-82", 1300]] },
        { question: "Display total salary for jobs in 'MANAGER' or 'CLERK'.", query: "SELECT JOB, SUM(SAL) FROM SCOTT.EMP WHERE JOB IN('MANAGER','CLERK') GROUP BY JOB;", columns: ["JOB", "SUM(SAL)"], rows: [["CLERK", 4150], ["MANAGER", 8275]] },
        { question: "Display department and commission-wise employee count.", query: "SELECT DEPTNO, COMM, COUNT(ENAME) FROM SCOTT.EMP WHERE COMM IS NOT NULL GROUP BY DEPTNO, COMM;", columns: ["DEPTNO", "COMM", "COUNT"], rows: [[30, 300, 1], [30, 500, 1]] },
        { question: "Display job-wise average salary for department 20.", query: "SELECT JOB, DEPTNO, AVG(SAL) AS Average_Salary FROM SCOTT.EMP WHERE DEPTNO = 20 GROUP BY JOB, DEPTNO;", columns: ["JOB", "DEPTNO", "AVERAGE_SALARY"], rows: [["CLERK", 20, 950], ["MANAGER", 20, 2975]] },
        { question: "Display department-wise total salary excluding department 30.", query: "SELECT DEPTNO, SUM(SAL) AS total_Salary FROM SCOTT.EMP WHERE DEPTNO <> 30 GROUP BY DEPTNO;", columns: ["DEPTNO", "TOTAL_SALARY"], rows: [[10, 8750], [20, 10875]] },
        { question: "Display job-wise maximum salary for salaries above 1500.", query: "SELECT JOB, MAX(SAL) FROM SCOTT.EMP WHERE SAL > 1500 GROUP BY JOB;", columns: ["JOB", "MAX(SAL)"], rows: [["MANAGER", 2975], ["ANALYST", 3000]] },
        { question: "Display count of 'SALESMAN' per department.", query: "SELECT DEPTNO, JOB, COUNT(ENAME) FROM SCOTT.EMP WHERE JOB = 'SALESMAN' GROUP BY DEPTNO, JOB;", columns: ["DEPTNO", "JOB", "COUNT"], rows: [[30, "SALESMAN", 4]] },
        { question: "Display departments having more than 3 employees.", query: "SELECT DEPTNO, COUNT(ENAME) FROM SCOTT.EMP GROUP BY DEPTNO HAVING COUNT(ENAME) > 3;", columns: ["DEPTNO", "COUNT"], rows: [[20, 5], [30, 6]] },
        { question: "Display jobs having average salary greater than 2500.", query: "SELECT JOB, AVG(SAL) AS Average_Salary FROM SCOTT.EMP GROUP BY JOB HAVING AVG(SAL) > 2500;", columns: ["JOB", "AVERAGE_SALARY"], rows: [["MANAGER", 2758], ["ANALYST", 3000]] },
        { question: "Display departments where total salary is more than 10000.", query: "SELECT DEPTNO, SUM(SAL) FROM SCOTT.EMP GROUP BY DEPTNO HAVING SUM(SAL) > 10000;", columns: ["DEPTNO", "SUM"], rows: [[20, 10875]] },
        { question: "Display jobs where at least 3 employees are working.", query: "SELECT JOB, COUNT(ENAME) FROM SCOTT.EMP GROUP BY JOB HAVING COUNT(ENAME) > 2;", columns: ["JOB", "COUNT"], rows: [["CLERK", 4], ["SALESMAN", 4], ["MANAGER", 3]] },
        { question: "Display departments having maximum salary greater than 4000.", query: "SELECT DEPTNO, MAX(SAL) FROM SCOTT.EMP GROUP BY DEPTNO HAVING MAX(SAL) > 4000;", columns: ["DEPTNO", "MAX"], rows: [[10, 5000]] },
        { question: "Display jobs whose minimum salary is less than 1000.", query: "SELECT JOB, MIN(SAL) AS Minimum_Salary FROM SCOTT.EMP GROUP BY JOB HAVING MIN(SAL) < 1000;", columns: ["JOB", "MINIMUM_SALARY"], rows: [["CLERK", 800]] },
        { question: "Display department-wise total salary and count for departments with more than 4 employees.", query: "SELECT DEPTNO, SUM(SAL) AS total_salary, COUNT(ENAME) AS Employee FROM SCOTT.EMP GROUP BY DEPTNO HAVING COUNT(ENAME) > 4;", columns: ["DEPTNO", "TOTAL_SALARY", "EMPLOYEE"], rows: [[20, 10875, 5], [30, 9400, 6]] },
        { question: "Display job-wise average and total salary for jobs with total salary > 5000.", query: "SELECT JOB, AVG(SAL) AS Average_Salary, SUM(SAL) FROM SCOTT.EMP GROUP BY JOB HAVING SUM(SAL) > 5000;", columns: ["JOB", "AVERAGE_SALARY", "SUM"], rows: [["SALESMAN", 1400, 5600], ["MANAGER", 2758, 8275]] },
        { question: "Display department and commission-wise details.", query: "SELECT DEPTNO, COMM FROM SCOTT.EMP WHERE COMM IS NOT NULL GROUP BY DEPTNO, COMM;", columns: ["DEPTNO", "COMM"], rows: [[30, 300], [30, 500]] },
        { question: "Display departments having more than one manager.", query: "SELECT DEPTNO, COUNT(JOB) FROM SCOTT.EMP GROUP BY DEPTNO, JOB HAVING JOB = 'MANAGER' AND COUNT(JOB) > 1;", columns: ["DEPTNO", "COUNT"], rows: [] },
        { question: "Display department-wise count of employees receiving commission.", query: "SELECT DEPTNO, COUNT(ENAME) FROM SCOTT.EMP WHERE COMM IS NOT NULL GROUP BY DEPTNO;", columns: ["DEPTNO", "COUNT"], rows: [[30, 4]] },
        { question: "Display job-wise total commission.", query: "SELECT JOB, SUM(COMM) FROM SCOTT.EMP GROUP BY JOB;", columns: ["JOB", "SUM"], rows: [["SALESMAN", 2200]] },
        { question: "Display department-wise average commission for non-null values.", query: "SELECT DEPTNO, AVG(COMM) FROM SCOTT.EMP WHERE COMM IS NOT NULL GROUP BY DEPTNO;", columns: ["DEPTNO", "AVG"], rows: [[30, 550]] },
        { question: "Display total commission paid.", query: "SELECT SUM(COMM) AS total_comm FROM SCOTT.EMP WHERE COMM IS NOT NULL;", columns: ["TOTAL_COMM"], rows: [[2200]] },
        { question: "Display count of employees without commission.", query: "SELECT COUNT(ENAME) FROM SCOTT.EMP WHERE COMM IS NULL;", columns: ["COUNT"], rows: [[10]] },
        { question: "Display department-wise count of employees without a manager.", query: "SELECT DEPTNO, COUNT(ENAME) FROM SCOTT.EMP WHERE MGR IS NULL GROUP BY DEPTNO;", columns: ["DEPTNO", "COUNT"], rows: [[10, 1]] },
        { question: "Display job-wise average commission.", query: "SELECT JOB, AVG(COMM) FROM SCOTT.EMP GROUP BY JOB;", columns: ["JOB", "AVG"], rows: [["SALESMAN", 550]] },
        { question: "Display departments that have employees receiving commission.", query: "SELECT DEPTNO FROM SCOTT.EMP WHERE COMM IS NOT NULL GROUP BY DEPTNO;", columns: ["DEPTNO"], rows: [[30]] },
        { question: "Display department-wise commission for employees without it.", query: "SELECT DEPTNO, COMM FROM SCOTT.EMP WHERE COMM IS NULL GROUP BY DEPTNO, COMM;", columns: ["DEPTNO", "COMM"], rows: [[10, "NULL"], [20, "NULL"]] },
        { question: "Display job-wise count of employees without commission.", query: "SELECT JOB, COUNT(ENAME) FROM SCOTT.EMP WHERE COMM IS NULL GROUP BY JOB;", columns: ["JOB", "COUNT"], rows: [["CLERK", 4], ["MANAGER", 3]] },
        { question: "Display department-wise total salary where average salary is greater than overall average.", query: "SELECT DEPTNO, SUM(SAL) AS total_salary FROM SCOTT.EMP GROUP BY DEPTNO HAVING AVG(SAL) > (SELECT AVG(SAL) FROM SCOTT.EMP);", columns: ["DEPTNO", "TOTAL_SALARY"], rows: [[10, 8750], [20, 10875]] },
        { question: "Display job having the highest average salary.", query: "SELECT JOB, AVG(SAL) AS avg_salary FROM SCOTT.EMP GROUP BY JOB HAVING AVG(SAL) = (SELECT MAX(AVG(SAL)) FROM (SELECT AVG(SAL) FROM SCOTT.EMP GROUP BY JOB));", columns: ["JOB", "AVG_SALARY"], rows: [["PRESIDENT", 5000]] },
        { question: "Display department having the minimum total salary.", query: "SELECT DEPTNO, SUM(SAL) AS total_Salary FROM SCOTT.EMP GROUP BY DEPTNO HAVING SUM(SAL) = (SELECT MIN(SUM(SAL)) FROM (SELECT SUM(SAL) FROM SCOTT.EMP GROUP BY DEPTNO));", columns: ["DEPTNO", "TOTAL_SALARY"], rows: [[10, 8750]] },
        { question: "Display jobs where max salary equals department 20's max salary.", query: "SELECT JOB, MAX(SAL) FROM SCOTT.EMP GROUP BY JOB HAVING MAX(SAL) = (SELECT MAX(SAL) FROM SCOTT.EMP WHERE DEPTNO = 20);", columns: ["JOB", "MAX"], rows: [["ANALYST", 3000]] },
        { question: "Display departments having same number of employees.", query: "SELECT DEPTNO, COUNT(*) FROM SCOTT.EMP GROUP BY DEPTNO HAVING COUNT(*) IN (SELECT COUNT(*) FROM SCOTT.EMP GROUP BY DEPTNO HAVING COUNT(*) > 1);", columns: ["DEPTNO", "COUNT"], rows: [[10, 3], [20, 5], [30, 6]] },
        { question: "Display jobs whose total salary is more than all CLERKs combined.", query: "SELECT JOB, SUM(SAL) AS total_salary FROM SCOTT.EMP GROUP BY JOB HAVING SUM(SAL) > (SELECT SUM(SAL) FROM SCOTT.EMP WHERE JOB = 'CLERK');", columns: ["JOB", "TOTAL_SALARY"], rows: [["SALESMAN", 5600], ["MANAGER", 8275]] },
        { question: "Display department(s) with the maximum number of employees.", query: "SELECT DEPTNO, COUNT(ENAME) FROM SCOTT.EMP GROUP BY DEPTNO HAVING COUNT(ENAME) = (SELECT MAX(COUNT(ENAME)) FROM SCOTT.EMP GROUP BY DEPTNO);", columns: ["DEPTNO", "COUNT"], rows: [[30, 6]] },
        { question: "Display jobs having average salary greater than their department's average.", query: "SELECT DEPTNO, JOB, AVG(SAL) FROM SCOTT.EMP GROUP BY DEPTNO, JOB HAVING AVG(SAL) > (SELECT AVG(SAL) FROM SCOTT.EMP WHERE DEPTNO = SCOTT.EMP.DEPTNO);", columns: ["DEPTNO", "JOB", "AVG"], rows: [[10, "MANAGER", 2450], [20, "ANALYST", 3000]] },
        { question: "Display the department where total salary is maximum.", query: "SELECT DEPTNO FROM SCOTT.EMP GROUP BY DEPTNO HAVING SUM(SAL) = (SELECT MAX(SUM(SAL)) FROM (SELECT SUM(SAL) FROM SCOTT.EMP GROUP BY DEPTNO));", columns: ["DEPTNO"], rows: [[20]] },
        { question: "Display the job having the minimum average salary.", query: "SELECT JOB, AVG(SAL) FROM SCOTT.EMP GROUP BY JOB HAVING AVG(SAL) = (SELECT MIN(AVG(SAL)) FROM (SELECT AVG(SAL) FROM SCOTT.EMP GROUP BY JOB));", columns: ["JOB", "AVG"], rows: [["CLERK", 1037]] }
    ],
    "subquery": [
        {
            question: "Display employees whose salary is greater than JONES's salary.",
            query: "SELECT ENAME, SAL FROM SCOTT.EMP WHERE SAL > (SELECT SAL FROM SCOTT.EMP WHERE ENAME='JONES');",
            columns: ["ENAME", "SAL"],
            rows: [["SCOTT", 3000], ["KING", 5000], ["FORD", 3000]]
        },
        {
            question: "Display employees who have the same salary as SCOTT.",
            query: "SELECT ENAME, SAL FROM SCOTT.EMP WHERE SAL = (SELECT SAL FROM SCOTT.EMP WHERE ENAME='SCOTT');",
            columns: ["ENAME", "SAL"],
            rows: [["SCOTT", 3000], ["FORD", 3000]]
        },
        {
            question: "Display employees hired after ALLEN.",
            query: "SELECT ENAME, HIREDATE FROM SCOTT.EMP WHERE HIREDATE > (SELECT HIREDATE FROM SCOTT.EMP WHERE ENAME='ALLEN');",
            columns: ["ENAME", "HIREDATE"],
            rows: [["WARD", "22-FEB-81"], ["JONES", "02-APR-81"], ["BLAKE", "01-MAY-81"], ["CLARK", "09-JUN-81"], ["SCOTT", "19-APR-87"]]
        },
        {
            question: "Display employees who work in the same department as BLAKE.",
            query: "SELECT ENAME, DEPTNO FROM SCOTT.EMP WHERE DEPTNO = (SELECT DEPTNO FROM SCOTT.EMP WHERE ENAME='BLAKE');",
            columns: ["ENAME", "DEPTNO"],
            rows: [["ALLEN", 30], ["WARD", 30], ["MARTIN", 30], ["BLAKE", 30], ["TURNER", 30], ["JAMES", 30]]
        },
        {
            question: "Display employees who have the same job as MILLER.",
            query: "SELECT ENAME, JOB FROM SCOTT.EMP WHERE JOB = (SELECT JOB FROM SCOTT.EMP WHERE ENAME='MILLER');",
            columns: ["ENAME", "JOB"],
            rows: [["SMITH", "CLERK"], ["ADAMS", "CLERK"], ["JAMES", "CLERK"], ["MILLER", "CLERK"]]
        },
        {
            question: "Display employees whose salary is less than the average salary of all employees.",
            query: "SELECT ENAME, SAL FROM SCOTT.EMP WHERE SAL < (SELECT AVG(SAL) FROM SCOTT.EMP);",
            columns: ["ENAME", "SAL"],
            rows: [["SMITH", 800], ["ALLEN", 1600], ["WARD", 1250], ["MARTIN", 1250], ["TURNER", 1500], ["ADAMS", 1100], ["JAMES", 950], ["MILLER", 1300]]
        },
        {
            question: "Display employees whose salary is greater than the maximum salary of all CLERKS.",
            query: "SELECT ENAME, SAL FROM SCOTT.EMP WHERE SAL > (SELECT MAX(SAL) FROM SCOTT.EMP WHERE JOB='CLERK');",
            columns: ["ENAME", "SAL"],
            rows: [["ALLEN", 1600], ["JONES", 2975], ["BLAKE", 2850], ["CLARK", 2450], ["SCOTT", 3000], ["KING", 5000], ["FORD", 3000], ["TURNER", 1500]]
        },
        {
            question: "Display the employee(s) who earn the minimum salary.",
            query: "SELECT ENAME, SAL FROM SCOTT.EMP WHERE SAL = (SELECT MIN(SAL) FROM SCOTT.EMP);",
            columns: ["ENAME", "SAL"],
            rows: [["SMITH", 800]]
        },
        {
            question: "Display the employee(s) who earn the maximum salary.",
            query: "SELECT ENAME, SAL FROM SCOTT.EMP WHERE SAL = (SELECT MAX(SAL) FROM SCOTT.EMP);",
            columns: ["ENAME", "SAL"],
            rows: [["KING", 5000]]
        },
        {
            question: "Display employees working in the 'ACCOUNTING' department.",
            query: "SELECT ENAME, DNAME FROM SCOTT.EMP E, SCOTT.DEPT D WHERE D.DNAME='ACCOUNTING' AND E.DEPTNO=D.DEPTNO;",
            columns: ["ENAME", "DNAME"],
            rows: [["CLARK", "ACCOUNTING"], ["KING", "ACCOUNTING"], ["MILLER", "ACCOUNTING"]]
        },
        {
            question: "Display employees located in 'NEW YORK'.",
            query: "SELECT ENAME, LOC FROM SCOTT.EMP E, SCOTT.DEPT D WHERE E.DEPTNO = D.DEPTNO AND D.LOC='NEW YORK';",
            columns: ["ENAME", "LOC"],
            rows: [["CLARK", "NEW YORK"], ["KING", "NEW YORK"], ["MILLER", "NEW YORK"]]
        },
        {
            question: "Display employees whose salary matches any salary in department 30.",
            query: "SELECT ENAME, SAL FROM SCOTT.EMP WHERE SAL IN (SELECT SAL FROM SCOTT.EMP WHERE DEPTNO = 30);",
            columns: ["ENAME", "SAL"],
            rows: [["ALLEN", 1600], ["WARD", 1250], ["MARTIN", 1250], ["BLAKE", 2850], ["TURNER", 1500], ["JAMES", 950]]
        },
        {
            question: "Display employees earning more than the highest paid CLERK.",
            query: "SELECT ENAME, SAL FROM SCOTT.EMP WHERE SAL > (SELECT MAX(SAL) FROM SCOTT.EMP WHERE JOB='CLERK');",
            columns: ["ENAME", "SAL"],
            rows: [["ALLEN", 1600], ["JONES", 2975], ["BLAKE", 2850]]
        },
        {
            question: "Display employees whose salary is less than the minimum salary of all MANAGERS.",
            query: "SELECT ENAME, SAL FROM SCOTT.EMP WHERE SAL < (SELECT MIN(SAL) FROM SCOTT.EMP WHERE JOB='MANAGER');",
            columns: ["ENAME", "SAL"],
            rows: [["SMITH", 800], ["ALLEN", 1600], ["WARD", 1250], ["MARTIN", 1250], ["TURNER", 1500], ["ADAMS", 1100], ["JAMES", 950], ["MILLER", 1300]]
        },
        {
            question: "Display employees and their jobs from department 20.",
            query: "SELECT ENAME, JOB FROM SCOTT.EMP WHERE DEPTNO=20;",
            columns: ["ENAME", "JOB"],
            rows: [["SMITH", "CLERK"], ["JONES", "MANAGER"], ["SCOTT", "ANALYST"], ["ADAMS", "CLERK"], ["FORD", "ANALYST"]]
        },
        {
            question: "Display employees who work in departments that have 'SALESMEN'.",
            query: "SELECT ENAME, JOB, DEPTNO FROM SCOTT.EMP WHERE DEPTNO IN (SELECT DEPTNO FROM SCOTT.EMP WHERE JOB = 'SALESMAN');",
            columns: ["ENAME", "JOB", "DEPTNO"],
            rows: [["ALLEN", "SALESMAN", 30], ["WARD", "SALESMAN", 30], ["MARTIN", "SALESMAN", 30], ["BLAKE", "MANAGER", 30], ["TURNER", "SALESMAN", 30], ["JAMES", "CLERK", 30]]
        },
        {
            question: "Display employees whose salary matches the salary of any CLERK.",
            query: "SELECT ENAME FROM SCOTT.EMP WHERE SAL IN (SELECT SAL FROM SCOTT.EMP WHERE JOB='CLERK');",
            columns: ["ENAME"],
            rows: [["SMITH"], ["ADAMS"], ["JAMES"], ["MILLER"]]
        },
        {
            question: "Display employees in departments that do NOT have any 'SALESMEN'.",
            query: "SELECT ENAME, JOB, DEPTNO FROM SCOTT.EMP WHERE DEPTNO NOT IN (SELECT DEPTNO FROM SCOTT.EMP WHERE JOB = 'SALESMAN');",
            columns: ["ENAME", "JOB", "DEPTNO"],
            rows: [["SMITH", "CLERK", 20], ["JONES", "MANAGER", 20], ["CLARK", "MANAGER", 10], ["SCOTT", "ANALYST", 20], ["KING", "PRESIDENT", 10]]
        },
        {
            question: "Display employees whose department matches the highest salary of department 10 (incorrect logic in original, corrected to salary search).",
            query: "SELECT ENAME, SAL FROM SCOTT.EMP WHERE SAL IN (SELECT MAX(SAL) FROM SCOTT.EMP WHERE DEPTNO = 10);",
            columns: ["ENAME", "SAL"],
            rows: [["KING", 5000]]
        },
        {
            question: "Display employees from departments having more than 3 employees.",
            query: "SELECT ENAME, DEPTNO FROM SCOTT.EMP WHERE DEPTNO IN (SELECT DEPTNO FROM SCOTT.EMP GROUP BY DEPTNO HAVING COUNT(*) > 3);",
            columns: ["ENAME", "DEPTNO"],
            rows: [["SMITH", 20], ["ALLEN", 30], ["WARD", 30], ["JONES", 20], ["MARTIN", 30], ["BLAKE", 30], ["SCOTT", 20], ["TURNER", 30], ["ADAMS", 20], ["JAMES", 30], ["FORD", 20]]
        },
        {
            question: "Display employees who earn more than the average salary of their own department.",
            query: "SELECT ENAME, SAL FROM SCOTT.EMP E WHERE SAL > (SELECT AVG(SAL) FROM SCOTT.EMP WHERE DEPTNO = E.DEPTNO);",
            columns: ["ENAME", "SAL"],
            rows: [["KING", 5000], ["JONES", 2975], ["SCOTT", 3000], ["FORD", 3000], ["BLAKE", 2850], ["ALLEN", 1600]]
        },
        {
            question: "Display employees earning the maximum salary of any department.",
            query: "SELECT ENAME, SAL FROM SCOTT.EMP WHERE SAL IN (SELECT MAX(SAL) FROM SCOTT.EMP GROUP BY DEPTNO);",
            columns: ["ENAME", "SAL"],
            rows: [["KING", 5000], ["SCOTT", 3000], ["FORD", 3000], ["BLAKE", 2850]]
        },
        {
            question: "Display employees earning the minimum salary of their respective jobs.",
            query: "SELECT ENAME, SAL, JOB FROM SCOTT.EMP WHERE SAL IN (SELECT MIN(SAL) FROM SCOTT.EMP GROUP BY JOB);",
            columns: ["ENAME", "SAL", "JOB"],
            rows: [["SMITH", 800, "CLERK"], ["WARD", 1250, "SALESMAN"], ["MARTIN", 1250, "SALESMAN"], ["CLARK", 2450, "MANAGER"], ["KING", 5000, "PRESIDENT"]]
        },
        {
            question: "Display departments and salaries where salary is greater than the total salary of department 20.",
            query: "SELECT DEPTNO, SAL FROM SCOTT.EMP GROUP BY DEPTNO, SAL HAVING SAL > (SELECT SUM(SAL) FROM SCOTT.EMP WHERE DEPTNO=20);",
            columns: ["DEPTNO", "SAL"],
            rows: []
        },
        {
            question: "Display employees earning the highest salary in their specific job category.",
            query: "SELECT ENAME, SAL, JOB FROM SCOTT.EMP E WHERE SAL = (SELECT MAX(SAL) FROM SCOTT.EMP WHERE JOB = E.JOB);",
            columns: ["ENAME", "SAL", "JOB"],
            rows: [["SCOTT", 3000, "ANALYST"], ["FORD", 3000, "ANALYST"], ["KING", 5000, "PRESIDENT"], ["JONES", 2975, "MANAGER"], ["ALLEN", 1600, "SALESMAN"], ["MILLER", 1300, "CLERK"]]
        },
        {
            question: "Display employees earning more than the overall average salary.",
            query: "SELECT ENAME, SAL FROM SCOTT.EMP WHERE SAL > (SELECT AVG(SAL) FROM SCOTT.EMP);",
            columns: ["ENAME", "SAL"],
            rows: [["JONES", 2975], ["BLAKE", 2850], ["CLARK", 2450], ["SCOTT", 3000], ["KING", 5000], ["FORD", 3000]]
        },
        {
            question: "Display the department with the maximum number of employees.",
            query: "SELECT DEPTNO, COUNT(ENAME) FROM SCOTT.EMP GROUP BY DEPTNO HAVING COUNT(ENAME) IN (SELECT MAX(COUNT(ENAME)) FROM SCOTT.EMP GROUP BY DEPTNO);",
            columns: ["DEPTNO", "COUNT"],
            rows: [[30, 6]]
        },
        {
            question: "Display the job with the minimum average salary.",
            query: "SELECT JOB, AVG(SAL) FROM SCOTT.EMP GROUP BY JOB HAVING AVG(SAL) IN (SELECT MIN(AVG(SAL)) FROM SCOTT.EMP GROUP BY JOB);",
            columns: ["JOB", "AVG_SAL"],
            rows: [["CLERK", 1037.5]]
        },
        {
            question: "Display employees earning more than the average salary of CLERKS.",
            query: "SELECT ENAME, SAL FROM SCOTT.EMP WHERE SAL > (SELECT AVG(SAL) FROM SCOTT.EMP WHERE JOB='CLERK');",
            columns: ["ENAME", "SAL"],
            rows: [["ALLEN", 1600], ["WARD", 1250], ["JONES", 2975], ["MARTIN", 1250], ["BLAKE", 2850], ["CLARK", 2450], ["SCOTT", 3000], ["KING", 5000], ["TURNER", 1500], ["FORD", 3000], ["MILLER", 1300]]
        },
        {
            question: "Display the department with the highest average salary.",
            query: "SELECT DEPTNO, AVG(SAL) FROM SCOTT.EMP GROUP BY DEPTNO HAVING AVG(SAL) IN (SELECT MAX(AVG(SAL)) FROM SCOTT.EMP GROUP BY DEPTNO);",
            columns: ["DEPTNO", "AVG_SAL"],
            rows: [[10, 2916.67]]
        },
        {
            question: "Display employees who earn more than the average salary of their own department (Correlated).",
            query: "SELECT ENAME, SAL FROM SCOTT.EMP E WHERE SAL > (SELECT AVG(SAL) FROM SCOTT.EMP WHERE DEPTNO= E.DEPTNO GROUP BY DEPTNO);",
            columns: ["ENAME", "SAL"],
            rows: [["ALLEN", 1600], ["JONES", 2975], ["BLAKE", 2850], ["SCOTT", 3000], ["KING", 5000], ["FORD", 3000]]
        },
        {
            question: "Display employees who earn the maximum salary in their department.",
            query: "SELECT ENAME, SAL, DEPTNO FROM SCOTT.EMP WHERE SAL IN (SELECT MAX(SAL) FROM SCOTT.EMP GROUP BY DEPTNO);",
            columns: ["ENAME", "SAL", "DEPTNO"],
            rows: [["BLAKE", 2850, 30], ["SCOTT", 3000, 20], ["KING", 5000, 10], ["FORD", 3000, 20]]
        },
        {
            question: "Display employees who earn the minimum salary in their department.",
            query: "SELECT ENAME, SAL, DEPTNO FROM SCOTT.EMP WHERE SAL IN (SELECT MIN(SAL) FROM SCOTT.EMP GROUP BY DEPTNO);",
            columns: ["ENAME", "SAL", "DEPTNO"],
            rows: [["SMITH", 800, 20], ["JAMES", 950, 30], ["MILLER", 1300, 10]]
        },
        {
            question: "Display employees earning more than the average salary of their respective jobs.",
            query: "SELECT ENAME, SAL, JOB FROM SCOTT.EMP E WHERE SAL > (SELECT AVG(SAL) FROM SCOTT.EMP WHERE JOB=E.JOB GROUP BY JOB);",
            columns: ["ENAME", "SAL", "JOB"],
            rows: [["ALLEN", 1600, "SALESMAN"], ["JONES", 2975, "MANAGER"], ["MILLER", 1300, "CLERK"]]
        },
        {
            question: "Display employees from departments that have only one employee.",
            query: "SELECT ENAME, DEPTNO FROM SCOTT.EMP WHERE DEPTNO IN (SELECT DEPTNO FROM SCOTT.EMP GROUP BY DEPTNO HAVING COUNT(*)=1);",
            columns: ["ENAME", "DEPTNO"],
            rows: []
        },
        {
            question: "Display details of employees who earn more than 5000 (Empty Set check).",
            query: "SELECT DEPTNO, ENAME, SAL FROM SCOTT.EMP WHERE ENAME = (SELECT ENAME FROM SCOTT.EMP WHERE SAL > 5000);",
            columns: ["DEPTNO", "ENAME", "SAL"],
            rows: []
        },
        {
            question: "Display employees from departments with more than 3 members.",
            query: "SELECT ENAME, DEPTNO FROM SCOTT.EMP WHERE DEPTNO IN (SELECT DEPTNO FROM SCOTT.EMP GROUP BY DEPTNO HAVING COUNT(*) > 3);",
            columns: ["ENAME", "DEPTNO"],
            rows: [["SMITH", 20], ["ALLEN", 30], ["WARD", 30], ["JONES", 20], ["MARTIN", 30], ["BLAKE", 30], ["SCOTT", 20], ["TURNER", 30], ["ADAMS", 20], ["JAMES", 30], ["FORD", 20]]
        },
        {
            question: "Display employees whose job category has more than 2 employees.",
            query: "SELECT ENAME, JOB FROM SCOTT.EMP WHERE JOB IN (SELECT JOB FROM SCOTT.EMP GROUP BY JOB HAVING COUNT(*) > 2);",
            columns: ["ENAME", "JOB"],
            rows: [["SMITH", "CLERK"], ["ALLEN", "SALESMAN"], ["WARD", "SALESMAN"], ["JONES", "MANAGER"], ["MARTIN", "SALESMAN"], ["BLAKE", "MANAGER"], ["CLARK", "MANAGER"], ["TURNER", "SALESMAN"], ["ADAMS", "CLERK"], ["JAMES", "CLERK"], ["MILLER", "CLERK"]]
        },
        {
            question: "Display employees who do not receive any commission.",
            query: "SELECT ENAME, DEPTNO, COMM FROM SCOTT.EMP WHERE ENAME IN (SELECT ENAME FROM SCOTT.EMP WHERE COMM IS NULL);",
            columns: ["ENAME", "DEPTNO", "COMM"],
            rows: [["SMITH", 20, "NULL"], ["JONES", 20, "NULL"], ["BLAKE", 30, "NULL"], ["CLARK", 10, "NULL"], ["SCOTT", 20, "NULL"], ["KING", 10, "NULL"], ["ADAMS", 20, "NULL"], ["JAMES", 30, "NULL"], ["FORD", 20, "NULL"], ["MILLER", 10, "NULL"]]
        },
        {
            question: "Display employees who are 'MANAGERS'.",
            query: "SELECT ENAME, DEPTNO FROM SCOTT.EMP WHERE ENAME IN (SELECT ENAME FROM SCOTT.EMP WHERE JOB='MANAGER');",
            columns: ["ENAME", "DEPTNO"],
            rows: [["JONES", 20], ["BLAKE", 30], ["CLARK", 10]]
        },
        {
            question: "Display departments that currently have employees.",
            query: "SELECT DEPTNO, DNAME FROM SCOTT.DEPT WHERE DEPTNO IN (SELECT DEPTNO FROM SCOTT.EMP);",
            columns: ["DEPTNO", "DNAME"],
            rows: [[10, "ACCOUNTING"], [20, "RESEARCH"], [30, "SALES"]]
        },
        {
            question: "Display departments that do NOT have any employees.",
            query: "SELECT DEPTNO, DNAME FROM SCOTT.DEPT WHERE DEPTNO NOT IN (SELECT DISTINCT DEPTNO FROM SCOTT.EMP);",
            columns: ["DEPTNO", "DNAME"],
            rows: [[40, "OPERATIONS"]]
        },
        {
            question: "Display employees who share the same manager as other employees.",
            query: "SELECT ENAME, EMPNO FROM SCOTT.EMP WHERE MGR IN (SELECT MGR FROM SCOTT.EMP WHERE MGR IS NOT NULL);",
            columns: ["ENAME", "EMPNO"],
            rows: [["SMITH", 7369], ["ALLEN", 7499], ["WARD", 7521], ["JONES", 7566], ["MARTIN", 7654], ["BLAKE", 7698], ["CLARK", 7782], ["SCOTT", 7788], ["TURNER", 7844], ["ADAMS", 7876], ["JAMES", 7900], ["FORD", 7902], ["MILLER", 7934]]
        },
        {
            question: "Display employees whose job is not 'MANAGER'.",
            query: "SELECT ENAME, JOB FROM SCOTT.EMP WHERE JOB IN (SELECT JOB FROM SCOTT.EMP WHERE JOB<>'MANAGER');",
            columns: ["ENAME", "JOB"],
            rows: [["SMITH", "CLERK"], ["ALLEN", "SALESMAN"], ["WARD", "SALESMAN"], ["MARTIN", "SALESMAN"], ["SCOTT", "ANALYST"], ["KING", "PRESIDENT"], ["TURNER", "SALESMAN"], ["ADAMS", "CLERK"], ["JAMES", "CLERK"], ["FORD", "ANALYST"], ["MILLER", "CLERK"]]
        },
        {
            question: "Display all 'SALESMEN' using a subquery.",
            query: "SELECT ENAME, DEPTNO, JOB FROM SCOTT.EMP WHERE JOB IN (SELECT JOB FROM SCOTT.EMP WHERE JOB = 'SALESMAN');",
            columns: ["ENAME", "DEPTNO", "JOB"],
            rows: [["ALLEN", 30, "SALESMAN"], ["WARD", 30, "SALESMAN"], ["MARTIN", 30, "SALESMAN"], ["TURNER", 30, "SALESMAN"]]
        },
        {
            question: "Display all employees who are NOT 'SALESMEN'.",
            query: "SELECT ENAME, DEPTNO, JOB FROM SCOTT.EMP WHERE JOB NOT IN (SELECT JOB FROM SCOTT.EMP WHERE JOB = 'SALESMAN');",
            columns: ["ENAME", "DEPTNO", "JOB"],
            rows: [["SMITH", 20, "CLERK"], ["JONES", 20, "MANAGER"], ["BLAKE", 30, "MANAGER"], ["CLARK", 10, "MANAGER"], ["SCOTT", 20, "ANALYST"], ["KING", 10, "PRESIDENT"], ["ADAMS", 20, "CLERK"], ["JAMES", 30, "CLERK"], ["FORD", 20, "ANALYST"], ["MILLER", 10, "CLERK"]]
        },
        {
            question: "Display employees who receive a commission.",
            query: "SELECT ENAME, DEPTNO, COMM FROM SCOTT.EMP WHERE ENAME IN (SELECT ENAME FROM SCOTT.EMP WHERE COMM IS NOT NULL);",
            columns: ["ENAME", "DEPTNO", "COMM"],
            rows: [["ALLEN", 30, 300], ["WARD", 30, 500], ["MARTIN", 30, 1400], ["TURNER", 30, 0]]
        },
        {
            question: "Display departments where every employee receives a commission (Logic adjusted).",
            query: "SELECT DISTINCT DEPTNO FROM SCOTT.EMP WHERE DEPTNO NOT IN (SELECT DEPTNO FROM SCOTT.EMP WHERE COMM IS NULL);",
            columns: ["DEPTNO"],
            rows: []
        },
        {
            question: "Display employees who are NOT 'CLERKS'.",
            query: "SELECT ENAME, JOB, DEPTNO FROM SCOTT.EMP WHERE ENAME IN (SELECT ENAME FROM SCOTT.EMP WHERE JOB<>'CLERK');",
            columns: ["ENAME", "JOB", "DEPTNO"],
            rows: [["ALLEN", "SALESMAN", 30], ["WARD", "SALESMAN", 30], ["JONES", "MANAGER", 20], ["MARTIN", "SALESMAN", 30], ["BLAKE", "MANAGER", 30], ["CLARK", "MANAGER", 10], ["SCOTT", "ANALYST", 20], ["KING", "PRESIDENT", 10], ["TURNER", "SALESMAN", 30], ["FORD", "ANALYST", 20]]
        },
        {
            question: "Display employees located in 'CHICAGO'.",
            query: "SELECT E.ENAME, D.LOC FROM SCOTT.DEPT D, SCOTT.EMP E WHERE E.DEPTNO=D.DEPTNO AND E.DEPTNO IN (SELECT DEPTNO FROM SCOTT.DEPT WHERE LOC='CHICAGO');",
            columns: ["ENAME", "LOC"],
            rows: [["ALLEN", "CHICAGO"], ["WARD", "CHICAGO"], ["MARTIN", "CHICAGO"], ["BLAKE", "CHICAGO"], ["TURNER", "CHICAGO"], ["JAMES", "CHICAGO"]]
        }
    ],
    "scalar": [
        { question: "Display employee name, hire date, current date, and days worked.", query: "SELECT ENAME, HIREDATE, SYSDATE AS CURRENT_DATE, (SYSDATE - HIREDATE) AS WORK FROM SCOTT.EMP;", columns: ["ENAME", "HIREDATE", "CURRENT_DATE", "WORK"], rows: [["SMITH", "17-DEC-80", "10-APR-26", 16550], ["KING", "17-NOV-81", "10-APR-26", 16215]] },
        { question: "Display employee name and hire date in a custom formatted string.", query: "SELECT ENAME, TO_CHAR(HIREDATE,'DAY, MONTH DD, YYYY') AS FORMATTED FROM SCOTT.EMP;", columns: ["ENAME", "FORMATTED"], rows: [["SMITH", "WEDNESDAY, DECEMBER 17, 1980"], ["ALLEN", "FRIDAY, FEBRUARY 20, 1981"]] },
        { question: "Display employees hired in the current month.", query: "SELECT ENAME, HIREDATE FROM SCOTT.EMP WHERE TO_CHAR(HIREDATE,'MM')= TO_CHAR(SYSDATE,'MM');", columns: ["ENAME", "HIREDATE"], rows: [["JONES", "02-APR-81"], ["SCOTT", "19-APR-87"]] },
        { question: "Display the next Monday from the employee's hire date.", query: "SELECT ENAME, HIREDATE, NEXT_DAY(HIREDATE,'MONDAY') AS NEXT_MONDAY FROM SCOTT.EMP;", columns: ["ENAME", "HIREDATE", "NEXT_MONDAY"], rows: [["SMITH", "17-DEC-80", "22-DEC-80"]] },
        { question: "Display the last day of the month for each employee's hire date.", query: "SELECT ENAME, HIREDATE, LAST_DAY(HIREDATE) AS LAST_DAY_OF_MONTH FROM SCOTT.EMP;", columns: ["ENAME", "HIREDATE", "LAST_DAY_OF_MONTH"], rows: [["SMITH", "17-DEC-80", "31-DEC-80"]] },
        { question: "Display employees hired at least 10 years ago.", query: "SELECT ENAME, HIREDATE FROM SCOTT.EMP WHERE HIREDATE <= ADD_MONTHS(SYSDATE, -120);", columns: ["ENAME", "HIREDATE"], rows: [["SMITH", "17-DEC-80"], ["KING", "17-NOV-81"]] },
        { question: "Display total months worked by each employee.", query: "SELECT ENAME, ROUND(MONTHS_BETWEEN(SYSDATE, HIREDATE)) AS MONTHS_WORKED FROM SCOTT.EMP;", columns: ["ENAME", "MONTHS_WORKED"], rows: [["SMITH", 543], ["KING", 532]] },
        { question: "Display employee hire date shifted by 42 months.", query: "SELECT ENAME, HIREDATE, ADD_MONTHS(HIREDATE, 42) AS NEW_HIREDATE FROM SCOTT.EMP;", columns: ["ENAME", "HIREDATE", "NEW_HIREDATE"], rows: [["SMITH", "17-DEC-80", "17-JUN-84"]] },
        { question: "Display employees hired between 1981 and 1983.", query: "SELECT ENAME, HIREDATE FROM SCOTT.EMP WHERE HIREDATE BETWEEN TO_DATE('01-01-1981','DD-MM-YYYY') AND TO_DATE('31-12-1983','DD-MM-YYYY');", columns: ["ENAME", "HIREDATE"], rows: [["ALLEN", "20-FEB-81"], ["WARD", "22-FEB-81"]] },
        { question: "Display total years worked by each employee.", query: "SELECT ENAME, HIREDATE, ROUND(MONTHS_BETWEEN(SYSDATE, HIREDATE) / 12) AS YEARS_WORKED FROM SCOTT.EMP;", columns: ["ENAME", "HIREDATE", "YEARS_WORKED"], rows: [["SMITH", "17-DEC-80", 45], ["KING", "17-NOV-81", 44]] },
        { question: "Round the salary to the nearest thousand.", query: "SELECT ENAME, ROUND(SAL, -3) AS ROUNDED_SAL FROM SCOTT.EMP;", columns: ["ENAME", "ROUNDED_SAL"], rows: [["SMITH", 1000], ["KING", 5000]] },
        { question: "Truncate salary to two decimal places.", query: "SELECT ENAME, TRUNC(SAL, 2) AS TRUNCATED_SALARY FROM SCOTT.EMP;", columns: ["ENAME", "TRUNCATED_SALARY"], rows: [["SMITH", 800.00], ["ALLEN", 1600.00]] },
        { question: "Display square root of salaries.", query: "SELECT ENAME, SQRT(SAL) AS SQRT_SAL FROM SCOTT.EMP;", columns: ["ENAME", "SQRT_SAL"], rows: [["SMITH", 28.28], ["KING", 70.71]] },
        { question: "Display absolute difference between salary and 5000.", query: "SELECT ENAME, ABS(SAL - 5000) AS DIFFERENCE FROM SCOTT.EMP;", columns: ["ENAME", "DIFFERENCE"], rows: [["SMITH", 4200], ["KING", 0]] },
        { question: "Display ceiling value of salary.", query: "SELECT ENAME, CEIL(SAL) AS ROUNDED FROM SCOTT.EMP;", columns: ["ENAME", "ROUNDED"], rows: [["SMITH", 800], ["ALLEN", 1600]] },
        { question: "Display floor value of salary.", query: "SELECT ENAME, FLOOR(SAL) AS ROUNDED_SAL FROM SCOTT.EMP;", columns: ["ENAME", "ROUNDED_SAL"], rows: [["SMITH", 800], ["ALLEN", 1600]] },
        { question: "Generate a random number between 1 and 500 for each employee.", query: "SELECT ENAME, TRUNC(DBMS_RANDOM.VALUE(1,501)) AS RANDOM_NUMBER FROM SCOTT.EMP;", columns: ["ENAME", "RANDOM_NUMBER"], rows: [["SMITH", 243], ["KING", 112]] },
        { question: "Display remainder of salary when divided by 2000.", query: "SELECT ENAME, SAL, MOD(SAL, 2000) AS REMAINDER FROM SCOTT.EMP;", columns: ["ENAME", "SAL", "REMAINDER"], rows: [["SMITH", 800, 800], ["JONES", 2975, 975]] },
        { question: "Display cube of salary.", query: "SELECT ENAME, SAL, POWER(SAL, 3) AS SAL_CUBE FROM SCOTT.EMP;", columns: ["ENAME", "SAL", "SAL_CUBE"], rows: [["SMITH", 800, 512000000]] },
        { question: "Round salary to nearest hundred and thousand.", query: "SELECT ENAME, SAL, ROUND(SAL, -2) AS ROUND_HUNDRED, ROUND(SAL, -3) AS ROUND_THOUSAND FROM SCOTT.EMP;", columns: ["ENAME", "SAL", "ROUND_HUNDRED", "ROUND_THOUSAND"], rows: [["SMITH", 800, 800, 1000], ["ALLEN", 1600, 1600, 2000]] },
        { question: "Display names in uppercase and lowercase.", query: "SELECT ENAME, UPPER(ENAME) AS UPPER_NAME, LOWER(ENAME) AS LOWER_NAME FROM SCOTT.EMP;", columns: ["ENAME", "UPPER_NAME", "LOWER_NAME"], rows: [["SMITH", "SMITH", "smith"], ["KING", "KING", "king"]] },
        { question: "Display length of each employee name.", query: "SELECT ENAME, LENGTH(ENAME) AS NAME_LENGTH FROM SCOTT.EMP;", columns: ["ENAME", "NAME_LENGTH"], rows: [["SMITH", 5], ["KING", 4]] },
        { question: "Display first 4 characters of names.", query: "SELECT ENAME, SUBSTR(ENAME, 1, 4) AS FIRST_4_CHARS FROM SCOTT.EMP;", columns: ["ENAME", "FIRST_4_CHARS"], rows: [["SMITH", "SMIT"], ["ALLEN", "ALLE"]] },
        { question: "Concatenate name and job with a hyphen.", query: "SELECT ENAME || '-' || JOB AS EMP_JOB FROM SCOTT.EMP;", columns: ["EMP_JOB"], rows: [["SMITH-CLERK"], ["KING-PRESIDENT"]] },
        { question: "Replace 'A' with '#' in employee names.", query: "SELECT ENAME, REPLACE(ENAME, 'A', '#') AS MODIFIED_NAME FROM SCOTT.EMP;", columns: ["ENAME", "MODIFIED_NAME"], rows: [["ALLEN", "#LLEN"], ["ADAMS", "#D#MS"]] },
        { question: "Display position of letter 'E' in names.", query: "SELECT ENAME, INSTR(ENAME, 'E') AS POSITION_OF_E FROM SCOTT.EMP;", columns: ["ENAME", "POSITION_OF_E"], rows: [["ALLEN", 4], ["MILLER", 5]] },
        { question: "Display trimmed employee names.", query: "SELECT ENAME, TRIM(ENAME) AS TRIMMED_NAME FROM SCOTT.EMP;", columns: ["ENAME", "TRIMMED_NAME"], rows: [["SMITH", "SMITH"]] },
        { question: "Display names in Initial Capital format.", query: "SELECT ENAME, INITCAP(ENAME) AS FORMATTED_NAME FROM SCOTT.EMP;", columns: ["ENAME", "FORMATTED_NAME"], rows: [["SMITH", "Smith"], ["KING", "King"]] },
        { question: "Display last 3 characters of names.", query: "SELECT ENAME, SUBSTR(ENAME, -3) AS LAST_3 FROM SCOTT.EMP;", columns: ["ENAME", "LAST_3"], rows: [["SMITH", "ITH"], ["KING", "ING"]] },
        { question: "Pad names with '*' to 10 characters length.", query: "SELECT LPAD(ENAME, 10, '*') AS PADDED_NAME FROM SCOTT.EMP;", columns: ["PADDED_NAME"], rows: [["*****SMITH"], ["******KING"]] },
        { question: "Remove spaces from names.", query: "SELECT REPLACE(ENAME, ' ', '') AS NO_SPACE FROM SCOTT.EMP;", columns: ["NO_SPACE"], rows: [["SMITH"], ["ALLEN"]] },
        { question: "Display names starting with 'S'.", query: "SELECT ENAME FROM SCOTT.EMP WHERE ENAME LIKE 'S%';", columns: ["ENAME"], rows: [["SMITH"], ["SCOTT"]] },
        { question: "Count characters excluding spaces in names.", query: "SELECT ENAME, LENGTH(REPLACE(ENAME, ' ', '')) AS CHAR_COUNT FROM SCOTT.EMP;", columns: ["ENAME", "CHAR_COUNT"], rows: [["SMITH", 5]] },
        { question: "Display reversed names.", query: "SELECT ENAME, REVERSE(ENAME) AS REVERSED_NAME FROM SCOTT.EMP;", columns: ["ENAME", "REVERSED_NAME"], rows: [["SMITH", "HTIMS"], ["KING", "GNIK"]] },
        { question: "Extract domain from email (assuming email column exists).", query: "SELECT ENAME, SUBSTR(ENAME || '@college.edu', INSTR(ENAME || '@college.edu', '@') + 1) AS DOMAIN FROM SCOTT.EMP;", columns: ["ENAME", "DOMAIN"], rows: [["SMITH", "college.edu"]] },
        { question: "Display today's date in DD/MM/YYYY format.", query: "SELECT TO_CHAR(SYSDATE, 'DD/MM/YYYY') AS TODAY FROM DUAL;", columns: ["TODAY"], rows: [["10/04/2026"]] },
        { question: "Convert a string to a date value.", query: "SELECT TO_DATE('15-AUG-2020', 'DD-MON-YYYY') AS DATE_VAL FROM DUAL;", columns: ["DATE_VAL"], rows: [["15-AUG-20"]] },
        { question: "Display salary formatted with currency symbol.", query: "SELECT ENAME, TO_CHAR(SAL, '$99,999') AS SALARY FROM SCOTT.EMP;", columns: ["ENAME", "SALARY"], rows: [["SMITH", "$800"], ["KING", "$5,000"]] },
        { question: "Format a numeric value with commas.", query: "SELECT TO_CHAR(12345, '99,999') AS FORMATTED FROM DUAL;", columns: ["FORMATTED"], rows: [["12,345"]] },
        { question: "Display hire date in 'Month DD, YYYY' format.", query: "SELECT ENAME, TO_CHAR(HIREDATE, 'MONTH DD, YYYY') AS FORMAT_DATE FROM SCOTT.EMP;", columns: ["ENAME", "FORMAT_DATE"], rows: [["SMITH", "DECEMBER 17, 1980"]] },
        { question: "Convert string to number and add 500.", query: "SELECT TO_NUMBER('1000') + 500 AS RESULT FROM DUAL;", columns: ["RESULT"], rows: [[1500]] },
        { question: "Convert string '15-08-2020' to date.", query: "SELECT TO_DATE('15-08-2020', 'DD-MM-YYYY') AS CONVERTED_DATE FROM DUAL;", columns: ["CONVERTED_DATE"], rows: [["15-AUG-20"]] },
        { question: "Extract current year from SYSDATE.", query: "SELECT TO_CHAR(SYSDATE, 'YYYY') AS YEAR FROM DUAL;", columns: ["YEAR"], rows: [["2026"]] },
        { question: "Concatenate salary with text 'RUPEES'.", query: "SELECT ENAME, TO_CHAR(SAL) || ' RUPEES' AS SAL_TEXT FROM SCOTT.EMP;", columns: ["ENAME", "SAL_TEXT"], rows: [["SMITH", "800 RUPEES"]] },
        { question: "Display hire date broken into Day, Month, and Year components.", query: "SELECT HIREDATE, TO_CHAR(HIREDATE, 'DD-MM-YYYY') AS FULL_DATE, TO_CHAR(HIREDATE, 'MONTH') AS MONTH, TO_CHAR(HIREDATE, 'YYYY') AS YEAR FROM SCOTT.EMP;", columns: ["HIREDATE", "FULL_DATE", "MONTH", "YEAR"], rows: [["17-DEC-80", "17-12-1980", "DECEMBER", "1980"]] },
        { question: "Replace NULL salaries with 0 using NVL.", query: "SELECT ENAME, NVL(SAL, 0) AS SALARY FROM SCOTT.EMP;", columns: ["ENAME", "SALARY"], rows: [["SMITH", 800], ["KING", 5000]] },
        { question: "Display 'NO COMMISSION' for null commissions.", query: "SELECT ENAME, NVL(TO_CHAR(COMM), 'NO COMMISSION') AS COMMISSION FROM SCOTT.EMP;", columns: ["ENAME", "COMMISSION"], rows: [["SMITH", "NO COMMISSION"], ["ALLEN", "300"]] },
        { question: "Check commission status using NVL2.", query: "SELECT ENAME, NVL2(COMM, 'HAS COMMISSION', 'NO COMMISSION') AS STATUS FROM SCOTT.EMP;", columns: ["ENAME", "STATUS"], rows: [["SMITH", "NO COMMISSION"], ["ALLEN", "HAS COMMISSION"]] },
        { question: "Display first non-null value among Sal and Comm.", query: "SELECT ENAME, COALESCE(SAL, COMM, 0) AS VALUE FROM SCOTT.EMP;", columns: ["ENAME", "VALUE"], rows: [["SMITH", 800], ["ALLEN", 1600]] },
        { question: "Replace NULL salary with average salary of all employees.", query: "SELECT ENAME, NVL(SAL, (SELECT AVG(SAL) FROM SCOTT.EMP)) AS SALARY FROM SCOTT.EMP;", columns: ["ENAME", "SALARY"], rows: [["SMITH", 800]] },
        { question: "Compare Salary and Commission using NULLIF.", query: "SELECT ENAME, NULLIF(SAL, COMM) AS RESULT FROM SCOTT.EMP;", columns: ["ENAME", "RESULT"], rows: [["SMITH", 800]] },
        { question: "Replace NULL department names.", query: "SELECT NVL(DNAME, 'NO DEPARTMENT') AS DEPT FROM SCOTT.DEPT;", columns: ["DEPT"], rows: [["ACCOUNTING"], ["RESEARCH"]] },
        { question: "Display names of employees with no commission.", query: "SELECT ENAME FROM SCOTT.EMP WHERE COMM IS NULL;", columns: ["ENAME"], rows: [["SMITH"], ["JONES"]] },
        { question: "Categorize salary using DECODE (Low/Medium/High).", query: "SELECT ENAME, DECODE(SIGN(SAL-3000), -1, 'LOW', 0, 'MEDIUM', 1, 'HIGH') AS CATEGORY FROM SCOTT.EMP;", columns: ["ENAME", "CATEGORY"], rows: [["SMITH", "LOW"], ["KING", "HIGH"]] },
        { question: "Categorize experience based on hire date using CASE.", query: "SELECT ENAME, CASE WHEN SYSDATE - HIREDATE < 365 THEN 'NEW' WHEN SYSDATE - HIREDATE < 20000 THEN 'MID' ELSE 'EXPERIENCED' END AS EXPERIENCE FROM SCOTT.EMP;", columns: ["ENAME", "EXPERIENCE"], rows: [["SMITH", "EXPERIENCED"], ["ADAMS", "EXPERIENCED"]] },
        { question: "Replace NULL jobs with 'UNKNOWN JOB'.", query: "SELECT ENAME, NVL(JOB, 'UNKNOWN JOB') AS JOB_TITLE FROM SCOTT.EMP;", columns: ["ENAME", "JOB_TITLE"], rows: [["SMITH", "CLERK"]] },
        { question: "Default NULL hire dates to current date.", query: "SELECT ENAME, NVL(HIREDATE, SYSDATE) AS HIRE_DATE FROM SCOTT.EMP;", columns: ["ENAME", "HIRE_DATE"], rows: [["SMITH", "17-DEC-80"]] },
        { question: "Calculate bonus: use commission if available, else 10% of salary.", query: "SELECT ENAME, NVL(COMM, SAL * 0.10) AS BONUS FROM SCOTT.EMP;", columns: ["ENAME", "BONUS"], rows: [["SMITH", 80], ["ALLEN", 300]] },
        { question: "Pick first available value among Comm, Sal, or 0.", query: "SELECT ENAME, COALESCE(COMM, SAL, 0) AS FIRST_VAL FROM SCOTT.EMP;", columns: ["ENAME", "FIRST_VAL"], rows: [["SMITH", 800], ["ALLEN", 300]] },
        { question: "Display salary formatted with commas or 'NO SALARY' if null.", query: "SELECT ENAME, NVL(TO_CHAR(SAL, '99,999'), 'NO SALARY') AS SALARY FROM SCOTT.EMP;", columns: ["ENAME", "SALARY"], rows: [["SMITH", "800"], ["KING", "5,000"]] }
    ]
    ,
    "joins": [
        { question: "Display employee name and their department name.", query: "SELECT E.ENAME, D.DNAME FROM SCOTT.EMP E, SCOTT.DEPT D WHERE E.DEPTNO = D.DEPTNO;", columns: ["ENAME", "DNAME"], rows: [["SMITH", "RESEARCH"], ["ALLEN", "SALES"], ["KING", "ACCOUNTING"], ["MILLER", "ACCOUNTING"]] },
        { question: "Display employee name, salary, and department location.", query: "SELECT E.ENAME, E.SAL, D.LOC FROM SCOTT.EMP E, SCOTT.DEPT D WHERE E.DEPTNO = D.DEPTNO;", columns: ["ENAME", "SAL", "LOC"], rows: [["SMITH", 800, "DALLAS"], ["ALLEN", 1600, "CHICAGO"], ["KING", 5000, "NEW YORK"]] },
        { question: "Display employee name and department name for department 10.", query: "SELECT E.ENAME, D.DNAME FROM SCOTT.EMP E, SCOTT.DEPT D WHERE E.DEPTNO = D.DEPTNO AND E.DEPTNO = 10;", columns: ["ENAME", "DNAME"], rows: [["CLARK", "ACCOUNTING"], ["KING", "ACCOUNTING"], ["MILLER", "ACCOUNTING"]] },
        { question: "Display name and department for employees earning more than 2000.", query: "SELECT E.ENAME, D.DNAME FROM SCOTT.EMP E, SCOTT.DEPT D WHERE E.DEPTNO = D.DEPTNO AND E.SAL > 2000;", columns: ["ENAME", "DNAME"], rows: [["JONES", "RESEARCH"], ["BLAKE", "SALES"], ["SCOTT", "RESEARCH"], ["KING", "ACCOUNTING"], ["FORD", "RESEARCH"]] },
        { question: "Display employee name, job, and department name.", query: "SELECT E.ENAME, E.JOB, D.DNAME FROM SCOTT.EMP E, SCOTT.DEPT D WHERE E.DEPTNO = D.DEPTNO;", columns: ["ENAME", "JOB", "DNAME"], rows: [["SMITH", "CLERK", "RESEARCH"], ["ALLEN", "SALESMAN", "SALES"], ["KING", "PRESIDENT", "ACCOUNTING"]] },
        { question: "Display name and location of all 'CLERKS'.", query: "SELECT E.ENAME, D.LOC FROM SCOTT.EMP E, SCOTT.DEPT D WHERE E.DEPTNO = D.DEPTNO AND E.JOB = 'CLERK';", columns: ["ENAME", "LOC"], rows: [["SMITH", "DALLAS"], ["ADAMS", "DALLAS"], ["JAMES", "CHICAGO"], ["MILLER", "NEW YORK"]] },
        { question: "Display employee names working in 'NEW YORK'.", query: "SELECT E.ENAME, D.DNAME FROM SCOTT.EMP E, SCOTT.DEPT D WHERE E.DEPTNO = D.DEPTNO AND D.LOC = 'NEW YORK';", columns: ["ENAME", "DNAME"], rows: [["CLARK", "ACCOUNTING"], ["KING", "ACCOUNTING"], ["MILLER", "ACCOUNTING"]] },
        { question: "Display employee name, their dept number, and dept name.", query: "SELECT E.ENAME, E.DEPTNO, D.DNAME FROM SCOTT.EMP E, SCOTT.DEPT D WHERE E.DEPTNO = D.DEPTNO;", columns: ["ENAME", "DEPTNO", "DNAME"], rows: [["SMITH", 20, "RESEARCH"], ["ALLEN", 30, "SALES"]] },
        { question: "Display employees hired after 1981 along with their department name.", query: "SELECT E.ENAME, D.DNAME FROM SCOTT.EMP E, SCOTT.DEPT D WHERE E.DEPTNO = D.DEPTNO AND E.HIREDATE > TO_DATE('31-DEC-1981','DD-MON-YYYY');", columns: ["ENAME", "DNAME"], rows: [["SCOTT", "RESEARCH"], ["ADAMS", "RESEARCH"], ["MILLER", "ACCOUNTING"]] },
        { question: "Display employees who receive commission along with their department name.", query: "SELECT E.ENAME, D.DNAME FROM SCOTT.EMP E, SCOTT.DEPT D WHERE E.DEPTNO = D.DEPTNO AND E.COMM IS NOT NULL;", columns: ["ENAME", "DNAME"], rows: [["ALLEN", "SALES"], ["WARD", "SALES"], ["MARTIN", "SALES"], ["TURNER", "SALES"]] },
        { question: "Display employees with salary between 1500 and 3000 and their department name.", query: "SELECT E.ENAME, D.DNAME FROM SCOTT.EMP E, SCOTT.DEPT D WHERE E.DEPTNO = D.DEPTNO AND E.SAL BETWEEN 1500 AND 3000;", columns: ["ENAME", "DNAME"], rows: [["ALLEN", "SALES"], ["JONES", "RESEARCH"], ["BLAKE", "SALES"], ["SCOTT", "RESEARCH"], ["FORD", "RESEARCH"]] },

        /* Advanced, Subqueries in Joins & Self Joins (12-40) */
        { question: "Display employees from departments where only one employee works.", query: "SELECT ENAME FROM SCOTT.EMP WHERE DEPTNO IN ( SELECT DEPTNO FROM SCOTT.EMP GROUP BY DEPTNO HAVING COUNT(*) = 1 );", columns: ["ENAME"], rows: [["No Rows Found"]] },
        { question: "Display employees from departments with more than 3 members.", query: "SELECT ENAME FROM SCOTT.EMP WHERE DEPTNO IN ( SELECT DEPTNO FROM SCOTT.EMP GROUP BY DEPTNO HAVING COUNT(*) > 3 );", columns: ["ENAME"], rows: [["SMITH"], ["ALLEN"], ["WARD"], ["JONES"], ["MARTIN"], ["BLAKE"], ["SCOTT"], ["TURNER"], ["ADAMS"], ["JAMES"], ["FORD"]] },
        { question: "Display department name where maximum salary is less than or equal to 2000.", query: "SELECT DNAME FROM SCOTT.DEPT WHERE DEPTNO IN ( SELECT DEPTNO FROM SCOTT.EMP GROUP BY DEPTNO HAVING MAX(SAL) <= 2000 );", columns: ["DNAME"], rows: [["No Rows Found"]] },
        { question: "Display employees earning more than at least one manager.", query: "SELECT ENAME FROM SCOTT.EMP WHERE SAL > ANY ( SELECT SAL FROM SCOTT.EMP WHERE JOB = 'MANAGER' );", columns: ["ENAME"], rows: [["JONES"], ["BLAKE"], ["SCOTT"], ["KING"], ["FORD"]] },
        { question: "Display employees who have colleagues with the same job in the same department.", query: "SELECT E1.ENAME FROM SCOTT.EMP E1, SCOTT.EMP E2 WHERE E1.JOB = E2.JOB AND E1.DEPTNO = E2.DEPTNO AND E1.EMPNO <> E2.EMPNO;", columns: ["ENAME"], rows: [["SCOTT"], ["FORD"], ["ALLEN"], ["WARD"], ["MARTIN"], ["TURNER"]] },
        { question: "Display employees whose manager is in the same department.", query: "SELECT E.ENAME FROM SCOTT.EMP E, SCOTT.EMP M WHERE E.MGR = M.EMPNO AND E.DEPTNO = M.DEPTNO;", columns: ["ENAME"], rows: [["SMITH"], ["ALLEN"], ["WARD"], ["MARTIN"], ["TURNER"], ["ADAMS"], ["JAMES"], ["MILLER"]] },
        { question: "Display employees whose manager is in a different department.", query: "SELECT E.ENAME FROM SCOTT.EMP E, SCOTT.EMP M WHERE E.MGR = M.EMPNO AND E.DEPTNO <> M.DEPTNO;", columns: ["ENAME"], rows: [["JONES"], ["BLAKE"], ["CLARK"], ["SCOTT"], ["FORD"]] },
        { question: "Display employee earning the highest salary in their department.", query: "SELECT ENAME FROM SCOTT.EMP E WHERE SAL = ( SELECT MAX(SAL) FROM SCOTT.EMP WHERE DEPTNO = E.DEPTNO );", columns: ["ENAME"], rows: [["KING"], ["SCOTT"], ["FORD"], ["BLAKE"]] },
        { question: "Display employees who earn more than the average salary of their own department.", query: "SELECT ENAME FROM SCOTT.EMP E WHERE SAL > ( SELECT AVG(SAL) FROM SCOTT.EMP WHERE DEPTNO = E.DEPTNO );", columns: ["ENAME"], rows: [["KING"], ["JONES"], ["SCOTT"], ["FORD"], ["BLAKE"], ["ALLEN"]] },
        { question: "Display the department number having the maximum number of employees.", query: "SELECT DEPTNO FROM ( SELECT DEPTNO, COUNT(*) CNT FROM SCOTT.EMP GROUP BY DEPTNO ORDER BY CNT DESC ) WHERE ROWNUM = 1;", columns: ["DEPTNO"], rows: [[30]] },
        { question: "Display the department number with the highest total salary payout.", query: "SELECT DEPTNO FROM ( SELECT DEPTNO, SUM(SAL) TOTAL FROM SCOTT.EMP GROUP BY DEPTNO ORDER BY TOTAL DESC ) WHERE ROWNUM = 1;", columns: ["DEPTNO"], rows: [[20]] },
        { question: "Display the department name and its average salary.", query: "SELECT D.DNAME, AVG(E.SAL) FROM SCOTT.EMP E, SCOTT.DEPT D WHERE E.DEPTNO = D.DEPTNO GROUP BY D.DNAME;", columns: ["DNAME", "AVG_SAL"], rows: [["ACCOUNTING", 2916.67], ["RESEARCH", 2175], ["SALES", 1566.67]] },
        { question: "Display the department name and its total salary.", query: "SELECT D.DNAME, SUM(E.SAL) FROM SCOTT.EMP E, SCOTT.DEPT D WHERE E.DEPTNO = D.DEPTNO GROUP BY D.DNAME;", columns: ["DNAME", "SUM_SAL"], rows: [["ACCOUNTING", 8750], ["RESEARCH", 10875], ["SALES", 9400]] },
        { question: "Display department name and the number of employees in it.", query: "SELECT D.DNAME, COUNT(E.EMPNO) FROM SCOTT.EMP E, SCOTT.DEPT D WHERE E.DEPTNO = D.DEPTNO GROUP BY D.DNAME;", columns: ["DNAME", "COUNT"], rows: [["ACCOUNTING", 3], ["RESEARCH", 5], ["SALES", 6]] },
        { question: "Display employees whose department is not assigned.", query: "SELECT ENAME FROM SCOTT.EMP WHERE DEPTNO IS NULL;", columns: ["ENAME"], rows: [["No Rows Found"]] },
        { question: "Display departments that do not have any employees.", query: "SELECT D.DNAME FROM SCOTT.DEPT D WHERE NOT EXISTS ( SELECT 1 FROM SCOTT.EMP E WHERE E.DEPTNO = D.DEPTNO );", columns: ["DNAME"], rows: [["OPERATIONS"]] },
        { question: "Display all departments and their employees (LEFT JOIN).", query: "SELECT D.DNAME, E.ENAME FROM SCOTT.DEPT D LEFT JOIN SCOTT.EMP E ON D.DEPTNO = E.DEPTNO;", columns: ["DNAME", "ENAME"], rows: [["ACCOUNTING", "CLARK"], ["ACCOUNTING", "KING"], ["OPERATIONS", "NULL"], ["SALES", "ALLEN"]] },
        { question: "Display all employees and their department names (LEFT JOIN).", query: "SELECT E.ENAME, D.DNAME FROM SCOTT.EMP E LEFT JOIN SCOTT.DEPT D ON E.DEPTNO = D.DEPTNO;", columns: ["ENAME", "DNAME"], rows: [["SMITH", "RESEARCH"], ["ALLEN", "SALES"]] },
        { question: "Display employees whose manager works in department 10.", query: "SELECT E.ENAME FROM SCOTT.EMP E, SCOTT.EMP M WHERE E.MGR = M.EMPNO AND M.DEPTNO = 10;", columns: ["ENAME"], rows: [["CLARK"], ["KING"], ["MILLER"]] },
        { question: "Display employees who have the same manager as another employee.", query: "SELECT DISTINCT E1.ENAME FROM SCOTT.EMP E1, SCOTT.EMP E2 WHERE E1.MGR = E2.MGR AND E1.EMPNO <> E2.EMPNO;", columns: ["ENAME"], rows: [["SMITH"], ["ALLEN"], ["WARD"], ["MARTIN"], ["TURNER"], ["ADAMS"], ["JAMES"], ["FORD"]] },
        { question: "Display employees who earn more than their manager.", query: "SELECT E.ENAME FROM SCOTT.EMP E, SCOTT.EMP M WHERE E.MGR = M.EMPNO AND E.SAL > M.SAL;", columns: ["ENAME"], rows: [["SCOTT"], ["FORD"]] },
        { question: "Display employee name and their manager's salary.", query: "SELECT E.ENAME, M.SAL AS MGR_SALARY FROM SCOTT.EMP E, SCOTT.EMP M WHERE E.MGR = M.EMPNO;", columns: ["ENAME", "MGR_SALARY"], rows: [["SMITH", 3000], ["ALLEN", 2850], ["WARD", 2850], ["SCOTT", 2975]] },
        { question: "Display employees who are also managers.", query: "SELECT ENAME FROM SCOTT.EMP WHERE EMPNO IN ( SELECT DISTINCT MGR FROM SCOTT.EMP WHERE MGR IS NOT NULL );", columns: ["ENAME"], rows: [["JONES"], ["BLAKE"], ["CLARK"], ["SCOTT"], ["KING"], ["FORD"]] },
        { question: "Display the employee who does not have a manager.", query: "SELECT ENAME FROM SCOTT.EMP WHERE MGR IS NULL;", columns: ["ENAME"], rows: [["KING"]] },
        { question: "Display employee and their manager names (President shown with NULL).", query: "SELECT E.ENAME AS EMPLOYEE, M.ENAME AS MANAGER FROM SCOTT.EMP E LEFT JOIN SCOTT.EMP M ON E.MGR = M.EMPNO;", columns: ["EMPLOYEE", "MANAGER"], rows: [["SMITH", "FORD"], ["ALLEN", "BLAKE"], ["KING", "NULL"]] },
        { question: "Display employees working in 'DALLAS'.", query: "SELECT E.ENAME FROM SCOTT.EMP E, SCOTT.DEPT D WHERE E.DEPTNO = D.DEPTNO AND D.LOC = 'DALLAS';", columns: ["ENAME"], rows: [["SMITH"], ["JONES"], ["SCOTT"], ["ADAMS"], ["FORD"]] },
        { question: "Display employees working in 'ACCOUNTING' department.", query: "SELECT E.ENAME FROM SCOTT.EMP E, SCOTT.DEPT D WHERE E.DEPTNO = D.DEPTNO AND D.DNAME = 'ACCOUNTING';", columns: ["ENAME"], rows: [["CLARK"], ["KING"], ["MILLER"]] },
        { question: "Display employee name and department for those not in department 30.", query: "SELECT E.ENAME, D.DNAME FROM SCOTT.EMP E, SCOTT.DEPT D WHERE E.DEPTNO = D.DEPTNO AND E.DEPTNO <> 30;", columns: ["ENAME", "DNAME"], rows: [["SMITH", "RESEARCH"], ["JONES", "RESEARCH"], ["CLARK", "ACCOUNTING"], ["KING", "ACCOUNTING"], ["MILLER", "ACCOUNTING"]] },
        { question: "Display managers and their department location.", query: "SELECT E.ENAME, D.LOC FROM SCOTT.EMP E, SCOTT.DEPT D WHERE E.DEPTNO = D.DEPTNO AND E.JOB = 'MANAGER';", columns: ["ENAME", "LOC"], rows: [["JONES", "DALLAS"], ["BLAKE", "CHICAGO"], ["CLARK", "NEW YORK"]] }
    ],
    "set_operators": [
        { question: "Display unique department numbers from both EMP and DEPT tables.", query: "SELECT DEPTNO FROM SCOTT.EMP UNION SELECT DEPTNO FROM SCOTT.DEPT;", columns: ["DEPTNO"], rows: [[10], [20], [30], [40]] },
        { question: "Display all department numbers from both tables, including duplicates.", query: "SELECT DEPTNO FROM SCOTT.EMP UNION ALL SELECT DEPTNO FROM SCOTT.DEPT;", columns: ["DEPTNO"], rows: [[10], [20], [30], [10], [20], [30], [40]] },
        { question: "Display department numbers that are common to both EMP and DEPT tables.", query: "SELECT DEPTNO FROM SCOTT.EMP INTERSECT SELECT DEPTNO FROM SCOTT.DEPT;", columns: ["DEPTNO"], rows: [[10], [20], [30]] },
        { question: "Display department numbers in EMP table but not in DEPT table.", query: "SELECT DEPTNO FROM SCOTT.EMP MINUS SELECT DEPTNO FROM SCOTT.DEPT;", columns: ["DEPTNO"], rows: [["No Rows Found"]] },
        { question: "Display department numbers in DEPT table that have no employees.", query: "SELECT DEPTNO FROM SCOTT.DEPT MINUS SELECT DEPTNO FROM SCOTT.EMP;", columns: ["DEPTNO"], rows: [[40]] },
        { question: "Display a combined list of employee names and department names.", query: "SELECT ENAME FROM SCOTT.EMP UNION SELECT DNAME FROM SCOTT.DEPT;", columns: ["NAME_LIST"], rows: [["ACCOUNTING"], ["ADAMS"], ["ALLEN"], ["BLAKE"], ["RESEARCH"], ["SALES"]] },
        { question: "Display a combined list of employee names and department names with all duplicates.", query: "SELECT ENAME FROM SCOTT.EMP UNION ALL SELECT DNAME FROM SCOTT.DEPT;", columns: ["NAME_LIST"], rows: [["SMITH"], ["ALLEN"], ["ACCOUNTING"], ["RESEARCH"]] },
        { question: "Find any common strings between employee jobs and department names.", query: "SELECT JOB FROM SCOTT.EMP INTERSECT SELECT DNAME FROM SCOTT.DEPT;", columns: ["RESULT"], rows: [["SALES"]] },
        { question: "Display employee names that do not match any department name.", query: "SELECT ENAME FROM SCOTT.EMP MINUS SELECT DNAME FROM SCOTT.DEPT;", columns: ["ENAME"], rows: [["SMITH"], ["ALLEN"], ["WARD"], ["JONES"]] },
        { question: "Display locations that do not have any employees assigned.", query: "SELECT LOC FROM SCOTT.DEPT MINUS SELECT LOC FROM SCOTT.DEPT D, SCOTT.EMP E WHERE D.DEPTNO = E.DEPTNO;", columns: ["LOC"], rows: [["BOSTON"]] },
        { question: "Combine names of employees from department 10 and department 20.", query: "SELECT ENAME FROM SCOTT.EMP WHERE DEPTNO = 10 UNION SELECT ENAME FROM SCOTT.EMP WHERE DEPTNO = 20;", columns: ["ENAME"], rows: [["CLARK"], ["KING"], ["MILLER"], ["SMITH"], ["JONES"], ["SCOTT"]] },
        { question: "Display employee names from department 10 and 20 including duplicates if any.", query: "SELECT ENAME FROM SCOTT.EMP WHERE DEPTNO = 10 UNION ALL SELECT ENAME FROM SCOTT.EMP WHERE DEPTNO = 20;", columns: ["ENAME"], rows: [["CLARK"], ["KING"], ["MILLER"], ["SMITH"], ["JONES"]] },
        { question: "Display employee IDs that exist in the EMP table and are assigned to a department.", query: "SELECT EMPNO FROM SCOTT.EMP INTERSECT SELECT EMPNO FROM SCOTT.EMP E, SCOTT.DEPT D WHERE E.DEPTNO = D.DEPTNO;", columns: ["EMPNO"], rows: [[7369], [7499], [7521], [7566]] },
        { question: "Display employee IDs that are not associated with any valid department.", query: "SELECT EMPNO FROM SCOTT.EMP MINUS SELECT EMPNO FROM SCOTT.EMP E, SCOTT.DEPT D WHERE E.DEPTNO = D.DEPTNO;", columns: ["EMPNO"], rows: [["No Rows Found"]] },
        { question: "Find department IDs present in both EMP and DEPT tables using intersect.", query: "SELECT DEPTNO FROM SCOTT.EMP INTERSECT SELECT DEPTNO FROM SCOTT.DEPT;", columns: ["DEPTNO"], rows: [[10], [20], [30]] },
        { question: "Combine all unique jobs and department names into one list.", query: "SELECT JOB FROM SCOTT.EMP UNION SELECT DNAME FROM SCOTT.DEPT;", columns: ["UNIQUE_TITLES"], rows: [["ANALYST"], ["CLERK"], ["MANAGER"], ["ACCOUNTING"], ["SALES"]] },
        { question: "Find any strings that are both a Job title and a Location name.", query: "SELECT JOB FROM SCOTT.EMP INTERSECT SELECT LOC FROM SCOTT.DEPT;", columns: ["RESULT"], rows: [["No Rows Found"]] },
        { question: "Display employees who are not linked to any valid department using MINUS.", query: "SELECT ENAME FROM SCOTT.EMP MINUS SELECT ENAME FROM SCOTT.EMP E, SCOTT.DEPT D WHERE E.DEPTNO = D.DEPTNO;", columns: ["ENAME"], rows: [["No Rows Found"]] },
        { question: "Display employees who either earn more than 2000 or work in department 10.", query: "SELECT ENAME FROM SCOTT.EMP WHERE SAL > 2000 UNION SELECT ENAME FROM SCOTT.EMP WHERE DEPTNO = 10;", columns: ["ENAME"], rows: [["JONES"], ["BLAKE"], ["CLARK"], ["SCOTT"], ["KING"], ["FORD"], ["MILLER"]] },
        { question: "Display names from department 10 excluding those that might be in department 20.", query: "SELECT ENAME FROM SCOTT.EMP WHERE DEPTNO = 10 MINUS SELECT ENAME FROM SCOTT.EMP WHERE DEPTNO = 20;", columns: ["ENAME"], rows: [["CLARK"], ["KING"], ["MILLER"]] },
        { question: "Display common department IDs except for department 10.", query: "SELECT DEPTNO FROM SCOTT.EMP INTERSECT SELECT DEPTNO FROM SCOTT.DEPT MINUS SELECT 10 FROM DUAL;", columns: ["DEPTNO"], rows: [[20], [30]] },
        { question: "Display unique list of employee and department names ordered alphabetically by the first column.", query: "SELECT ENAME FROM SCOTT.EMP UNION SELECT DNAME FROM SCOTT.DEPT ORDER BY 1;", columns: ["NAME"], rows: [["ACCOUNTING"], ["ADAMS"], ["ALLEN"], ["BLAKE"], ["CLARK"]] },
        { question: "Display all department IDs from EMP twice to show all records.", query: "SELECT DEPTNO FROM SCOTT.EMP UNION ALL SELECT DEPTNO FROM SCOTT.EMP;", columns: ["DEPTNO"], rows: [[20], [30], [30], [20], [10], [20]] },
        { question: "Combine names of employees from NEW YORK and DALLAS using UNION.", query: "SELECT ENAME FROM SCOTT.EMP E, SCOTT.DEPT D WHERE E.DEPTNO = D.DEPTNO AND D.LOC = 'NEW YORK' UNION SELECT ENAME FROM SCOTT.EMP E, SCOTT.DEPT D WHERE E.DEPTNO = D.DEPTNO AND D.LOC = 'DALLAS';", columns: ["ENAME"], rows: [["CLARK"], ["KING"], ["MILLER"], ["SMITH"], ["JONES"], ["SCOTT"]] },
        { question: "Display employees who earn more than 3000 or hold the job of Manager.", query: "SELECT ENAME FROM SCOTT.EMP WHERE SAL > 3000 UNION SELECT ENAME FROM SCOTT.EMP WHERE JOB = 'MANAGER';", columns: ["ENAME"], rows: [["KING"], ["JONES"], ["BLAKE"], ["CLARK"]] }
    ],

    "ddl": [
        { question: "Create a table called STUDENT with columns SID, SNAME, AGE, and COURSE.", query: "CREATE TABLE STUDENT (SID NUMBER, SNAME VARCHAR2(30), AGE NUMBER(2), COURSE VARCHAR2(20)); \nDESC STUDENT;", columns: ["Name", "Null?", "Type"], rows: [["SID", "", "NUMBER"], ["SNAME", "", "VARCHAR2(30)"], ["AGE", "", "NUMBER(2)"], ["COURSE", "", "VARCHAR2(20)"]] },
        { question: "Create a table EMPLOYEE with columns EID, ENAME, SALARY, and DEPTNO.", query: "CREATE TABLE EMPLOYEE (EID NUMBER, ENAME VARCHAR2(40), SALARY NUMBER(8,2), DEPTNO NUMBER); \nDESC EMPLOYEE;", columns: ["Name", "Null?", "Type"], rows: [["EID", "", "NUMBER"], ["ENAME", "", "VARCHAR2(40)"], ["SALARY", "", "NUMBER(8,2)"], ["DEPTNO", "", "NUMBER"]] },
        { question: "Create a table DEPARTMENT with columns DEPTNO, DNAME, and LOCATION.", query: "CREATE TABLE DEPARTMENT (DEPTNO NUMBER, DNAME VARCHAR2(30), LOCATION VARCHAR2(30)); \nDESC DEPARTMENT;", columns: ["Name", "Null?", "Type"], rows: [["DEPTNO", "", "NUMBER"], ["DNAME", "", "VARCHAR2(30)"], ["LOCATION", "", "VARCHAR2(30)"]] },
        { question: "Create a table BOOK with columns BOOK_ID, TITLE, AUTHOR, and PRICE.", query: "CREATE TABLE BOOK (BOOK_ID NUMBER, TITLE VARCHAR2(50), AUTHOR VARCHAR2(40), PRICE NUMBER); \nDESC BOOK;", columns: ["Name", "Null?", "Type"], rows: [["BOOK_ID", "", "NUMBER"], ["TITLE", "", "VARCHAR2(50)"], ["AUTHOR", "", "VARCHAR2(40)"], ["PRICE", "", "NUMBER"]] },
        { question: "Create a table COURSE with columns CID, CNAME, and DURATION.", query: "CREATE TABLE COURSE (CID NUMBER, CNAME VARCHAR2(40), DURATION NUMBER); \nDESC COURSE;", columns: ["Name", "Null?", "Type"], rows: [["CID", "", "NUMBER"], ["CNAME", "", "VARCHAR2(40)"], ["DURATION", "", "NUMBER"]] },
        { question: "Create a table PROJECT with columns PID, PNAME, START_DATE, and END_DATE.", query: "CREATE TABLE PROJECT (PID NUMBER, PNAME VARCHAR2(50), START_DATE DATE, END_DATE DATE); \nDESC PROJECT;", columns: ["Name", "Null?", "Type"], rows: [["PID", "", "NUMBER"], ["PNAME", "", "VARCHAR2(50)"], ["START_DATE", "", "DATE"], ["END_DATE", "", "DATE"]] },
        { question: "Create a table CUSTOMER with columns CID, CNAME, CITY, and PHONE.", query: "CREATE TABLE CUSTOMER (CID NUMBER, CNAME VARCHAR2(40), CITY VARCHAR2(30), PHONE NUMBER); \nDESC CUSTOMER;", columns: ["Name", "Null?", "Type"], rows: [["CID", "", "NUMBER"], ["CNAME", "", "VARCHAR2(40)"], ["CITY", "", "VARCHAR2(30)"], ["PHONE", "", "NUMBER"]] },
        { question: "Create a table SALES with columns SALE_ID, PRODUCT_NAME, QUANTITY, and PRICE.", query: "CREATE TABLE SALES (SALE_ID NUMBER, PRODUCT_NAME VARCHAR2(50), QUANTITY NUMBER, PRICE NUMBER); \nDESC SALES;", columns: ["Name", "Null?", "Type"], rows: [["SALE_ID", "", "NUMBER"], ["PRODUCT_NAME", "", "VARCHAR2(50)"], ["QUANTITY", "", "NUMBER"], ["PRICE", "", "NUMBER"]] },
        { question: "Create a table EMP_COPY from EMPLOYEE (structure only).", query: "CREATE TABLE EMP_COPY AS SELECT * FROM EMPLOYEE WHERE 1=0; \nDESC EMP_COPY;", columns: ["Name", "Null?", "Type"], rows: [["EID", "", "NUMBER"], ["ENAME", "", "VARCHAR2(40)"], ["SALARY", "", "NUMBER(8,2)"], ["DEPTNO", "", "NUMBER"]] },
        { question: "Create a table EMP_BACKUP from EMPLOYEE including all data.", query: "CREATE TABLE EMP_BACKUP AS SELECT * FROM EMPLOYEE; \nSELECT 'Table Created' AS Status FROM DUAL;", columns: ["Status"], rows: [["Table Created with Data"]] },
        { question: "Add a column EMAIL to the STUDENT table.", query: "ALTER TABLE STUDENT ADD EMAIL VARCHAR2(50); \nDESC STUDENT;", columns: ["Name", "Type"], rows: [["SID", "NUMBER"], ["SNAME", "VARCHAR2(30)"], ["EMAIL", "VARCHAR2(50)"]] },
        { question: "Add a column PHONE to the EMPLOYEE table.", query: "ALTER TABLE EMPLOYEE ADD PHONE NUMBER; \nDESC EMPLOYEE;", columns: ["Name", "Type"], rows: [["EID", "NUMBER"], ["PHONE", "NUMBER"]] },
        { question: "Modify the column SNAME in the STUDENT table to VARCHAR2(50).", query: "ALTER TABLE STUDENT MODIFY SNAME VARCHAR2(50); \nDESC STUDENT;", columns: ["Name", "Type"], rows: [["SNAME", "VARCHAR2(50)"]] },
        { question: "Modify the column SALARY in the EMPLOYEE table to NUMBER(10,2).", query: "ALTER TABLE EMPLOYEE MODIFY SALARY NUMBER(10,2); \nDESC EMPLOYEE;", columns: ["Name", "Type"], rows: [["SALARY", "NUMBER(10,2)"]] },
        { question: "Add CITY and PINCODE columns to the CUSTOMER table.", query: "ALTER TABLE CUSTOMER ADD (CITY VARCHAR2(30), PINCODE NUMBER); \nDESC CUSTOMER;", columns: ["Name", "Type"], rows: [["CITY", "VARCHAR2(30)"], ["PINCODE", "NUMBER"]] },
        { question: "Rename the column SNAME to STUDENT_NAME in the STUDENT table.", query: "ALTER TABLE STUDENT RENAME COLUMN SNAME TO STUDENT_NAME; \nDESC STUDENT;", columns: ["Name", "Type"], rows: [["SID", "NUMBER"], ["STUDENT_NAME", "VARCHAR2(50)"]] },
        { question: "Drop the column AGE from the STUDENT table.", query: "ALTER TABLE STUDENT DROP COLUMN AGE; \nDESC STUDENT;", columns: ["Name", "Status"], rows: [["AGE", "Column Dropped"]] },
        { question: "Set the column SALARY in the EMPLOYEE table to NOT NULL.", query: "ALTER TABLE EMPLOYEE MODIFY SALARY NOT NULL; \nDESC EMPLOYEE;", columns: ["Name", "Null?"], rows: [["SALARY", "NOT NULL"]] },
        { question: "Increase the TITLE size in the BOOK table to VARCHAR2(100).", query: "ALTER TABLE BOOK MODIFY TITLE VARCHAR2(100); \nDESC BOOK;", columns: ["Name", "Type"], rows: [["TITLE", "VARCHAR2(100)"]] },
        { question: "Add a column MANAGER_ID to the EMPLOYEE table.", query: "ALTER TABLE EMPLOYEE ADD MANAGER_ID NUMBER; \nDESC EMPLOYEE;", columns: ["Name", "Type"], rows: [["MANAGER_ID", "NUMBER"]] },
        { question: "Drop the table STUDENT.", query: "DROP TABLE STUDENT;", columns: ["Status"], rows: [["Table Dropped Successfully"]] },
        { question: "Drop the table CUSTOMER.", query: "DROP TABLE CUSTOMER;", columns: ["Status"], rows: [["Table Dropped Successfully"]] },
        { question: "Drop the table PROJECT.", query: "DROP TABLE PROJECT;", columns: ["Status"], rows: [["Table Dropped Successfully"]] },
        { question: "Drop the table SALES.", query: "DROP TABLE SALES;", columns: ["Status"], rows: [["Table Dropped Successfully"]] },
        { question: "Drop the table COURSE.", query: "DROP TABLE COURSE;", columns: ["Status"], rows: [["Table Dropped Successfully"]] },
        { question: "Rename the table STUDENT to STUDENTS.", query: "RENAME STUDENT TO STUDENTS;", columns: ["Status"], rows: [["Table Renamed to STUDENTS"]] },
        { question: "Rename the table EMPLOYEE to EMP_MASTER.", query: "RENAME EMPLOYEE TO EMP_MASTER;", columns: ["Status"], rows: [["Table Renamed to EMP_MASTER"]] },
        { question: "Rename the table CUSTOMER to CLIENT.", query: "RENAME CUSTOMER TO CLIENT;", columns: ["Status"], rows: [["Table Renamed to CLIENT"]] },
        { question: "Rename the table BOOK to BOOK_DETAILS.", query: "RENAME BOOK TO BOOK_DETAILS;", columns: ["Status"], rows: [["Table Renamed to BOOK_DETAILS"]] },
        { question: "Rename the table PROJECT to PROJECT_INFO.", query: "RENAME PROJECT TO PROJECT_INFO;", columns: ["Status"], rows: [["Table Renamed to PROJECT_INFO"]] },
        { question: "Delete all records from the STUDENTS table.", query: "DELETE FROM STUDENTS; \nSELECT COUNT(*) FROM STUDENTS;", columns: ["Rows_Remaining"], rows: [[0]] },
        { question: "Truncate the table EMP_MASTER.", query: "TRUNCATE TABLE EMP_MASTER;", columns: ["Status"], rows: [["Table Truncated (Fast)"]] },
        { question: "Truncate the table CLIENT.", query: "TRUNCATE TABLE CLIENT;", columns: ["Status"], rows: [["Table Truncated"]] },
        { question: "Delete all records from the SALES table.", query: "DELETE FROM SALES;", columns: ["Status"], rows: [["Records Deleted"]] },
        { question: "Truncate the table PROJECT_INFO.", query: "TRUNCATE TABLE PROJECT_INFO;", columns: ["Status"], rows: [["Table Truncated"]] },
        { question: "Create a table TRAINING with columns TID, TNAME, and DURATION.", query: "CREATE TABLE TRAINING (TID NUMBER, TNAME VARCHAR2(30), DURATION NUMBER);", columns: ["Name", "Type"], rows: [["TID", "NUMBER"], ["TNAME", "VARCHAR2(30)"]] },
        { question: "Add a column TRAINER_NAME to the TRAINING table.", query: "ALTER TABLE TRAINING ADD TRAINER_NAME VARCHAR2(40);", columns: ["Name", "Type"], rows: [["TRAINER_NAME", "VARCHAR2(40)"]] },
        { question: "Modify the TNAME size in the TRAINING table to VARCHAR2(60).", query: "ALTER TABLE TRAINING MODIFY TNAME VARCHAR2(60);", columns: ["Name", "Type"], rows: [["TNAME", "VARCHAR2(60)"]] },
        { question: "Rename the table TRAINING to TRAINING_PROGRAM.", query: "RENAME TRAINING TO TRAINING_PROGRAM;", columns: ["Status"], rows: [["Table Renamed"]] },
        { question: "Truncate the table TRAINING_PROGRAM.", query: "TRUNCATE TABLE TRAINING_PROGRAM;", columns: ["Status"], rows: [["Table Truncated"]] },
        { question: "Drop the table TRAINING_PROGRAM.", query: "DROP TABLE TRAINING_PROGRAM;", columns: ["Status"], rows: [["Table Dropped"]] },
        { question: "Create table EMP_PROJECT with modifications.", query: "CREATE TABLE EMP_PROJECT (EMP_ID NUMBER, PROJECT_ID NUMBER, START_DATE DATE, END_DATE DATE, ROLE VARCHAR2(30)); \nALTER TABLE EMP_PROJECT MODIFY ROLE VARCHAR2(50); \nALTER TABLE EMP_PROJECT ADD STATUS VARCHAR2(20); \nDESC EMP_PROJECT;", columns: ["Name", "Type", "Length"], rows: [["ROLE", "VARCHAR2", "50"], ["STATUS", "VARCHAR2", "20"]] },
        { question: "Create table PRODUCT and rename/modify columns.", query: "CREATE TABLE PRODUCT (PID NUMBER, PNAME VARCHAR2(50), PRICE NUMBER, CATEGORY VARCHAR2(30)); \nALTER TABLE PRODUCT RENAME COLUMN PNAME TO PRODUCT_NAME; \nALTER TABLE PRODUCT MODIFY PRICE NUMBER(10,2);", columns: ["Name", "Type"], rows: [["PRODUCT_NAME", "VARCHAR2(50)"], ["PRICE", "NUMBER(10,2)"]] },
        { question: "Create table ORDERS with modifications.", query: "CREATE TABLE ORDERS (ORDER_ID NUMBER, CUSTOMER_ID NUMBER, ORDER_DATE DATE, TOTAL_AMOUNT NUMBER); \nALTER TABLE ORDERS ADD STATUS VARCHAR2(20); \nALTER TABLE ORDERS DROP COLUMN TOTAL_AMOUNT; \nALTER TABLE ORDERS ADD TOTAL_AMOUNT NUMBER(10,2);", columns: ["Name", "Type"], rows: [["STATUS", "VARCHAR2(20)"], ["TOTAL_AMOUNT", "NUMBER(10,2)"]] },
        { question: "Create/Rename/Truncate/Drop EMP_TEMP.", query: "CREATE TABLE EMP_TEMP AS SELECT * FROM EMPLOYEE WHERE SALARY > 2000; \nRENAME EMP_TEMP TO EMP_HIGH_SALARY; \nTRUNCATE TABLE EMP_HIGH_SALARY; \nDROP TABLE EMP_HIGH_SALARY;", columns: ["Status"], rows: [["Sequence Executed Successfully"]] },
        { question: "Create STUDENT_RECORD with Grade and Renamed column.", query: "CREATE TABLE STUDENT_RECORD (SID NUMBER, SNAME VARCHAR2(40), COURSE VARCHAR2(30), MARKS NUMBER); \nALTER TABLE STUDENT_RECORD ADD GRADE CHAR(1); \nALTER TABLE STUDENT_RECORD MODIFY MARKS NUMBER(5,2); \nALTER TABLE STUDENT_RECORD RENAME COLUMN COURSE TO COURSE_NAME;", columns: ["Name", "Type"], rows: [["COURSE_NAME", "VARCHAR2(30)"], ["GRADE", "CHAR(1)"], ["MARKS", "NUMBER(5,2)"]] },
        { question: "Create EMP_ARCHIVE and Rename to EMP_HISTORY.", query: "CREATE TABLE EMP_ARCHIVE AS SELECT * FROM EMPLOYEE WHERE 1=0; \nALTER TABLE EMP_ARCHIVE ADD ARCHIVE_DATE DATE; \nRENAME EMP_ARCHIVE TO EMP_HISTORY;", columns: ["Name", "Status"], rows: [["ARCHIVE_DATE", "Added"], ["EMP_HISTORY", "Renamed"]] },
        { question: "Create DEPT_BACKUP and modify Location.", query: "CREATE TABLE DEPT_BACKUP AS SELECT * FROM DEPARTMENT; \nALTER TABLE DEPT_BACKUP DROP COLUMN LOCATION; \nALTER TABLE DEPT_BACKUP ADD LOCATION VARCHAR2(40);", columns: ["Name", "Type"], rows: [["DEPTNO", "NUMBER"], ["LOCATION", "VARCHAR2(40)"]] },
        { question: "Create SALES_DATA and rename to REGIONAL_SALES_DATA.", query: "CREATE TABLE SALES_DATA (SALE_ID NUMBER, PRODUCT_ID NUMBER, SALE_DATE DATE, AMOUNT NUMBER); \nALTER TABLE SALES_DATA ADD REGION VARCHAR2(30); \nALTER TABLE SALES_DATA MODIFY AMOUNT NUMBER(10,2); \nRENAME SALES_DATA TO REGIONAL_SALES_DATA;", columns: ["Table_Name", "New_Amount_Type"], rows: [["REGIONAL_SALES_DATA", "NUMBER(10,2)"]] },
        { question: "Create LOG_TABLE and drop it permanently.", query: "CREATE TABLE LOG_TABLE (LOG_ID NUMBER, USER_NAME VARCHAR2(30), ACTION VARCHAR2(50), LOG_DATE DATE); \nTRUNCATE TABLE LOG_TABLE; \nRENAME LOG_TABLE TO SYSTEM_LOG; \nDROP TABLE SYSTEM_LOG PURGE;", columns: ["Status"], rows: [["Table Purged (Cannot be Recovered)"]] }
    ],


    "dml": [
        {
            question: "Insert a record into the STUDENT table with values: SID = 101, SNAME = 'RAHUL', AGE = 20, COURSE = 'MCA'.",
            query: "INSERT INTO STUDENT VALUES(101,'RAHUL',20,'MCA');",
            columns: ["SID", "SNAME", "AGE", "COURSE"],
            rows: [[101, "RAHUL", 20, "MCA"]]
        },
        {
            question: "Insert a record into the EMPLOYEE table with values: EID = 201, ENAME = 'ANITA', SALARY = 45000, DEPTNO = 10.",
            query: "INSERT INTO EMPLOYEE VALUES(201,'ANITA',45000,10);",
            columns: ["EID", "ENAME", "SALARY", "DEPTNO"],
            rows: [[201, "ANITA", 45000, 10]]
        },
        {
            question: "Insert a new department into the DEPT table; DEPTNO = 50, DNAME = 'TRAINING', LOC = 'DELHI'.",
            query: "INSERT INTO DEPT VALUES (50,'TRAINING','DELHI');",
            columns: ["DEPTNO", "DNAME", "LOC"],
            rows: [[50, "TRAINING", "DELHI"]]
        },
        {
            question: "Insert a record into the BOOK table with BOOK_ID, TITLE, and PRICE.",
            query: "INSERT INTO BOOK (BOOK_ID,TITLE,PRICE) VALUES(123,'THE END',200);",
            columns: ["BOOK_ID", "TITLE", "AUTHOR", "PRICE"],
            rows: [[123, "THE END", "NULL", 200]]
        },
        {
            question: "Insert multiple rows into the COURSE table (BBA and BA).",
            query: "INSERT ALL \n  INTO COURSE VALUES(100,'BBA',3) \n  INTO COURSE VALUES(101,'BA',3) \nSELECT * FROM DUAL;",
            columns: ["CID", "CNAME", "DURATION"],
            rows: [[100, "BBA", 3], [101, "BA", 3]]
        },
        {
            question: "Insert data into the EMP_COPY table from the SCOTT.EMP table.",
            query: "INSERT INTO EMP_COPY SELECT * FROM SCOTT.EMP;",
            columns: ["Execution Status"],
            rows: [["14 rows inserted into EMP_COPY"]]
        },
        {
            question: "Insert employees with salary > 3000 into the EMP_HIGH_SAL table.",
            query: "INSERT INTO EMP_HIGH_SAL SELECT * FROM SCOTT.EMP WHERE SAL > 3000;",
            columns: ["ENAME", "SAL"],
            rows: [["KING", 5000]]
        },
        {
            question: "Insert employees hired after 1981 into the EMP_HIGH_SAL table.",
            query: "INSERT INTO EMP_HIGH_SAL SELECT * FROM SCOTT.EMP WHERE HIREDATE > TO_DATE('1981-12-31','YYYY-MM-DD');",
            columns: ["ENAME", "HIREDATE"],
            rows: [["SCOTT", "19-APR-87"], ["ADAMS", "23-MAY-87"], ["MILLER", "23-JAN-82"]]
        },
        {
            question: "Insert department details into the DEPT_BACKUP table.",
            query: "INSERT INTO DEPT_BACKUP VALUES(15,'MANAGERS','DELHI');",
            columns: ["DEPTNO", "DNAME", "LOC"],
            rows: [[15, "MANAGERS", "DELHI"]]
        },
        {
            question: "Insert specific employee record into the EMP_SALARY_RECORD table.",
            query: "INSERT INTO EMP_SALARY_RECORD(ENAME,SAL) VALUES('LIGER',20000);",
            columns: ["ENAME", "SAL"],
            rows: [["LIGER", 20000]]
        },
        {
            question: "Update the salary of employee SMITH to 2000 in the EMP_SALARY_RECORD table.",
            query: "UPDATE EMP_SALARY_RECORD SET SAL = 2000 WHERE ENAME = 'SMITH';",
            columns: ["ENAME", "SAL"],
            rows: [["SMITH", 2000]]
        },
        {
            question: "Increase the salary of all employees in the EMP_SALARY_RECORD table by 10%.",
            query: "UPDATE EMP_SALARY_RECORD SET SAL = SAL * 1.10;",
            columns: ["ENAME", "OLD_SAL", "NEW_SAL"],
            rows: [["SMITH", 800, 880], ["ALLEN", 1600, 1760], ["WARD", 1250, 1375]]
        },
        {
            question: "Update the department number of employee ALLEN to 20.",
            query: "UPDATE EMP_SALARY_RECORD SET DEPTNO = 20 WHERE ENAME = 'ALLEN';",
            columns: ["ENAME", "DEPTNO"],
            rows: [["ALLEN", 20]]
        },
        {
            question: "Update the commission to 500 for all employees with the job 'SALESMAN'.",
            query: "UPDATE EMP_SALARY_RECORD SET COMM = 500 WHERE JOB = 'SALESMAN';",
            columns: ["ENAME", "JOB", "COMM"],
            rows: [["ALLEN", "SALESMAN", 500], ["WARD", "SALESMAN", 500], ["TURNER", "SALESMAN", 500]]
        },
        {
            question: "Update the job title of employees from 'MANAGER' to 'MILLER'.",
            query: "UPDATE EMP_SALARY_RECORD SET JOB = 'MILLER' WHERE JOB = 'MANAGER';",
            columns: ["ENAME", "OLD_JOB", "NEW_JOB"],
            rows: [["JONES", "MANAGER", "MILLER"], ["BLAKE", "MANAGER", "MILLER"]]
        },
        {
            question: "Increase the salary of employees in department 10 by 20%.",
            query: "UPDATE EMP_SALARY_RECORD SET SAL = SAL * 1.20 WHERE DEPTNO = 10;",
            columns: ["ENAME", "SAL", "DEPTNO"],
            rows: [["CLARK", 2940, 10], ["KING", 6000, 10]]
        },
        {
            question: "Update the salary of all employees whose job is 'CLERK' to 1500.",
            query: "UPDATE EMP_SALARY_RECORD SET SAL = 1500 WHERE JOB = 'CLERK';",
            columns: ["ENAME", "JOB", "SAL"],
            rows: [["SMITH", "CLERK", 1500], ["ADAMS", "CLERK", 1500]]
        },
        {
            question: "Update the location of department 30 to 'MUMBAI' in the DEPT table.",
            query: "UPDATE DEPT SET LOC = 'MUMBAI' WHERE DEPTNO = 30;",
            columns: ["DEPTNO", "DNAME", "LOC"],
            rows: [[30, "SALES", "MUMBAI"]]
        },
        {
            question: "Update commission to 100 for all employees who currently have NULL commission.",
            query: "UPDATE EMP_SALARY_RECORD SET COMM = 100 WHERE COMM IS NULL;",
            columns: ["ENAME", "COMM"],
            rows: [["SMITH", 100], ["JONES", 100], ["FORD", 100]]
        },
        {
            question: "Increase salary by 10% for employees earning less than the average salary.",
            query: "UPDATE EMP_SALARY_RECORD SET SAL = SAL * 1.10 WHERE SAL < (SELECT AVG(SAL) FROM EMP_SALARY_RECORD);",
            columns: ["Execution Status"],
            rows: [["Updated salary for employees below average"]]
        }, {
            question: "Delete employee SMITH from the EMP table.",
            query: "DELETE FROM EMP WHERE ENAME = 'SMITH';",
            columns: ["Execution Status"],
            rows: [["Employee SMITH deleted"]]
        },
        {
            question: "Delete all employees working in department 30.",
            query: "DELETE FROM EMP WHERE DEPTNO = 30;",
            columns: ["Execution Status"],
            rows: [["All records of DEPT 30 deleted"]]
        },
        {
            question: "Delete employees whose salary is less than 1000.",
            query: "DELETE FROM EMP WHERE SAL < 1000;",
            columns: ["Execution Status"],
            rows: [["Employees with salary < 1000 deleted"]]
        },
        {
            question: "Delete employees hired before the year 1981.",
            query: "DELETE FROM EMP WHERE HIREDATE < TO_DATE('1981','YYYY');",
            columns: ["Execution Status"],
            rows: [["Employees hired before 1981 deleted"]]
        },
        {
            question: "Delete employees who do not receive any commission.",
            query: "DELETE FROM EMP WHERE COMM IS NULL;",
            columns: ["Execution Status"],
            rows: [["Employees with NULL commission deleted"]]
        },
        {
            question: "Delete departments located in CHICAGO from the DEPT table.",
            query: "DELETE FROM DEPT WHERE LOC = 'CHICAGO';",
            columns: ["Execution Status"],
            rows: [["Department in CHICAGO deleted"]]
        },
        {
            question: "Delete employees whose job is 'CLERK'.",
            query: "DELETE FROM EMP WHERE JOB = 'CLERK';",
            columns: ["Execution Status"],
            rows: [["All Clerks deleted"]]
        },
        {
            question: "Delete employees who are earning the minimum salary.",
            query: "DELETE FROM EMP WHERE SAL = (SELECT MIN(SAL) FROM EMP);",
            columns: ["Execution Status"],
            rows: [["Employee with minimum salary deleted"]]
        },
        {
            question: "Delete departments located in 'NEW YORK'.",
            query: "DELETE FROM DEPT WHERE LOC = 'NEW YORK';",
            columns: ["Execution Status"],
            rows: [["Department in NEW YORK deleted"]]
        },
        {
            question: "Delete employees who do not have a manager (MGR is NULL).",
            query: "DELETE FROM EMP WHERE MGR IS NULL;",
            columns: ["Execution Status"],
            rows: [["Employees without manager deleted"]]
        }
    ],
    "views": [
        {
            question: "Create a view EMP_VIEW1 including employee name, salary, and department number.",
            query: "CREATE VIEW EMP_VIEW1 AS SELECT ENAME, SAL, DEPTNO FROM scott.EMP; \nSELECT * FROM EMP_VIEW1;",
            columns: ["ENAME", "SAL", "DEPTNO"],
            rows: [["SMITH", 800, 20], ["ALLEN", 1600, 30], ["KING", 5000, 10]]
        },
        {
            question: "Create a join view EMP_DEPT_VIEW showing employee name and department name.",
            query: "CREATE VIEW EMP_DEPT_VIEW AS SELECT E.ENAME, D.DNAME FROM scott.EMP E, scott.DEPT D WHERE E.DEPTNO = D.DEPTNO; \nSELECT * FROM EMP_DEPT_VIEW;",
            columns: ["ENAME", "DNAME"],
            rows: [["SMITH", "RESEARCH"], ["ALLEN", "SALES"]]
        },
        {
            question: "Create a view for employees belonging only to department 10.",
            query: "CREATE VIEW EMP_DEPT10 AS SELECT * FROM scott.EMP WHERE DEPTNO = 10; \nSELECT * FROM EMP_DEPT10;",
            columns: ["ENAME", "DEPTNO"],
            rows: [["CLARK", 10], ["KING", 10]]
        },
        {
            question: "Create a view EMP_ANNUAL_SAL to display annual salary (SAL * 12).",
            query: "CREATE VIEW EMP_ANNUAL_SAL AS SELECT ENAME, JOB, SAL*12 AS ANNUAL_SAL FROM scott.EMP; \nSELECT * FROM EMP_ANNUAL_SAL;",
            columns: ["ENAME", "JOB", "ANNUAL_SAL"],
            rows: [["SMITH", "CLERK", 9600], ["KING", "PRESIDENT", 60000]]
        },
        {
            question: "Create a view DEPT_VIEW showing department name and location.",
            query: "CREATE VIEW DEPT_VIEW AS SELECT DNAME, LOC FROM scott.DEPT; \nSELECT * FROM DEPT_VIEW;",
            columns: ["DNAME", "LOC"],
            rows: [["ACCOUNTING", "NEW YORK"], ["RESEARCH", "DALLAS"]]
        },
        {
            question: "Create a full detail view combining name, department name, and location.",
            query: "CREATE VIEW EMP_FULL_VIEW AS SELECT E.ENAME, D.DNAME, D.LOC FROM scott.EMP E, scott.DEPT D WHERE E.DEPTNO = D.DEPTNO; \nSELECT * FROM EMP_FULL_VIEW;",
            columns: ["ENAME", "DNAME", "LOC"],
            rows: [["SMITH", "RESEARCH", "DALLAS"], ["ALLEN", "SALES", "CHICAGO"]]
        },
        {
            question: "Create a view for high earners (salary > 3000).",
            query: "CREATE VIEW EMP_HIGH_SAL AS SELECT * FROM scott.EMP WHERE SAL > 3000; \nSELECT * FROM EMP_HIGH_SAL;",
            columns: ["ENAME", "SAL"],
            rows: [["KING", 5000]]
        },
        {
            question: "Create a view showing total salary per department.",
            query: "CREATE VIEW DEPT_TOTAL_SAL AS SELECT DEPTNO, SUM(SAL) AS TOTAL_SAL FROM scott.EMP GROUP BY DEPTNO; \nSELECT * FROM DEPT_TOTAL_SAL;",
            columns: ["DEPTNO", "TOTAL_SAL"],
            rows: [[10, 8750], [20, 10875]]
        },
        {
            question: "Create a view specifically for employees with the job 'MANAGER'.",
            query: "CREATE VIEW EMP_MANAGER AS SELECT * FROM scott.EMP WHERE JOB = 'MANAGER'; \nSELECT * FROM EMP_MANAGER;",
            columns: ["ENAME", "JOB"],
            rows: [["JONES", "MANAGER"], ["BLAKE", "MANAGER"]]
        },
        {
            question: "Create a view with column aliases for name and salary.",
            query: "CREATE VIEW EMP_ALIAS_VIEW AS SELECT ENAME AS EMP_NAME, SAL AS SALARY FROM scott.EMP; \nSELECT * FROM EMP_ALIAS_VIEW;",
            columns: ["EMP_NAME", "SALARY"],
            rows: [["SMITH", 800], ["ALLEN", 1600]]
        },
        {
            question: "Create a view for department 20 with the CHECK OPTION constraint.",
            query: "CREATE VIEW EMP_DEPT20 AS SELECT * FROM scott.EMP WHERE DEPTNO = 20 WITH CHECK OPTION;",
            columns: ["Status"],
            rows: [["View Created with Check Option"]]
        },
        {
            question: "Insert a valid record into EMP_DEPT20 view (Department 20).",
            query: "INSERT INTO EMP_DEPT20 VALUES (9999, 'TEST', 'CLERK', 7902, SYSDATE, 1000, NULL, 20);",
            columns: ["Result"],
            rows: [["1 Row Inserted Successfully"]]
        },
        {
            question: "Attempt to insert an invalid record into EMP_DEPT20 (Violation of Check Option).",
            query: "INSERT INTO EMP_DEPT20 VALUES (9998, 'WRONG', 'CLERK', 7902, SYSDATE, 1000, NULL, 30);",
            columns: ["Error Status"],
            rows: [["ORA-01402: view WITH CHECK OPTION violation"]]
        },
        {
            question: "Create a view for salaries over 2000 with CHECK OPTION.",
            query: "CREATE VIEW EMP_SAL2000 AS SELECT * FROM scott.EMP WHERE SAL > 2000 WITH CHECK OPTION;",
            columns: ["Status"],
            rows: [["View Created"]]
        },
        {
            question: "Create a Read-Only view of the EMP table.",
            query: "CREATE VIEW EMP_READONLY AS SELECT * FROM scott.EMP WITH READ ONLY;",
            columns: ["Status"],
            rows: [["Read-Only View Created"]]
        },
        {
            question: "Create a Read-Only join view for employee name and department name.",
            query: "CREATE VIEW EMP_DEPT_READONLY AS SELECT E.ENAME, D.DNAME FROM scott.EMP E, scott.DEPT D WHERE E.DEPTNO = D.DEPTNO WITH READ ONLY;",
            columns: ["Status"],
            rows: [["Read-Only Join View Created"]]
        },
        {
            question: "Create a Read-Only view for department 10.",
            query: "CREATE VIEW EMP_DEPT10_RO AS SELECT * FROM scott.EMP WHERE DEPTNO = 10 WITH READ ONLY;",
            columns: ["Status"],
            rows: [["View Created"]]
        },
        {
            question: "Create a join view for name and department with CHECK OPTION.",
            query: "CREATE VIEW EMP_DEPT_CHECK AS SELECT E.ENAME, E.DEPTNO FROM scott.EMP E, scott.DEPT D WHERE E.DEPTNO = D.DEPTNO WITH CHECK OPTION;",
            columns: ["Status"],
            rows: [["View Created"]]
        },
        {
            question: "Create a Read-Only view for name, department, and salary.",
            query: "CREATE VIEW EMP_DEPT_SAL_RO AS SELECT E.ENAME, D.DNAME, E.SAL FROM scott.EMP E, scott.DEPT D WHERE E.DEPTNO = D.DEPTNO WITH READ ONLY;",
            columns: ["Status"],
            rows: [["View Created"]]
        },
        {
            question: "Create a complex view showing maximum salary per department name.",
            query: "CREATE VIEW DEPT_MAX_SAL AS SELECT D.DNAME, MAX(E.SAL) AS MAX_SAL FROM scott.EMP E, scott.DEPT D WHERE E.DEPTNO = D.DEPTNO GROUP BY D.DNAME; \nSELECT * FROM DEPT_MAX_SAL;",
            columns: ["DNAME", "MAX_SAL"],
            rows: [["ACCOUNTING", 5000], ["RESEARCH", 3000]]
        },
        {
            question: "Create a secure view for ENAME and DNAME using a join.",
            query: "CREATE VIEW EMP_SECURE_VIEW AS SELECT E.ENAME, D.DNAME FROM scott.EMP E, scott.DEPT D WHERE E.DEPTNO = D.DEPTNO; \nSELECT * FROM EMP_SECURE_VIEW;",
            columns: ["ENAME", "DNAME"],
            rows: [["SMITH", "RESEARCH"], ["ALLEN", "SALES"]]
        }
    ],
    "plsql": [

        { question: "Print your name and city in two separate lines (Output Statement).", query: "BEGIN \n  DBMS_OUTPUT.PUT_LINE('Name: Mohit'); \n  DBMS_OUTPUT.PUT_LINE('City: Ludhiana'); \nEND;", columns: ["Output_Log"], rows: [["Name: Mohit"], ["City: Ludhiana"]] },
        { question: "Display numbers from 1 to 5 using DBMS_OUTPUT.PUT_LINE.", query: "BEGIN \n  FOR i IN 1..5 LOOP \n    DBMS_OUTPUT.PUT_LINE('Number: ' || i); \n  END LOOP; \nEND;", columns: ["Output_Log"], rows: [["Number: 1"], ["Number: 2"], ["Number: 3"], ["Number: 4"], ["Number: 5"]] },
        { question: "Print the current system date using an output statement.", query: "BEGIN \n  DBMS_OUTPUT.PUT_LINE('Current Date: ' || TO_CHAR(SYSDATE, 'DD-MON-YYYY')); \nEND;", columns: ["Output_Log"], rows: [["Current Date: 07-APR-2026"]] },
        { question: "Display employee name and salary using variables.", query: "DECLARE \n  v_name VARCHAR2(20) := 'KING'; \n  v_sal  NUMBER := 5000; \nBEGIN \n  DBMS_OUTPUT.PUT_LINE('Employee: ' || v_name || ' | Salary: ' || v_sal); \nEND;", columns: ["Output_Log"], rows: [["Employee: KING | Salary: 5000"]] },
        { question: "Declare a variable for your age and display it.", query: "DECLARE \n  v_age NUMBER := 20; \nBEGIN \n  DBMS_OUTPUT.PUT_LINE('Age is: ' || v_age); \nEND;", columns: ["Output_Log"], rows: [["Age is: 20"]] },
        { question: "Declare two variables and print their sum.", query: "DECLARE \n  a NUMBER := 10; \n  b NUMBER := 20; \nBEGIN \n  DBMS_OUTPUT.PUT_LINE('Sum: ' || (a + b)); \nEND;", columns: ["Output_Log"], rows: [["Sum: 30"]] },
        { question: "Store employee name and salary in variables and display them.", query: "DECLARE \n  v_ename EMP.ENAME%TYPE; \n  v_sal   EMP.SAL%TYPE; \nBEGIN \n  SELECT ENAME, SAL INTO v_ename, v_sal FROM EMP WHERE EMPNO = 7839; \n  DBMS_OUTPUT.PUT_LINE(v_ename || ' earns ' || v_sal); \nEND;", columns: ["Output_Log"], rows: [["KING earns 5000"]] },
        { question: "Swap two numbers using variables.", query: "DECLARE \n  x NUMBER := 5; y NUMBER := 10; temp NUMBER; \nBEGIN \n  temp := x; x := y; y := temp; \n  DBMS_OUTPUT.PUT_LINE('X: ' || x || ', Y: ' || y); \nEND;", columns: ["Output_Log"], rows: [["X: 10, Y: 5"]] },
        { question: "Calculate the area of a rectangle using variables.", query: "DECLARE \n  l NUMBER := 10; w NUMBER := 5; area NUMBER; \nBEGIN \n  area := l * w; \n  DBMS_OUTPUT.PUT_LINE('Area: ' || area); \nEND;", columns: ["Output_Log"], rows: [["Area: 50"]] },
        { question: "Declare a constant PI and calculate the area of a circle.", query: "DECLARE \n  c_pi CONSTANT NUMBER := 3.14; r NUMBER := 5; area NUMBER; \nBEGIN \n  area := c_pi * r * r; \n  DBMS_OUTPUT.PUT_LINE('Circle Area: ' || area); \nEND;", columns: ["Output_Log"], rows: [["Circle Area: 78.5"]] },
        { question: "Declare a constant tax rate and calculate total salary after tax.", query: "DECLARE \n  v_sal NUMBER := 5000; c_tax CONSTANT NUMBER := 0.10; v_final NUMBER; \nBEGIN \n  v_final := v_sal - (v_sal * c_tax); \n  DBMS_OUTPUT.PUT_LINE('Salary after Tax: ' || v_final); \nEND;", columns: ["Output_Log"], rows: [["Salary after Tax: 4500"]] },
        { question: "Try modifying a constant value and observe the error.", query: "DECLARE \n  c_val CONSTANT NUMBER := 100; \nBEGIN \n  c_val := 200; -- This will cause an error \nEND;", columns: ["Error_Log"], rows: [["PLS-00363: expression 'C_VAL' cannot be used as an assignment target"]] },
        { question: "Calculate simple interest using a constant rate of interest.", query: "DECLARE \n  p NUMBER := 1000; t NUMBER := 2; c_r CONSTANT NUMBER := 5; si NUMBER; \nBEGIN \n  si := (p * c_r * t) / 100; \n  DBMS_OUTPUT.PUT_LINE('Simple Interest: ' || si); \nEND;", columns: ["Output_Log"], rows: [["Simple Interest: 100"]] },
        { question: "Use different datatypes: NUMBER, VARCHAR2, and DATE.", query: "DECLARE \n  v_id NUMBER := 1; v_str VARCHAR2(10) := 'Hello'; v_dt DATE := SYSDATE; \nBEGIN \n  DBMS_OUTPUT.PUT_LINE(v_id || ' ' || v_str || ' ' || v_dt); \nEND;", columns: ["Output_Log"], rows: [["1 Hello 07-APR-26"]] },
        { question: "Declare a variable using %TYPE from the EMP table salary column.", query: "DECLARE \n  v_salary EMP.SAL%TYPE; \nBEGIN \n  SELECT SAL INTO v_salary FROM EMP WHERE ENAME = 'KING'; \n  DBMS_OUTPUT.PUT_LINE('Salary: ' || v_salary); \nEND;", columns: ["Output_Log"], rows: [["Salary: 5000"]] },
        { question: "Declare a record using %ROWTYPE and display employee details.", query: "DECLARE \n  v_emp_rec EMP%ROWTYPE; \nBEGIN \n  SELECT * INTO v_emp_rec FROM EMP WHERE EMPNO = 7839; \n  DBMS_OUTPUT.PUT_LINE(v_emp_rec.ENAME || ' is a ' || v_emp_rec.JOB); \nEND;", columns: ["Output_Log"], rows: [["KING is a PRESIDENT"]] },
        { question: "Store and display the current date using the DATE datatype.", query: "DECLARE \n  v_today DATE := SYSDATE; \nBEGIN \n  DBMS_OUTPUT.PUT_LINE('Today: ' || v_today); \nEND;", columns: ["Output_Log"], rows: [["Today: 07-APR-26"]] },
        { question: "Convert a number to a string and display it.", query: "DECLARE \n  v_num NUMBER := 123; v_str VARCHAR2(20); \nBEGIN \n  v_str := TO_CHAR(v_num); \n  DBMS_OUTPUT.PUT_LINE('Converted String: ' || v_str); \nEND;", columns: ["Output_Log"], rows: [["Converted String: 123"]] },
        { question: "Use variables, constants, and output statements together.", query: "DECLARE \n  c_greet CONSTANT VARCHAR2(10) := 'Welcome '; v_user VARCHAR2(20) := 'Mohit'; \nBEGIN \n  DBMS_OUTPUT.PUT_LINE(c_greet || v_user); \nEND;", columns: ["Output_Log"], rows: [["Welcome Mohit"]] },
        { question: "Display employee details using %ROWTYPE, constants, and comments.", query: "DECLARE \n  -- Employee record variable \n  v_rec EMP%ROWTYPE; \n  c_tag CONSTANT VARCHAR2(10) := 'DATA: '; \nBEGIN \n  SELECT * INTO v_rec FROM EMP WHERE EMPNO = 7839; \n  DBMS_OUTPUT.PUT_LINE(c_tag || v_rec.ENAME); \nEND;", columns: ["Output_Log"], rows: [["DATA: KING"]] },
        { question: "Calculate bonus (10% of salary) and display the result with comments.", query: "DECLARE \n  v_sal NUMBER; v_bonus NUMBER; \nBEGIN \n  SELECT SAL INTO v_sal FROM EMP WHERE ENAME = 'KING'; \n  v_bonus := v_sal * 0.10; /* Calculating 10% */ \n  DBMS_OUTPUT.PUT_LINE('Bonus: ' || v_bonus); \nEND;", columns: ["Output_Log"], rows: [["Bonus: 500"]] },
        { question: "Use all concepts: variable, constant, datatype, and output.", query: "DECLARE \n  v_name VARCHAR2(20) := 'Mohit'; \n  c_dept CONSTANT VARCHAR2(10) := 'BCA'; \n  v_roll NUMBER := 7112; \nBEGIN \n  DBMS_OUTPUT.PUT_LINE('Student: ' || v_name || ' | Dept: ' || c_dept || ' | Roll: ' || v_roll); \nEND;", columns: ["Output_Log"], rows: [["Student: Mohit | Dept: BCA | Roll: 7112"]] }
    ],
    "plsql_control": [
        { question: "Write a PL/SQL program to check if a number is positive.", query: "DECLARE \n  n NUMBER := 10; \nBEGIN \n  IF n > 0 THEN \n    DBMS_OUTPUT.PUT_LINE(n || ' is Positive'); \n  END IF; \nEND;", columns: ["Output"], rows: [["10 is Positive"]] },
        { question: "Write a PL/SQL program to check if an employee's salary is greater than 3000.", query: "DECLARE \n  v_sal NUMBER := 3500; \nBEGIN \n  IF v_sal > 3000 THEN \n    DBMS_OUTPUT.PUT_LINE('Salary is greater than 3000'); \n  END IF; \nEND;", columns: ["Output"], rows: [["Salary is greater than 3000"]] },
        { question: "Write a PL/SQL program to check if a given number is even.", query: "DECLARE \n  n NUMBER := 8; \nBEGIN \n  IF MOD(n, 2) = 0 THEN \n    DBMS_OUTPUT.PUT_LINE('Number is Even'); \n  END IF; \nEND;", columns: ["Output"], rows: [["Number is Even"]] },
        { question: "Write a PL/SQL program to display a message if today is Monday.", query: "BEGIN \n  IF TO_CHAR(SYSDATE, 'DAY') LIKE 'MONDAY%' THEN \n    DBMS_OUTPUT.PUT_LINE('Today is Monday'); \n  END IF; \nEND;", columns: ["Output"], rows: [["Today is Monday"]] },
        { question: "Write a PL/SQL program to check if a number is divisible by 5.", query: "DECLARE \n  n NUMBER := 25; \nBEGIN \n  IF MOD(n, 5) = 0 THEN \n    DBMS_OUTPUT.PUT_LINE('Divisible by 5'); \n  END IF; \nEND;", columns: ["Output"], rows: [["Divisible by 5"]] },
        { question: "Write a PL/SQL program to check whether a number is even or odd.", query: "DECLARE \n  n NUMBER := 7; \nBEGIN \n  IF MOD(n, 2) = 0 THEN DBMS_OUTPUT.PUT_LINE('Even'); \n  ELSE DBMS_OUTPUT.PUT_LINE('Odd'); \n  END IF; \nEND;", columns: ["Output"], rows: [["Odd"]] },
        { question: "Write a PL/SQL program to check whether a number is positive or negative.", query: "DECLARE \n  n NUMBER := -5; \nBEGIN \n  IF n >= 0 THEN DBMS_OUTPUT.PUT_LINE('Positive'); \n  ELSE DBMS_OUTPUT.PUT_LINE('Negative'); \n  END IF; \nEND;", columns: ["Output"], rows: [["Negative"]] },
        { question: "Write a PL/SQL program to compare two numbers and display the greater one.", query: "DECLARE \n  a NUMBER := 10; b NUMBER := 20; \nBEGIN \n  IF a > b THEN DBMS_OUTPUT.PUT_LINE(a); \n  ELSE DBMS_OUTPUT.PUT_LINE(b); \n  END IF; \nEND;", columns: ["Greater_Value"], rows: [[20]] },
        { question: "Write a PL/SQL program to check whether a student passed (marks ≥ 40) or failed.", query: "DECLARE \n  m NUMBER := 45; \nBEGIN \n  IF m >= 40 THEN DBMS_OUTPUT.PUT_LINE('Pass'); \n  ELSE DBMS_OUTPUT.PUT_LINE('Fail'); \n  END IF; \nEND;", columns: ["Result"], rows: [["Pass"]] },
        { question: "Write a PL/SQL program to check if salary is above average (fixed value 2500).", query: "DECLARE \n  v_sal NUMBER := 3000; \nBEGIN \n  IF v_sal > 2500 THEN DBMS_OUTPUT.PUT_LINE('Above Average'); \n  ELSE DBMS_OUTPUT.PUT_LINE('Below Average'); \n  END IF; \nEND;", columns: ["Output"], rows: [["Above Average"]] },
        { question: "Write a PL/SQL program to assign grades based on marks (A/B/C/Fail).", query: "DECLARE \n  m NUMBER := 85; \nBEGIN \n  IF m >= 80 THEN DBMS_OUTPUT.PUT_LINE('Grade A'); \n  ELSIF m >= 60 THEN DBMS_OUTPUT.PUT_LINE('Grade B'); \n  ELSIF m >= 40 THEN DBMS_OUTPUT.PUT_LINE('Grade C'); \n  ELSE DBMS_OUTPUT.PUT_LINE('Fail'); \n  END IF; \nEND;", columns: ["Grade"], rows: [["Grade A"]] },
        { question: "Write a PL/SQL program to find the greatest of three numbers.", query: "DECLARE \n  a NUMBER:=10; b NUMBER:=30; c NUMBER:=20; \nBEGIN \n  IF a>b AND a>c THEN DBMS_OUTPUT.PUT_LINE(a); \n  ELSIF b>c THEN DBMS_OUTPUT.PUT_LINE(b); \n  ELSE DBMS_OUTPUT.PUT_LINE(c); \n  END IF; \nEND;", columns: ["Greatest"], rows: [[30]] },
        { question: "Write a PL/SQL program to check if a number is positive, negative, or zero.", query: "DECLARE \n  n NUMBER := 0; \nBEGIN \n  IF n > 0 THEN DBMS_OUTPUT.PUT_LINE('Positive'); \n  ELSIF n < 0 THEN DBMS_OUTPUT.PUT_LINE('Negative'); \n  ELSE DBMS_OUTPUT.PUT_LINE('Zero'); \n  END IF; \nEND;", columns: ["Result"], rows: [["Zero"]] },
        { question: "Write a PL/SQL program to categorize salary: High/Medium/Low.", query: "DECLARE \n  s NUMBER := 2500; \nBEGIN \n  IF s >= 4000 THEN DBMS_OUTPUT.PUT_LINE('High'); \n  ELSIF s >= 2000 THEN DBMS_OUTPUT.PUT_LINE('Medium'); \n  ELSE DBMS_OUTPUT.PUT_LINE('Low'); \n  END IF; \nEND;", columns: ["Category"], rows: [["Medium"]] },
        { question: "Write a PL/SQL program to calculate bonus based on job role.", query: "DECLARE \n  v_job VARCHAR2(20) := 'CLERK'; v_bonus NUMBER; \nBEGIN \n  IF v_job = 'MANAGER' THEN v_bonus := 1000; \n  ELSIF v_job = 'ANALYST' THEN v_bonus := 800; \n  ELSE v_bonus := 500; \n  END IF; \n  DBMS_OUTPUT.PUT_LINE('Bonus: ' || v_bonus); \nEND;", columns: ["Output"], rows: [["Bonus: 500"]] },
        { question: "Write a PL/SQL program to display day of week based on number (1-7) using CASE.", query: "DECLARE \n  d NUMBER := 1; \nBEGIN \n  CASE d \n    WHEN 1 THEN DBMS_OUTPUT.PUT_LINE('Sunday'); \n    WHEN 2 THEN DBMS_OUTPUT.PUT_LINE('Monday'); \n    ELSE DBMS_OUTPUT.PUT_LINE('Other'); \n  END CASE; \nEND;", columns: ["Day"], rows: [["Sunday"]] },
        { question: "Write a PL/SQL program to assign grades based on marks using CASE.", query: "DECLARE \n  m NUMBER := 65; v_g CHAR(1); \nBEGIN \n  v_g := CASE WHEN m>=80 THEN 'A' WHEN m>=60 THEN 'B' ELSE 'C' END; \n  DBMS_OUTPUT.PUT_LINE('Grade: ' || v_g); \nEND;", columns: ["Output"], rows: [["Grade: B"]] },
        { question: "Write a PL/SQL program to check whether a number is even or odd using CASE.", query: "DECLARE \n  n NUMBER := 4; \nBEGIN \n  DBMS_OUTPUT.PUT_LINE(CASE WHEN MOD(n,2)=0 THEN 'Even' ELSE 'Odd' END); \nEND;", columns: ["Result"], rows: [["Even"]] },
        { question: "Write a PL/SQL program to display department name based on department id using CASE.", query: "DECLARE \n  d NUMBER := 10; \nBEGIN \n  DBMS_OUTPUT.PUT_LINE(CASE d WHEN 10 THEN 'ACCOUNTING' WHEN 20 THEN 'RESEARCH' ELSE 'OTHERS' END); \nEND;", columns: ["Dept"], rows: [["ACCOUNTING"]] },
        { question: "Write a PL/SQL program to categorize salary (High/Medium/Low) using CASE.", query: "DECLARE \n  s NUMBER := 5000; \nBEGIN \n  DBMS_OUTPUT.PUT_LINE(CASE WHEN s>4000 THEN 'High' WHEN s>2000 THEN 'Medium' ELSE 'Low' END); \nEND;", columns: ["Category"], rows: [["High"]] },
        { question: "Write a PL/SQL program to print numbers 1-10 but skip 5 (CONTINUE).", query: "BEGIN \n  FOR i IN 1..10 LOOP \n    IF i = 5 THEN CONTINUE; END IF; \n    DBMS_OUTPUT.PUT_LINE(i); \n  END LOOP; \nEND;", columns: ["Value"], rows: [[1], [2], [3], [4], [6], [7], [8], [9], [10]] },
        { question: "Write a PL/SQL program to display only odd numbers between 1 and 20 (CONTINUE).", query: "BEGIN \n  FOR i IN 1..20 LOOP \n    IF MOD(i, 2) = 0 THEN CONTINUE; END IF; \n    DBMS_OUTPUT.PUT_LINE(i); \n  END LOOP; \nEND;", columns: ["Odd_Nums"], rows: [[1], [3], [5], [7], [9], [11], [13], [15], [17], [19]] },
        { question: "Write a PL/SQL program to skip multiples of 3 while printing numbers 1-15.", query: "BEGIN \n  FOR i IN 1..15 LOOP \n    CONTINUE WHEN MOD(i, 3) = 0; \n    DBMS_OUTPUT.PUT_LINE(i); \n  END LOOP; \nEND;", columns: ["Output"], rows: [[1], [2], [4], [5], [7], [8], [10], [11], [13], [14]] },
        { question: "Write a PL/SQL program to skip employees with salary less than 2000 (Simulated Loop).", query: "DECLARE \n  CURSOR c1 IS SELECT ENAME, SAL FROM EMP; \nBEGIN \n  FOR r IN c1 LOOP \n    IF r.SAL < 2000 THEN CONTINUE; END IF; \n    DBMS_OUTPUT.PUT_LINE(r.ENAME || ': ' || r.SAL); \n  END LOOP; \nEND;", columns: ["High_Sal_Staff"], rows: [["JONES: 2975"], ["BLAKE: 2850"], ["CLARK: 2450"], ["SCOTT: 3000"], ["KING: 5000"], ["FORD: 3000"]] },
        { question: "Write a PL/SQL program to exit loop when number reaches 5 (EXIT).", query: "BEGIN \n  FOR i IN 1..10 LOOP \n    DBMS_OUTPUT.PUT_LINE(i); \n    IF i = 5 THEN EXIT; END IF; \n  END LOOP; \nEND;", columns: ["Output"], rows: [[1], [2], [3], [4], [5]] },
        { question: "Write a PL/SQL program to print numbers until sum exceeds 50, then exit.", query: "DECLARE \n  s NUMBER := 0; i NUMBER := 1; \nBEGIN \n  LOOP \n    s := s + i; \n    DBMS_OUTPUT.PUT_LINE('Num: ' || i || ' Sum: ' || s); \n    IF s > 50 THEN EXIT; END IF; \n    i := i + 1; \n  END LOOP; \nEND;", columns: ["Progress"], rows: [["Num: 10 Sum: 55"]] },
        { question: "Write a PL/SQL program to exit loop when a negative number is encountered.", query: "DECLARE \n  TYPE num_list IS TABLE OF NUMBER; \n  list num_list := num_list(10, 20, -1, 40); \nBEGIN \n  FOR i IN 1..list.COUNT LOOP \n    EXIT WHEN list(i) < 0; \n    DBMS_OUTPUT.PUT_LINE(list(i)); \n  END LOOP; \nEND;", columns: ["Positive_Only"], rows: [[10], [20]] },
        { question: "Write a PL/SQL program using EXIT WHEN to stop loop when condition is met.", query: "DECLARE \n  i NUMBER := 1; \nBEGIN \n  LOOP \n    DBMS_OUTPUT.PUT_LINE(i); \n    i := i + 1; \n    EXIT WHEN i > 3; \n  END LOOP; \nEND;", columns: ["Output"], rows: [[1], [2], [3]] },
        { question: "Write a PL/SQL program using IF-ELSIF and CASE together.", query: "DECLARE \n  n NUMBER := 15; \nBEGIN \n  IF n > 10 THEN \n    DBMS_OUTPUT.PUT_LINE(CASE WHEN MOD(n,2)=0 THEN 'Even' ELSE 'Odd' END); \n  END IF; \nEND;", columns: ["Mixed_Logic"], rows: [["Odd"]] },
        { question: "Write a PL/SQL program to process salaries using LOOP, CONTINUE, and EXIT.", query: "DECLARE \n  CURSOR c IS SELECT SAL FROM EMP; \nBEGIN \n  FOR r IN c LOOP \n    IF r.SAL < 1000 THEN CONTINUE; END IF; \n    DBMS_OUTPUT.PUT_LINE('Processing: ' || r.SAL); \n    EXIT WHEN r.SAL > 4000; \n  END LOOP; \nEND;", columns: ["Log"], rows: [["Processing: 1600"], ["Processing: 5000"]] },
        { question: "Write a PL/SQL program to simulate a login system (IF-ELSE).", query: "DECLARE \n  u VARCHAR2(10) := 'mohit'; p VARCHAR2(10) := '7112'; \nBEGIN \n  IF u = 'mohit' AND p = '7112' THEN DBMS_OUTPUT.PUT_LINE('Success'); \n  ELSE DBMS_OUTPUT.PUT_LINE('Denied'); \n  END IF; \nEND;", columns: ["System"], rows: [["Success"]] }
    ],
    "plsql_loops": [
        { question: "Print numbers from 1 to 5 using a Simple Loop.", query: "DECLARE \n  i NUMBER := 1; \nBEGIN \n  LOOP \n    DBMS_OUTPUT.PUT_LINE(i); \n    i := i + 1; \n    EXIT WHEN i > 5; \n  END LOOP; \nEND;", columns: ["Output"], rows: [[1], [2], [3], [4], [5]] },
        { question: "Display numbers from 10 to 1 in reverse order.", query: "DECLARE \n  i NUMBER := 10; \nBEGIN \n  LOOP \n    DBMS_OUTPUT.PUT_LINE(i); \n    i := i - 1; \n    EXIT WHEN i < 1; \n  END LOOP; \nEND;", columns: ["Output"], rows: [[10], [9], [8], [7], [6], [5], [4], [3], [2], [1]] },
        { question: "Calculate sum of numbers from 1 to 10 using Simple Loop.", query: "DECLARE \n  i NUMBER := 1; s NUMBER := 0; \nBEGIN \n  LOOP \n    s := s + i; \n    i := i + 1; \n    EXIT WHEN i > 10; \n  END LOOP; \n  DBMS_OUTPUT.PUT_LINE('Sum: ' || s); \nEND;", columns: ["Result"], rows: [["Sum: 55"]] },
        { question: "Print multiplication table of a number (e.g., 4).", query: "DECLARE \n  i NUMBER := 1; n NUMBER := 4; \nBEGIN \n  LOOP \n    DBMS_OUTPUT.PUT_LINE(n || ' x ' || i || ' = ' || (n*i)); \n    i := i + 1; \n    EXIT WHEN i > 10; \n  END LOOP; \nEND;", columns: ["Table_4"], rows: [["4 x 1 = 4"], ["4 x 10 = 40"]] },
        { question: "Print even numbers between 1 and 20.", query: "DECLARE \n  i NUMBER := 1; \nBEGIN \n  LOOP \n    IF MOD(i, 2) = 0 THEN DBMS_OUTPUT.PUT_LINE(i); END IF; \n    i := i + 1; \n    EXIT WHEN i > 20; \n  END LOOP; \nEND;", columns: ["Even_Nums"], rows: [[2], [4], [6], [8], [10], [12], [14], [16], [18], [20]] },
        { question: "Exit loop when number exceeds 50.", query: "DECLARE \n  i NUMBER := 10; \nBEGIN \n  LOOP \n    DBMS_OUTPUT.PUT_LINE(i); \n    i := i + 15; \n    EXIT WHEN i > 50; \n  END LOOP; \nEND;", columns: ["Output"], rows: [[10], [25], [40]] },
        { question: "Print numbers from 1 to 10 using a While Loop.", query: "DECLARE \n  i NUMBER := 1; \nBEGIN \n  WHILE i <= 10 LOOP \n    DBMS_OUTPUT.PUT_LINE(i); \n    i := i + 1; \n  END LOOP; \nEND;", columns: ["Output"], rows: [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]] },
        { question: "Calculate factorial of a number (5!).", query: "DECLARE \n  n NUMBER := 5; f NUMBER := 1; \nBEGIN \n  WHILE n > 0 LOOP \n    f := f * n; \n    n := n - 1; \n  END LOOP; \n  DBMS_OUTPUT.PUT_LINE('Factorial: ' || f); \nEND;", columns: ["Result"], rows: [["Factorial: 120"]] },
        { question: "Display sum of digits of a number (123).", query: "DECLARE \n  n NUMBER := 123; s NUMBER := 0; \nBEGIN \n  WHILE n > 0 LOOP \n    s := s + MOD(n, 10); \n    n := TRUNC(n / 10); \n  END LOOP; \n  DBMS_OUTPUT.PUT_LINE('Sum: ' || s); \nEND;", columns: ["Result"], rows: [["Sum: 6"]] },
        { question: "Reverse a number (456).", query: "DECLARE \n  n NUMBER := 456; r NUMBER := 0; \nBEGIN \n  WHILE n > 0 LOOP \n    r := (r * 10) + MOD(n, 10); \n    n := TRUNC(n / 10); \n  END LOOP; \n  DBMS_OUTPUT.PUT_LINE('Reversed: ' || r); \nEND;", columns: ["Result"], rows: [["Reversed: 654"]] },
        { question: "Check whether a number is palindrome.", query: "DECLARE \n  n NUMBER := 121; t NUMBER; r NUMBER := 0; \nBEGIN \n  t := n; \n  WHILE n > 0 LOOP \n    r := (r * 10) + MOD(n, 10); \n    n := TRUNC(n / 10); \n  END LOOP; \n  IF t = r THEN DBMS_OUTPUT.PUT_LINE('Palindrome'); \n  ELSE DBMS_OUTPUT.PUT_LINE('Not Palindrome'); END IF; \nEND;", columns: ["Status"], rows: [["Palindrome"]] },
        { question: "Print Fibonacci series up to N terms.", query: "DECLARE \n  a NUMBER := 0; b NUMBER := 1; c NUMBER; n NUMBER := 5; \nBEGIN \n  DBMS_OUTPUT.PUT_LINE(a); DBMS_OUTPUT.PUT_LINE(b); \n  WHILE n > 2 LOOP \n    c := a + b; a := b; b := c; \n    DBMS_OUTPUT.PUT_LINE(c); \n    n := n - 1; \n  END LOOP; \nEND;", columns: ["Fibonacci"], rows: [[0], [1], [1], [2], [3]] },
        { question: "Print numbers from 1 to 10 using a For Loop.", query: "BEGIN \n  FOR i IN 1..10 LOOP \n    DBMS_OUTPUT.PUT_LINE(i); \n  END LOOP; \nEND;", columns: ["Output"], rows: [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]] },
        { question: "Print numbers in reverse order (10 to 1).", query: "BEGIN \n  FOR i IN REVERSE 1..10 LOOP \n    DBMS_OUTPUT.PUT_LINE(i); \n  END LOOP; \nEND;", columns: ["Output"], rows: [[10], [9], [8], [7], [6], [5], [4], [3], [2], [1]] },
        { question: "Calculate sum of first 10 natural numbers.", query: "DECLARE \n  s NUMBER := 0; \nBEGIN \n  FOR i IN 1..10 LOOP s := s + i; END LOOP; \n  DBMS_OUTPUT.PUT_LINE('Sum: ' || s); \nEND;", columns: ["Result"], rows: [["Sum: 55"]] },
        { question: "Display multiplication table of 5.", query: "BEGIN \n  FOR i IN 1..10 LOOP \n    DBMS_OUTPUT.PUT_LINE('5 x ' || i || ' = ' || (5*i)); \n  END LOOP; \nEND;", columns: ["Table_5"], rows: [["5 x 1 = 5"], ["5 x 10 = 50"]] },
        { question: "Print squares of numbers from 1 to 10.", query: "BEGIN \n  FOR i IN 1..10 LOOP \n    DBMS_OUTPUT.PUT_LINE(i || '^2 = ' || (i*i)); \n  END LOOP; \nEND;", columns: ["Squares"], rows: [["1^2 = 1"], ["10^2 = 100"]] },
        { question: "Display all odd numbers between 1 and 50.", query: "BEGIN \n  FOR i IN 1..50 LOOP \n    IF MOD(i, 2) != 0 THEN DBMS_OUTPUT.PUT_LINE(i); END IF; \n  END LOOP; \nEND;", columns: ["Odd_Nums"], rows: [[1], [3], [5], [47], [49]] },
        { question: "Print star pattern (*).", query: "BEGIN \n  FOR i IN 1..4 LOOP \n    FOR j IN 1..i LOOP DBMS_OUTPUT.PUT('*'); END LOOP; \n    DBMS_OUTPUT.NEW_LINE; \n  END LOOP; \nEND;", columns: ["Pattern"], rows: [["*"], ["**"], ["***"], ["****"]] },
        { question: "Print multiplication tables from 1 to 5.", query: "BEGIN \n  FOR i IN 1..5 LOOP \n    FOR j IN 1..10 LOOP \n      DBMS_OUTPUT.PUT((i*j) || ' '); \n    END LOOP; \n    DBMS_OUTPUT.NEW_LINE; \n  END LOOP; \nEND;", columns: ["Tables"], rows: [["1 2 3..."], ["2 4 6..."]] },
        { question: "Display number pattern (1, 12, 123).", query: "BEGIN \n  FOR i IN 1..4 LOOP \n    FOR j IN 1..i LOOP DBMS_OUTPUT.PUT(j); END LOOP; \n    DBMS_OUTPUT.NEW_LINE; \n  END LOOP; \nEND;", columns: ["Pattern"], rows: [["1"], ["12"], ["123"], ["1234"]] },
        { question: "Print numbers 1-20 but skip multiples of 4.", query: "BEGIN \n  FOR i IN 1..20 LOOP \n    CONTINUE WHEN MOD(i, 4) = 0; \n    DBMS_OUTPUT.PUT_LINE(i); \n  END LOOP; \nEND;", columns: ["Output"], rows: [[1], [2], [3], [5]] },
        { question: "Stop printing once sum exceeds 100.", query: "DECLARE \n  s NUMBER := 0; \nBEGIN \n  FOR i IN 1..50 LOOP \n    s := s + i; \n    EXIT WHEN s > 100; \n    DBMS_OUTPUT.PUT_LINE('i: '||i||' Sum: '||s); \n  END LOOP; \nEND;", columns: ["Log"], rows: [["i: 13 Sum: 91"]] },
        { question: "Exit when number divisible by 7 is found.", query: "BEGIN \n  FOR i IN 1..20 LOOP \n    IF MOD(i, 7) = 0 THEN EXIT; END IF; \n    DBMS_OUTPUT.PUT_LINE(i); \n  END LOOP; \nEND;", columns: ["Output"], rows: [[1], [2], [3], [4], [5], [6]] },
        { question: "Loop through employee IDs from EMP table.", query: "BEGIN \n  FOR r IN (SELECT EMPNO FROM EMP) LOOP \n    DBMS_OUTPUT.PUT_LINE('EmpID: ' || r.EMPNO); \n  END LOOP; \nEND;", columns: ["IDs"], rows: [["EmpID: 7369"], ["EmpID: 7499"]] },
        { question: "Increase salary of employees by 10% using a loop.", query: "BEGIN \n  FOR r IN (SELECT EMPNO, SAL FROM EMP) LOOP \n    UPDATE EMP SET SAL = SAL * 1.1 WHERE EMPNO = r.EMPNO; \n  END LOOP; \nEND;", columns: ["Status"], rows: [["Update Complete"]] },
        { question: "Display employees with salary > 3000 using a loop.", query: "BEGIN \n  FOR r IN (SELECT ENAME, SAL FROM EMP) LOOP \n    IF r.SAL > 3000 THEN DBMS_OUTPUT.PUT_LINE(r.ENAME); END IF; \n  END LOOP; \nEND;", columns: ["Names"], rows: [["KING"]] },
        { question: "Count total number of employees using a loop.", query: "DECLARE \n  c NUMBER := 0; \nBEGIN \n  FOR r IN (SELECT * FROM EMP) LOOP c := c + 1; END LOOP; \n  DBMS_OUTPUT.PUT_LINE('Total: ' || c); \nEND;", columns: ["Result"], rows: [["Total: 14"]] },
        { question: "Use all three loops (Simple, While, For) in one program.", query: "BEGIN \n  FOR i IN 1..1 LOOP NULL; END LOOP; -- For Example \n  -- (Logic combined in code) \nEND;", columns: ["Output"], rows: [["Program Executed"]] },
        { question: "Generate prime numbers between 1 and 50.", query: "DECLARE \n  j NUMBER; f NUMBER; \nBEGIN \n  FOR i IN 2..50 LOOP \n    f := 0; \n    FOR j IN 2..i/2 LOOP \n      IF MOD(i, j) = 0 THEN f := 1; EXIT; END IF; \n    END LOOP; \n    IF f = 0 THEN DBMS_OUTPUT.PUT_LINE(i); END IF; \n  END LOOP; \nEND;", columns: ["Primes"], rows: [[2], [3], [5], [7], [11], [13], [17], [19], [23], [29], [31], [37], [41], [43], [47]] },
        { question: "Simulate ATM withdrawal attempts (3 attempts).", query: "DECLARE \n  attempts NUMBER := 1; pin NUMBER := 1234; input NUMBER := 0000; \nBEGIN \n  WHILE attempts <= 3 LOOP \n    IF input = pin THEN DBMS_OUTPUT.PUT_LINE('Granted'); EXIT; \n    ELSE DBMS_OUTPUT.PUT_LINE('Attempt '||attempts||' failed'); \n    END IF; \n    attempts := attempts + 1; \n  END LOOP; \nEND;", columns: ["ATM_Log"], rows: [["Attempt 1 failed"], ["Attempt 2 failed"], ["Attempt 3 failed"]] },
        { question: "Calculate sum of even and odd numbers separately.", query: "DECLARE \n  se NUMBER := 0; so NUMBER := 0; \nBEGIN \n  FOR i IN 1..10 LOOP \n    IF MOD(i, 2) = 0 THEN se := se + i; \n    ELSE so := so + i; END IF; \n  END LOOP; \n  DBMS_OUTPUT.PUT_LINE('Even: '||se||' | Odd: '||so); \nEND;", columns: ["Result"], rows: [["Even: 30 | Odd: 25"]] }
    ],
    "plsql_types": [
        { question: "Fetch employee name from EMP table for empno = 7369 and display it (SELECT INTO).", query: "DECLARE \n  v_name VARCHAR2(20); \nBEGIN \n  SELECT ENAME INTO v_name FROM EMP WHERE EMPNO = 7369; \n  DBMS_OUTPUT.PUT_LINE('Employee Name: ' || v_name); \nEND;", columns: ["Output_Log"], rows: [["Employee Name: SMITH"]] },
        { question: "Retrieve salary of an employee and print it.", query: "DECLARE \n  v_sal NUMBER; \nBEGIN \n  SELECT SAL INTO v_sal FROM EMP WHERE ENAME = 'KING'; \n  DBMS_OUTPUT.PUT_LINE('Salary: ' || v_sal); \nEND;", columns: ["Output_Log"], rows: [["Salary: 5000"]] },
        { question: "Fetch employee name and job using a single SELECT statement.", query: "DECLARE \n  v_name VARCHAR2(20); v_job VARCHAR2(20); \nBEGIN \n  SELECT ENAME, JOB INTO v_name, v_job FROM EMP WHERE EMPNO = 7839; \n  DBMS_OUTPUT.PUT_LINE(v_name || ' is a ' || v_job); \nEND;", columns: ["Output_Log"], rows: [["KING is a PRESIDENT"]] },
        { question: "Display department number of an employee using SELECT INTO.", query: "DECLARE \n  v_dept NUMBER; \nBEGIN \n  SELECT DEPTNO INTO v_dept FROM EMP WHERE ENAME = 'ADAMS'; \n  DBMS_OUTPUT.PUT_LINE('Dept No: ' || v_dept); \nEND;", columns: ["Output_Log"], rows: [["Dept No: 20"]] },
        { question: "Fetch hiredate of an employee and display it.", query: "DECLARE \n  v_date DATE; \nBEGIN \n  SELECT HIREDATE INTO v_date FROM EMP WHERE ENAME = 'SMITH'; \n  DBMS_OUTPUT.PUT_LINE('Joined on: ' || v_date); \nEND;", columns: ["Output_Log"], rows: [["Joined on: 17-DEC-80"]] },
        { question: "Count total number of employees using SELECT INTO.", query: "DECLARE \n  v_count NUMBER; \nBEGIN \n  SELECT COUNT(*) INTO v_count FROM EMP; \n  DBMS_OUTPUT.PUT_LINE('Total Employees: ' || v_count); \nEND;", columns: ["Output_Log"], rows: [["Total Employees: 14"]] },
        { question: "Declare a variable using %TYPE based on EMP.SAL and display salary.", query: "DECLARE \n  v_sal EMP.SAL%TYPE; \nBEGIN \n  SELECT SAL INTO v_sal FROM EMP WHERE EMPNO = 7369; \n  DBMS_OUTPUT.PUT_LINE('Salary: ' || v_sal); \nEND;", columns: ["Output_Log"], rows: [["Salary: 800"]] },
        { question: "Declare variables for employee name and job using %TYPE.", query: "DECLARE \n  v_name EMP.ENAME%TYPE; v_job EMP.JOB%TYPE; \nBEGIN \n  SELECT ENAME, JOB INTO v_name, v_job FROM EMP WHERE ROWNUM = 1; \n  DBMS_OUTPUT.PUT_LINE(v_name || ' (' || v_job || ')'); \nEND;", columns: ["Output_Log"], rows: [["SMITH (CLERK)"]] },
        { question: "Fetch salary using %TYPE variable and display it.", query: "DECLARE \n  v_s EMP.SAL%TYPE; \nBEGIN \n  SELECT SAL INTO v_s FROM EMP WHERE ENAME = 'FORD'; \n  DBMS_OUTPUT.PUT_LINE('Ford Salary: ' || v_s); \nEND;", columns: ["Output_Log"], rows: [["Ford Salary: 3000"]] },
        { question: "Calculate annual salary using %TYPE variable.", query: "DECLARE \n  v_s EMP.SAL%TYPE; v_ann v_s%TYPE; \nBEGIN \n  SELECT SAL INTO v_s FROM EMP WHERE ENAME = 'SMITH'; \n  v_ann := v_s * 12; \n  DBMS_OUTPUT.PUT_LINE('Annual: ' || v_ann); \nEND;", columns: ["Output_Log"], rows: [["Annual: 9600"]] },
        { question: "Update salary using %TYPE variable.", query: "DECLARE \n  v_new_sal EMP.SAL%TYPE := 4000; \nBEGIN \n  UPDATE EMP SET SAL = v_new_sal WHERE ENAME = 'JONES'; \n  DBMS_OUTPUT.PUT_LINE('Salary updated to ' || v_new_sal); \nEND;", columns: ["Output_Log"], rows: [["Salary updated to 4000"]] },
        { question: "Declare a variable using %TYPE from DEPT table.", query: "DECLARE \n  v_loc DEPT.LOC%TYPE; \nBEGIN \n  SELECT LOC INTO v_loc FROM DEPT WHERE DEPTNO = 10; \n  DBMS_OUTPUT.PUT_LINE('Location: ' || v_loc); \nEND;", columns: ["Output_Log"], rows: [["Location: NEW YORK"]] },
        { question: "Declare a record using %ROWTYPE for EMP table.", query: "DECLARE \n  v_emp EMP%ROWTYPE; \nBEGIN \n  SELECT * INTO v_emp FROM EMP WHERE EMPNO = 7839; \n  DBMS_OUTPUT.PUT_LINE('Record initialized for ' || v_emp.ENAME); \nEND;", columns: ["Output_Log"], rows: [["Record initialized for KING"]] },
        { question: "Fetch complete employee record using %ROWTYPE and display fields.", query: "DECLARE \n  v_e EMP%ROWTYPE; \nBEGIN \n  SELECT * INTO v_e FROM EMP WHERE ENAME = 'ALLEN'; \n  DBMS_OUTPUT.PUT_LINE('ID: ' || v_e.EMPNO || ' | Name: ' || v_e.ENAME || ' | Job: ' || v_e.JOB); \nEND;", columns: ["Output_Log"], rows: [["ID: 7499 | Name: ALLEN | Job: SALESMAN"]] },
        { question: "Display employee name, salary, and job using %ROWTYPE.", query: "DECLARE \n  v_r EMP%ROWTYPE; \nBEGIN \n  SELECT * INTO v_r FROM EMP WHERE ENAME = 'WARD'; \n  DBMS_OUTPUT.PUT_LINE(v_r.ENAME || ' earns ' || v_r.SAL || ' as ' || v_r.JOB); \nEND;", columns: ["Output_Log"], rows: [["WARD earns 1250 as SALESMAN"]] },
    ],
    "plsql_cursors": [
        { question: "Declare a cursor to fetch all employees from EMP table and display their names (Explicit Cursor).", query: "DECLARE \n  CURSOR c_emp IS SELECT ENAME FROM EMP; \n  v_name EMP.ENAME%TYPE; \nBEGIN \n  OPEN c_emp; \n  LOOP \n    FETCH c_emp INTO v_name; \n    EXIT WHEN c_emp%NOTFOUND; \n    DBMS_OUTPUT.PUT_LINE(v_name); \n  END LOOP; \n  CLOSE c_emp; \nEND;", columns: ["Output_Log"], rows: [["SMITH"], ["ALLEN"], ["WARD"], ["JONES"]] },
        { question: "Fetch employee name and salary using cursor and display them.", query: "DECLARE \n  CURSOR c_data IS SELECT ENAME, SAL FROM EMP; \n  v_n EMP.ENAME%TYPE; v_s EMP.SAL%TYPE; \nBEGIN \n  OPEN c_data; \n  LOOP \n    FETCH c_data INTO v_n, v_s; \n    EXIT WHEN c_data%NOTFOUND; \n    DBMS_OUTPUT.PUT_LINE(v_n || ': ' || v_s); \n  END LOOP; \n  CLOSE c_data; \nEND;", columns: ["Output_Log"], rows: [["SMITH: 800"], ["ALLEN: 1600"]] },
        { question: "Display employees whose salary is greater than 3000 using cursor.", query: "DECLARE \n  CURSOR c_high IS SELECT ENAME FROM EMP WHERE SAL > 3000; \n  v_n EMP.ENAME%TYPE; \nBEGIN \n  OPEN c_high; \n  LOOP \n    FETCH c_high INTO v_n; \n    EXIT WHEN c_high%NOTFOUND; \n    DBMS_OUTPUT.PUT_LINE(v_n); \n  END LOOP; \n  CLOSE c_high; \nEND;", columns: ["Output_Log"], rows: [["KING"]] },
        { question: "Count number of employees using cursor.", query: "DECLARE \n  CURSOR c_count IS SELECT * FROM EMP; \n  v_rec c_count%ROWTYPE; v_cnt NUMBER := 0; \nBEGIN \n  OPEN c_count; \n  LOOP \n    FETCH c_count INTO v_rec; \n    EXIT WHEN c_count%NOTFOUND; \n    v_cnt := v_cnt + 1; \n  END LOOP; \n  DBMS_OUTPUT.PUT_LINE('Total: ' || v_cnt); \n  CLOSE c_count; \nEND;", columns: ["Output_Log"], rows: [["Total: 14"]] },
        { question: "Calculate total salary of all employees using cursor.", query: "DECLARE \n  CURSOR c_sal IS SELECT SAL FROM EMP; \n  v_s EMP.SAL%TYPE; v_tot NUMBER := 0; \nBEGIN \n  OPEN c_sal; \n  LOOP \n    FETCH c_sal INTO v_s; \n    EXIT WHEN c_sal%NOTFOUND; \n    v_tot := v_tot + v_s; \n  END LOOP; \n  DBMS_OUTPUT.PUT_LINE('Sum: ' || v_tot); \n  CLOSE c_sal; \nEND;", columns: ["Output_Log"], rows: [["Sum: 29025"]] },
        { question: "Fetch records one by one using OPEN, FETCH, and CLOSE lifecycle.", query: "DECLARE \n  CURSOR c_life IS SELECT ENAME FROM EMP WHERE ROWNUM <= 2; \n  v_n EMP.ENAME%TYPE; \nBEGIN \n  OPEN c_life; \n  FETCH c_life INTO v_n; DBMS_OUTPUT.PUT_LINE('Row 1: ' || v_n); \n  FETCH c_life INTO v_n; DBMS_OUTPUT.PUT_LINE('Row 2: ' || v_n); \n  CLOSE c_life; \nEND;", columns: ["Output_Log"], rows: [["Row 1: SMITH"], ["Row 2: ALLEN"]] },
        { question: "Display all employee records using cursor FOR LOOP.", query: "BEGIN \n  FOR r IN (SELECT * FROM EMP) LOOP \n    DBMS_OUTPUT.PUT_LINE(r.EMPNO || ' ' || r.ENAME); \n  END LOOP; \nEND;", columns: ["Output_Log"], rows: [["7369 SMITH"], ["7499 ALLEN"]] },
        { question: "Display employee names and jobs using cursor FOR LOOP.", query: "BEGIN \n  FOR emp_rec IN (SELECT ENAME, JOB FROM EMP) LOOP \n    DBMS_OUTPUT.PUT_LINE(emp_rec.ENAME || ' - ' || emp_rec.JOB); \n  END LOOP; \nEND;", columns: ["Output_Log"], rows: [["SMITH - CLERK"], ["KING - PRESIDENT"]] },
        { question: "Display employees from department 10 using cursor FOR LOOP.", query: "BEGIN \n  FOR r IN (SELECT ENAME FROM EMP WHERE DEPTNO = 10) LOOP \n    DBMS_OUTPUT.PUT_LINE(r.ENAME); \n  END LOOP; \nEND;", columns: ["Output_Log"], rows: [["CLARK"], ["KING"], ["MILLER"]] },
        { question: "Calculate total salary using cursor FOR LOOP.", query: "DECLARE \n  v_t NUMBER := 0; \nBEGIN \n  FOR r IN (SELECT SAL FROM EMP) LOOP \n    v_t := v_t + r.SAL; \n  END LOOP; \n  DBMS_OUTPUT.PUT_LINE('Total: ' || v_t); \nEND;", columns: ["Output_Log"], rows: [["Total: 29025"]] },
        { question: "Display employees with salary greater than average using cursor FOR LOOP.", query: "BEGIN \n  FOR r IN (SELECT ENAME, SAL FROM EMP WHERE SAL > (SELECT AVG(SAL) FROM EMP)) LOOP \n    DBMS_OUTPUT.PUT_LINE(r.ENAME || ' (' || r.SAL || ')'); \n  END LOOP; \nEND;", columns: ["Output_Log"], rows: [["JONES (2975)"], ["BLAKE (2850)"], ["KING (5000)"]] },
        { question: "Declare a parameterized cursor for a specific department number.", query: "DECLARE \n  CURSOR c_dept(p_no NUMBER) IS SELECT ENAME FROM EMP WHERE DEPTNO = p_no; \nBEGIN \n  FOR r IN c_dept(20) LOOP \n    DBMS_OUTPUT.PUT_LINE(r.ENAME); \n  END LOOP; \nEND;", columns: ["Output_Log"], rows: [["SMITH"], ["JONES"], ["SCOTT"], ["ADAMS"], ["FORD"]] },
        { question: "Fetch employees whose salary is greater than a given value using parameters.", query: "DECLARE \n  CURSOR c_sal(p_limit NUMBER) IS SELECT ENAME FROM EMP WHERE SAL > p_limit; \nBEGIN \n  FOR r IN c_sal(4000) LOOP \n    DBMS_OUTPUT.PUT_LINE(r.ENAME); \n  END LOOP; \nEND;", columns: ["Output_Log"], rows: [["KING"]] },
        { question: "Display employees based on job role using parameterized cursor.", query: "DECLARE \n  CURSOR c_job(p_job VARCHAR2) IS SELECT ENAME FROM EMP WHERE JOB = p_job; \nBEGIN \n  FOR r IN c_job('ANALYST') LOOP \n    DBMS_OUTPUT.PUT_LINE(r.ENAME); \n  END LOOP; \nEND;", columns: ["Output_Log"], rows: [["SCOTT"], ["FORD"]] },
        { question: "Calculate total salary of a given department using parameters.", query: "DECLARE \n  CURSOR c_sum(p_d NUMBER) IS SELECT SAL FROM EMP WHERE DEPTNO = p_d; \n  v_t NUMBER := 0; \nBEGIN \n  FOR r IN c_sum(10) LOOP v_t := v_t + r.SAL; END LOOP; \n  DBMS_OUTPUT.PUT_LINE('Dept 10 Sum: ' || v_t); \nEND;", columns: ["Output_Log"], rows: [["Dept 10 Sum: 8750"]] },
        { question: "Pass multiple parameters (deptno, job) to cursor.", query: "DECLARE \n  CURSOR c_multi(p_d NUMBER, p_j VARCHAR2) IS SELECT ENAME FROM EMP WHERE DEPTNO = p_d AND JOB = p_j; \nBEGIN \n  FOR r IN c_multi(30, 'SALESMAN') LOOP \n    DBMS_OUTPUT.PUT_LINE(r.ENAME); \n  END LOOP; \nEND;", columns: ["Output_Log"], rows: [["ALLEN"], ["WARD"], ["MARTIN"], ["TURNER"]] },
        { question: "Update salary of employees using cursor with FOR UPDATE.", query: "DECLARE \n  CURSOR c_upd IS SELECT SAL FROM EMP FOR UPDATE; \nBEGIN \n  FOR r IN c_upd LOOP \n    UPDATE EMP SET SAL = SAL + 1 WHERE CURRENT OF c_upd; \n  END LOOP; \nEND;", columns: ["Status"], rows: [["Rows Locked and Updated"]] },
        { question: "Increase salary by 10% for employees using WHERE CURRENT OF.", query: "DECLARE \n  CURSOR c_raise IS SELECT SAL FROM EMP WHERE JOB = 'CLERK' FOR UPDATE; \nBEGIN \n  FOR r IN c_raise LOOP \n    UPDATE EMP SET SAL = SAL * 1.1 WHERE CURRENT OF c_raise; \n  END LOOP; \nEND;", columns: ["Status"], rows: [["Salary Increased for Clerks"]] },
        { question: "Delete employees with salary less than 2000 using cursor.", query: "DECLARE \n  CURSOR c_del IS SELECT * FROM EMP WHERE SAL < 2000 FOR UPDATE; \nBEGIN \n  FOR r IN c_del LOOP \n    DELETE FROM EMP WHERE CURRENT OF c_del; \n  END LOOP; \nEND;", columns: ["Status"], rows: [["Low Salary Records Deleted"]] },
        { question: "Update job of employees using updatable cursor.", query: "DECLARE \n  CURSOR c_j IS SELECT JOB FROM EMP WHERE JOB = 'SALESMAN' FOR UPDATE; \nBEGIN \n  FOR r IN c_j LOOP \n    UPDATE EMP SET JOB = 'SALES' WHERE CURRENT OF c_j; \n  END LOOP; \nEND;", columns: ["Status"], rows: [["Jobs Updated Successfully"]] },
        { question: "Fetch records using cursor and modify values row-by-row.", query: "DECLARE \n  CURSOR c_mod IS SELECT COMM FROM EMP FOR UPDATE; \nBEGIN \n  FOR r IN c_mod LOOP \n    UPDATE EMP SET COMM = 500 WHERE CURRENT OF c_mod; \n  END LOOP; \nEND;", columns: ["Status"], rows: [["All commissions modified"]] },
        { question: "Use explicit cursor and IF condition to display high salary employees.", query: "DECLARE \n  CURSOR c IS SELECT ENAME, SAL FROM EMP; \nBEGIN \n  FOR r IN c LOOP \n    IF r.SAL > 2500 THEN \n      DBMS_OUTPUT.PUT_LINE(r.ENAME || ' is Senior'); \n    END IF; \n  END LOOP; \nEND;", columns: ["Output_Log"], rows: [["JONES is Senior"], ["BLAKE is Senior"], ["SCOTT is Senior"], ["KING is Senior"], ["FORD is Senior"]] },
        { question: "Use cursor FOR LOOP and calculate bonus (10% of salary).", query: "BEGIN \n  FOR r IN (SELECT ENAME, SAL FROM EMP) LOOP \n    DBMS_OUTPUT.PUT_LINE(r.ENAME || ' Bonus: ' || (r.SAL * 0.1)); \n  END LOOP; \nEND;", columns: ["Output_Log"], rows: [["SMITH Bonus: 80"], ["KING Bonus: 500"]] },
        { question: "Use parameterized cursor and loop through multiple departments.", query: "BEGIN \n  FOR d IN 10..30 LOOP \n    IF d IN (10, 20, 30) THEN \n       DBMS_OUTPUT.PUT_LINE('--- Dept ' || d || ' ---'); \n       FOR r IN (SELECT ENAME FROM EMP WHERE DEPTNO = d) LOOP \n         DBMS_OUTPUT.PUT_LINE(r.ENAME); \n       END LOOP; \n    END IF; \n  END LOOP; \nEND;", columns: ["Output_Log"], rows: [["--- Dept 10 ---"], ["CLARK"], ["KING"], ["--- Dept 20 ---"], ["SMITH"]] },
        { question: "Display top 3 highest paid employees using cursor.", query: "DECLARE \n  CURSOR c_top IS SELECT ENAME, SAL FROM EMP ORDER BY SAL DESC; \n  v_r c_top%ROWTYPE; \nBEGIN \n  OPEN c_top; \n  FOR i IN 1..3 LOOP \n    FETCH c_top INTO v_r; \n    DBMS_OUTPUT.PUT_LINE(i || '. ' || v_r.ENAME || ' (' || v_r.SAL || ')'); \n  END LOOP; \n  CLOSE c_top; \nEND;", columns: ["Output_Log"], rows: [["1. KING (5000)"], ["2. FORD (3000)"], ["3. SCOTT (3000)"]] },
        { question: "Simulate pagination (fetch rows 5 to 8 using cursor).", query: "DECLARE \n  CURSOR c_p IS SELECT ENAME FROM EMP; \n  v_n EMP.ENAME%TYPE; \nBEGIN \n  OPEN c_p; \n  FOR i IN 1..8 LOOP \n    FETCH c_p INTO v_n; \n    IF i >= 5 THEN DBMS_OUTPUT.PUT_LINE(v_n); END IF; \n  END LOOP; \n  CLOSE c_p; \nEND;", columns: ["Page_Results"], rows: [["MARTIN"], ["BLAKE"], ["CLARK"], ["SCOTT"]] },
        { question: "Copy employee data into another table using cursor.", query: "BEGIN \n  FOR r IN (SELECT * FROM EMP WHERE DEPTNO = 30) LOOP \n    INSERT INTO EMP_BACKUP VALUES r; \n  END LOOP; \n  DBMS_OUTPUT.PUT_LINE('Data Copied'); \nEND;", columns: ["Status"], rows: [["Data Copied"]] },
        { question: "Display department-wise employee count using cursor.", query: "DECLARE \n  CURSOR c_group IS SELECT DEPTNO, COUNT(*) AS CNT FROM EMP GROUP BY DEPTNO; \nBEGIN \n  FOR r IN c_group LOOP \n    DBMS_OUTPUT.PUT_LINE('Dept ' || r.DEPTNO || ': ' || r.CNT); \n  END LOOP; \nEND;", columns: ["Output_Log"], rows: [["Dept 10: 3"], ["Dept 20: 5"], ["Dept 30: 6"]] },
        { question: "Process increments based on job: MANAGER (15%), CLERK (10%), Others (5%).", query: "DECLARE \n  CURSOR c_inc IS SELECT EMPNO, JOB, SAL FROM EMP FOR UPDATE; \n  v_p NUMBER; \nBEGIN \n  FOR r IN c_inc LOOP \n    IF r.JOB = 'MANAGER' THEN v_p := 1.15; \n    ELSIF r.JOB = 'CLERK' THEN v_p := 1.10; \n    ELSE v_p := 1.05; END IF; \n    UPDATE EMP SET SAL = SAL * v_p WHERE CURRENT OF c_inc; \n  END LOOP; \nEND;", columns: ["Status"], rows: [["Variable Increments Applied"]] },
        { question: "Update and display employee data using updatable cursor.", query: "DECLARE \n  CURSOR c_disp IS SELECT ENAME, SAL FROM EMP FOR UPDATE; \nBEGIN \n  FOR r IN c_disp LOOP \n    UPDATE EMP SET SAL = SAL + 50 WHERE CURRENT OF c_disp; \n    DBMS_OUTPUT.PUT_LINE(r.ENAME || ' new sal: ' || (r.SAL + 50)); \n  END LOOP; \nEND;", columns: ["Output_Log"], rows: [["SMITH new sal: 850"], ["KING new sal: 5050"]] }
    ],
    "plsql_subprograms": [
        { question: "Stored procedure to display 'Hello Oracle'.", query: "CREATE OR REPLACE PROCEDURE hello_proc AS \nBEGIN \n  DBMS_OUTPUT.PUT_LINE('Hello Oracle'); \nEND; \n/ \nEXEC hello_proc;", columns: ["Output_Log"], rows: [["Hello Oracle"]] },
        { question: "Procedure to display employee name for a given empno.", query: "CREATE OR REPLACE PROCEDURE get_name(p_id NUMBER) AS \n  v_name VARCHAR2(20); \nBEGIN \n  SELECT ENAME INTO v_name FROM EMP WHERE EMPNO = p_id; \n  DBMS_OUTPUT.PUT_LINE('Name: ' || v_name); \nEND; \n/ \nEXEC get_name(7839);", columns: ["Output_Log"], rows: [["Name: KING"]] },
        { question: "Procedure to print salary of an employee.", query: "CREATE OR REPLACE PROCEDURE get_sal(p_id NUMBER) AS \n  v_s NUMBER; \nBEGIN \n  SELECT SAL INTO v_s FROM EMP WHERE EMPNO = p_id; \n  DBMS_OUTPUT.PUT_LINE('Salary: ' || v_s); \nEND; \n/ \nEXEC get_sal(7369);", columns: ["Output_Log"], rows: [["Salary: 800"]] },
        { question: "Procedure to display all employees using cursor.", query: "CREATE OR REPLACE PROCEDURE show_all AS \nBEGIN \n  FOR r IN (SELECT ENAME FROM EMP) LOOP \n    DBMS_OUTPUT.PUT_LINE(r.ENAME); \n  END LOOP; \nEND; \n/ \nEXEC show_all;", columns: ["Output_Log"], rows: [["SMITH"], ["ALLEN"], ["WARD"]] },
        { question: "Procedure with IN parameter (deptno -> employees of department).", query: "CREATE OR REPLACE PROCEDURE dept_emps(p_dept NUMBER) AS \nBEGIN \n  FOR r IN (SELECT ENAME FROM EMP WHERE DEPTNO = p_dept) LOOP \n    DBMS_OUTPUT.PUT_LINE(r.ENAME); \n  END LOOP; \nEND; \n/ \nEXEC dept_emps(10);", columns: ["Output_Log"], rows: [["CLARK"], ["KING"], ["MILLER"]] },
        { question: "Procedure with OUT parameter (return employee salary).", query: "CREATE OR REPLACE PROCEDURE sal_out(p_id IN NUMBER, p_sal OUT NUMBER) AS \nBEGIN \n  SELECT SAL INTO p_sal FROM EMP WHERE EMPNO = p_id; \nEND; \n/ \n-- Call logic shown in logs", columns: ["Variable_Returned"], rows: [[5000]] },
        { question: "Procedure with IN OUT parameter (update & return salary).", query: "CREATE OR REPLACE PROCEDURE raise_sal(p_sal IN OUT NUMBER) AS \nBEGIN \n  p_sal := p_sal + 500; \nEND; \n/ \n-- Logic: Value 1000 becomes 1500", columns: ["Final_Value"], rows: [[1500]] },
        { question: "Procedure to insert new employee record.", query: "CREATE OR REPLACE PROCEDURE add_emp(p_id NUMBER, p_name VARCHAR2) AS \nBEGIN \n  INSERT INTO EMP (EMPNO, ENAME) VALUES (p_id, p_name); \n  COMMIT; \nEND; \n/ \nEXEC add_emp(9002, 'RAHUL');", columns: ["Status"], rows: [["Insert Successful"]] },
        { question: "Procedure to update salary based on empno.", query: "CREATE OR REPLACE PROCEDURE upd_sal(p_id NUMBER, p_amt NUMBER) AS \nBEGIN \n  UPDATE EMP SET SAL = p_amt WHERE EMPNO = p_id; \nEND; \n/ \nEXEC upd_sal(7369, 900);", columns: ["Status"], rows: [["Update Successful"]] },
        { question: "Procedure to delete employee record.", query: "CREATE OR REPLACE PROCEDURE del_emp(p_id NUMBER) AS \nBEGIN \n  DELETE FROM EMP WHERE EMPNO = p_id; \nEND; \n/ \nEXEC del_emp(9002);", columns: ["Status"], rows: [["Delete Successful"]] },
        { question: "Function to return square of a number.", query: "CREATE OR REPLACE FUNCTION get_sq(n NUMBER) RETURN NUMBER AS \nBEGIN \n  RETURN n * n; \nEND; \n/ \nSELECT get_sq(5) FROM DUAL;", columns: ["Result"], rows: [[25]] },
        { question: "Function to return salary based on empno.", query: "CREATE OR REPLACE FUNCTION find_sal(p_id NUMBER) RETURN NUMBER AS \n  v_s NUMBER; \nBEGIN \n  SELECT SAL INTO v_s FROM EMP WHERE EMPNO = p_id; \n  RETURN v_s; \nEND; \n/ \nSELECT find_sal(7839) FROM DUAL;", columns: ["Salary"], rows: [[5000]] },
        { question: "Function to return total number of employees.", query: "CREATE OR REPLACE FUNCTION emp_count RETURN NUMBER AS \n  v_c NUMBER; \nBEGIN \n  SELECT COUNT(*) INTO v_c FROM EMP; \n  RETURN v_c; \nEND; \n/ \nSELECT emp_count() FROM DUAL;", columns: ["Total"], rows: [[14]] },
        { question: "Function to return department name based on deptno.", query: "CREATE OR REPLACE FUNCTION get_dname(p_d NUMBER) RETURN VARCHAR2 AS \n  v_n VARCHAR2(20); \nBEGIN \n  SELECT DNAME INTO v_n FROM DEPT WHERE DEPTNO = p_d; \n  RETURN v_n; \nEND; \n/ \nSELECT get_dname(10) FROM DUAL;", columns: ["DNAME"], rows: [["ACCOUNTING"]] },
        { question: "Function to calculate bonus (10% of salary).", query: "CREATE OR REPLACE FUNCTION calc_bonus(p_s NUMBER) RETURN NUMBER AS \nBEGIN \n  RETURN p_s * 0.10; \nEND; \n/ \nSELECT calc_bonus(3000) FROM DUAL;", columns: ["Bonus"], rows: [[300]] },
        { question: "Function to return grade based on salary.", query: "CREATE OR REPLACE FUNCTION get_grade(p_s NUMBER) RETURN CHAR AS \nBEGIN \n  IF p_s > 3000 THEN RETURN 'A'; ELSE RETURN 'B'; END IF; \nEND; \n/ \nSELECT get_grade(5000) FROM DUAL;", columns: ["Grade"], rows: [["A"]] },
        { question: "Function to return annual salary.", query: "CREATE OR REPLACE FUNCTION ann_sal(p_s NUMBER) RETURN NUMBER AS \nBEGIN \n  RETURN p_s * 12; \nEND; \n/ \nSELECT ann_sal(800) FROM DUAL;", columns: ["Annual"], rows: [[9600]] },
        { question: "Function to return employee experience in years.", query: "CREATE OR REPLACE FUNCTION get_exp(p_id NUMBER) RETURN NUMBER AS \n  v_y NUMBER; \nBEGIN \n  SELECT ROUND(MONTHS_BETWEEN(SYSDATE, HIREDATE)/12) INTO v_y FROM EMP WHERE EMPNO = p_id; \n  RETURN v_y; \nEND; \n/ \nSELECT get_exp(7369) FROM DUAL;", columns: ["Years"], rows: [[45]] },
        { question: "Procedure calling function to calculate bonus.", query: "CREATE OR REPLACE PROCEDURE show_bonus(p_id NUMBER) AS \n  v_s NUMBER; v_b NUMBER; \nBEGIN \n  SELECT SAL INTO v_s FROM EMP WHERE EMPNO = p_id; \n  v_b := calc_bonus(v_s); \n  DBMS_OUTPUT.PUT_LINE('Bonus is: ' || v_b); \nEND;", columns: ["Output_Log"], rows: [["Bonus is: 500"]] },
        { question: "Procedure to display top 5 highest paid employees.", query: "CREATE OR REPLACE PROCEDURE top_5 AS \nBEGIN \n  FOR r IN (SELECT ENAME, SAL FROM (SELECT * FROM EMP ORDER BY SAL DESC) WHERE ROWNUM <= 5) LOOP \n    DBMS_OUTPUT.PUT_LINE(r.ENAME || ': ' || r.SAL); \n  END LOOP; \nEND;", columns: ["Output_Log"], rows: [["KING: 5000"], ["FORD: 3000"], ["SCOTT: 3000"]] },
        { question: "Procedure to implement transaction (COMMIT/ROLLBACK).", query: "CREATE OR REPLACE PROCEDURE safe_transfer(p_id NUMBER, p_new_d NUMBER) AS \nBEGIN \n  UPDATE EMP SET DEPTNO = p_new_d WHERE EMPNO = p_id; \n  IF SQL%FOUND THEN COMMIT; ELSE ROLLBACK; END IF; \nEND;", columns: ["Status"], rows: [["Transaction Processed"]] },
        { question: "Function returning department-wise total salary.", query: "CREATE OR REPLACE FUNCTION dept_sum(p_d NUMBER) RETURN NUMBER AS \n  v_t NUMBER; \nBEGIN \n  SELECT SUM(SAL) INTO v_t FROM EMP WHERE DEPTNO = p_d; \n  RETURN v_t; \nEND; \n/ \nSELECT dept_sum(20) FROM DUAL;", columns: ["Total_Salary"], rows: [[10875]] }
    ],
    "plsql_packages": [
        { question: "Write a package specification and body to display 'Hello Oracle'.", query: "CREATE OR REPLACE PACKAGE hello_pkg AS \n  PROCEDURE say_hello; \nEND hello_pkg; \n/ \nCREATE OR REPLACE PACKAGE BODY hello_pkg AS \n  PROCEDURE say_hello AS \n  BEGIN DBMS_OUTPUT.PUT_LINE('Hello Oracle'); END; \nEND hello_pkg; \n/ \nEXEC hello_pkg.say_hello;", columns: ["Output_Log"], rows: [["Hello Oracle"]] },
        { question: "Create a package with one procedure to display employee details.", query: "CREATE OR REPLACE PACKAGE emp_pkg AS \n  PROCEDURE show_emp(p_id NUMBER); \nEND; \n/ \nCREATE OR REPLACE PACKAGE BODY emp_pkg AS \n  PROCEDURE show_emp(p_id NUMBER) IS \n    v_n VARCHAR2(20); \n  BEGIN \n    SELECT ENAME INTO v_n FROM EMP WHERE EMPNO = p_id; \n    DBMS_OUTPUT.PUT_LINE('Employee: ' || v_n); \n  END; \nEND; \n/ \nEXEC emp_pkg.show_emp(7839);", columns: ["Output"], rows: [["Employee: KING"]] },
        { question: "Create a package containing a function to return square of a number.", query: "CREATE OR REPLACE PACKAGE math_pkg AS \n  FUNCTION get_sq(n NUMBER) RETURN NUMBER; \nEND; \n/ \nCREATE OR REPLACE PACKAGE BODY math_pkg AS \n  FUNCTION get_sq(n NUMBER) RETURN NUMBER IS BEGIN RETURN n*n; END; \nEND; \n/ \nSELECT math_pkg.get_sq(5) FROM DUAL;", columns: ["Result"], rows: [[25]] },
        { question: "Write a package with both procedure and function.", query: "CREATE OR REPLACE PACKAGE tool_pkg AS \n  PROCEDURE msg(t TEXT); \n  FUNCTION get_tax(s NUMBER) RETURN NUMBER; \nEND;", columns: ["Status"], rows: [["Package Specification Created"]] },
        { question: "Create a package to group employee-related operations (Hire/Fire).", query: "CREATE OR REPLACE PACKAGE hr_ops AS \n  PROCEDURE hire(id NUMBER, name VARCHAR2); \n  PROCEDURE fire(id NUMBER); \nEND;", columns: ["Status"], rows: [["HR Package Ready"]] },
        { question: "Create a package with a global variable and display its value.", query: "CREATE OR REPLACE PACKAGE glob_pkg AS \n  g_val NUMBER := 100; \nEND; \n/ \nBEGIN DBMS_OUTPUT.PUT_LINE(glob_pkg.g_val); END;", columns: ["Output"], rows: [[100]] },
        { question: "Write a package to store company name as constant and display it.", query: "CREATE OR REPLACE PACKAGE co_pkg AS \n  c_name CONSTANT VARCHAR2(20) := 'Oracle Corp'; \nEND; \n/ \nBEGIN DBMS_OUTPUT.PUT_LINE(co_pkg.c_name); END;", columns: ["Output"], rows: [["Oracle Corp"]] },
        { question: "Create a package that uses a variable to count number of procedure calls.", query: "CREATE OR REPLACE PACKAGE count_pkg AS \n  v_count NUMBER := 0; \n  PROCEDURE hit; \nEND; \n/ \nCREATE OR REPLACE PACKAGE BODY count_pkg AS \n  PROCEDURE hit IS BEGIN v_count := v_count + 1; END; \nEND;", columns: ["Status"], rows: [["Counter Initialized"]] },
        { question: "Write a package with a global variable used in multiple procedures.", query: "CREATE OR REPLACE PACKAGE session_pkg AS \n  user_id NUMBER; \n  PROCEDURE set_user(id NUMBER); \n  PROCEDURE show_user; \nEND;", columns: ["Status"], rows: [["Session Package Ready"]] },
        { question: "Create a package procedure to fetch employee details using empno.", query: "CREATE OR REPLACE PACKAGE emp_query AS \n  PROCEDURE get_info(p_id NUMBER); \nEND; \n/ \nEXEC emp_query.get_info(7839);", columns: ["Output"], rows: [["Name: KING"]] },
        { question: "Create a package procedure to insert employee record.", query: "CREATE OR REPLACE PACKAGE ins_pkg AS \n  PROCEDURE new_emp(id NUMBER, n VARCHAR2); \nEND;", columns: ["Status"], rows: [["Insert Procedure Compiled"]] },
        { question: "Create a package procedure to update employee salary.", query: "CREATE OR REPLACE PACKAGE upd_pkg AS \n  PROCEDURE change_sal(id NUMBER, s NUMBER); \nEND;", columns: ["Status"], rows: [["Update Procedure Compiled"]] },
        { question: "Create a package procedure to delete employee record.", query: "CREATE OR REPLACE PACKAGE del_pkg AS \n  PROCEDURE remove_emp(id NUMBER); \nEND;", columns: ["Status"], rows: [["Delete Procedure Compiled"]] },
        { question: "Create a package procedure to increase salary of all employees by 10%.", query: "CREATE OR REPLACE PACKAGE hr_mass AS \n  PROCEDURE raise_all; \nEND;", columns: ["Status"], rows: [["Mass Update Procedure Ready"]] },
        { question: "Create a package function to return employee salary.", query: "CREATE OR REPLACE PACKAGE sal_pkg AS \n  FUNCTION fetch_sal(id NUMBER) RETURN NUMBER; \nEND;", columns: ["Status"], rows: [["Function Compiled"]] },
        { question: "Create a package function to return total employees.", query: "CREATE OR REPLACE PACKAGE stat_pkg AS \n  FUNCTION total RETURN NUMBER; \nEND;", columns: ["Status"], rows: [["Total Function Compiled"]] },
        { question: "Create a package function to return maximum salary.", query: "CREATE OR REPLACE PACKAGE sal_max_pkg AS \n  FUNCTION get_max RETURN NUMBER; \nEND;", columns: ["Status"], rows: [["Max Function Compiled"]] },
        { question: "Create a package function to calculate bonus (10% of salary).", query: "CREATE OR REPLACE PACKAGE bonus_pkg AS \n  FUNCTION calc(id NUMBER) RETURN NUMBER; \nEND;", columns: ["Status"], rows: [["Bonus Logic Ready"]] },
        { question: "Create a package that uses cursor to display all employees.", query: "CREATE OR REPLACE PACKAGE curs_pkg AS \n  PROCEDURE list_all; \nEND;", columns: ["Output"], rows: [["SMITH"], ["ALLEN"], ["WARD"]] },
        { question: "Create a package with parameterized cursor to fetch employees by department.", query: "CREATE OR REPLACE PACKAGE dept_curs_pkg AS \n  PROCEDURE list_by_dept(dno NUMBER); \nEND;", columns: ["Status"], rows: [["Parameterized Cursor Ready"]] },
        { question: "Create a package procedure that loops through employees using cursor FOR LOOP.", query: "CREATE OR REPLACE PACKAGE for_loop_pkg AS \n  PROCEDURE run_loop; \nEND;", columns: ["Status"], rows: [["Implicit Loop Ready"]] },
        { question: "Create a package with private procedure (only in body).", query: "CREATE OR REPLACE PACKAGE body priv_pkg AS \n  PROCEDURE log_internally IS BEGIN ... END; \n  PROCEDURE public_task IS BEGIN log_internally; END; \nEND;", columns: ["Status"], rows: [["Private Procedure Encapsulated"]] },
        { question: "Create a package with overloaded procedures (same name, different params).", query: "CREATE OR REPLACE PACKAGE over_pkg AS \n  PROCEDURE find(id NUMBER); \n  PROCEDURE find(name VARCHAR2); \nEND;", columns: ["Status"], rows: [["Overloading Specification Created"]] },
        { question: "Create a package with function overloading.", query: "CREATE OR REPLACE PACKAGE over_func_pkg AS \n  FUNCTION calc(a NUMBER) RETURN NUMBER; \n  FUNCTION calc(a NUMBER, b NUMBER) RETURN NUMBER; \nEND;", columns: ["Status"], rows: [["Function Overloading Ready"]] },
        { question: "Create a package to maintain employee audit logs.", query: "CREATE OR REPLACE PACKAGE audit_pkg AS \n  PROCEDURE log_action(id NUMBER, act VARCHAR2); \nEND;", columns: ["Status"], rows: [["Audit System Ready"]] },
        { question: "Create a package with initialization block (executed once).", query: "CREATE OR REPLACE PACKAGE BODY init_pkg AS \nBEGIN \n  -- Runs once per session \n  v_start_time := SYSTIMESTAMP; \nEND;", columns: ["Status"], rows: [["Init Block Defined"]] },
        { question: "Create a package to perform all CRUD operations on EMP table.", query: "CREATE OR REPLACE PACKAGE full_crud_pkg AS \n  PROCEDURE create_e... PROCEDURE read_e... PROCEDURE upd_e... PROCEDURE del_e... \nEND;", columns: ["Status"], rows: [["Full CRUD Suite Ready"]] },
        { question: "Create a package that calculates salary, bonus, and tax using multiple functions.", query: "CREATE OR REPLACE PACKAGE finance_suite AS \n  FUNCTION get_sal... FUNCTION get_bonus... FUNCTION get_tax... \nEND;", columns: ["Status"], rows: [["Finance Suite Ready"]] },
        { question: "Create a package to validate employee data before insert/update.", query: "CREATE OR REPLACE PACKAGE val_pkg AS \n  FUNCTION is_valid(id NUMBER) RETURN BOOLEAN; \nEND;", columns: ["Status"], rows: [["Validation Logic Compiled"]] },
        { question: "Create a package that interacts with multiple tables (EMP, DEPT).", query: "CREATE OR REPLACE PACKAGE multi_tab_pkg AS \n  PROCEDURE get_emp_dept(id NUMBER); \nEND;", columns: ["Status"], rows: [["Joint Logic Compiled"]] },
        { question: "Create a package to simulate banking operations (deposit, withdraw, balance).", query: "CREATE OR REPLACE PACKAGE bank_pkg AS \n  PROCEDURE dep(a NUMBER); \n  PROCEDURE draw(a NUMBER); \nEND;", columns: ["Status"], rows: [["Banking Logic Compiled"]] },
        { question: "Create a package that uses exception handling for all operations.", query: "CREATE OR REPLACE PACKAGE safe_pkg AS \n  PROCEDURE execute_safely; \nEND;", columns: ["Status"], rows: [["Error Handling Integrated"]] }
    ],
    "plsql_exceptions": [
        { question: "Handle NO_DATA_FOUND exception while fetching employee details.", query: "DECLARE \n  v_n VARCHAR2(20); \nBEGIN \n  SELECT ENAME INTO v_n FROM EMP WHERE EMPNO = 9999; \nEXCEPTION \n  WHEN NO_DATA_FOUND THEN \n    DBMS_OUTPUT.PUT_LINE('Error: Employee ID does not exist.'); \nEND;", columns: ["Output"], rows: [["Error: Employee ID does not exist."]] },
        { question: "Handle TOO_MANY_ROWS exception.", query: "DECLARE \n  v_n VARCHAR2(20); \nBEGIN \n  SELECT ENAME INTO v_n FROM EMP; \nEXCEPTION \n  WHEN TOO_MANY_ROWS THEN \n    DBMS_OUTPUT.PUT_LINE('Error: Multiple rows returned.'); \nEND;", columns: ["Output"], rows: [["Error: Multiple rows returned."]] },
        { question: "Handle ZERO_DIVIDE exception.", query: "DECLARE \n  n NUMBER; \nBEGIN \n  n := 10 / 0; \nEXCEPTION \n  WHEN ZERO_DIVIDE THEN \n    DBMS_OUTPUT.PUT_LINE('Error: Cannot divide by zero.'); \nEND;", columns: ["Output"], rows: [["Error: Cannot divide by zero."]] },
        { question: "Handle VALUE_ERROR exception.", query: "DECLARE \n  v_str VARCHAR2(1); \nBEGIN \n  v_str := 'ABC'; \nEXCEPTION \n  WHEN VALUE_ERROR THEN \n    DBMS_OUTPUT.PUT_LINE('Error: Size or type mismatch.'); \nEND;", columns: ["Output"], rows: [["Error: Size or type mismatch."]] },
        { question: "Use a generic WHEN OTHERS exception handler.", query: "BEGIN \n  RAISE PROGRAM_ERROR; \nEXCEPTION \n  WHEN OTHERS THEN \n    DBMS_OUTPUT.PUT_LINE('An unexpected error occurred.'); \nEND;", columns: ["Output"], rows: [["An unexpected error occurred."]] },
        { question: "Display error code and message using SQLCODE and SQLERRM.", query: "BEGIN \n  INSERT INTO EMP (EMPNO) VALUES (7369); \nEXCEPTION \n  WHEN OTHERS THEN \n    DBMS_OUTPUT.PUT_LINE('Code: ' || SQLCODE); \n    DBMS_OUTPUT.PUT_LINE('Msg: ' || SQLERRM); \nEND;", columns: ["Log"], rows: [["Code: -1"], ["Msg: ORA-00001: unique constraint violated"]] },
        { question: "Capture and display error details when division by zero occurs.", query: "DECLARE \n  n NUMBER; \nBEGIN \n  n := 5/0; \nEXCEPTION \n  WHEN ZERO_DIVIDE THEN \n    DBMS_OUTPUT.PUT_LINE('Captured: ' || SQLERRM); \nEND;", columns: ["Output"], rows: [["Captured: ORA-01476: divisor is equal to zero"]] },
        { question: "Log exception message into a variable and display it.", query: "DECLARE \n  v_msg VARCHAR2(200); \nBEGIN \n  RAISE NO_DATA_FOUND; \nEXCEPTION \n  WHEN OTHERS THEN \n    v_msg := SQLERRM; \n    DBMS_OUTPUT.PUT_LINE('Logged: ' || v_msg); \nEND;", columns: ["Log"], rows: [["Logged: ORA-01403: no data found"]] },
        { question: "Raise an error if salary < 2000 using RAISE_APPLICATION_ERROR.", query: "DECLARE \n  v_sal NUMBER := 1500; \nBEGIN \n  IF v_sal < 2000 THEN \n    RAISE_APPLICATION_ERROR(-20001, 'Salary too low.'); \n  END IF; \nEND;", columns: ["Error"], rows: [["ORA-20001: Salary too low."]] },
        { question: "Validate employee age and raise custom error if age < 18.", query: "DECLARE \n  v_age NUMBER := 16; \nBEGIN \n  IF v_age < 18 THEN \n    RAISE_APPLICATION_ERROR(-20002, 'Underage Hiring Error.'); \n  END IF; \nEND;", columns: ["Error"], rows: [["ORA-20002: Underage Hiring Error."]] },
        { question: "Restrict update operation using RAISE_APPLICATION_ERROR.", query: "BEGIN \n  IF TO_CHAR(SYSDATE, 'DY') = 'SUN' THEN \n    RAISE_APPLICATION_ERROR(-20003, 'No updates on Sundays.'); \n  END IF; \nEND;", columns: ["Status"], rows: [["Operation Restricted"]] },
        { question: "Raise error when invalid department number is entered.", query: "DECLARE \n  v_d NUMBER := 99; \nBEGIN \n  IF v_d NOT IN (10, 20, 30) THEN \n    RAISE_APPLICATION_ERROR(-20004, 'Invalid Dept.'); \n  END IF; \nEND;", columns: ["Error"], rows: [["ORA-20004: Invalid Dept."]] },
        { question: "Declare and handle a user-defined exception.", query: "DECLARE \n  e_my_err EXCEPTION; \nBEGIN \n  RAISE e_my_err; \nEXCEPTION \n  WHEN e_my_err THEN DBMS_OUTPUT.PUT_LINE('Custom Exception Handled'); \nEND;", columns: ["Output"], rows: [["Custom Exception Handled"]] },
        { question: "Raise custom exception when salary exceeds limit.", query: "DECLARE \n  e_limit EXCEPTION; v_s NUMBER := 6000; \nBEGIN \n  IF v_s > 5000 THEN RAISE e_limit; END IF; \nEXCEPTION \n  WHEN e_limit THEN DBMS_OUTPUT.PUT_LINE('Salary Limit Exceeded'); \nEND;", columns: ["Output"], rows: [["Salary Limit Exceeded"]] },
        { question: "Validate input and raise user-defined exception for invalid data.", query: "DECLARE \n  e_bad_data EXCEPTION; v_in VARCHAR2(10) := NULL; \nBEGIN \n  IF v_in IS NULL THEN RAISE e_bad_data; END IF; \nEXCEPTION \n  WHEN e_bad_data THEN DBMS_OUTPUT.PUT_LINE('Invalid Input Data'); \nEND;", columns: ["Output"], rows: [["Invalid Input Data"]] },
        { question: "Handle multiple user-defined exceptions.", query: "DECLARE \n  e1 EXCEPTION; e2 EXCEPTION; \nBEGIN \n  RAISE e2; \nEXCEPTION \n  WHEN e1 THEN DBMS_OUTPUT.PUT_LINE('E1'); \n  WHEN e2 THEN DBMS_OUTPUT.PUT_LINE('E2'); \nEND;", columns: ["Output"], rows: [["E2"]] },
        { question: "Catch an exception and re-raise it using RAISE.", query: "BEGIN \n  BEGIN \n    RAISE NO_DATA_FOUND; \n  EXCEPTION \n    WHEN NO_DATA_FOUND THEN \n      DBMS_OUTPUT.PUT_LINE('Logged'); RAISE; \n  END; \nEXCEPTION \n  WHEN NO_DATA_FOUND THEN DBMS_OUTPUT.PUT_LINE('Re-raised'); \nEND;", columns: ["Log"], rows: [["Logged"], ["Re-raised"]] },
        { question: "Handle exception in inner block and re-raise to outer block.", query: "BEGIN \n  DECLARE e_inner EXCEPTION; BEGIN RAISE e_inner; \n  EXCEPTION WHEN e_inner THEN RAISE; END; \nEXCEPTION WHEN OTHERS THEN DBMS_OUTPUT.PUT_LINE('Caught in Outer'); \nEND;", columns: ["Output"], rows: [["Caught in Outer"]] },
        { question: "Log error and then re-raise it.", query: "BEGIN \n  INSERT INTO EMP (EMPNO) VALUES (NULL); \nEXCEPTION \n  WHEN OTHERS THEN \n    DBMS_OUTPUT.PUT_LINE('Logging...'); RAISE; \nEND;", columns: ["Log"], rows: [["Logging..."], ["ORA-01400: cannot insert NULL"]] },
        { question: "Fetch employee details and handle all possible exceptions.", query: "DECLARE \n  v_n VARCHAR2(20); \nBEGIN \n  SELECT ENAME INTO v_n FROM EMP WHERE EMPNO = 1; \nEXCEPTION \n  WHEN NO_DATA_FOUND THEN DBMS_OUTPUT.PUT_LINE('No Data'); \n  WHEN TOO_MANY_ROWS THEN DBMS_OUTPUT.PUT_LINE('Too Many'); \n  WHEN OTHERS THEN DBMS_OUTPUT.PUT_LINE('Error'); \nEND;", columns: ["Result"], rows: [["No Data"]] },
        { question: "Use user-defined exception with RAISE_APPLICATION_ERROR together.", query: "DECLARE \n  e_test EXCEPTION; \nBEGIN \n  RAISE e_test; \nEXCEPTION \n  WHEN e_test THEN RAISE_APPLICATION_ERROR(-20005, 'App Error'); \nEND;", columns: ["Error"], rows: [["ORA-20005: App Error"]] },
        { question: "Validate salary and raise appropriate exception.", query: "DECLARE \n  v_s NUMBER := 100; \nBEGIN \n  IF v_s < 500 THEN RAISE_APPLICATION_ERROR(-20006, 'Low Pay'); END IF; \nEND;", columns: ["Output"], rows: [["ORA-20006: Low Pay"]] },
        { question: "Perform division and handle exception using SQLCODE & SQLERRM.", query: "DECLARE n NUMBER; BEGIN n := 1/0; EXCEPTION WHEN OTHERS THEN \n  DBMS_OUTPUT.PUT_LINE(SQLCODE || ': ' || SQLERRM); END;", columns: ["Output"], rows: [["-1476: ORA-01476: divisor is equal to zero"]] },
        { question: "Simulate bank withdrawal with exception handling.", query: "DECLARE \n  bal NUMBER := 500; draw NUMBER := 1000; e_ins EXCEPTION; \nBEGIN \n  IF draw > bal THEN RAISE e_ins; END IF; \nEXCEPTION \n  WHEN e_ins THEN DBMS_OUTPUT.PUT_LINE('Insufficient Funds'); \nEND;", columns: ["Status"], rows: [["Insufficient Funds"]] },
        { question: "Validate employee data and raise different exceptions for different errors.", query: "DECLARE v_e NUMBER := 7369; v_d NUMBER := 99; \nBEGIN \n  IF v_d = 99 THEN RAISE_APPLICATION_ERROR(-20007, 'Bad Dept'); END IF; \nEND;", columns: ["Log"], rows: [["ORA-20007: Bad Dept"]] },
        { question: "Log errors into a table using exception handling.", query: "BEGIN \n  UPDATE EMP SET SAL = 'X'; \nEXCEPTION \n  WHEN OTHERS THEN \n    DBMS_OUTPUT.PUT_LINE('Error Logged to Table'); \nEND;", columns: ["Status"], rows: [["Error Logged to Table"]] },
        { question: "Implement nested exception blocks with re-raise mechanism.", query: "BEGIN \n  DECLARE e EXCEPTION; BEGIN RAISE e; EXCEPTION WHEN e THEN RAISE; END; \nEXCEPTION WHEN OTHERS THEN DBMS_OUTPUT.PUT_LINE('Nested Re-raise Caught'); \nEND;", columns: ["Output"], rows: [["Nested Re-raise Caught"]] }
    ],
    "plsql_triggers": [
        {
            question: "Trigger to display a message whenever a record is inserted into EMP table.",
            query: "CREATE OR REPLACE TRIGGER emp_ins_trig \nAFTER INSERT ON EMP \nBEGIN \n  DBMS_OUTPUT.PUT_LINE('New record successfully added.'); \nEND;"
        },
        {
            question: "BEFORE INSERT trigger on EMP table.",
            query: "CREATE OR REPLACE TRIGGER emp_bef_ins \nBEFORE INSERT ON EMP \nBEGIN \n  DBMS_OUTPUT.PUT_LINE('Preparing to insert record...'); \nEND;"
        },
        {
            question: "AFTER DELETE trigger on EMP table.",
            query: "CREATE OR REPLACE TRIGGER emp_aft_del \nAFTER DELETE ON EMP \nBEGIN \n  DBMS_OUTPUT.PUT_LINE('Record has been removed.'); \nEND;"
        },
        {
            question: "BEFORE DELETE trigger to prevent deletion from EMP table.",
            query: "CREATE OR REPLACE TRIGGER emp_stop_del \nBEFORE DELETE ON EMP \nBEGIN \n  RAISE_APPLICATION_ERROR(-20001, 'Deletion is not allowed on this table.'); \nEND;"
        },
        {
            question: "AFTER UPDATE trigger to display a message when salary is updated.",
            query: "CREATE OR REPLACE TRIGGER sal_upd_trig \nAFTER UPDATE OF SAL ON EMP \nBEGIN \n  DBMS_OUTPUT.PUT_LINE('Salaries have been modified.'); \nEND;"
        },

        {
            question: "Row-level trigger to display old and new salary when salary is updated.",
            query: "CREATE OR REPLACE TRIGGER sal_diff_trig \nAFTER UPDATE OF SAL ON EMP FOR EACH ROW \nBEGIN \n  DBMS_OUTPUT.PUT_LINE('Old: ' || :OLD.SAL || ' New: ' || :NEW.SAL); \nEND;"
        },
        {
            question: "Row-level trigger to restrict salary update if new salary < old salary.",
            query: "CREATE OR REPLACE TRIGGER sal_check_trig \nBEFORE UPDATE OF SAL ON EMP FOR EACH ROW \nBEGIN \n  IF :NEW.SAL < :OLD.SAL THEN \n    RAISE_APPLICATION_ERROR(-20002, 'Salary cannot be decreased.'); \n  END IF; \nEND;"
        },
        {
            question: "BEFORE INSERT trigger to automatically set hiredate.",
            query: "CREATE OR REPLACE TRIGGER set_hire_trig \nBEFORE INSERT ON EMP FOR EACH ROW \nBEGIN \n  :NEW.HIREDATE := SYSDATE; \nEND;"
        },
        {
            question: "BEFORE UPDATE trigger to increase salary by 5%.",
            query: "CREATE OR REPLACE TRIGGER auto_raise_trig \nBEFORE UPDATE OF SAL ON EMP FOR EACH ROW \nBEGIN \n  :NEW.SAL := :NEW.SAL * 1.05; \nEND;"
        },
        {
            question: "AFTER DELETE trigger to copy deleted records into audit table.",
            query: "CREATE OR REPLACE TRIGGER emp_audit_del \nAFTER DELETE ON EMP FOR EACH ROW \nBEGIN \n  INSERT INTO EMP_BACKUP(EMPNO, ENAME) VALUES (:OLD.EMPNO, :OLD.ENAME); \nEND;"
        },
        {
            question: "Statement-level trigger to display message when any insert occurs.",
            query: "CREATE OR REPLACE TRIGGER stmt_ins_trig \nAFTER INSERT ON EMP \nBEGIN \n  DBMS_OUTPUT.PUT_LINE('One or more rows were inserted.'); \nEND;"
        },
        {
            question: "Statement-level trigger to log update operations.",
            query: "CREATE OR REPLACE TRIGGER log_upd_trig \nAFTER UPDATE ON EMP \nBEGIN \n  INSERT INTO LOG_TABLE(ACTION) VALUES ('UPDATE'); \nEND;"
        },
        {
            question: "Statement-level trigger that fires once for DELETE statement.",
            query: "CREATE OR REPLACE TRIGGER stmt_del \nBEFORE DELETE ON EMP \nBEGIN \n  DBMS_OUTPUT.PUT_LINE('Commencing bulk delete...'); \nEND;"
        },
        {
            question: "BEFORE trigger to validate salary before inserting.",
            query: "CREATE OR REPLACE TRIGGER val_sal_trig \nBEFORE INSERT ON EMP FOR EACH ROW \nBEGIN \n  IF :NEW.SAL < 500 THEN :NEW.SAL := 500; END IF; \nEND;"
        },
        {
            question: "AFTER trigger to log inserted employee records.",
            query: "CREATE OR REPLACE TRIGGER log_ins \nAFTER INSERT ON EMP FOR EACH ROW \nBEGIN \n  DBMS_OUTPUT.PUT_LINE('Inserted ID: ' || :NEW.EMPNO); \nEND;"
        },
        {
            question: "BEFORE and AFTER triggers for UPDATE operation.",
            query: "CREATE OR REPLACE TRIGGER bef_aft_upd \nBEFORE UPDATE OR AFTER UPDATE ON EMP \nBEGIN \n  IF BEFORE THEN DBMS_OUTPUT.PUT_LINE('Starting...'); \n  ELSE DBMS_OUTPUT.PUT_LINE('Done.'); END IF; \nEND;"
        },
        {
            question: "Conditional trigger that fires only when salary > 5000.",
            query: "CREATE OR REPLACE TRIGGER ceo_trig \nAFTER UPDATE ON EMP FOR EACH ROW \nWHEN (NEW.SAL > 5000) \nBEGIN \n  DBMS_OUTPUT.PUT_LINE('CEO Salary Alert'); \nEND;"
        },
        {
            question: "Trigger to allow insert only during working hours (9 AM - 5 PM).",
            query: "CREATE OR REPLACE TRIGGER work_hour_trig \nBEFORE INSERT ON EMP \nBEGIN \n  IF TO_CHAR(SYSDATE, 'HH24') NOT BETWEEN '09' AND '17' THEN \n    RAISE_APPLICATION_ERROR(-20005, 'Off-hours restricted.'); \n  END IF; \nEND;"
        },
        {
            question: "Trigger to prevent update on weekends.",
            query: "CREATE OR REPLACE TRIGGER weekend_trig \nBEFORE UPDATE ON EMP \nBEGIN \n  IF TO_CHAR(SYSDATE, 'DY') IN ('SAT', 'SUN') THEN \n    RAISE_APPLICATION_ERROR(-20006, 'No weekend updates.'); \n  END IF; \nEND;"
        },
        {
            question: "Trigger to maintain audit table for INSERT, UPDATE, DELETE.",
            query: "CREATE OR REPLACE TRIGGER emp_full_audit \nAFTER INSERT OR UPDATE OR DELETE ON EMP FOR EACH ROW \nBEGIN \n  INSERT INTO AUDIT_LOG VALUES (USER, SYSDATE); \nEND;"
        },
        {
            question: "Trigger to generate automatic employee ID.",
            query: "CREATE OR REPLACE TRIGGER auto_id_trig \nBEFORE INSERT ON EMP FOR EACH ROW \nBEGIN \n  :NEW.EMPNO := emp_seq.NEXTVAL; \nEND;"
        },
        {
            question: "Trigger to enforce referential integrity manually.",
            query: "CREATE OR REPLACE TRIGGER ref_int_trig \nBEFORE INSERT ON EMP FOR EACH ROW \nDECLARE v_cnt NUMBER; \nBEGIN \n  SELECT COUNT(*) INTO v_cnt FROM DEPT WHERE DEPTNO = :NEW.DEPTNO; \n  IF v_cnt = 0 THEN RAISE_APPLICATION_ERROR(-20007, 'Invalid Dept'); END IF; \nEND;"
        },
        {
            question: "Trigger to calculate bonus after salary update.",
            query: "CREATE OR REPLACE TRIGGER calc_bonus_trig \nAFTER UPDATE OF SAL ON EMP FOR EACH ROW \nBEGIN \n  UPDATE EMP SET COMM = :NEW.SAL * 0.1 WHERE EMPNO = :NEW.EMPNO; \nEND;"
        },
        {
            question: "Trigger to track number of rows affected.",
            query: "CREATE OR REPLACE TRIGGER row_count_trig \nAFTER UPDATE ON EMP \nBEGIN \n  DBMS_OUTPUT.PUT_LINE('Statement complete.'); \nEND;"
        },
        {
            question: "Trigger to prevent duplicate employee names.",
            query: "CREATE OR REPLACE TRIGGER unique_name_trig \nBEFORE INSERT ON EMP FOR EACH ROW \nDECLARE v_c NUMBER; \nBEGIN \n  SELECT COUNT(*) INTO v_c FROM EMP WHERE ENAME = :NEW.ENAME; \n  IF v_c > 0 THEN RAISE_APPLICATION_ERROR(-20008, 'Name exists.'); END IF; \nEND;"
        },
        {
            question: "Trigger to log user activity (who updated, when updated).",
            query: "CREATE OR REPLACE TRIGGER activity_log \nAFTER UPDATE ON EMP \nBEGIN \n  INSERT INTO ACTIVITY_TABLE VALUES (USER, SYSDATE); \nEND;"
        },
        {
            question: "Trigger to restrict salary update beyond 20%.",
            query: "CREATE OR REPLACE TRIGGER raise_limit \nBEFORE UPDATE OF SAL ON EMP FOR EACH ROW \nBEGIN \n  IF :NEW.SAL > (:OLD.SAL * 1.2) THEN \n    RAISE_APPLICATION_ERROR(-20009, 'Raise too high'); \n  END IF; \nEND;"
        },
        {
            question: "Trigger that calls a procedure from a package.",
            query: "CREATE OR REPLACE TRIGGER pkg_call_trig \nAFTER INSERT ON EMP FOR EACH ROW \nBEGIN \n  emp_pkg.audit_new(:NEW.EMPNO); \nEND;"
        },
        {
            question: "Trigger to maintain history table for salary changes.",
            query: "CREATE OR REPLACE TRIGGER sal_history_trig \nAFTER UPDATE OF SAL ON EMP FOR EACH ROW \nBEGIN \n  INSERT INTO SAL_HIST VALUES (:OLD.SAL, :NEW.SAL); \nEND;"
        },
        {
            question: "Compound trigger (advanced Oracle feature).",
            query: "CREATE OR REPLACE TRIGGER comp_trig \nFOR UPDATE OF SAL ON EMP COMPOUND TRIGGER \n  v_tot NUMBER := 0; \n  AFTER EACH ROW IS BEGIN v_tot := v_tot + :NEW.SAL; END AFTER EACH ROW; \nEND;"
        }
    ]
};
document.addEventListener('DOMContentLoaded', () => {
    if (!document.getElementById('topicsList')) return;

    const topicBtns = document.querySelectorAll('.topic-btn');
    const qListContainer = document.getElementById('qListContainer');
    const currentTopicTitle = document.getElementById('currentTopicTitle');

    const outputContent = document.getElementById('outputContent');
    const placeholderText = document.querySelector('.placeholder-text');

    const displayQ = document.getElementById('displayQ');
    const displayQuery = document.getElementById('displayQuery');
    const tableHead = document.getElementById('tableHead');
    const tableBody = document.getElementById('tableBody');

    function loadQuestions(topicKey) {
        qListContainer.innerHTML = '';
        const questions = sqlData[topicKey];


        questions.forEach((qData, index) => {
            const div = document.createElement('div');
            div.className = 'q-item';
            div.textContent = `${index + 1}. ${qData.question}`;

            div.addEventListener('click', () => {
                document.querySelectorAll('.q-item').forEach(el => el.classList.remove('active'));
                div.classList.add('active');
                showOutput(qData);
            });

            qListContainer.appendChild(div);
        });
    }

    function showOutput(data) {
        placeholderText.style.display = 'none';
        outputContent.style.display = 'block';

        displayQ.textContent = data.question;
        displayQuery.textContent = data.query;

        tableHead.innerHTML = '<tr>' + data.columns.map(col => `<th>${col}</th>`).join('') + '</tr>';

        if (data.rows.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="${data.columns.length}" style="text-align:center; opacity:0.6;">No rows selected (Empty Set)</td></tr>`;
        } else {
            tableBody.innerHTML = data.rows.map(row =>
                '<tr>' + row.map(cell => `<td>${cell === null || cell === "NULL" ? "<i>null</i>" : cell}</td>`).join('') + '</tr>'
            ).join('');
        }
    }

    topicBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            topicBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            currentTopicTitle.textContent = e.target.textContent;
            const topicKey = e.target.getAttribute('data-topic');
            loadQuestions(topicKey);

            outputContent.style.display = 'none';
            placeholderText.style.display = 'block';
        });
    });

    loadQuestions('ddl');
});