const grades = new Map([
    ['a', 4],
    ['a-', 3.7],
    ['b+', 3.3],
    ['b', 3],
    ['b-', 2.7],
    ['c+', 2.3],
    ['c', 2],
    ['c-', 1.7],
    ['d+', 1.3],
    ['d', 1],
    ['d-', 0.7],
    ['f', 0],
])

const getRes = () => {
    const tOne = document.getElementById('topic-one').value;
    const tTwo = document.getElementById('topic-two').value;
    const tThree = document.getElementById('topic-three').value;
    const tFour = document.getElementById('topic-four').value;
    const tFive = document.getElementById('topic-five').value;
    const gradeArr = [tOne, tTwo, tThree, tFour, tFive];
    const gradeMap = gradeArr.map(Number);
    const [weightMap, check] = convertGrades(gradeMap);
    if(check) {
        const gpa = calcGpa(weightMap);
        const t = createTable(gradeArr, gpa);
        document.getElementById('res-nine').innerHTML = t;
    } else {
        alert('Please Enter a Number: 0-100');
    }
}

const convertGrades = (gm) => {
    let allNums = true;
    const wMap = gm.map((val) => {
        let res = 0;
        allNums = (100 >= Number(val) && Number(val) >= 0) ? allNums : false;
        if(allNums){
            if(val >= 93) {
                res = grades.get('a');
            } else if (92 >= val && val >= 90) {
                res = grades.get('a-');
            } else if (89 >= val && val >= 87) {
                res = grades.get('b+');
            } else if (86 >= val && val >= 83) {
                res = grades.get('b');
            } else if (82 >= val && val >= 80) {
                res = grades.get('b-');
            } else if (79 >= val && val >= 77) {
                res = grades.get('c+');
            } else if (76 >= val && val >= 73) {
                res = grades.get('c');
            } else if (72 >= val && val >= 70) {
                res = grades.get('c-');
            } else if (69 >= val && val >= 67) {
                res = grades.get('d+');
            } else if (66 >= val && val >= 63) {
                res = grades.get('d');
            } else if (62 >= val && val >= 60) {
                res = grades.get('d-');
            } else {
                res = grades.get('f');
            }
        }
        return res;
    });

    return [wMap, allNums];
}

const calcGpa = (wm) => {
    // assume 4 credits per topic = 20 credits
    const val = wm.reduce((total, grade) => {
        return total += grade;
    }, 0.0);
    return ((val * 4) / 20).toFixed(2);
}

const createTable = (gArr, oGpa) => {
    const table = `
        <div
            class="table-responsive"
        >
            <table
                class="table table-primary"
            >
                <thead>
                    <tr>
                        <th scope="col">Subject</th>
                        <th scope="col">Marks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="">
                        <td scope="col">Topic One</td>
                        <td>${gArr[0]}</td>
                    </tr>
                    <tr class="">
                        <td scope="col">Topic Two</td>
                        <td>${gArr[1]}</td>
                    </tr>
                    <tr class="">
                    <td scope="col">Topic Two</td>
                        <td>${gArr[2]}</td>
                    </tr>
                    <tr class="">
                    <td scope="col">Topic Two</td>
                        <td>${gArr[3]}</td>
                    </tr>
                    <tr class="">
                    <td scope="col">Topic Two</td>
                        <td>${gArr[4]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="container">
            <h2>Overall GPA: ${oGpa}</h2>
        </div>
    `;

    return table;
}