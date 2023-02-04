let body=document.querySelector("body");

body.addEventListener("mousemove",(e)=>{
        let x=e.offsetX;
        let y=e.offsetY;
        let newspan=document.createElement("span")
        newspan.style.left=x+"px";
        newspan.style.top=y+"px";
        let size=Math.random()*100;
        newspan.style.width=size+"px"
        newspan.style.height=size+"px"
         body.appendChild(newspan)
    setTimeout(()=>{
        newspan.remove();
    },3000)
})
