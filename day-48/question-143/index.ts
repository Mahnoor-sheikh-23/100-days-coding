const methods = new Promise<string>((resolve,reject)=>{
    const random = Math.random()>0.5
    if(random){
        resolve('success')
    }else{
        reject(new Error("faliure"));
        
    }
})
methods
.then((result)=>{console.log(result);
})
.catch((error)=>{console.log(error);
})



