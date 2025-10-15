window.addEventListener('scroll', () => {
  const section = document.querySelector('.page-info');
  let scrollPos = window.scrollY * 0.1;
  section.style.backgroundPosition = `center calc(50% + ${scrollPos}px)`;
});


document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const speed = 200;

  const animateCounters = () => {
    counters.forEach(counter => {
      const update = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;
        const increment = Math.ceil(target / speed);

        if (current < target) {
          counter.innerText = current + increment;
          setTimeout(update, 20);
        } else {
          counter.innerText = target;
        }
      };
      update();
    });
  };

  // Trigger when section comes into view
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        obs.disconnect();
      }
    });
  });
  observer.observe(document.querySelector(".about-company"));
});



const tabs = document.querySelectorAll(".mv-tab");
const indicator = document.querySelector(".mv-indicator");
const heading = document.getElementById("mv-heading");
const desc = document.getElementById("mv-desc");
const image = document.getElementById("mv-image");

const content = {
  mission: {
    heading: "Our Mission",
    desc: "Our mission is to simplify global logistics by delivering seamless, fast, and reliable freight solutions. We empower businesses with cutting-edge technology, real-time tracking, and personalized service to keep supply chains moving effortlessly across borders.",
    img: "./Assets/images/frontend/mission.webp"
  },
  vision: {
    heading: "Our Vision",
    desc: "Our vision is to become the most trusted logistics partner worldwide — redefining global trade by combining innovation, sustainability, and unmatched customer service. We aim to set industry standards for speed, transparency, and eco-friendly operations.",
    img: "./Assets/images/frontend/vision.jpg"
  },
  goals: {
    heading: "Our Goals",
    desc: "We strive to expand our network to over 50 countries by 2027, reduce average delivery times by 20%, and achieve carbon-neutral operations by 2030. We continuously invest in AI, automation, and digital platforms to deliver smarter, faster solutions for our clients.",
    img: "./Assets/images/frontend/goals.jpg"
  },
  values: {
    heading: "Our values",
    desc: "Integrity, Innovation, and Customer-First thinking define who we are. We believe in building lasting relationships, operating with transparency, and adopting sustainable practices to protect the planet for future generations.",
    img: "./Assets/images/frontend/value.webp"
  }
};

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    // Move indicator
    indicator.style.transform = `translateX(${tab.offsetLeft}px)`;
    indicator.style.width = `${tab.offsetWidth}px`;

    // Animate out
    heading.style.opacity = "0";
    heading.style.transform = "translateY(20px)";
    desc.style.opacity = "0";
    desc.style.transform = "translateY(20px)";
    image.style.opacity = "0";
    image.style.transform = "scale(0.95)";

    setTimeout(() => {
      heading.textContent = content[tab.dataset.tab].heading;
      desc.textContent = content[tab.dataset.tab].desc;
      image.src = content[tab.dataset.tab].img;

      // Animate in
      heading.style.opacity = "1";
      heading.style.transform = "translateY(0)";
      desc.style.opacity = "1";
      desc.style.transform = "translateY(0)";
      image.style.opacity = "1";
      image.style.transform = "scale(1)";
    }, 300);
  });
});

// Init indicator on load
window.addEventListener("load", () => {
  const activeTab = document.querySelector(".mv-tab.active");
  indicator.style.transform = `translateX(${activeTab.offsetLeft}px)`;
  indicator.style.width = `${activeTab.offsetWidth}px`;
});




