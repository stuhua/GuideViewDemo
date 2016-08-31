window.onload = function() {
    var welcome = document.getElementById("welcome");
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    var page3 = document.getElementById("page3");
    var page4 = document.getElementById("page4");
    var page5 = document.getElementById("page5");
    var page6 = document.getElementById("page6");
    var page7 = document.getElementById("page7");


    var music = document.getElementById("music");
    var audio = document.getElementsByTagName("audio")[0];
    var music_img = document.getElementById("music_img")

    welcome.onclick = function() {
        // p7_time.setAttribute("class", "animated bounceOutLeft");
    //     var animate='animated hinge';
    // $('#p7_time').addClass(animate).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //   $(this).removeClass(animate);
    // });

        welcome.style.display = "none";
        page1.style.display = "block";
        setTimeout(function() {
            page1.style.display = "none";
            page2.style.display = "block";
        }, 4000);

        setTimeout(function() {
            page2.style.display = "none";
            page3.style.display = "block";
        }, 10000);

        setTimeout(function() {
            page3.style.display = "none";
            page4.style.display = "block";
        }, 14000);

        setTimeout(function() {
            page4.style.display = "none";
            page5.style.display = "block";
        }, 18000);

        // setTimeout(function() {
        //     page5.style.display = "none";
        //     page6.style.display = "block";
        // }, 26000);

        setTimeout(function() {
            page6.style.display = "none";
            page7.style.display = "block";
        }, 24000);

    };
    music.onclick = function() {
    /*    let flag=false;
        for(var i=0;i<3;i++){
            flag=true;
        }
        if(flag==true){
            alert("1");
        }*/
        if (audio.paused) {
            audio.play();
            music_img.setAttribute("class", "play");
            music_img.src = "img/music_play.png";
        } else {
            audio.pause();
            music_img.setAttribute("class", "");
            music_img.src = "img/music_pause.png";
        }
    }

};
