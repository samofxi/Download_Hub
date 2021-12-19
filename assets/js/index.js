document.getElementById("mybtn").innerHTML="Download all Files";
function download_files(files,filename,url) {
    function download_next(i) {
      for(var i = 0; i < files.length; i++){}
      var element = document.createElement('a');
      element.setAttribute('href', files[i]);
      element.style.display = 'none';
      document.body.appendChild(element);
      console.log(i);
      element.click();
      
      document.body.removeChild(element);
      // Download the next file with a small timeout. The timeout is necessary
      // for IE, which will otherwise only download the first file.

        setTimeout(function() {
          download_next(i + 1);
        }, 500);
    }
    // Initiate the first download.
    download_next(0);

  };

 function download(){
    $ondelete = $(".table .url_data");
    let id = $ondelete.attr('data-id');
    document.getElementById("mybtn").innerHTML="Downloading started...";

    var request = {
        "url": `https://samo-dh.herokuapp.com/api/d?id=${id}`,
        "method": "GET"
    }; 

    $.ajax(request).done(function(response){
        try{

          download_files(response.longUrl,response.FileName,`https://samo-dh.herokuapp.com/api/d?id=${id}`);
            
        }catch (err){
            console.log(err);
        }
    })


};
