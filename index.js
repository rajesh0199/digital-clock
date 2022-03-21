function showTime(){
    let time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    let session = "AM"
    if(hours > 12){
        hours = hours - 12
        session = "PM"
    }     
    if(hours <10){
        hours = "0" + hours
    }
    if(minutes <10){
        minutes = "0" + minutes
    }
    if(seconds < 10 ){
        seconds = "0" + seconds
    } 
    document.getElementById("hours").innerText = hours
    document.getElementById("mints").innerText = minutes
    document.getElementById("secs").innerText = seconds
    document.getElementById("am").innerText = session
    setTimeout(showTime, 1000)
}
showTime()

function setfun(){
    let k_1 = document.getElementById("s_1").value
    let k_2 = document.getElementById("s_2").value
    let k_3 = document.getElementById("s_3").value
    let msg = document.getElementById("msg")
    let input = document.getElementById("text")
    console.log(k_1);
    console.log(k_2);
    console.log(k_3);
    let hours = new Date().getHours()
    console.log(hours);
    if(hours<12){
        msg.innerText = "GOOD MORNING!!"
        msg.classList.add("msg_1")
    }else if(hours<20){
        msg.innerText = "GOOD AFTERNOON!!"
        msg.classList.add("msg_1")
    }else if(21>=hours<24){
        msg.innerText = "GOOD NIGHT!!"
        msg.classList.add("msg_1")
    }
    if(k_1 == hours ){
        document.getElementById("sub_div").classList.add("vmc_1")
        input.innerText = "LET'S HAVE SOME BREAKFAST"
        input.classList.add("kkk")
    }else if (k_2 == hours){
        document.getElementById("sub_div").classList.add("vmc_2")
       
        input.innerText = "LET'S HAVE SOME LAUNCH"
        input.classList.add("kkk")
    }
    else if(k_3 == hours){
        document.getElementById("sub_div").classList.add("vmc_3")
       
        input.innerText = "LET'S HAVE A SLEEP"
        input.classList.add("kkk")
    }

    let last_div = document.getElementById("last_div")
    last_div.classList.add("settime_div")
    let para_1 = document.getElementById("para_1").innerText
    let input_1 = document.getElementById("s_1").options[s_1.selectedIndex].text
    let para_2 = document.getElementById("para_2").innerText
    let input_2 = document.getElementById("s_2").options[s_2.selectedIndex].text
    let para_3 = document.getElementById("para_3").innerText
    let input_3 = document.getElementById("s_3").options[s_3.selectedIndex].text
    last_div.innerText = para_1 + " : " + input_1 +"\n" + "\n"+ para_2 + " : " + input_2 +"\n" + "\n"+ para_3+ " : " + input_3 
    let spcl = document.getElementById('spcl')
    spcl.classList.add("bottom_spcl")
}

