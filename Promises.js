
    const promiseDemo = new Promise(function(Success, Failure) {
      Success(); 
      Failure();  
    });
    
  
    promiseDemo.then(
      function(value) { document.write("Success.") },
      function(error) { document.write("Fail.") }
    );



    let promiseDemo3 = new Promise(function(myResolve) {
    setTimeout(function() { myResolve("God Is Great"); }, 3000);
  });
  
  promiseDemo3.then(function(value) {
    document.write("<br/>"+value);
  });