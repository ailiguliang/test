
(function ($) {
    $.zTuijianDesigner = {
        active : function (options) {
            var defaults = {
                pageSize:$.noop(),
                renderRelatedSuccessTpl: function () {
                    $.noop();
                }
            };
            var sets = $.extend(defaults, options || {});
            // 动态的推荐作品
            
            if(!$('#related-like').length){
                return false;
            }
            var url = proMainZDomain +"/recommend/contentRecommend?pageSize=" + sets.pageSize;
            var active = "";
            // cookie记录是否第一次刷新；
            if($('nav div.menu-box > ul > li.current > a').attr('z-st') == "nav_tab_home"){
                // 首页记录cookie
                active = $('nav div.menu-box > ul > li.current > a').attr('z-st');
            }else{
                // 动态页记录的cookie;
                active = "active";
            }
            $.cookie(active, 1,{expires: 30, path: '/', domain: '.' + zRootDomain});
            var activeapp = getCookieKey(active);
            var activeDay = decodeURIComponent(getCookieKey('activeDay'));
            if(activeapp && (activeDay && activeDay != "null")){
                url += "&" + activeDay
            }
            $('#related-like').html(LoaddingDom);
            $.ajax({
                type: "GET",
                url: url,
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                },
                dataType: "json",
                success: function (data) {
                  if (data.code == 0) {
                    return sets.renderRelatedSuccessTpl(data)
                  }else{
                    $('#related-like').html('')
                  }
                },
                error: function () {
                  console.error("error_" + err);
                }
            })
        },
        tuijianFollowDesigner: function (options) {
            // 推荐关注设计师；  【动态的推荐设计师】
            var defaults = {
                renderRelatedSuccessTpl: function () {
                    $.noop();
                }
            };
            var sets = $.extend(defaults, options || {});
            var url = proMainZDomain + "/user/recommend?pageSize=8";
            $.ajax({
                type: "GET",
                url: url,
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                },
                dataType: "json",
                success: function (data) {
                  if (data.code == 0) {
                    return sets.renderRelatedSuccessTpl(data)
                  }
                },
                error: function (err) {
                  console.error("error_" + err);
                }
            })
        }
    }
})(jQuery)