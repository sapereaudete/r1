// videohandler.js

(function () {
  function getVideoId(url) {
    var video_id = url.split('/embed/') [1] // || window.location.search.split(where)[1];
    var ampersandPosition = video_id.indexOf('?');
    if (ampersandPosition != - 1) {
      video_id = video_id.substring(0, ampersandPosition);
    }
    return video_id;
  }
  var iframes = document.querySelectorAll('.post-body.entry-content iframe.autoResize'),
      width = $('.post-body.entry-content').width() > 960 ? 960 : $('.post-body.entry-content').width(),
      height = parseInt(width * global.resizeFaktor) + 'px';
  for (var i = 0; i < iframes.length; i++) {
    var title = iframes[i];
    while (title.className != 'videoTitle') {
      title = title.previousSibling;
    }
    title = title.textContent.replace(/"/g, '\\"') || title.innerText.replace(/"/g, '\\"');
    iframes[i].style.backgroundImage = 'url(\'https://img.youtube.com/vi/' + getVideoId(iframes[i].src) + '/hqdefault.jpg\')';
    iframes[i].style.height = height;
    var html = iframes[i].outerHTML.replace(/"/g, '\\\''),
        src = iframes[i].src,
        html = (iframes[i].src.indexOf('?') > 0) ? html.replace(src, src + '&autoplay=1')  : html.replace(src, src + '?autoplay=1'),
        outerHTML = '<div class="autoResize youtubePlaceholder" '+
                    'style="background-image: url(\'https://img.youtube.com/vi/' + getVideoId(iframes[i].src) + '/hqdefault.jpg\'); height:' + iframes[i].style.height + '"' +
                    'onclick="this.outerHTML = \'' + html + '\'">' +
                    '<div class="youtubePlaceholderTitle">' + title + '</div></div>';
    iframes[i].outerHTML = outerHTML;
  }
}) ();
