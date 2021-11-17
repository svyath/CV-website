$(document).ready(function(){
    const BAR = document.querySelectorAll('.progressbar');

    BAR.forEach(function(bar){
        let percentage = bar.dataset.percent;
        let scale = bar.clildren[0];
        scale.innerText = percentage + '%';
        bar.style.width = percentage + '%';
        console.log(percentage);
    });
})
//TODO fix




