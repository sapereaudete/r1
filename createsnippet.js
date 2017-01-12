/* createsnippet.js */

//<![CDATA[
snippet_count = 275;
function removeHtmlTag(strx, chop) {
  if (strx.indexOf("<") != - 1)
  {
    var snippet = strx.split("<");
    for (var i = 0; i < snippet.length; i++) {
      if (snippet[i].indexOf(">") != - 1) {
        snippet[i] = snippet[i].substring(snippet[i].indexOf(">") + 1, snippet[i].length);
      }
    }
    strx = snippet.join("");
  }
  chop = (chop < strx.length - 1) ? chop : strx.length - 2;
  while (strx.charAt(chop - 1) != " " && strx.indexOf(" ", chop) != - 1) chop++;
  strx = strx.substring(0, chop - 1);
  return strx + "...";
}
function createSnippet(pID) {
  var div = document.getElementById(pID);
  var summ = snippet_count;
  var summary = "<div class='snippets'>" + removeHtmlTag(div.innerHTML, summ) + "</div>";
  div.innerHTML = summary;
}
//]]>
