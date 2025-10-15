const hamburger = document.querySelector(".hamburger")
const menulist = document.querySelector(".menulist")
const navline = document.querySelectorAll('.navline')






hamburger.addEventListener("click", () => {
  menulist.classList.toggle("active");
  document.documentElement.classList.toggle("hidden"); 
  document.body.classList.toggle("hidden"); 
  
});

navline.forEach((nav) =>{
    nav.addEventListener('click' , () =>{
        menulist.classList.remove("active");
document.documentElement.classList.remove("hidden"); 
  document.body.classList.remove("hidden"); 
    })
})





const themeToggle = document.getElementById("themeToggle");
const mobileThemeToggle = document.getElementById("mobileThemeToggle");

// ✅ Apply light mode by default if no theme is saved
const savedTheme = localStorage.getItem("theme");
if (!savedTheme || savedTheme === "light") {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("theme", "light"); // ensure saved for next visit
} else if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}

// ✅ Toggle function
function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// ✅ Desktop theme toggle
if (themeToggle) {
  themeToggle.addEventListener("click", toggleTheme);
}

// ✅ Mobile theme toggle
if (mobileThemeToggle) {
  mobileThemeToggle.addEventListener("click", toggleTheme);
}




const userMenu = document.querySelector(".user-menu");
const userDropdown = document.querySelector(".user-dropdown");

// Toggle dropdown on click
userMenu.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent click from closing immediately
  userDropdown.classList.toggle("show-dropdown");
});

// Close dropdown if clicked outside
document.addEventListener("click", () => {
  userDropdown.classList.remove("show-dropdown");
});


window.addEventListener("load", () => {
    setTimeout(() => document.querySelector(".pallet").classList.add("show"), 1500);
});



window.addEventListener('scroll', () => {
  const section = document.querySelector('.stats-section');
  const sectionTop = section.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight - 100 && !started) {
    started = true;
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let count = 0;
      const step = target / 100;

      const updateCounter = () => {
        count += step;
        if (count < target) {
          counter.textContent = Math.floor(count);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };
      updateCounter();
    });
  }
});


  // Trigger only when visible
  window.addEventListener("scroll", () => {
    const section = document.querySelector(".stats-section");
    const sectionTop = section.offsetTop - window.innerHeight + 150;
    if (!started && window.scrollY > sectionTop) {
      startCounting();
      started = true;
    }
  });



  
(function () {
  const wrap = document.querySelector('.testi-wrap-nl');
  if (!wrap) return;

  const items = Array.from(wrap.querySelectorAll('.client-single-nl'));
  let autoTimer = null;
  const autoDelay = 10000; // 10s
  let activeIndex = items.findIndex(el => el.classList.contains('active'));

  // apply positions fresh every time
  function applyPositions() {
    console.log("apply posistion function");
    items.forEach((el, i) => {
      el.classList.remove('active','inactive',
        'position-1','position-2','position-3',
        'position-4','position-5','position-6','position-7'
      );

      const relative = (i - activeIndex + items.length) % items.length; 
      // rotate positions based on active
      const posClass = 'position-' + (relative + 1);
      el.classList.add(posClass);

      if (i === activeIndex) {
        el.classList.add('active');
      } else {
        el.classList.add('inactive');
      }
    });
  }

  function next() {
    activeIndex = (activeIndex + 1) % items.length;
    applyPositions();
    console.log("next function");
    
  }

  // click handler
  items.forEach((item, i) => {
    item.addEventListener('click', () => {
      if (i !== activeIndex) {
        activeIndex = i;
        applyPositions();
        restartAuto();
      }
    });
  });

  function startAuto() {
    if (autoTimer) clearInterval(autoTimer);
    autoTimer = setInterval(next, autoDelay);
    console.log("autostart function");
  }
  function stopAuto() {
    if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
    console.log("autostop function");
  }
  function restartAuto() { stopAuto(); startAuto(); 
    console.log("reset auto function");}

  wrap.addEventListener('mouseenter', stopAuto);
  wrap.addEventListener('mouseleave', startAuto);

  // initial paint
  applyPositions();
  startAuto();
})();

