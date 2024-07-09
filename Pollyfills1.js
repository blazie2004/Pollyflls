

console.log("ok");


//implement Arrays.map function using pollyfills


//let say our predefine map looks like    



// arr.map((eachitem)=>{
//     something return for eachitem
// })



// map will take a callback with some parameter


Array.prototype.customMap=function(cb){
    let len=this.length;
    let res=Array(len);
    for(let i=0;i<len;i++){
        res[i]=cb(this[i],i);

    }
    return res;
}

let arr=[1,2,3,4,5];



let res=arr.customMap((eachele,index)=>{
    return eachele*index;
})

console.log(res);
