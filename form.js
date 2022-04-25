function callAjax(payload){
    //- formSelector
    //- portalId
    //- formGUID
    //- hideMessageTime
    //- callback
    //
    var $form = $(payload.formSelector);
    var form = $form[0];
    var url = "https://api.hsforms.com/submissions/v3/integration/submit/" + payload.portalId + "/" + payload.formGUID
    //
    showLoader();
    //
    $.ajax({
        type: 'POST',
        url: $form.attr('action') || url, // use the form's action attribute as the endpoint
        data: JSON.stringify({
            fields: data  // use the data from the form
        }), 
        dataType: "json",
        headers: {
            'Accept': 'application/json', // this makes the server send you a JSON response
            'Content-Type': 'application/json' 
        },
        success: function (response) // handle the successful submission of your POST
        {
            console.log(response) // response contains the form submission that was just made
            // alert("Thank you for your submission, we'll get back to you soon :)");
            form.reset() // reset the form
            hideLoader();
            showSuccessMessage();
        },
        error: function (response) {
            hideLoader();
            showErrorMessage();
        },
        complete: function (response) {
            form.reset();
            hideLoader();
            
            if(payload.callback){
                payload.callback();
            }
            
            setTimeout(function () {
                hideMessage();
            }, payload.hideMessageTime || 5000)
        }
    });


    function showLoader(){

    }

    function hideLoader(){

    }

    function showSuccessMessage(){

    }

    function showErrorMessage(){

    }

    function hideMessage(){

    }
}