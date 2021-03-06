!function (window,$,nbrut,undefined) {
    'use strict';

    var input = $('.search-input'),
        button = $('.search-button');

    button.on('click', function(){
        search();
    });

    input.on('keypress', function(e){
        if(e.which === 13){
            search();
        }
    });

    function search(){
        var keywords = input.val().trim();
        if (keywords.length !== 0){
            var route = nbrut.tt.getRoute('/search/' + keywords);
            nbrut.tt.activateRoute(route);
        }else{
            nbrut.tt.activate('home');
        }
    }

    nbrut.tt.hook('beforeActivate', function(template,settings){
        if(template.key === 'home' && settings.key === 'search'){
            input.val(settings.data.terms);
        }else{
            input.val(''); // clear before switching to other templates
        }
    });
}(window,jQuery,nbrut);