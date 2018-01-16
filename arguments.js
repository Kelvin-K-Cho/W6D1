let sum = function() {
  let array = Array.from(arguments);
  return array.reduce(function(a,b){
    return a + b;
  });
};

console.log(sum(1, 2, 3, 4));

let _sum = function(...params) {
  return params.reduce(function(a,b){
    return a + b;
  });
};

console.log(_sum(1, 2, 3, 4, 5));

Function.prototype.myBind = function(ctx) {
    const boundTarget = this;
    const bindArgs = arguments.slice(1);
    return function (callArgs) {
      return boundTarget.apply(ctx, bindArgs.concat(callArgs));
    };
};

Function.prototype._myBind = function (ctx, ...bindArgs) {
  return (...callArgs) => {
    return this.apply(ctx, bindArgs.concat(callArgs));
  };
};

function currySum(numArgs) {
  let numbers = [];

  function _currySum(num) {
    numbers.push(num);
    if(numbers.length === numArgs) {
      return numbers.reduce(function (a,b) {
        return a + b;
      });
    } else {
      return _currySum;
    }
  }

  return _currySum;
}

Function.prototype.curry = function(numArgs) {
  const nums = [];
  const fn = this;

  function _curriedFn(num) {
    nums.push(num);
    if (nums.length === numArgs) {
      return fn(...nums);
    } else {
      return _curriedFn;
    }
  }

  return _curriedFn;
};

Function.prototype.curry1 = function(numArgs) {
  const nums = [];
  const fn = this;

  function _curriedFn(num) {
    nums.push(num);
    if (nums.length === numArgs) {
      return fn.apply(null, nums);
    } else {
      return _curriedFn;
    }
  }

  return _curriedFn;
};

Function.prototype.curry2 = function(...numArgs) {
  const fn = this;
  return fn.apply(null, numArgs);
};
