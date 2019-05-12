var xmlhttp;
var trackertext = document.getElementById("trackertext");
var icos = document.getElementById("icos");
var butims= document.getElementById('modal-coupon');
	 function butim(){
	fadeIn(butims);
	 }
	  function closes(){
     butims.style.display='none';
	 }
function loadXMLDoc(url) {
				xmlhttp = null;
				if(window.XMLHttpRequest) { // code for Firefox, Opera, IE7, etc.
					xmlhttp = new XMLHttpRequest();
				} else if(window.ActiveXObject) { // code for IE6, IE5
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}
				if(xmlhttp != null) {
					xmlhttp.onreadystatechange = state_Change;
					xmlhttp.open("GET", url, true);
					xmlhttp.send(null);
				} else {
					alert("Your browser does not support XMLHTTP.");
				}
			}

			function state_Change() {
				if(xmlhttp.readyState == 4) { // 4 = "loaded"
					if(xmlhttp.status == 200) { // 200 = "OK" 
						var ch = "announce";
						var reg = "/" + ch + "/g";
						var ckok = "announce,";
						var aria2text = xmlhttp.responseText;
						var teix=aria2text.split(ch),
						aria2text = aria2text.replace(/\s/g, "");
						var aria2text_ok = aria2text.replace(eval(reg), ckok);
						aria2text_ok = aria2text_ok.substring(0, aria2text_ok.length - 1);
						trackertext.innerHTML = aria2text_ok;
						if(icos.innerText==="0")
						{
							icos.innerText=teix.length-1;
							fadeIn(icos);
						}
					   else{
					    	icos.innerText=teix.length-1;
					   }
						
					} else {
						trackertext.innerHTML = "Github源站点访问出错";
					}
				}
			}
			function copyUrl2() {
				var trackercopy = document.getElementById("trackercopy");
				trackertext = document.getElementById("trackertext");
				var bucopy = document.getElementById("bucopy");
				trackercopy.value = trackertext.innerText;
			   console.log(trackercopy.value)
				trackercopy.select();
				document.execCommand("Copy", "false",null);
				bucopy.value = '已复制好，可贴粘';
				setTimeout(function() {
						bucopy.value = '点击复制'
					},
					3000);
			}
			
			function fadeIn(el) {
                  el.style.opacity = 0;
                  el.style.display="";
                
                  var last = +new Date();
                  var tick = function() {
                    el.style.opacity = +el.style.opacity + (new Date() - last)/800;
                    last = +new Date();
                    if (+el.style.opacity < 1) {
                      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
                    }
                  };
                  tick();
                }
