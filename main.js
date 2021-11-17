    const BAR = document.querySelectorAll('.progressbar');
    
    BAR.forEach(function(bar){
        let percentage = bar.dataset.percent;
        let scale = bar.childNodes;
        scale.innerText = percentage + '%';
        bar.style.width = percentage + '%';
    });

    let $wrapper = $('.portfolioInner');

    $wrapper.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }
    })

    let links = document.querySelectorAll('.tabs a');
    
    links.forEach(link =>{
        let selector = link.dataset.filter;
        
        link.addEventListener('click', function(e){
            e.preventDefault();

            $wrapper.isotope({
                filter: selector,
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            })

            links.forEach(link =>{
                link.classList.remove('active');
            })

            e.target.classList.add('active');

        })
    })






