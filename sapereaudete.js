// sapereaudete.js
    
global.pageWidths = [{
        "bez": "PW-XXS",
        "val": 0
    }, {
        "bez": "PW-XS",
        "val": 480
    }, {
        "bez": "PW-SM",
        "val": 768
    }, {
        "bez": "PW-MD",
        "val": 992
    }, {
        "bez": "PW-LG",
        "val": 1200
}];

document.getElementsByTagName("body")[0].className += " PT-" + global.pageType + " ";

global.isMobile === true ? document.getElementsByTagName("body")[0].className += " isMobile " : "";


if (!!window.chrome) {
    $('body').addClass('isChrome');
}

if (document.querySelectorAll("div.breadcrumb").length) {
	document.getElementsByTagName("body")[0].className += " breadcrumb";
}

$('.blog-posts .post-body.entry-content img').addClass('img-responsive');


$('.main-sidebar-right > div').each(function () {
    $(this).addClass('col-xs-12 col-sm-6 col-md-12');
});

function setPageWidthClass() {
    var ww = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        pws = global.pageWidths,
        cl = document.getElementsByTagName("body")[0].className,
        pw = pws[0].bez;
    for (var i = 0; i < pws.length; i++) {
        cl = cl.replace(pws[i].bez, "");
    }
    for (var i = 0; i < pws.length; i++) {
        if (ww > pws[i].val) {
            pw = pws[i].bez;
        }
    }
    cl = cl.replace(/  +/g, ' ');
    document.getElementsByTagName("body")[0].className = cl + pw + " ";
};
setPageWidthClass();

function resizeVideos() {
    $('.autoResize').each(function() {
        var width = $(this).width() || $('.post-body.entry-content').width();
        var height = parseInt(width * global.resizeFaktor) + 'px';
        $(this).animate({
            'height': height
        }, 250);
    });
}
resizeVideos();

function fixNavbar() {
    if ($(window).scrollTop() > $('#Header1').height()) {
        $('.navbar-brand').addClass('visible');
        $('.navbar').addClass('navbar-fixed-top');
    } else {
        $('.navbar-brand').removeClass('visible');
        $('.navbar').removeClass('navbar-fixed-top');
    }
}
fixNavbar();

$(window).on('load resize', function() {
    setPageWidthClass();
    resizeVideos();
    fixNavbar();
});

$.each($('.navbar').find('li'), function() {
    $(this).toggleClass('active', window.location.pathname.indexOf($(this).find('a').attr('href')) > -1);
});

$(".homepageUrl").each(function () {
    $(this).attr("href", global.homepageUrl);
});

$(document).scroll(function() {
    fixNavbar();
});

/* *** topImage *** */

$('#topImage button').on('click', function() {
    $('.total-wrapper,.footer-wrapper').css({
        'display': 'block'
    });
    $('#topImage').animate({
        'opacity': '0',
        'height': '0'
    }, 125, function() {
        $('#topImage').remove();
        $('html, body').css({
            'overflow': 'visible'
        });
        resizeVideos();
    });
});

/* *** toTop *** */

$('.totop').click(function() {
	$('html,body').animate({
		scrollTop: 0
	}, 125)
});

$(window).scroll(function() {
	$(this).scrollTop() ? $('.totop').fadeIn() : $('.totop').fadeOut()
});

/* *** Translate *** */

(function() {
    var intVal = setInterval(function() {
        if ($('.goog-te-gadget').length > 0) {
            clearInterval(intVal);
	    $('.goog-te-gadget-simple').css({
	    	'border-left': '1px solid #c5c5c5',
	    	'border-top': '1px solid #e5e5e5',
	    	'border-bottom': '1px solid #c5c5c5',
	    	'border-right': '1px solid #d5d5d5'
    	    });
        }
    }, 1000);
})();

/* *** rel, target *** */

(function () {
  var host = location.protocol + '//' + location.host,
  links = document.querySelectorAll('a:not([href^="' + host + '"]):not([href^="/p/"])'),
  l = links.length;
  for (var i = 0; i < l; i++) {
    var href = links[i].href,
    rel = links[i].rel,
    target = links[i].target;
    //console.log(rel + ' | ' + target + ' | ' + href);
    if (!rel) {
      links[i].rel = 'nofollow';
    }
    if (!target) {
      links[i].target = '_blank';
    }
  }
}) ();

/* *** Most read *** */

$("#PopularPosts1, #PopularPosts2, #PopularPosts3, #PopularPosts4").each(function() {
    $(this).addClass("tab-pane").attr("role", "tabpanel");
});

$("#popular-posts-header .nav.nav-tabs a").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
});

$(global.firstMostRead).trigger("click");

if ($("#postLizenz")) {
	$("#postLizenz").insertAfter($(".post-body.entry-content"));
}

$(".PopularPosts .item-title a, .BlogArchive ul.posts li a").each(function() {
	var text = this.innerText || this.textContent;
	this.innerText ? this.innerText = text.replace("Sapere Audete: ","") : this.textContent = text.replace("Sapere Audete: ","");
});