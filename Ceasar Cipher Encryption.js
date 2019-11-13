var str="Howdie partner!";
console.log(str);
var init_cc=13;
var cc=init_cc;
var encrypt="";
var plain="";
for (let i=0; i<str.length;i++){
    let v=str.charCodeAt(i);
    switch (true){
        case (v==32): cc++; if (cc==26){cc=0};                     break;
        case (v>=65 && v+cc<=90)||(v>=95 && v+cc<=122): v+=cc;   break;
        case (v>= 65 && v<=90) || (v>=95 && v<=122): v+=(cc-26); break;
    }
    encrypt+=String.fromCharCode(v);
    

}
console.log(encrypt);
cc=init_cc;
for (let i=0; i<encrypt.length; i++){
    let v=encrypt.charCodeAt(i);
    switch (true){
        case (v==32): cc++; if (cc==26){cc=0};                     break;
        case (v-cc>=65 && v<=90)||(v-cc>=95 && v<=122): v-=cc;   break;
        case (v>= 65 && v<=90) || (v>=95 && v<=122): v-=(cc-26); break;
    }
    plain+=String.fromCharCode(v);
}
 console.log(plain);