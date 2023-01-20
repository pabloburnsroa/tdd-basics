// Example interview question: implement a stack w/o using a JavaScript array method

class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }
  get peek() {
    return this.items[this.top];
  }
  push(val) {
    this.top += 1;
    this.items[this.top] = val;
  }
  pop() {
    const popped = this.items[this.top];
    delete this.items[this.top];
    this.top--;
    return popped;
  }
}

describe('my stack', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });
  it('is created empty', () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });
  it('can push items to the top', () => {
    stack.push('1');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('1');
  });

  it('can pop off items from the top', () => {
    stack.push('1');
    expect(stack.pop()).toEqual('1');
    expect(stack.items).toEqual({});
    expect(stack.top).toBe(-1);
  });
});
2;
