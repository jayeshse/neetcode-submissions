class MinStack {
    stack: number[];
    minstack: number[];
    constructor() {
        this.minstack = [];
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
       this.stack.push(val)
       val = Math.min(
            val,
            this.minstack.length === 0 ? val
            : this.minstack[this.minstack.length - 1] 
       )
       this.minstack.push(val)
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
        this.minstack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
       return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minstack[this.minstack.length - 1]
    }
}
