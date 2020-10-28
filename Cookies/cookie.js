
let pureCookieTitle = "Cookies"; 
let pureCookieDesc = "Ved benyttelse af denne side, accepterer du samtidig at der bruges cookies.";
let pureCookieLink = '<a href="# target="_blank">Hvorfor?</a>';
let pureCookieButton = "Accepter cookies";


function pureFadeIn(elem, display){
    let el = document.getElementById(elem);
    el.style.opacity = 0;
    el.style.display = display || "block";

    (function fade() {
        let val = parseFloat(el.style.opacity);
        if (!((val += .02) > 1)) {
          el.style.opacity = val;
          requestAnimationFrame(fade);
        }
      })();
    }; 
    function pureFadeOut(elem){
      let el = document.getElementById(elem);
      el.style.opacity = 1;
    
      (function fade() {
        if ((el.style.opacity -= .02) < 0) {
          el.style.display = "none";
        } else {
          requestAnimationFrame(fade);
        }
      })();
    };


    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString(); 
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }


    
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}

function cookieConsent() {
  if (!getCookie('pureCookieDismiss')) {
    document.body.innerHTML += '<div class="cookieConsentContainer" id="cookieConsentContainer"><div class="cookieTitle"><a>' + pureCookieTitle + '</a></div><div class="cookieDesc"><p>' + pureCookieDesc + ' ' + pureCookieLink + '</p></div><div class="cookieButton"><a onClick="cookieDismiss();">' + pureCookieButton + '</a></div></div>';
	pureFadeIn("cookieConsentContainer");
  }
}

function cookieDismiss() {
  setCookie('pureCookieDismiss','1',7);
  pureFadeOut("cookieConsentContainer");
  Set-Cookie; flavor=choco; SameSite=None; Secure;
}

window.onload = function() { cookieConsent(); };