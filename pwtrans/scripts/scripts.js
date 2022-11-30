kw = ['奥利给','耗子尾汁','黑人抬棺','迷hotel','闹太套','6'];

function fuzzyQuery(list, keyWord) {
    var arr = [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].indexOf(keyWord) >= 0) {
        arr.push(list[i]);
      }
    }
    console.log(arr);
    if(arr.length >= 1){
        window.location.href="words/"+arr[0]+"/index.html";
    }else{
        window.location.href="https://www.baidu.com/s?wd="+keyWord;
    }
  }