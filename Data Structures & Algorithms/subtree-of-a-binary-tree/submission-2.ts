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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    sameTree (p: TreeNode | null, q: TreeNode | null) {
        if (p === null && q===null) {
            return true
        } else if ( p === null || q === null){
            return false
        }
        if (p.val === q.val) {
            return this.sameTree(p.left, q.left) && this.sameTree(p.right, q.right)
        } else {
            return false
        }
    }
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        if (root === null && subRoot ===null) {
            return true
        }

        if (root === null && subRoot !==null) {
            return false
        }

        if (root.val === subRoot.val){
           return this.sameTree(root,subRoot) ? this.sameTree(root,subRoot) :(this.isSubtree(root.left,subRoot) || this.isSubtree(root.right,subRoot)) 
        }
        

        return this.isSubtree(root.left,subRoot) || this.isSubtree(root.right,subRoot)
    }
}
