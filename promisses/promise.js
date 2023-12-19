let promises = new Promise((resolve, reject) => {
         setTimeout(()=>{
        const status = true;
        if (status){
            resolve("operation completed successfully");
        }
        else{
            reject("operation failed");
        }
      },1000)
    });
    
     // then take 2 call back functions one is success and one is failure
    promises.then(
      (value) => {
        //code if successful
        console.log(value);
      },
      (error) => {
        //code if unsuccessful
        console.log(error);
      }
      // handle error 
    ).catch((err) => {
      console.log("error"+err)
    });    