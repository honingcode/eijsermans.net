let paths = document.querySelectorAll('path');


const element = document.getElementById('line-art-animation');
const elementTop = element.getBoundingClientRect().top + window.scrollY;
const elementHeight = element.clientHeight;
const windowHeight = window.innerHeight;


fillSvgPaths()

document.addEventListener('scroll', fillSvgPaths)


function fillSvgPaths() {
    

    const scrollTop = window.scrollY;
    const scrollPercentage = Math.max(0, Math.min(1, (scrollTop - elementTop) / (elementHeight - windowHeight)));
    console.log(scrollPercentage)


    for (var i = 0; i < paths.length; i++) {
        let path = paths[i];

        let pathLength = path.getTotalLength();

        path.style.strokeDasharray = pathLength;
        path.style.strokeDashoffset = pathLength;

        let drawLength = pathLength * scrollPercentage;

        path.style.strokeDashoffset = pathLength - drawLength;
    }
}







// let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
