var arr = location.pathname.split('/');
var pathname = arr[arr.length-1];
document.writeln("<div class=\'navBox\'>");
document.writeln("  <div class=\'eleft\'>");
document.writeln("    <div class=\'logobox\'>");
document.writeln("      <img src=\'../assets/images/eicon1.png\' alt=\'\'>");
document.writeln("    </div>");
document.writeln("    <div class=\'logotextbox\'>");
document.writeln("			<img class=\'white\' src=\'../assets/images/eInWeCrypto-logo.png\' alt=\'\'>");
document.writeln("    	<img class=\'black\' src=\'../assets/images/logo_Navigationbar.png\' alt=\'\'>");
document.writeln("		</div>");
document.writeln("  </div>");
document.writeln("  ");
document.writeln("  <div class=\'eright mView\'>");
document.writeln("  	<span class=\'openMenu\'>");
document.writeln("<img class=\'white\' src=\'../assets/images/menu.png\' />");
document.writeln("  		<img class=\'black\' src=\'../assets/images/menu-black.png\' />");
document.writeln("  	</span>");
document.writeln("    <div class=\'sub\'>");
document.writeln("    	<span class=\'closeMenu\'>");
document.writeln("    		<img src=\'../assets/images/sub_close.png\'/>");
document.writeln("    	</span>");
document.writeln("    	<ul>");
document.writeln("    		<li class=\'index\'><a href=\'../en/index.html\'>HOME</a></li>");
document.writeln("    		<li class=\'home\'><a href=\'../en/home.html\'>DOWNLOAD</a></li>");
document.writeln("    		<li><a href=\'../en/" + pathname + "\'>English</a></li>");
document.writeln("    		<li><a href=\'../zh/" + pathname + "\'>中文</a></li>");
document.writeln("    	</ul>");
document.writeln("    </div>");
document.writeln("  </div>");
document.writeln("  ");
document.writeln("  <div class=\'eright pcView\'>");
document.writeln("    <div onClick=" + "location.href=" + "'../en/index.html' class=\'index\'>HOME</div>");
document.writeln("    <div onClick=" + "location.href=" + "'../en/home.html' class=\'home\'>DOWNLOAD</div>");
/*document.writeln("    <div class=\'contact\'>CONTACT</div>");*/
document.writeln("    <div class=\'langChange\'>LANGUAGE");
document.writeln("      <span class=\'langBox\'>");
document.writeln("        <p onClick=" + "location.href=" + "'../en/" + pathname + "'>ENGLISH</p>");
document.writeln("        <p onClick=" + "location.href=" + "'../zh/" + pathname + "'>中文</p>");
document.writeln("      </span>");
document.writeln("    </div>");
document.writeln("  </div>");
document.writeln("</div>");

$(function(){
	var menuMap = {'home':'index','download':'home'};
	Object.keys(menuMap).forEach(function(item){
		if(new RegExp(item).test(location.pathname)){
			$(".navBox ."+menuMap[item]).addClass("active");
		}
	})
})