function getUrlVars(param=null)
{
  if(param !== null)
	{
	  var vars = [], hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for(var i = 0; i < hashes.length; i++)
		{
			hash = hashes[i].split('=');
		  vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
			
    return vars[param];
    var idArticle = getUrlVars("open");
  }else{
	  return null;
    var idArticle = "home";
  }
}

$.ajax({
			url : 'https://conn.alisita.my.id/article/babulihsan/open/',
			method : 'post',
			data : {
				'idArticle' : idArticle
			},
			success : function(load){
        $('#show').html(load);
      }
});
