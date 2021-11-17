    const BAR = document.querySelectorAll('.progressbar');
    
    BAR.forEach(function(bar){
        let percentage = bar.dataset.percent;
        let scale = bar.childNodes;
        scale.innerText = percentage + '%';
        bar.style.width = percentage + '%';
        console.log(percentage);
    });






