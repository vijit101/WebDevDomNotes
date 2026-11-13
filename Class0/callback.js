let isAuth = false;
function Auth(succesFx,onFail){
if(isAuth){
    succesFx();
    
}else{
    onFail();
}
}

function OnSuccess(){
console.log("AUth SUccess ");
}

function OnFailure(){
console.log("Auth Failed");
}

Auth(OnSuccess,OnFailure);

//C#

// delegates FunctionHolder += nameoffx ; n number of fx 
// fucntionholder.invoke  runs all fx 

// 18 
// 2  
// successfx = OnSuccess 
// OnFail = OnFailure 
// Auth failed  
