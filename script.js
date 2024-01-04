document.addEventListener('click', (event) => {
    if (event.target.tagName === 'A' && event.target.hash) {
        event.preventDefault(); // Prevent default behavior of anchor links

        const targetId = event.target.hash.substring(1); // Remove '#' from the hash
        smoothScroll(targetId, 800); // Adjust the speed as needed
    }
});

// Updated smoothScroll function for adjustable scrolling speed in Safari
function smoothScroll(targetId, duration) {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        const targetOffset = targetElement.offsetTop;
        const startingY = window.pageYOffset;
        const diff = targetOffset - startingY;
        let start;

        // Use requestAnimationFrame for smooth animation
        function step(timestamp) {
            if (!start) start = timestamp;
            const time = timestamp - start;
            const percent = Math.min(time / duration, 1);

            window.scrollTo(0, startingY + diff * percent);

            if (time < duration) {
                requestAnimationFrame(step);
            }
        }

        requestAnimationFrame(step);
    }
}
$(document).ready(function(){
    $("#name").blur(function(){
        if($(this).val().length<5){
            $(this).css({
                "border": "1.5px solid red"
            })
        }
        else{
            $(this).css({
                "border":""
            })
        }
    })
})