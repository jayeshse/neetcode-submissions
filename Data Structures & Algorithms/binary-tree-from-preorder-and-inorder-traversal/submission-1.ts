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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder: number[], inorder: number[]): TreeNode {
        let preIdx = 0,
            inIdx = 0;

        function dfs(limit) {
            if (preIdx >= preorder.length) return null;
            if (inorder[inIdx] === limit) {
                inIdx++;
                return null;
            }

            let root = new TreeNode(preorder[preIdx++]);
            root.left = dfs(root.val);
            root.right = dfs(limit);
            return root;
        }

        return dfs(Infinity);
        // if (!preorder.length || !inorder.length) return null

        // let root  =  new TreeNode(preorder[0]);
        // let inordermid = inorder.indexOf(root.val);

        // root.left = this.buildTree(preorder.slice(1, inordermid+1),inorder.slice(0, inordermid))     

        // root.right = this.buildTree(preorder.slice(inordermid+1),inorder.slice(inordermid+1)) 

        // return root  
    }
}
