let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `
/*你好.
我要加的样式是*/
body{
    color:green;
}
/*首先我要准备一个div*/
#div1{
    border: 1px solid red;
    width: 400px;
    height: 400px;
}
/*接下来变成一个八卦图
 *首先变成一个圆*/
#div1{
    border-radius: 50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 变成一黑一白*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加上边界*/
#div1::after{
    width: 200px;
    height: 200px; 
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::before{
    width: 200px;
    height: 200px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;

//string = string.replace(/\n/g,"<br>") //把所有回车换为换行符，其中/xxx/g为正则表达式，不然只能改变第一个回车。
let n = 0;
let string2 = "";//用string2缓存，使打出的内容不会被马上显示出来

let step = () => {
    setTimeout (()=> {
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n);
        window.scrollTo(0,99999);//打印到最后一行时自动拖动滚动条到页面最下方
        html.scrollTo(0,99999);//手机滚动
        if (string[n] === "\n"){
            string2 += "<br>";//替换回车和换行
        } else if (string[n] === ' '){
            string2 += "&nbsp;";
        } else {
            string2 += string[n];
        }
        // string2 += string[n] === "\n" ? "<br>" : string[n]; //替换if语句
        if (n < string.length) {
            n += 1; //不在一开始就+1
            step();
        }else{
        };
    },50);
};
step();
