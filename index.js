const receivesAFunction = (callBack) => {callBack()}


const returnsANamedFunction = () => {
    const nameFunction = () => {}
    return nameFunction
}

const returnsAnAnonymousFunction = () => {
   let myFunction = function (){ 
        console.log("this is an anonymous function")

    }
    return myFunction
}
 