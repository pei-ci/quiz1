function append_change_button(){
		var btn = document.createElement("BUTTON");   
		btn.innerHTML = "Change this document"; 
		document.body.appendChild(btn);
		btn.addEventListener("click", change);
	}
function change(){
	  var header = document.getElementById("cgu");             
	  header.innerHTML = "CSIE@CGU";
	  var list = document.getElementById('list');
	  var ref = document.getElementById("try_it");
	  var soGood = document.createElement('p');
	  soGood.id = 'soGood';
	  soGood.innerText = "怎麼那麼棒！！.";
	  list.insertBefore(soGood, ref)
	}