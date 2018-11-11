window.onload=function(){
var Text = document.getElementById("commentInput");
var kuang = document.getElementById("commentSubmit");
var List = document.getElementById("commentList");
var num=2;
 
 kuang.onclick=function()
{
num=num+1;
var oBox = document.createElement("div");
oBox.className = "box";
 
var oDiv = document.createElement("div");
oDiv.className = "comment-avatarzhen";
var html='<img src="./images/avatar1.jpg"/>'		 
oDiv.innerHTML=html;
oBox.appendChild(oDiv);
 
var oDiv = document.createElement("div");
oDiv.className = "comment-content-name";
oDiv.innerHTML = "EdmundDZhang";
oBox.appendChild(oDiv);
 
var oDiv = document.createElement("div");
oDiv.className = "comment-content-article";
oDiv.innerHTML = Text.value;
oBox.appendChild(oDiv);
 
var oDiv = document.createElement("div");
oDiv.className = "comment-content-footer";
var oDate = new Date();
 
oDiv.innerHTML ="#"+num+"  来自安卓客户端  "+ oDate.getFullYear()+"-"+(oDate.getMonth()+1)+"-"+oDate.getDate()+" "+oDate.getHours()+":"+oDate.getMinutes()
oBox.appendChild(oDiv);

var oDiv =document.createElement("div");
oDiv.className = "comment-content";
oBox.appendChild(oDiv);

List.insertBefore(oBox,List.childNodes[0]);

document.getElementById("commentInput").value=""; 
}
}

 