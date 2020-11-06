// var infix = [a,'+','(',b ,'*',c];
var infix = "a+b-(b+s+d-e-(d-(f+g)))"
var stack = [];
var postfix = [];

// function to find braces

const infixToPostfix = () => {

    for (i = 0; i < infix.length; i++) {
        //check if it is operand
        if (infix.charCodeAt(i) >= 97 && infix.charCodeAt(i) <= 122) {
            postfix.push(infix.charAt(i))
        }
        else {
            //check for operators

            //check if operator  is (
            if (infix.charAt(i) === "(") {
                stack.push(infix.charAt(i));
            };
            //check if operator  is )
            if (infix.charAt(i) === ")") {
                //there must be one one or more open braces but only closed or relative bracket to be solved means, we need to solve only one bracket at a time
                let ele = stack.pop();
                console.log(ele)
                postfix.push(ele);
                //check if second top element operator or (
                let ele2 = stack.pop();
                if (ele2 != "(") {
                    postfix.push(ele2);
                    stack.pop();
                }
            }

            //braces are solved lets move to + -
            if (infix.charAt(i) == "+" || infix.charAt(i) == "-") {

                //check if high precdence functions are available
                // if (stack[stack.length - 1] == "^" || stack[stack.length - 1] == "/" || stack[stack.length - 1] == "*") {
                //     let ele = stack.pop();
                //     postfix.push(ele);
                //     //check if still operator avail at top 
                //     if (stack[stack.length - 1] != "(" && stack.length == 0) {
                //         let ele2 = stack.pop();

                //         postfix.push(ele2);
                //         stack.push(infix.charAt(i))
                //     };

                // };
              
                //check for associative operators means + or - in this case
                if (stack[stack.length - 1] == "+" || stack[stack.length - 1] == "-") {
                    let ele = stack[stack.length - 1]
                    console.log(ele)
                    postfix.push(ele);
                    stack.pop()
                    stack.push(infix.charAt(i))


                };
                if (stack[stack.length - 1] == "(") {
                    stack.push(infix.charAt(i));
                };
            };


            //if stack is empty
            if (stack.length == 0) {
                stack.push(infix.charAt(i))
            };
           
        }
        console.log(i)
        console.log(stack)

        console.log(postfix)
        //for loop closed
    }
    let lastStackElement = stack.pop()
    postfix.push(lastStackElement)
};

infixToPostfix()

console.log(postfix)


