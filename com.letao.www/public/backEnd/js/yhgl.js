
$(function(){




    // 获取呈现数据
    var getUserManageData = function(pageNum){
        $.ajax({
            type:'get',
            url: '/user/queryUser',
            data: {
                page: pageNum||1,
                pageSize: 5
            },
            success:function(data){
                // console.log(data);
                var UserManageList = template('usermanage-template',data);
                // 把拿到的数据添加到页面中
                $('table tbody').html(UserManageList);
            }
        })
    }

    getUserManageData();
})

   