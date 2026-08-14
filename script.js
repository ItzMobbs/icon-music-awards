/* =========================================================
   ICON MUSIC AWARDS
   Main Website JavaScript
   ========================================================= */


/* =========================================================
   NAVBAR
   ========================================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================================
   SCROLL REVEALS
   ========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================================
   CINEMATIC INTRO
   ========================================================= */

const cinematicIntro =
    document.getElementById("cinematic-intro");


document.body.classList.add("intro-active");


setTimeout(() => {

    cinematicIntro.classList.add("finished");

    document.body.classList.remove("intro-active");

}, 3650);


/* =========================================================
   GOLD HERO PARTICLES
   ========================================================= */

const particleContainer =
    document.getElementById("hero-particles");


if (particleContainer) {

    const particleAmount = 26;

    for (
        let i = 0;
        i < particleAmount;
        i++
    ) {

        const particle =
            document.createElement("span");

        particle.classList.add(
            "gold-particle"
        );


        particle.style.left =
            `${Math.random() * 100}%`;


        particle.style.animationDuration =
            `${8 + Math.random() * 10}s`;


        particle.style.animationDelay =
            `${3 + Math.random() * 7}s`;


        particle.style.opacity =
            `${0.15 + Math.random() * 0.35}`;


        const size =
            1 + Math.random() * 2.5;


        particle.style.width =
            `${size}px`;

        particle.style.height =
            `${size}px`;


        particleContainer.appendChild(
            particle
        );

    }

}


/* =========================================================
   HERO MOUSE LIGHTING
   ========================================================= */

const hero =
    document.querySelector(".hero");


if (hero) {

    hero.addEventListener(
        "mousemove",
        (event) => {

            const bounds =
                hero.getBoundingClientRect();


            const x =
                event.clientX -
                bounds.left;


            const y =
                event.clientY -
                bounds.top;


            hero.style.setProperty(
                "--mouse-x",
                `${x}px`
            );


            hero.style.setProperty(
                "--mouse-y",
                `${y}px`
            );

        }
    );

}
