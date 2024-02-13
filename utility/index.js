export const kuraUtilit = {
  dataImage() {
    let d = document.querySelectorAll("[data-img-url");
    for (let i = 0; i < d.length; i++) {
      const element = d[i];
      element.style.backgroundImage = `url(${element.getAttribute(
        "data-img-url"
      )})`;
    }
  },
  preloader() {
    let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
      navigator.userAgent
    )
      ? true
      : false;
    let preloader = document.getElementById("preloader");

    if (preloader) {
      if (!isMobile) {
        setTimeout(function () {
          preloader.classList.add("preloaded");
        }, 800);
        setTimeout(function () {
          preloader.remove();
        }, 2000);
      } else {
        preloader.remove();
      }
    }

    setTimeout(() => {
      document.querySelector("body").classList.add("opened");
    }, 3000);

    var speed = 1000;

    setTimeout(function () {
      var preloader = document.querySelector(".waxon_tm_preloader");
      if (preloader) {
        preloader.classList.add("loaded");
      }
    }, speed);
  },
  imgToSVG() {
    document.querySelectorAll("img.svg").forEach((el) => {
      const imgID = el.getAttribute("id");
      const imgClass = el.getAttribute("class");
      const imgURL = el.getAttribute("src");

      fetch(imgURL)
        .then((data) => data.text())
        .then((response) => {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(response, "text/html");
          let svg = xmlDoc.querySelector("svg");

          if (typeof imgID !== "undefined") {
            svg.setAttribute("id", imgID);
          }

          if (typeof imgClass !== "undefined") {
            svg.setAttribute("class", imgClass + " replaced-svg");
          }

          svg.removeAttribute("xmlns:a");
          if (el.parentNode) {
            el.parentNode.replaceChild(svg, el);
          }
        });
    });
  },
  animation() {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  },
  customCursor() {
    var myCursor = document.querySelectorAll(".mouse-cursor"),
      hamburger = document.querySelector(".hamburger"),
      kura_tm_topbar = document.querySelector(".kura_tm_topbar "),
      pointer = document.querySelector(".cursor-pointer"),
      e = document.querySelector(".cursor-inner"),
      t = document.querySelector(".cursor-outer");

    function mouseEvent(element) {
      element.addEventListener("mouseenter", function () {
        e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
      });
      element.addEventListener("mouseleave", function () {
        e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover");
      });
    }

    if (myCursor.length) {
      if (document.body) {
        let n,
          i = 0,
          o = !1;
        (window.onmousemove = function (s) {
          // console.log(document.querySelector(this));
          o ||
            (t.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (e.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (n = s.clientY),
            (i = s.clientX);
        }),
          document.body.addEventListener(
            "mouseenter",
            // "a,.kura_tm_topbar .trigger, .cursor-pointer",
            function () {
              let a = document.querySelectorAll("a");
              e.classList.add("cursor-inner"), t.classList.add("cursor-outer");

              for (let i = 0; i < a.length; i++) {
                const element = a[i];
                mouseEvent(element);
              }

              hamburger && mouseEvent(hamburger);
              kura_tm_topbar && mouseEvent(kura_tm_topbar);
              pointer && mouseEvent(pointer);
            }
          ),
          (e.style.visibility = "visible"),
          (t.style.visibility = "visible");
      }
    }
  },
  stickyNav() {
    window.addEventListener("scroll", () => {
      let offset = window.scrollY;
      const stickys = document.querySelectorAll(".kura_tm_topbar");
      stickys.forEach((sticky) => {
        if (sticky) {
          if (offset > 100) {
            sticky.classList.add("animate");
          } else {
            sticky.classList.remove("animate");
          }
        }
      });
    });
  },
  audioSoundAndOpen() {
    var audio1 = document.querySelectorAll("#audio1");
    var audio2 = document.querySelectorAll("#audio2");
    var hamburgers = document.querySelectorAll(".trigger .hamburger");

    hamburgers.forEach((hamburger) => {
      hamburger.addEventListener("click", function () {
        var element = this;

        if (element.classList.contains("is-active")) {
          audio1[0].play();
        } else {
          audio2[0].play();
        }
        return false;
      });
    });
  },
  openNav(toggle) {
    const navItems = document.querySelectorAll("#anchor_nav> li");
    if (navItems) {
      navItems.forEach((nav) => {
        toggle ? nav.classList.add("opened") : nav.classList.remove("opened");
      });
    }
  },
  scrollToActiveNav() {
    window.addEventListener("scroll", () => {
      const sections = document.querySelectorAll(".kura_tm_section");
      const navLi = document.querySelectorAll(".anchor_nav li");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });
      navLi.forEach((li) => {
        if (current !== null) {
          li.classList.remove("current");
        }
        if (
          li.getElementsByTagName("a")[0].getAttribute("href") == `#${current}`
        ) {
          li.classList.add("current");
        }
      });
    });
  },
  activeSkillProgress() {
    window.addEventListener("scroll", () => {
      var progressInners = document.querySelectorAll(".progress_inner");

      progressInners.forEach(function (progress) {
        var pValue = parseInt(progress.getAttribute("data-value"), 10);
        var pColor = progress.getAttribute("data-color");
        var pBarWrap = progress.querySelector(".bar");
        var pBar = progress.querySelector(".bar_in");

        pBar.style.width = pValue + "%";
        pBar.style.backgroundColor = pColor;

        setTimeout(function () {
          pBarWrap.classList.add("open");
        });
      });
    });
  },
};
