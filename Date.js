/*编码
*我们现在来做一个最简单的时钟，通过小练习来学习 Date，复习定时，然后再练习一下函数的封装
*具体需求如下：
*
*在页面中显示当前日期及时间，按秒更新
*格式为 YYYY 年 MM 月 DD 日 星期 D HH:mm:ss
*注意位数的补齐，比如：
*-- 假设时间为2008年10月10日星期一的12点12分12秒，显示2008年10月10日星期一 12:12:12
*--假设时间为2008年1月1日星期一的3点2分2秒，显示2008年01月01日星期一 03:02:02
*编*码过程中，我们希望你注意对函数的封装，尽量让一个函数就做一个事情，而不要把所有的功能、代码揉在一起：

*封装一个函数，来根据某个日期返回这一天是星期几
*封装一个函数，把月、日、小时等出现个位数的情况前面补充0，补充为两位，比如1变为01
*封装一个函数，把最后的日期时间，按照要求的格式进行包装
*可能不止上面这些，尽可能地进行功能的解耦和拆解
*/
window.onload = function(){
var p1 = document.querySelector('#china')
var p2 = document.querySelector('#en')

output()

function weekDay(w){
    var out;
    switch (w){
        case 0:
        out = "星期日"
        break;

        case 1:
        out = "星期一"
        break;

        case 2:
        out = "星期二"
        break;

        case 3:
        out = "星期三"
        break;

        case 4:
        out = "星期四"
        break;

        case 5:
        out = "星期五"
        break;

        case 6:
        out = "星期六"
        break;

    }
    return out

}
function weekEn(w){
    var out;
    switch (w){
        case 0:
        out = "Sunday"
        break;

        case 1:
        out = "Monday"
        break;

        case 2:
        out = "Tuesday"
        break;

        case 3:
        out = "Wednesday"
        break;

        case 4:
        out = "Thursday"
        break;

        case 5:
        out = "Friday"
        break;

        case 6:
        out = "Saturday"
        break;

    }
    return out

}
function toDou(n){
    if(n<10){
        return '0' + n
    }
    else{
        return n
    }
}

function output(){

    var date = new Date();
    var year = date.getFullYear();
    var mon = date.getMonth();
    var day = date.getDate();
    var week = date.getDay();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();


    format1(year,mon,day,week,h,m,s)
    format2(year,mon,day,week,h,m,s)

    var timeOutId = setTimeout(output,1000)
}

//格式为 YYYY 年 MM 月 DD 日 星期 D HH:mm:ss
function format1(year,mon,day,week,h,m,s){
    p1.innerHTML = year + '年'+ toDou(mon+1) + '月' + toDou(day) + '日' + weekDay(week) + ' ' + toDou(h) + ':' + toDou(m) +  ':' + toDou(s)
}

//输出格式变为：2008-10-10 Monday 07:10:30 PM
function format2(year,mon,day,week,h,m,s){
    if(h>12){
    p2.innerHTML = year + '-'+ toDou(mon+1) + '-' + toDou(day) + ' ' + weekEn(week) + ' ' + toDou(hours12(h)) + ':' + toDou(m) +  ':' + toDou(s)+'PM'
    } else{
        p2.innerHTML = year + '-'+ toDou(mon+1) + '-' + toDou(day) + ' ' + weekEn(week) + ' ' + toDou(hours12(h)) + ':' + toDou(m) +  ':' + toDou(s) +'AM'
    }  
}

function hours12(h){
    return  h = h % 12

}

}
