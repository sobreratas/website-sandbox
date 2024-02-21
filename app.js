const halfImages = document.querySelectorAll(".half-image");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show"); // Add show class when intersected
            observer.unobserve(entry.target); // Stop observing once shown
        }
    });
}, {
    threshold: 0.5,
});

halfImages.forEach(halfImage => {
    observer.observe(halfImage);
});

const intersectRect = document.querySelectorAll(".intersect-rect");
const halfImages1 = document.querySelectorAll(".half-image-1");
console.log(halfImages1)

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            halfImages1.forEach(image => {
                image.classList.add("show"); // Add show class to each element
            });
            observer1.unobserve(entry.target); // Stop observing once shown
        }
    });
}, {
    threshold: 0.5,
});

intersectRect.forEach(halfImage1 => {
    observer1.observe(halfImage1);
});

const intersectRect2 = document.querySelectorAll(".intersect-rect-2");
const slidingBlocks = document.querySelectorAll(".sliding-block");
const halfImages2 = document.querySelectorAll(".half-image-2");


const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            slidingBlocks.forEach(block => {
                block.classList.add("show"); // Add show class to each element
            });
            halfImages2.forEach(image => {
                image.classList.add("show");
            })
            observer2.unobserve(entry.target); // Stop observing once shown
        }
    });
}, {
    threshold: 0.5,
});

intersectRect2.forEach(halfImage2 => {
    observer2.observe(halfImage2);
});