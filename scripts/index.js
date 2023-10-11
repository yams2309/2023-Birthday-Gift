let song1 = document.getElementsByClassName("songid1");
let song2 = document.getElementsByClassName("songid2");
let song3 = document.getElementsByClassName("songid3");
let song4 = document.getElementsByClassName("songid4");
let song5 = document.getElementsByClassName("songid5");

let index=0;

let html = document.getElementById("wallpaper");
let about = document.getElementById("about");
let about2 = document.getElementById("about2");

let track_changes = document.getElementsByClassName("playbutton");
let headings = document.getElementsByClassName("headings");
let texts = document.getElementsByClassName("texts");

let button1 = document.getElementById("one");
let button2 = document.getElementById("two");
let button3 = document.getElementById("three");
let button4 = document.getElementById("four");
let button5 = document.getElementById("five");

let main1 = document.getElementById('Y2K');
let main2 = document.getElementById('CP');
let main3 = document.getElementById('sunny');
let main4 = document.getElementById('limey');
let main5 = document.getElementById('terror'); 

let s1 = document.getElementById("theme1");
let s2 = document.getElementById("theme2");
let s3 = document.getElementById("theme3");
let s4 = document.getElementById("theme4");
let s5 = document.getElementById("theme5");

let td1 = document.getElementById("td1");
let td2 = document.getElementById("td2");
let td3 = document.getElementById("td3");
let td4 = document.getElementById("td4");
let td5 = document.getElementById("td5");

let track1 = document.getElementsByClassName("track1");
let track2 = document.getElementsByClassName("track2");
let track3 = document.getElementsByClassName("track3");
let track4 = document.getElementsByClassName("track4");
let track5 = document.getElementsByClassName("track5");

main1.addEventListener('click',function(event){
    if(event.button===0){
        s1.style.display = 'inline';
        s2.style.display = 'none';
        s3.style.display = 'none';
        s4.style.display = 'none';
        s5.style.display = 'none';
        td1.style.display = 'inline';
        td2.style.display = 'none';
        td3.style.display = 'none';
        td4.style.display = 'none';
        td5.style.display = 'none';
        // html.style.backgroundImage = "url('../styles/wallpapers/Y2K-background.gif');";
        // html.style.backgroundSize = "50%;";
        td1.style.background = "linear-gradient(#b4edff,#73a9ff,#e082ff);";
        html.setAttribute("style","background-image: url('../styles/wallpapers/Y2K-background.gif'); background-size: 50%;")
        // // button1.style.backgroundImage = "url('../styles/buttons/bubble.png')";
        // // button1.style.backgroundSize = "cover";
        about.setAttribute("style","background: linear-gradient(40deg,#b4edff,#73a9ff,#e082ff);");
        about2.setAttribute("style","background: linear-gradient(40deg,#b4edff,#73a9ff,#e082ff);");
        td1.setAttribute("style","background: linear-gradient(#b4edff,#73a9ff,#e082ff);")
        for(let i = 0;i<track_changes.length;i++){
            track_changes[i].style.backgroundImage = "url('../styles/buttons/bubble.png')";
            track_changes[i].style.backgroundSize = "cover";
        }
        for(let i=0;i<headings.length;i++){
            headings[i].style.color = "rgb(255, 47, 189)";
        }
        for(let i=0;i<texts.length;i++){
            texts[i].style.color="blue";
        }
        index=0;
    }
});
main2.addEventListener('click',function(event){
    if(event.button===0){
        s2.style.display = 'inline';
        s1.style.display = 'none';
        s3.style.display = 'none';
        s4.style.display = 'none';
        s5.style.display = 'none';
        td2.style.display = 'inline';
        td1.style.display = 'none';
        td3.style.display = 'none';
        td4.style.display = 'none';
        td5.style.display = 'none';
        html.setAttribute("style","background-image: url('../styles/wallpapers/CP-background.gif'");
        about.setAttribute("style","background: linear-gradient(40deg,#500b9e,#850dd6,#fff649);");
        about2.setAttribute("style","background: linear-gradient(40deg,#500b9e,#850dd6,#fff649);");
        td2.setAttribute("style","background: linear-gradient(#500b9e,#850dd6,#fff649);display:inline;");
        for(let i = 0;i<track_changes.length;i++){
            track_changes[i].style.backgroundImage = "url('../styles/buttons/bubblecp.png')";
            track_changes[i].style.backgroundSize = "cover";
        }
        for(let i=0;i<headings.length;i++){
            headings[i].style.color = "rgb(255, 252, 45)";
        }
        for(let i=0;i<texts.length;i++){
            texts[i].style.color="#520278";
        }
        index=1;
    }
});
main3.addEventListener('click',function(event){
    if(event.button===0){
        s3.style.display = 'inline';
        s2.style.display = 'none';
        s1.style.display = 'none';
        s4.style.display = 'none';
        s5.style.display = 'none';
        td3.style.display = 'inline';
        td2.style.display = 'none';
        td1.style.display = 'none';
        td4.style.display = 'none';
        td5.style.display = 'none';
        html.setAttribute("style","background-image: url('../styles/wallpapers/sunny-background.gif'); background-size: 50%;")
        about.setAttribute("style","background: linear-gradient(40deg,#6dc3e8,#96fff6,#ffaa49);");
        about2.setAttribute("style","background: linear-gradient(40deg,#6dc3e8,#96fff6,#ffaa49);");
        td3.setAttribute("style","background: linear-gradient(#6dc3e8,#96fff6,#ffaa49);display:inline;")
        for(let i = 0;i<track_changes.length;i++){
            track_changes[i].style.backgroundImage = "url('../styles/buttons/bubblesunny.png')";
            track_changes[i].style.backgroundSize = "cover";
        }
        for(let i=0;i<headings.length;i++){
            headings[i].style.color = "rgb(255, 77, 0)";
        }
        for(let i=0;i<texts.length;i++){
            texts[i].style.color = "#317ea1";
        }
        index=2;
    }
});
main4.addEventListener('click',function(event){
    if(event.button===0){
        s4.style.display = 'inline';
        s2.style.display = 'none';
        s3.style.display = 'none';
        s1.style.display = 'none';
        s5.style.display = 'none';
        td4.style.display = 'inline';
        td2.style.display = 'none';
        td3.style.display = 'none';
        td1.style.display = 'none';
        td5.style.display = 'none';
        // html.style.backgroundImage = "url('../styles/wallpapers/limey-background.gif');";
        // html.style.backgroundSize = "cover;";
        html.setAttribute("style","background-image: url('../styles/wallpapers/limey-background.gif'); background-size: 50%;")
        about.setAttribute("style","background: linear-gradient(40deg,#1ee11e,#39c60a,#fffc54);");
        about2.setAttribute("style","background: linear-gradient(40deg,#1ee11e,#39c60a,#fffc54);");
        td4.setAttribute("style","background: linear-gradient(#1ee11e,#39c60a,#fffc54);display:inline;");
        for(let i = 0;i<track_changes.length;i++){
            track_changes[i].style.backgroundImage = "url('../styles/buttons/bubblelimey.png')";
            track_changes[i].style.backgroundSize = "cover";
        }
            for(let i=0;i<headings.length;i++){
            headings[i].style.color = "rgb(0, 255, 119)";
        }
        for(let i=0;i<texts.length;i++){
            texts[i].style.color = "#00952a";
        }
        index=3;
    }
});
main5.addEventListener('click',function(event){
    if(event.button===0){
        s5.style.display = 'inline';
        s2.style.display = 'none';
        s3.style.display = 'none';
        s4.style.display = 'none';
        s1.style.display = 'none';
        td5.style.display = 'inline';
        td2.style.display = 'none';
        td3.style.display = 'none';
        td4.style.display = 'none';
        td1.style.display = 'none';
        html.setAttribute("style","background-image: url('../styles/wallpapers/terror-background.gif'); background-size: 50%;")
        about.setAttribute("style","background: linear-gradient(40deg,#be0202,#edbf3f,#ffaa49);");
        about2.setAttribute("style","background: linear-gradient(40deg,#be0202,#edbf3f,#ffaa49);");
        td5.setAttribute("style","background: linear-gradient(#be0202,#edbf3f,#ffaa49);display:inline;");
        for(let i = 0;i<track_changes.length;i++){
            track_changes[i].style.backgroundImage = "url('../styles/buttons/bubbleterror.png')";
            track_changes[i].style.backgroundSize = "cover";
        }
        for(let i=0;i<headings.length;i++){
            headings[i].style.color = "rgb(202, 24, 24)";
        }
        for(let i=0;i<texts.length;i++){
            texts[i].style.color = "black";
        }
        index=4;
    }
});

button1.addEventListener('click', function(event) {
    if (event.button === 0) {
        song1[index].style.display = 'inline';
        song2[index].style.display = 'none';
        song3[index].style.display = 'none';
        song4[index].style.display = 'none';
        song5[index].style.display = 'none';
        track1[index].style.display = 'flex';
        track2[index].style.display = 'none';
        track3[index].style.display = 'none';
        track4[index].style.display = 'none';
        track5[index].style.display = 'none';
    }
});

button2.addEventListener('click', function(event) {
    if (event.button === 0) {
        song2[index].style.display = 'inline';
        song1[index].style.display = 'none';
        song3[index].style.display = 'none';
        song4[index].style.display = 'none';
        song5[index].style.display = 'none';
        track2[index].style.display = 'flex';
        track1[index].style.display = 'none';
        track3[index].style.display = 'none';
        track4[index].style.display = 'none';
        track5[index].style.display = 'none';
    }
});

button3.addEventListener('click', function(event) {
    if (event.button === 0) {
        song3[index].style.display = 'inline';
        song2[index].style.display = 'none';
        song1[index].style.display = 'none';
        song4[index].style.display = 'none';
        song5[index].style.display = 'none';
        track3[index].style.display = 'flex';
        track2[index].style.display = 'none';
        track1[index].style.display = 'none';
        track4[index].style.display = 'none';
        track5[index].style.display = 'none';
    }
});

button4.addEventListener('click', function(event) {
    if (event.button === 0) {
        song4[index].style.display = 'inline';
        song2[index].style.display = 'none';
        song3[index].style.display = 'none';
        song1[index].style.display = 'none';
        song5[index].style.display = 'none';
        track4[index].style.display = 'flex';
        track2[index].style.display = 'none';
        track3[index].style.display = 'none';
        track1[index].style.display = 'none';
        track5[index].style.display = 'none';
    }
});

button5.addEventListener('click', function(event) {
    if (event.button === 0) {
        song5[index].style.display = 'inline';
        song1[index].style.display = 'none';
        song2[index].style.display = 'none';
        song3[index].style.display = 'none';
        song4[index].style.display = 'none';
        track5[index].style.display = 'flex';
        track1[index].style.display = 'none';
        track2[index].style.display = 'none';
        track3[index].style.display = 'none';
        track4[index].style.display = 'none';
    }
});
