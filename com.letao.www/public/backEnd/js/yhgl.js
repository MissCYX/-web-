
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
                console.log(data);
            }
        })
    }

    getUserManageData();
})

   