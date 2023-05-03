
# Proxy Bookmarklet -- Blazer!

This proxy bookmarklet was made by me using a website, it has a built in about:blank cloak, make sure not to use it on a new tab or it wont work, use it on a tab like youtube or any google search!


![Logo](https://i.ibb.co/Nncfz2w/Blazer-Thumb.png")


## Creator

- [@Acrole1n](https://www.github.com/Acrole1n)


## Features

- Easy to use
- Undetectable


## Code

`javascript:(function(){%C2%A0 %C2%A0 var url = prompt("Acrolein on top v1.0.1\nEnter URL:");%C2%A0 %C2%A0 if (url != null) {%C2%A0 %C2%A0 %C2%A0 %C2%A0 var encodedUrl = encodeURIComponent(url);%C2%A0 %C2%A0 %C2%A0 %C2%A0 var iframeUrl = "https://techo.artitech.com/~uv/" + encodedUrl;%C2%A0 %C2%A0 %C2%A0 %C2%A0 var win = window.open('', '_blank');%C2%A0 %C2%A0 %C2%A0 %C2%A0 win.document.write('<iframe src="' + iframeUrl + '" style="width:100%; height:100%; border:none;"></iframe>');%C2%A0 %C2%A0 %C2%A0 %C2%A0 win.document.close();%C2%A0 %C2%A0 }})();`
