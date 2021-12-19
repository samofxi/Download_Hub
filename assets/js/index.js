function download_files(files,filename) {
    function download_next(i) {
        var element = document.createElement('a');
        element.setAttribute('href', files[i]);
      
        element.style.display = 'none';
        document.body.appendChild(element);
      
        element.click();
      
        document.body.removeChild(element);
      // Download the next file with a small timeout. The timeout is necessary
      // for IE, which will otherwise only download the first file.
      setTimeout(function() {
        download_next(i + 1);
      }, 500);
      if(files.length()== i){
        document.getElementById("Downloading-notification").innerHTML="Done!";
        location.reload();
      }
    }
    // Initiate the first download.
    download_next(0);

  }

 function download(){

    $ondelete = $(".table .url_data");
    let id = $ondelete.attr('data-id');

    var request = {
        "url": `https://samo-dh.herokuapp.com/api/d?id=${id}`,
        "method": "GET"
    }; 

    $.ajax(request).done(function(response){
        try{
            download_files(response.longUrl,response.FileName);
            document.getElementById("Downloading-notification").innerHTML="downloading is started!";
        }catch (err){
            console.log(err);
        }
    })


};
