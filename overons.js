let paths = document.querySelectorAll('path');


const element = document.getElementById('section-goes-over-ons');
const elementTop = element.getBoundingClientRect().top + window.scrollY;
const elementHeight = element.clientHeight;
const windowHeight = window.innerHeight;


fillSvgPaths()

document.addEventListener('scroll', fillSvgPaths)


function fillSvgPaths() {
    

    const scrollTop = window.scrollY;

    let a = (elementTop - scrollTop)
    let b = (elementHeight - windowHeight)
    const scrollPercentage = Math.max(0, Math.min(100, (scrollTop - elementTop) / (elementHeight - windowHeight) * 100));

    console.log(a)
    console.log(b)



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
