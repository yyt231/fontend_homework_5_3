/**
 * Created by Tony on 2016/10/19.
 */

var letterList = ["a", "x","x","x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];
//先查找出在集合里出现最多的元素，在查看其位置
function search() {
    var count = {};
    var pos = {};
    //统计每个字母出现的次数
    for (var i = 0; i < letterList.length; i++) {
        var temp = letterList[i];
        if (count[temp]) {
            count[temp]++;
            pos[temp] += "," + i;
        } else {
            count[temp] = 1;
            pos[temp] = i;
        }
    }

    var position = "";
    var letters = new Array();
    var max = 0;
    //找出个数最多的字母和个数
    for (var key in count) {
        if (count[key] >= max) {
            max = count[key];
            letters.push(key.toString());

        }
    }

    for(var letter in letters){
        for(var le in pos){
            if(letters[letter]===le){
                position = position.concat(pos[le].toString(), ",")


                document.write("出现最大的字母为" + letters[letter] + ",一共出现了" + max + "次，出现的位置分别为" + position+"<br>");
                //重置定位记录
                position="";
            }
        }
    }

}

