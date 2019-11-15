var num=2149583361;
var str=num.toString(2);
console.log(str);
console.log(str.length);
var arr=[];
var res=[];
while (str.length<32){
    str="0"+str;
}
for (let i=0;i<4; i++){
    let temp=str.slice(i*8,((i+1)*8));
    arr.push(temp);
}
console.log(str.length);
console.log(arr.join("."));
console.log(arr);
arr.forEach(el => {
    let sum=0;
    for (i=0;i<el.length;i++){
        if (el[i]==1){
            let temp=2**(el.length-(i+1));
            sum+=temp;
        }
    }
    res.push(sum);
});
console.log(res.join("."));