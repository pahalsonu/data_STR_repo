if (char(i) == "+" || char(i) == "-") {
    //if stack is empty
    if (stack.length == 0) {
        stack.push(char(i))
    };
    //if stack already have some operator
    if (stack.length !== 0) {
        let stackLength = stack.length;
        for (i = 0; i < stackLength; i++) {
            //if stack operator are associtive
            if (stack[stackLength - 1] == "+" || stack[stackLength - 1] == "-") {
                postfix.push(stack[0]);

            }
            if (stack[stackLength - 1] == "*" || stack[stackLength - 1] == "/" || stack[stackLength - 1] == "^") {
                let ele = stack.pop();
                postfix.push(ele);
                stack.push(char(i));
            };

        }


    }
};




//   // stack to char is  ( +
//   if (stack[stack.length - 1] == "(" || stack[stack.length - 1] == "+" ||stack[stack.length - 1] == "-" 
//   ||stack[stack.length - 1] == "/" ||stack[stack.length - 1] == "*"
//    || stack[stack.length - 1] == "^") {
//       stack.push(char(i));
//   }