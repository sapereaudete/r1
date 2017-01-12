/* settopimages.js */

if (global.isHomepage === true && global.showTopImage === true) {
    
    function setTopImage() {
        
        function getTopImage(v, b) {
            return global.topImages[Math.floor(Math.random() * (b - v + 1) + v) - 1];
        }

        function dd() {
            var tld = window.location.hostname.toUpperCase().split('.');
            return (['DE',
                'AT',
                'CH'
            ].indexOf(tld[tld.length - 1]) !== -1);
        }

        function setText(item, text) {
            document.innerText ? document.querySelector(item).innerText = text : document.querySelector(item).textContent = text;
        }
        var dd = dd(),
            topImage = getTopImage(1, global.topImages.length),
            ww = document.documentElement.clientWidth || window.innerWidth,
            url = ww >= 1200 ? topImage.url.replace(/\/s1600\//, '/s800/') : topImage.url.replace(/\/s1600\//, '/s' + ww + '/'),
            bgSize = ww > 480 ? '100%' : 'auto';

        var int = setInterval(function() {
            if (typeof document.getElementById('topImage') === 'object') {
                clearInterval(int);
                var style = '<style>#topImage::before{background:url(' + url + ') no-repeat fixed center; background-size:' + bgSize + ' 100%}</style>';
                $('head').append(style);
                var image = document.createElement('img');
                image.src = url;
                var imageWidth = $('#topImage').css('width'); // console.log(imageWidth);
                image.onload = function() {
                    setText('#topImage .s1', dd ? topImage.thema : topImage.theme);
                    setText('#topImage .s2', dd ? 'Nichts ist, wie es scheint.' : 'Nothing is as it seems.');
                    setText('#topImage .s4', dd ? 'Habt den Mut, euch eures eigenen Verstandes zu bedienen.' : 'Have the courage to use your own understanding.');
                    $('#topImage > div').fadeIn(125);
                    $('head').append('<style>#topImage::before{opacity:0.5}</style>');
                    createCookie('topImage', global.date);
                }
            }
        }, 50);

    }

    var int = setInterval(function() {
        if (typeof global.topImages == 'object' && global.topImages.length > 0 && typeof document.querySelector('#topImage .s1') == 'object' && document.querySelectorAll('#topImage .s1').length > 0) {
            clearInterval(int);
            setTopImage();
        }
    }, 100);
    
}
