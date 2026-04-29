function revisaSudoku(matriz, i, j, limite_i, limite_j){
        let vistos = [];

        for(let k = i; k < limite_i ; k++){
            for(let l = j; l < limite_j; l++){
                let num = matriz[k][l];
                //console.log(num)
                if(vistos.includes(num)){
                    return false;
                }else{
                    if(num != "."){
                        vistos.push(num);
                    }
                }
            }
        }
        return true
    }

function revisaFilas(matriz){

    for(let i = 0; i < matriz.length; i++){
        let vistos = [];

        for(let j = 0; j < matriz[0].length; j++){
            let num = matriz[i][j];
            if(vistos.includes(num)){
                return false;
            }else{
                if(num != "."){
                    vistos.push(num);
                }
            }
        }

    }

    return true

}

function revisaColumnas(matriz){

    for(let j = 0; j < matriz[0].length; j++){
        let vistos = [];

        for(let i=0; i < matriz.length; i++){
            let num = matriz[i][j];
            if(vistos.includes(num)){
                return false;
            }else{
                if(num != "."){
                    vistos.push(num);
                }
            }
        }

    }

    return true

}

class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */


    isValidSudoku(board) {

        let result1 = Boolean;
        let result2 = Boolean;
        let result3 = Boolean;

        const startpoints = [
            [0,0],
            [0,3],
            [0,6],
            [3,0],
            [3,3],
            [3,6],
            [6,0],
            [6,3],
            [6,6]
        ]

        const endpoints = [
            [3,3],
            [3,6],
            [3,9],
            [6,3],
            [6,6],
            [6,9],
            [9,3],
            [9,6],
            [9,9]
        ]

        while(startpoints.length > 0 && result1 != false && result2 != false && result3 != false){
            
            let indicesInit = startpoints[0];
            let indicesFin = endpoints[0];
            
            result1 = revisaSudoku(board, indicesInit[0], indicesInit[1], indicesFin[0], indicesFin[1]);
            
            startpoints.shift();
            endpoints.shift();

            result2 = revisaFilas(board);
            result3 = revisaColumnas(board);
        }

        return (result1 && result2 && result3);
    }
}
