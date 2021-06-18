export function getBrowserInfo() {
    var agent = navigator.userAgent.toLowerCase();

    var regStr_ie = /msie [\d.]+;/gi;
    var regStr_ff = /firefox\/[\d.]+/gi
    var regStr_chrome = /chrome\/[\d.]+/gi;
    var regStr_saf = /safari\/[\d.]+/gi;
    //IE
    if (agent.indexOf("msie") > 0) {
        return agent.match(regStr_ie);
    }

    //firefox
    if (agent.indexOf("firefox") > 0) {
        return agent.match(regStr_ff);
    }

    //Safari
    if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
        return agent.match(regStr_saf);
    }

    //Chrome
    if (agent.indexOf("chrome") > 0) {
        return agent.match(regStr_chrome);
    }

}

export function friendlyFormatTime(stringTime) {
    let minute = 1000 * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let week = day * 7;
    let month = day * 30;
    let time1 = new Date().getTime(); //当前的时间戳
    let time2 = Date.parse(new Date(stringTime)); //指定时间的时间戳
    let time = time1 - time2;

    let result = null;
    if (time < 0) {
        result = "--";
    } else if (time / month >= 3) {
        result = stringTime;
    } else if (time / month >= 1) {
        result = parseInt(time / month) + "月前";
    } else if (time / week >= 1) {
        result = parseInt(time / week) + "周前";
    } else if (time / day >= 1) {
        result = parseInt(time / day) + "天前";
    } else if (time / hour >= 1) {
        result = parseInt(time / hour) + "小时前";
    } else if (time / minute >= 1) {
        result = parseInt(time / minute) + "分钟前";
    } else {
        result = "刚刚";
    }
    return result;

}


export function formatDate(dateStr, format) {
    var paddNum = function(num) {
        num += "";
        return num.replace(/^(\d)$/, "0$1");
    }
    let date = new Date(dateStr);
    //指定格式字符
    var cfg = {
        yyyy: date.getFullYear() //年 : 4位
            ,
        yy: date.getFullYear().toString().substring(2) //年 : 2位
            ,
        M: date.getMonth() + 1 //月 : 如果1位的时候不补0
            ,
        MM: paddNum(date.getMonth() + 1) //月 : 如果1位的时候补0
            ,
        d: date.getDate(),
        dd: paddNum(date.getDate()) //日 : 如果1位的时候补0
            ,
        hh: paddNum(date.getHours()) //时:如果1位的时候补0
            ,
        mm: paddNum(date.getMinutes()) //分:如果1位的时候补0  
            ,
        ss: paddNum(date.getSeconds()) //秒:如果1位的时候补0    
    }
    format || (format = "yyyy-MM-dd hh:mm:ss");
    return format.replace(/([a-z])(\1)*/ig, function(m) { return cfg[m]; });
}