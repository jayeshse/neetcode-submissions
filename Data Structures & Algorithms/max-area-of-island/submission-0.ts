class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid: number[][]): number {
        const directions = [
            [1,0],
            [0,1],
            [-1,0],
            [0,-1]
        ]

        const rows = grid.length,
            columns = grid[0].length;
        
        let area = 0

        const dfs = (row,column) => {
            if (row < 0 || column <0 || row >= rows || column >= columns || grid[row][column] === 0){
                return 0
            }

            let res = 1 

            grid[row][column] = 0;
            for (const [dr, dc] of directions){
                res += dfs(row+ dr, column+ dc)
            }

            return res
        }

        for (let r=0; r<rows; r++){
            for (let c=0; c< columns; c++){
                if(grid[r][c] === 1){
                    area = Math.max(area,dfs(r,c))
                }
            }
        }

        return area
    }
}
