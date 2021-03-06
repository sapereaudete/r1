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

function setLabelContainerHeight() {
  var height = bodyHeight = ($('#Text3').height() + $('#HTML13').height() - $('#Label1 > h2').height() + 10) + 'px';
  $('#Label1 .list-label-widget-content').css({
    'height': height,
    'overflow': 'auto'
  });
}
setLabelContainerHeight();

$(window).on('load resize', function() {
    setPageWidthClass();
    resizeVideos();
    fixNavbar();
    setLabelContainerHeight();
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
  //links = document.querySelectorAll('a:not([href^="sapere-audete.blogspot"]):not([href^="/p/"])'),
  l = links.length;
  for (var i = 0; i < l; i++) {
    var rel = links[i].rel,
    target = links[i].target;
    if (!rel) {
      links[i].rel = 'nofollow';
    }
    if (!target) {
      links[i].target = '_blank';
    }
  }
  links = document.querySelectorAll('a[href*="sapere-audete.blogspot"]'),
  l = links.length;
  for (var i = 0; i < l; i++) {
    var target = links[i].target;
    if (target) {
      links[i].target = '_self';
    }
  }
  links = document.querySelectorAll('.labelMap a[href*="sapere-audete.blogspot"], .post-body a[href*="sapere-audete.blogspot"], .BlogArchive a[href*="sapere-audete.blogspot"]'),
  l = links.length;
  for (var i = 0; i < l; i++) {
    links[i].rel = 'nofollow';
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
 
(function () {
  var mobile = window.location.search.indexOf('?m=1') > - 1 || window.location.search.indexOf('&m=1') > - 1;
  if (mobile) {
    var hrefs = document.querySelectorAll('a[href^="/p/"]:not([href*="m=1"]):not([class*="home-link"]), a[href*="sapere-audete.blogspot"]:not([href*="m=1"]):not([class*="home-link"])'),
    l = hrefs.length;
    for (var i = 0; i < l; i++) {
      if (mobile && hrefs[i].href.indexOf('?') < 0) {
 	if (hrefs[i].href.indexOf('#') < 0) {
           hrefs[i].href = hrefs[i].href + '?m=1';
 	} else {
 	  hrefs[i].href = hrefs[i].href.replace('#', '?m=1#');  
 	}
      } else {
         if (hrefs[i].href.indexOf('#') < 0) {
           hrefs[i].href = hrefs[i].href + '&m=1';
         } else {
 	  hrefs[i].href = hrefs[i].href.replace('#', '&m=1#');  
 	 }
       }
     }
    // Search
    document.querySelector('#formActionMobile').name = 'm';
    document.querySelector('#formActionMobile').value = '1';
    // Desktop-Icon
    document.querySelectorAll('#desktopVersion')[0].style.display = 'block';
    document.querySelectorAll('#desktopVersion')[0].href = document.querySelectorAll('div.mobile-desktop-link a.home-link')[0].href;
  } else {
    // Mobil Icon
    document.querySelectorAll('#mobilVersion')[0].style.display = 'block';
    document.querySelectorAll('#mobilVersion')[0].href = window.location.toString().replace(/\?m=0|\&m=0/gi,'')+'?m=1'; //document.querySelectorAll('div.blog-mobile-link a')[0].href;
  }
}) ();

(function () {
  var hrefs = document.querySelectorAll('#ueberblick a[href*="#einstieg"]'),
  l = hrefs.length;
  for (var i = 0; i < l; i++) {
    var href = hrefs[i].href.substr(hrefs[i].href.indexOf('#einstieg'));
    hrefs[i].href = href;
  }
}) ();
	
// wg. einstieg.html
// http://stackoverflow.com/questions/17534661/make-anchor-link-go-some-pixels-above-where-its-linked-to
// The function actually applying the offset
function offsetAnchor() {
    if(location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 125);
    }
}

// This will capture hash changes while on the page
window.addEventListener("hashchange", offsetAnchor);

// This is here so that when you enter the page with a hash,
// it can provide the offset in that case too. Having a timeout
// seems necessary to allow the browser to jump to the anchor first.
// The delay of 1 is arbitrary and may not always work right (although it did in my testing).
window.setTimeout(offsetAnchor, 1);
