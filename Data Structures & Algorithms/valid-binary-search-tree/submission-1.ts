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
     * @return {boolean}
     */

    valid(node,min,max): boolean {
        if (node === null) return true
        if (!(min < node.val && node.val < max )) return false
        
        return (
            this.valid(node.left, min, node.val) &&
            this.valid(node.right, node.val, max)
        )
    }

    isValidBST(root: TreeNode | null): boolean {
        if (root === null) return null;

        return this.valid(root,-Infinity, Infinity)
    }
}
