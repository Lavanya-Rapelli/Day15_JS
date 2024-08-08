let H=4;
let W=5;
for(let i=1;i<=H;i++){
    bag="";
    for(let j=1;j<=5;j++){
        if(i%2!==0){
            bag+="[]"+"  ";
        }else{
            bag+="  []";
        }
    }
    console.log(bag);
}