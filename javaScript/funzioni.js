function color(id)
{
    var src=id.getAttribute("src");
    var ind = src.substring(0,src.lastIndexOf("."));
    var est = src.substring(src.lastIndexOf("."));
    ind+="_color";
    id.src=ind+est;
}

function decolor(id)
{
    var src=id.getAttribute("src");
    var ind = src.substring(0,src.lastIndexOf("_"));
    var est = src.substring(src.lastIndexOf("."));
    id.src=ind+est;
}