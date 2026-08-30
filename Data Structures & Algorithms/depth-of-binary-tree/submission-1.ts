/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */

    // ++ Recursive DFS ++ 

    maxDepth(root): number {
        if (root === null) {
            return 0
        }

        return ( 1 + Math.max(this.maxDepth(root.left),this.maxDepth(root.right)))
    }

    //++  Iterative DFS method (stack) ++
    // maxDepth(root): number {
    //     if (root === null) return 0
    //     let stack = [[root,1]]
    //     let maxDepth = 1

    //     while (stack.length > 0){
    //         const current = stack.pop();
    //         const currentNode = current[0];
    //         const depth = current[1];
            
    //         if ( currentNode !== null) {
    //             maxDepth = Math.max(maxDepth,depth)
    //             stack.push([currentNode.left, depth + 1])
    //             stack.push([currentNode.right, depth + 1])
    //         }
    //     }
    //     return maxDepth
    // }

    
}
