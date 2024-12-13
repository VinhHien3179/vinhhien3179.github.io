// (function($) {})(jQuery);

var MainJs = (function () {    
    const makeid = (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }
    
    const loadPage = (view)=> {
        axiosView.get(`/page/${view}.html`, function(htmlView){
            $('.clssNav').removeClass('active');
            $(`.clssNav[data-name="${view}"]`).addClass('active');
            $('#container-content').html(htmlView)
            //const strVer = makeid(5)
            //$('#activeJs').attr('src','js/default-assets/active.js?v='+strVer)
        })
    }

    //MainJs.loadPage(Console.getTwoDigits())
    return {
        loadPage: loadPage,
    }
})();

