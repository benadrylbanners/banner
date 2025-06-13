var tl = new TimelineMax({ onComplete: endFrame, repeat: 0, repeatDelay: 3 });
window.onload = function () {
  initAd();
};

var bool1 = true;
function endFrame() {
  console.log("endFrame()");
}


function initAd() {

  document.getElementById("banner").addEventListener('mouseover', ctaOver, false);
  document.getElementById("banner").addEventListener('mouseout', ctaOut, false);

  // Helper function
  let domReady = (cb) => {
    document.readyState === 'interactive' || document.readyState === 'complete'
      ? cb()
      : document.addEventListener('DOMContentLoaded', cb);
  };

  domReady(() => {
    // Display body when DOM is loaded
    document.body.style.visibility = 'visible';
  });

  //---------- START ANIMATION ------------
  tl.addLabel("start")
    .set("#bg1,#copy,#disclaimer,#CTA", { opacity: 0 })
    .set("#product", { scale:0 })
    .set("#mainCopy", { x:"255px" })

  // ----------Frame 1 ------------
  tl.addLabel("frame1", "")
    .to('#bg1', 0.1, { opacity: 1, ease: Power1.easeInOut }, "frame1")
    .to('#product', 0.5, { scale: 1, ease: Power1.easeInOut }, "frame1+=0.5")
    .to('#copy', 0.5, { opacity:1, ease: Power1.easeInOut }, "frame1+=1")
    .to('#mainCopy', 0.2, { x:"0px", ease: Power1.easeInOut }, "frame1+=1")
    .to('#CTA', 0.5, { opacity:1, ease: Power1.easeInOut }, "frame1+=1.5")
    .to('#disclaimer', 0.5, { opacity:1, ease: Power1.easeInOut }, "frame1+=2")
    endFrame()

  var cta1 = document.getElementById("CTA");

  function ctaOver(e) {
    console.log(bool1)
    if(window.getComputedStyle(cta1).opacity == "1"){
      TweenLite.to('#CTA', 0,{ scale:1.2, ease: Power2.easeIn} );
    }
    // else{
    //   TweenLite.to('#cta1', 0,{ opacity: 0, ease: Power1.easeIn} );
    //   TweenLite.to('#cta2', 0,{ opacity: 1, ease: Power1.easeIn} );
    // }
  }

  function ctaOut(e) {
    if(window.getComputedStyle(cta1).opacity == "1"){
      TweenLite.to('#CTA', 0,{ scale:1, ease: Power2.easeIn} );
    }
    // else{
    //   TweenLite.to('#cta1', 0,{ opacity: 0, ease: Power1.easeIn} );
    //   TweenLite.to('#cta2', 0,{ opacity: 1, ease: Power1.easeIn} );
    // }
  }
}


