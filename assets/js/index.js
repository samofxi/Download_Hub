$("#add_user").submit(function(event){
    alert("Data Inserted Successfully!");
})

$("#update_user").submit(function(event){
    event.preventDefault();
    var unindexed_array=$(this).serializeArray();
    var data= {};
    $.map(unindexed_array,function(n,i){
        data[n['name']]= n['value']

    })
    console.log(data);
    var request = {
        "url": `http://localhost:5000/api/users/${data.id}`,
        "method": "PUT",
        "data": data
    }; 

    $.ajax(request).done(function(response){
        alert("data updated successfully");
    });
})

if(window.location.pathname == "/"){

    $ondelete = $(".table tbody .delete")
    $ondelete.click(function(){
        var id = $(this).attr('data-id');
        var request = {
            "url": `http://localhost:5000/api/users/${id}`,
            "method": "DELETE"
        }; 
        
    if(confirm("are you really want to delete this record? This can't be recoved agian!")){
        $.ajax(request).done(function(response){
            alert("data deleted successfully");
            location.reload();
        })
    };


    });

};
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
      if(files.length == i ){
        location.reload();
        alert('downloading files is done!')
      }
    }
    // Initiate the first download.
    download_next(0);
  }

 function download(){

    $ondelete = $(".table .url_data");
    let id = $ondelete.attr('data-id');

    var request = {
        "url": `http://localhost:5000/api/d?id=${id}`,
        "method": "GET"
    }; 

    $.ajax(request).done(function(response){
        try{
            download_files(response.longUrl,response.FileName);
        }catch (err){
            console.log(err);
        }
    })
};
