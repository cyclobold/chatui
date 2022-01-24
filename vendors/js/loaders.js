function startLoader(){

    let modal = `<div class="modal border-0" tabindex="-1" id="spinning-loader-id" style='background: transparent;'>
                    <div class="modal-dialog border-0" style='background: transparent;'>
                    <div class="modal-content border-0" style='background: transparent;'>
    
                        <div class="modal-body text-center text-white d-flex justify-content-center mt-5" style='background: transparent;'>
                                <div class="spinner-border" role="status">
                                    <span class="sr-only text-success">Loading...</span>
                                </div>
                        </div>
                    </div>
                    </div>
                </div>`;

    loadingDiv = document.createElement("div");
    loadingDiv.id = "spinning-modal";
    document.body.appendChild(loadingDiv);

    document.querySelector("#spinning-modal").innerHTML = modal;

    $("#spinning-loader-id").modal('show');




}


function stopLoader(){

    $("#spinning-loader-id").modal('hide');

}


function startPreChatLoader(duration, redirectTo = null){

    let modal = `<div class="modal border-0" tabindex="-1" id="prechat-loader-id" style='background: transparent;'>
    <div class="modal-dialog border-0" style='background: transparent;'>
    <div class="modal-content border-0" style='background: transparent;'>

        <div class="modal-body text-center text-white d-flex justify-content-center mt-5" style='background: transparent;'>
            <div class='text-center'>Loading Chat Interface ...</div>    
            <div class="spinner-border" role="status">
                    <span class="sr-only text-success">Loading...</span>
                </div>
        </div>
    </div>
    </div>
</div>`;


loadingDiv = document.createElement("div");
loadingDiv.id = "prechat-modal";
document.body.appendChild(loadingDiv);

document.querySelector("#prechat-modal").innerHTML = modal;

let counter = 0;
prechat_interval = setInterval(function(){
    $("#prechat-loader-id").modal('show');

    counter = counter + 1;
    console.log(counter);
    if(counter == 5){
        clearInterval(prechat_interval);
        $("#prechat-loader-id").modal("hide");
        
    }
}, duration);

$("#prechat-loader-id").on("hidden.bs.modal", function(){
   
    if(redirectTo != null){
        location.href= redirectTo;
    }

});


}