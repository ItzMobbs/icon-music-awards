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
   CINEMATIC INTRO — SAFE VERSION
   ========================================================= */

const cinematicIntro =
    document.getElementById("cinematic-intro");


if (cinematicIntro) {

    document.body.classList.add("intro-active");


    const finishIntro = () => {

        cinematicIntro.classList.add("finished");

        document.body.classList.remove("intro-active");

    };


    /* Normal cinematic ending */

    setTimeout(() => {

        finishIntro();

    }, 3650);


    /*
       HARD FAIL-SAFE

       Even if the CSS animation bugs out,
       completely remove the intro after 5 seconds.
    */

    setTimeout(() => {

        cinematicIntro.style.display = "none";

        document.body.classList.remove("intro-active");

    }, 5000);

}

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

/* =========================================================
   ICON EXPERIENCE TIMELINE
   ========================================================= */

const experienceTimeline =
    document.querySelector(".experience-timeline");

const experienceProgress =
    document.querySelector(".experience-line-progress");

const experienceMoments =
    document.querySelectorAll(".experience-moment");

const experienceFinale =
    document.querySelector(".experience-finale");


/* =========================================================
   MOMENT REVEALS
   ========================================================= */

if (experienceMoments.length) {

    const experienceObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "experience-visible"
                        );

                    } else {

                        /*
                         Remove it when it leaves so the
                         animation can replay later.
                        */

                        entry.target.classList.remove(
                            "experience-visible"
                        );

                    }

                });

            },

            {
                threshold: 0.35
            }

        );


    experienceMoments.forEach((moment) => {

        experienceObserver.observe(moment);

    });

}


/* =========================================================
   GOLD LINE SCROLL PROGRESS
   ========================================================= */

function updateExperienceLine() {

    if (
        !experienceTimeline ||
        !experienceProgress
    ) {
        return;
    }


    const rect =
        experienceTimeline.getBoundingClientRect();


    const windowHeight =
        window.innerHeight;


    /*
     Start filling when the timeline reaches
     roughly the middle of the screen.
    */

    const start =
        windowHeight * 0.55;


    const total =
        rect.height;


    let progress =
        (start - rect.top) / total;


    progress =
        Math.max(
            0,
            Math.min(1, progress)
        );


    experienceProgress.style.height =
        `${progress * 100}%`;

}


window.addEventListener(
    "scroll",
    updateExperienceLine,
    {
        passive: true
    }
);


window.addEventListener(
    "resize",
    updateExperienceLine
);


updateExperienceLine();


/* =========================================================
   FINALE REVEAL
   ========================================================= */

if (experienceFinale) {

    const finaleObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "experience-visible"
                        );

                    } else {

                        entry.target.classList.remove(
                            "experience-visible"
                        );

                    }

                });

            },

            {
                threshold: 0.35
            }

        );


    finaleObserver.observe(
        experienceFinale
    );

}

/* =========================================================
   ACTIVE NAVIGATION SECTION
   ========================================================= */

const navLinks =
    document.querySelectorAll(".nav-link");

const navSections = [];


navLinks.forEach((link) => {

    const href =
        link.getAttribute("href");


    if (
        href &&
        href.startsWith("#")
    ) {

        const section =
            document.querySelector(href);


        if (section) {

            navSections.push({
                link,
                section
            });

        }

    }

});


function updateActiveNavigation() {

    const scrollPosition =
        window.scrollY +
        window.innerHeight * 0.35;


    let currentSection = null;


    navSections.forEach((item) => {

        if (
            scrollPosition >=
            item.section.offsetTop
        ) {

            currentSection = item;

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove(
            "active"
        );

    });


    if (currentSection) {

        currentSection.link.classList.add(
            "active"
        );

    }

}


window.addEventListener(
    "scroll",
    updateActiveNavigation,
    {
        passive: true
    }
);


updateActiveNavigation();
