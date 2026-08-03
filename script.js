const t=document.getElementById('text');
const groups=[
"Gửi đến người tôi thương",
"Người tôi thương",
"Luôn luôn khỏe",
"Mạnh và luôn",
"Hạnh phúc và",
"Tràn đầy sức",
"Sống nha.",
"I love you ❤️"
];
let i=-1;
function next(){
 if(i==-1){t.textContent=groups[0];i=0;setTimeout(next,3000);return;}
 if(i>=groups.length-1)return;
 i++;
 t.textContent=groups[i];
 setTimeout(next,i==groups.length-1?2000:2000);
}
next();