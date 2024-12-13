var Toast = (function () {      
    function Alert(type, title){
        Swal.fire({
            icon: type,
            title: title,
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            customClass: {
                container: 'hpopup',
            }
        })
    }    
    function Toastmmulti(title){
        Toastify({
            text: title,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "white",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }

    function ToastModel(title = '', button = ''){
        const $this = $('.loading-model')
        if(title == ''){
            $this.removeClass('show')
            $('.label-loading_text').text(title)
        } else {
            $('.label-loading_text').text(title)
            $this.addClass('show')
            if(button == ''){
                $('.label-loading_btn').addClass('dis-none')
            }else{
                $('.label-loading_btn').text(button)
                $('.label-loading_btn').addClass('dis-none')
            }
        }
    }
    function Error(title){
        Toastify({
            text: `<div aria-labelledby="swal2-title" aria-describedby="swal2-html-container" class="swal2-popup swal2-toast swal2-icon-error swal2-show" tabindex="-1" role="alert" aria-live="polite" style="width: 100%;display: grid;box-shadow: unset;padding: 0;background: unset!important;"><button type="button" class="swal2-close" aria-label="Close this dialog" style="display: none;">×</button><ul class="swal2-progress-steps" style="display: none;"></ul><div class="swal2-loader"></div><div class="swal2-icon swal2-error swal2-icon-show" style="display: flex;"><span class="swal2-x-mark">
                        <span class="swal2-x-mark-line-left"></span>
                        <span class="swal2-x-mark-line-right"></span>
                    </span>
                    </div>
                    <h2 class="swal2-title" id="swal2-title" style="display: block;">
                        ${title}
                    </h2>
                    </div></div>`, 
            newWindow: true,
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "white",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }
    function Success(title){
        Toastify({
            text: `<div aria-labelledby="swal2-title" aria-describedby="swal2-html-container" class="swal2-popup swal2-toast swal2-icon-error swal2-show" tabindex="-1" role="alert" aria-live="polite" style="width: 100%;display: grid;box-shadow: unset;padding: 0;background: unset!important;"><button type="button" class="swal2-close" aria-label="Close this dialog" style="display: none;">×</button><ul class="swal2-progress-steps" style="display: none;"></ul><div class="swal2-loader"></div>
            <div class="swal2-icon swal2-success swal2-icon-show" style="display: flex;"><div class="swal2-success-circular-line-left" style="background-color: rgb(255, 255, 255);"></div>
            <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
            <div class="swal2-success-ring"></div> <div class="swal2-success-fix" style="background-color: rgb(255, 255, 255);"></div>
            <div class="swal2-success-circular-line-right" style="background-color: rgb(255, 255, 255);"></div>
          </div> 
                    <h2 class="swal2-title" id="swal2-title" style="display: block;">
                        ${title}
                    </h2>
                    </div></div>`, 
            newWindow: true,
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "white",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }

    function Info(title){
        Toastify({
            text: `
        <div aria-labelledby="swal2-title" aria-describedby="swal2-html-container" class="swal2-popup swal2-toast swal2-icon-error swal2-show" tabindex="-1" role="alert" aria-live="polite" style="width: auto;display: grid;box-shadow: unset;padding: 0;background: unset!important;">
            <div class="swal2-loader"></div>
                <div class="swal2-icon swal2-info swal2-icon-show" style="display: flex;"><div class="swal2-icon-content">i</div></div>
                    <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
                    <div class="swal2-success-ring"></div> <div class="swal2-success-fix" style="background-color: rgb(255, 255, 255);"></div>
                    <div class="swal2-success-circular-line-right" style="background-color: rgb(255, 255, 255);"></div>
                </div> 
                <h2 class="swal2-title" id="swal2-title" style="display: block; padding: 0;">
                    ${title}
                </h2>
            </div>
        </div>`, 
            newWindow: true,
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "white",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }

    //Toast.Info
    return {
        Alert:Alert,
        Toastmmulti:Toastmmulti,
        ToastModel:ToastModel,
        Error:Error,
        Success:Success,
        Info:Info,
    }
})();

var Alert = (function () {      
   
    function Toastmmulti(title){
        Toastify({
            text: title,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "white",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }
    
    //Alert.Toastmmulti
    return {
        Toastmmulti:Toastmmulti,
    }
})();