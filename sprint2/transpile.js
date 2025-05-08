const getTransponatedMatrix = (_inpitLines) => {
    const rows = Number(_inpitLines[0]);
    const cols = Number(_inpitLines[1]);
    const initMatrix = _inpitLines.slice(2).map(str =>str.split(' '));

    const result = [];

    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            console.log(result, 'result');
            
            if  (!result[j]) {
                result.push(row)
            }
            result[j][i] = initMatrix[i][j];
        }
    }

    console.log(result, 'result');
}



const input1= `4
3
1 2 3
0 2 6
7 4 1
2 7 0`.split('\n');

getTransponatedMatrix(input1);