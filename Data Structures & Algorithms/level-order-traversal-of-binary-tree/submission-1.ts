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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        if(root == null) return []
        let nestedList = [];
        let queue = [root];
        let index = 0

        while(index < queue.length){
            const size = queue.length - index;
            const level = []

            for (let i=0; i < size; i++){
                const node = queue[index++]
                level.push(node.val)
                if (node.left !== null) queue.push(node.left)
                if (node.right !== null) queue.push(node.right)
            }

            nestedList.push(level)
        }
        return nestedList
    }
}
