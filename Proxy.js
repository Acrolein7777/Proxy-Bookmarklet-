javascript:(function(){%C2%A0 %C2%A0 var url = prompt("Acrolein on top v1.0.1\nEnter URL:");%C2%A0 %C2%A0 if (url != null) {%C2%A0 %C2%A0 %C2%A0 %C2%A0 var encodedUrl = encodeURIComponent(url);%C2%A0 %C2%A0 %C2%A0 %C2%A0 var iframeUrl = "https://techo.artitech.com/~uv/" + encodedUrl;%C2%A0 %C2%A0 %C2%A0 %C2%A0 var win = window.open('', '_blank');%C2%A0 %C2%A0 %C2%A0 %C2%A0 win.document.write('<iframe src="' + iframeUrl + '" style="width:100%; height:100%; border:none;"></iframe>');%C2%A0 %C2%A0 %C2%A0 %C2%A0 win.document.close();%C2%A0 %C2%A0 }})();
