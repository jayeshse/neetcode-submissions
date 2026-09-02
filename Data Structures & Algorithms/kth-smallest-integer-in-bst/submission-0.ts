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
     * @param {number} k
     * @return {number}
     */

    kthSmallest(root: TreeNode | null, k: number): number {
        let count = [];

        function inorder(node): any {
            if (node === null) return null
            inorder(node.left)
            count.push(node.val)
            inorder(node.right)
        }

        inorder(root)

        return count[k-1]
    }
}
