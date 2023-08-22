var chatMessages = [
  {
    name: "ms1",
    msg: "Will you guys be watching the presentation today?",
    delay: 100,
    align: "right",
    showTime: true,
    time: "19:58"
  },
  {
    name: "ms2",
    msg:
      "<strong class='c-dark1'>Satyapal:</strong> Yeah, I can't wait to witness another train wreck. It's like watching a disaster movie in real life. 😄",
    delay: 800,
    align: "left",
    showTime: true,
    time: "19:58"
  },
  {
    name: "ms5",
    msg: "Oh, definitely! I wouldn't miss it for the world. It's pure entertainment, watching us stumble and fall. 🤭",
    delay: 1600,
    align: "right",
    showTime: true,
    time: "19:58"
  },
  {
    name: "ms7",
    msg:
      "<strong class='c-dark2'>Atishay:</strong> Count me in! I need a good laugh to start our day. Our presentations are a comedy goldmine. 😂",
    delay: 2000,
    align: "left",
    showTime: false,
    time: "19:58"
  },
  {
    name: "ms8",
    msg:
      "<strong class='c-dark1'>ENTERS TEAM:</strong><br><img src='https://i.imgflip.com/3bdd27.jpg' style='object-fit: cover; width: 150px; height: 150px;' class='c-img-responsive'>",
    delay: 2400,
    align: "left",
    showTime: true,
    time: "19:59"
  },
  {
    name: "ms9",
    msg:
      "<strong class='c-dark1'>Dogesh :</strong> Absolutely! like horror-comedy mashups, where the scares and laughter go hand in hand. You never know what's lurking around the corner. 😱😂",
    delay: 3000,
    align: "left",
    showTime: true,
    time: "19:59"
  },
  {
    name: "ms10",
    msg:
      "<strong class='c-dark3'>Sumit :</strong> Of course!. Our presentations are like tightrope walks over volcanoes, with a splash of absurdity. 🔥😅",
    delay: 3400,
    align: "right",
    showTime: true,
    time: "19:59"
  },
  {
    name: "ms11",
    msg:
      "<strong class='c-dark4'>Sundaram :</strong>We navigate the twisted tracks and deliver unexpected punchlines. 🎢😆",
    delay: 3800,
    align: "left",
    showTime: true,
    time: "19:59"
  },
  {
    name: "ms12",
    msg:
      "<strong class='c-dark2'>Surendra :</strong> Presentation Aisi banao ki 4 log kahe 😄🤔",
    delay: 4200,
    align: "left",
    showTime: true,
    time: "19:59"
  },
  {
    name: "ms13",
    msg:
      "<strong class='c-dark5'>Vivek :<img src='https://media.tenor.com/AKermu487ucAAAAS/band-karo-hath-jod-ke-mai-modi-sahab.gif' style='object-fit: cover; width: 280px; height: 180px;' class='c-img-responsive'",
    delay: 5200,
    align: "left",
    showTime: true,
    time: "19:59"
  }
];




  
  var chatDelay = 0;
  
  function onRowAdded() {
    $('.chat-container').animate({
      scrollTop: $('.chat-container').prop('scrollHeight')
    });
  };
  
  var scroll = true;
  
  $(window).load(function(){
      for (var i = 0; i < 20; i++){
        $.each(chatMessages, function(index, obj) {
            chatDelay = chatDelay + 1000;
            chatDelay2 = chatDelay + obj.delay;
            chatDelay3 = chatDelay2 + 10;
            scrollDelay = chatDelay;
            chatTimeString = " ";
            msgname = "." + obj.name;
            msginner = ".messageinner-" + obj.name;
            spinner = ".sp-" + obj.name;
            if (obj.showTime == true) {
              chatTimeString = "<span class='message-time'>" + obj.time + "</span>";
            }
      
            $(".chat-message-list").append("<li class='message-" + obj.align + " " + obj.name + "' hidden><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hidden><span class='message-text'>" + obj.msg + "</span>" + chatTimeString + "</div></li>");
      
            $(msgname).delay(chatDelay).fadeIn();
            $(spinner).delay(chatDelay2).hide(1);
            $(msginner).delay(chatDelay3).fadeIn();
            setTimeout(onRowAdded, chatDelay);
            setTimeout(onRowAdded, chatDelay3);
            chatDelay = chatDelay3;
          });
      }
    // if(scroll)
    // {
    //   $.each(chatMessages, function(index, obj) {
    //     chatDelay = chatDelay + 1000;
    //     chatDelay2 = chatDelay + obj.delay;
    //     chatDelay3 = chatDelay2 + 10;
    //     scrollDelay = chatDelay;
    //     chatTimeString = " ";
    //     msgname = "." + obj.name;
    //     msginner = ".messageinner-" + obj.name;
    //     spinner = ".sp-" + obj.name;
    //     if (obj.showTime == true) {
    //       chatTimeString = "<span class='message-time'>" + obj.time + "</span>";
    //     }
  
    //     $(".chat-message-list").append("<li class='message-" + obj.align + " " + obj.name + "' hidden><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hidden><span class='message-text'>" + obj.msg + "</span>" + chatTimeString + "</div></li>");
  
    //     $(msgname).delay(chatDelay).fadeIn();
    //     $(spinner).delay(chatDelay2).hide(1);
    //     $(msginner).delay(chatDelay3).fadeIn();
    //     setTimeout(onRowAdded, chatDelay);
    //     setTimeout(onRowAdded, chatDelay3);
    //     chatDelay = chatDelay3;
    //   });
    //   chatreveal();
    // }
    
    // scroll = false;
  });

  function chatreveal(){
    $.each(chatMessages, function(index, obj) {
        chatDelay = chatDelay + 1000;
        chatDelay2 = chatDelay + obj.delay;
        chatDelay3 = chatDelay2 + 10;
        scrollDelay = chatDelay;
        chatTimeString = " ";
        msgname = "." + obj.name;
        msginner = ".messageinner-" + obj.name;
        spinner = ".sp-" + obj.name;
        if (obj.showTime == true) {
          chatTimeString = "<span class='message-time'>" + obj.time + "</span>";
        }
  
        $(".chat-message-list").append("<li class='message-" + obj.align + " " + obj.name + "' hidden><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hidden><span class='message-text'>" + obj.msg + "</span>" + chatTimeString + "</div></li>");
  
        $(msgname).delay(chatDelay).fadeIn();
        $(spinner).delay(chatDelay2).hide(1);
        $(msginner).delay(chatDelay3).fadeIn();
        setTimeout(onRowAdded, chatDelay);
        setTimeout(onRowAdded, chatDelay3);
        chatDelay = chatDelay3;
      });
  }

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.heading', {interval: 200})
sr.reveal('.chat', {delay: 200})

/*SCROLL ABOUT*/
sr.reveal('.section-title', {delay: 200})
sr.reveal('.about-img', {delay: 500})
sr.reveal('.about__details', {delay: 800})




