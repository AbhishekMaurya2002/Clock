function currentTime() {
    let date = new Date(); 
    let hours = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let samay="AM"
    if (hours>12){
        samay="PM"
    }
    
     let time = hours + ":" + minute + ":" + second + " "+ samay  ;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
currentTime();