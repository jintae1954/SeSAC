for(let i = 1; i <= 10; i++){
    let str = Math.sqrt(i).toString().split('.');

    if(str[1] === undefined) continue;
    console.log(i, str[0]+'.'+str[1].slice(0,3));
}