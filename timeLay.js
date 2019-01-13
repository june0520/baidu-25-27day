/*使用上方的HTML结构（可以根据需要自行微调）为基础编写JavaScript代码
*当变更任何一个select选择时，更新 result-wrapper 的内容
*当所选时间早于现在时间时，文案为 现在距离 "所选时间" 已经过去 xxxx
*当所选时间晚于现在时间时，文案为 现在距离 "所选时间" 还有 xxxx
*注意当前时间经过所选时间时候的文案变化
*注意选择不同月份的时候，日期的可选范围不一样，比如1月可以选31天，11月只有30天，注意闰年
*同样，需要注意，通过优雅的函数封装，使得代码更加可读且可维护/
*/
window.onload = function(){
    var select = document.querySelectorAll('select')
    var secYear = document.querySelector('#year-select')
    var secMon = document.querySelector('#month-select')
    var secDay = document.querySelector('#day-select')
    var secHour = document.querySelector('#hour-select')
    var secMin = document.querySelector('#minite-select')
    var secSecond = document.querySelector('#second-select')
    var text = document.querySelector('#result-wrapper')


    for (let item of select){
     
     //在选择框发生变化时绑定事件
        item.onchange = changeTime
    }
    function changeTime(){
        var now = new Date()
        var getYear = secYear.value;
        var getMon = secMon.value;
        var getDay = secDay.value;
        var getHour = secHour.value;
        var getMin = secMin.value;
        var getSecond = secSecond.value;
        // 月份是0-11
        var future = new Date(getYear,getMon-1,getDay,getHour,getMin,getMin,getSecond)
        var lefts = parseInt((future-now)/1000);
        var left = Math.abs(lefts)
        var day = parseInt(left/86400);
        var hour = parseInt((left%86400)/3600)
        var min = parseInt(((left%86400)%3600)/60)
        var second = left%60
        output(lefts, getYear,getMon,getDay,getHour,getMin,getSecond,day,hour,min,second)
        // 设定定时器反复执行
        setTimeout(changeTime,1000)

    }
    function output(lefts, getYear,getMon,getDay,getHour,getMin,getSecond,day,hour,min,second){
        if (lefts<0){
            text.innerHTML = "现在距离 " + getYear + '年 ' + getMon + '月 ' + getDay + ' 日' + toDou(getHour) +':' + toDou(getMin) + ' :' +
             toDou(getSecond) + '已经过去'+
            day+'天' + hour+'时' + min +'分'+ second+'秒'
        } else {
            text.innerHTML = "现在距离 " + getYear + ' 年' + getMon + '月 ' + getDay + ' 日' + toDou(getHour) +':' + toDou(getMin) + ' :' + 
            toDou(getSecond) + '还有' +
            day+'天' + hour+'时' + min +'分'+ second+'秒'

        }

// 格式化输出
    function toDou(n){
        if (n<10){
            return "0" + n
        } else {
            return n
        }
        
    }
}

















































}