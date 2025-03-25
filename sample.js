let user_hand = prompt("じゃんけんの手を選んで")

let js_hand = getJShand();

let judge = winLose(user_hand, js_hand);

alert("あなたの手は" + user_hand + "です \nJavaScriptの選んだ手は" + js_hand + "\n結果は" + judge +"。");

function getJShand(){
    let js_hand_num = Math.floor( Math.random()* 3);

    if(js_hand_num == 0){
        js_hand = "グー";
    }else if(js_hand_num == 1){
        js_hand = "チョキ";
    }else if(js_hand_num == 3){
        js_hand = "パー";
    }

    return js_hand
}
