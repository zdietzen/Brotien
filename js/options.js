$(function () {
    chrome.storage.sync.get('goal', function (items){
        $('#goal').val(items.goal);
  
   }); 
    
    $('#save').click(function (){
        var goal = $('#goal').val();
        if (goal) {
            chrome.storage.sync.get({'goal' : goal}, function(){
                close();
            });
        }
    });
    
    $('#reset').click(function (){
        chrome.storage.sync.set({'total': 0 });
            close(); 
    });
});  