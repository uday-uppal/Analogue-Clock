setInterval(()=>{
    d=new Date;
    let hours=d.getHours();
    let mins=d.getMinutes();
    let seconds=d.getSeconds();
    h1=document.getElementsByClassName('hr');
    m1=document.getElementsByClassName('min');
    s1=document.getElementsByClassName('sec');
    a=30*hours+0.5*mins;
     b=6*mins;
     c=6*seconds;
     console.log(a,b,c);

    h.style.transform = `rotate(${a}deg)`;
    m.style.transform = `rotate(${b}deg)`;
    s.style.transform = `rotate(${c}deg)`;

},1000);