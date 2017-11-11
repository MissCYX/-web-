// 该文件的功能是用来写首页的js交互的


// 进度条
NProgress.configure({ showSpinner: false});

$(window).ajaxStart(function(){
    NProgress.start();
})

$(window).ajaxComplete(function(){
    NProgress.done();
})



// 点击导航左侧按钮，让侧边切换隐藏与显示
// [data-menu]:属性选择器
// var cc = $('[data-menu]');
// console.log(cc);


$('.navCaidan').on('click',function(){
    // toggle()切换
    $('.ad_aside').toggle();
})


// 点击分类管理，滑出菜单
$('.ad_aside .menu .fenlei').on('click',function(){
    // var _this = $(this);
    // var child =  _this.children();
    $('.fenlei .child').slideToggle();
    // child.slideToggle();
})

// 按下确定按钮，发送ajax请求，跳转
$('.modal-footer .btn-primary').on('click',function(){
    console.log('1');
    $.ajax({
        type:'get',
        url:'/employee/employeeLogout',
        data:{},
        dataType:'json',
        success:function(data){
            setTimeout(function(){
                if(data.success){
                    // 隐藏模态框
                    location.herf = 'login.html'
                }
            },500);
        }
    })
})