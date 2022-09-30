const btn = document.querySelector('button');
const txt = document.querySelector('p')

btn.addEventListener('click', updateBtn);

function updateBtn(){
    btn.textContent='红楼梦的作者是谁?';
        txt.textContent='曹雪芹';
    btn.textContent='林黛玉代表什么花？';
        txt.textContent='芙蓉';
    btn,textContent='薛宝钗代表什么花？';
        txt.textContent='牡丹';
    btn.textContent='林黛玉为什么会死？';
        txt.textContent='泪尽而亡';    

}
