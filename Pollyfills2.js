



const a=[0,1,2,[3,4]];
// console.log(Array.isArray(a));


//implenetation of flat function();




Array.prototype.CustomFlat=function (cb){
    
    let len=this.length;
    let res=Array(len);
    for(let i=0;i<len;i++){
        res[i]=typeof(this[i])=='object'?

    }


}