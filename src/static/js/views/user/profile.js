!function (window,$,nbrut, undefined) {
	var profile = $('.user-profile-link');
    nbrut.tt.templateLinks(profile);

    function prepare(render, data){
        nbrut.thin.get('user',{
            id: data.id,
            then: function(data){
                var user = data.user;
                render(user, user === null);
            }
        });
    }

    nbrut.tt.configure({
        key: 'user-profile',
        prepare: prepare
    })
}(window,jQuery,nbrut);