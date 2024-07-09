


const res=[1,2,3,4,5];


const final=res.filter((eachprod)=>{
    return eachprod>4;
})

//


// now my custom filterfunction



Array.prototype.customfilter=function (cb){
        let l=this.length;

        let res=[];

        for(let i=0;i<l;i++){
            if(cb(this[i])){
                res.push(this[i]);
            }
        }
        return res;
}

const ans=res.customfilter((eachprod)=>{
    return eachprod>2;
})

console.log(ans);



