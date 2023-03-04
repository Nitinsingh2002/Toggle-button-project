var color=["orange","green","yellow","blue"];





var btn=document.getElementById('btn');
btn.addEventListener('click',function(){


var randomcolor=color[Math.floor(Math.random() * color.length)];
document.body.style.background=randomcolor;

}
)