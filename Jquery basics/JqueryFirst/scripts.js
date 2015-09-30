(function() {
    var dd = $('dd');
    dd.filter(':nth-child(n+4)').addClass('hide');
    $('dl').on('mouseenter', 'dt', function() {
        $(this).next()
            .slideDown()
            .siblings('dd')
            .slideUp(200);
    });

})();

(function() {
    //To attach event we can call on/bind/live method
    /*$('h1').on('click',function(){
    	$(this).clone(true).appendTo('body');
    });*/
    /*$('h1').bind('click', function() {
    	$(this).clone(true).appendTo('body');
    });*/
   /* $('h1').bind('click', function() {
        $(this).clone(true).appendTo('body');
    });*/
    $('div.container').delegate('h1', 'click', function() {
        $(this).clone().appendTo('.container');
    });
})();
