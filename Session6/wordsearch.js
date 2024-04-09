//defining a grid
const numRows=10;
const numCols=10;
let grid=[];
function initializeGrid(){
    const alphabet='FISHFISHFISHFISHFISHFISHFI';
    for(let i=0;i<numRows;i++){
        const row=[];
        for(let j=0;j<numCols;j++){
            row.push(alphabet.charAt(Math.floor(Math.random()*alphabet.length)))
        }
        grid.push(row);
    }
    console.log(grid);
}
initializeGrid();
function searchHorizontal(word){
    for(let i=0;i<numRows;i++){
        for(let j=0;j<=numCols-word.length;j++){
            let found=true;
            for(let k=0;k<word.length;k++){
                if(grid[i][j+k]!==word[k]){
                    found=false;
                    break;
                }
            }
            if(found){
                return {start:[i,j],end:[i,j+word.length-1]}
            }
        }
    }
    return null;
}
//Write a Search Function for Vertical Search
function searchVertical(word){

}
//Write a Search Function for Digonal UP Right Search
function searchDiagonalUpRight(word){
    
}
//Write a Search Function for Digonal Down Right Search
function searchDiagonalDownRight(word){
    
}
console.log(searchHorizontal('FFF'));
