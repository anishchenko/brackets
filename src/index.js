module.exports = function check(str, bracketsConfig) {
  // your solution
  // --------variant 2 -------------

const notEqualBrackets = [];
const equalBrackets = [];
const finalArr = [];

function isEqualBrackets(brackets) {
  brackets.forEach(element => {
    element.forEach(item => {
      if(element.indexOf(item) === element.lastIndexOf(item)) {
        notEqualBrackets.push(item);
      }else {
        if(!equalBrackets.includes(item)) {
          equalBrackets.push(item);
        }
      }
    });
  })
}
isEqualBrackets(bracketsConfig);

for(let i = 0; i < str.length; i++) {
  if(notEqualBrackets.includes(str[i])) {
    if(notEqualBrackets.indexOf(str[i]) % 2 === 0) { // add open not equal bracket
      finalArr.push(str[i]);
    }else { // add or remove close not equal brackets
      if(notEqualBrackets.indexOf(str[i]) - notEqualBrackets.indexOf(finalArr[finalArr.length - 1]) === 1) {
        finalArr.pop();
      }else {
        finalArr.push(str[i]);
      }
    }
  }else if(equalBrackets.includes(str[i])){ // equal brackets
    // if last item in final arr non equal - add equal bracket
    if(!equalBrackets.includes(finalArr[finalArr.length - 1])) {
      finalArr.push(str[i]);
    }else if(finalArr[finalArr.length - 1] === str[i]) {
      finalArr.pop();
    }
  }
}

  // ------- variant 1 -------------
  /*
  if(str.length % 2 !== 0) return false;
  const finalArr = [];

  const brackets = [];
  bracketsConfig.forEach(x => {
    brackets.push(...x);
  });

for(let i = 0; i < str.length; i++) {
  const indexSymbol = brackets.indexOf(str[i]);
  const currentBracket = str[i]
  
  let equalBrackets;
  if(brackets.indexOf(currentBracket) !== brackets.lastIndexOf(currentBracket)) {
      equalBrackets = true;
      }else {
        equalBrackets = false;
      };

  if(indexSymbol % 2 === 0) {
    if(finalArr.length === 0) {
      finalArr.push(str[i]);

    }else if(str[i] === finalArr[finalArr.length - 1] && equalBrackets) {
      finalArr.pop();
  
    }else{

      finalArr.push(str[i]);
    }
  }else {
    if(finalArr.length === 0) {
      finalArr.push(str[i]);

    }else if(indexSymbol - brackets.indexOf(finalArr[finalArr.length-1]) === 1) {
      finalArr.pop();
    }else {

      return false;
    }
  }

}
*/
return finalArr.length === 0 ? true : false;
}
