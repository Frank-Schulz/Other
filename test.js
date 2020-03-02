// Scope and nested functions example 1:
// Accessing Local variable in outer function from inner function
// Outer function
function myFunc() {
    // Local variable
    var myLocalVariable = 'I am local'
    let myLocalLetVariable = 'I am also local'  // Inner function
    function myInnerFunc() {
      // Try to access the value of myLocalVariable
      // from function inside the myFunc function
      myLocalVariable
      // 'I am local'    myLocalLetVariable
      // 'I am also local'
    }
  }
  // Scope and nested functions
  // Accessing Local variable in inner function from outer function
  // Outer function
  function myFunc() {
    // Inner function
    function myInnerFunc() {
      // Local variable that is visible only in myInnerFunc
      var myLocalVariable = 'I am local'
      var myLocalLetVariable = 'I am also local'
    }  // Try to access the value of myLocalVariable
    // from the outer myFunc function
    myLocalVariable
    // ReferenceError: myLocalVariable is not defined  myLocalLetVariable
    // ReferenceError: myLocalLetVariable is not defined
  }