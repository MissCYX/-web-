$(function () {
  // 获取数据列表
  var getSecondData = function (pageNum) {
    $.ajax({
      type: 'get',
      url: '/category/querySecondCategoryPaging',
      data: {
        page: pageNum||1,
        pageSize: 5
      },
      dataType: 'json',
      success: function (data) {
        // console.log(data);
        var secondResult = template('second-template',data);
        $('tbody').html(secondResult);

        $('.pagination').bootstrapPaginator({
          /*当前使用的是3版本的bootstrap*/
          bootstrapMajorVersion: 3,
          /*配置的字体大小是小号*/
          size: 'small',
          /*当前页*/
          currentPage: data.page,
          /*一共多少页*/
          // 总页数=数据的总数/每页显示多少条数据
          totalPages: Math.ceil(data.total / data.size),
          /*点击页面事件*/
          onPageClicked: function (event, originalEvent, type, page) {
            /*改变当前页再渲染 page当前点击的按钮的页面*/
            getSecondData(page);
          }
        });








      }
    })
  }

  getSecondData();



// 点击请选择按钮，获取数据，添加到ul中
$('#dLabel').on('click',function(){
  // 获取数据列表
  $.ajax({
    type:'get',
    url:'/category/queryTopCategoryPaging',
    data:{
      page:1,
      pageSize:100
    },
    dataType:'json',
    success:function(data){
      var html = '';
      $(data.rows).each(function(i,item){        
        html  += '<li><a herf="javascript:;">'+item.categoryName+'</a></li>';
      })
      $('.dropdown-menu').html(html);
     
      
    }
  })
  // 点击ul列表时，替换button内容
  $('.dropdown-menu').on('click','a',function(){
    $('#dLabel').html(this.innerText);
  })
})

// 上传图片
// baidu查看中文文档
$("#secondupload").fileupload({
  url:'/category/addSecondCategoryPic',
  done:function(e,data){
    console.log(data);
    $('#previewimg').attr('src',data.result.picAddr);
    $('#brandLogo').val(data.result.picAddr);
  }
})




// 点击确定按钮，验证表单

$('#secondform').bootstrapValidator({
  feedbackIcons: {
    valid: 'glyphicon glyphicon-ok',
    invalid: 'glyphicon glyphicon-remove',
    validating: 'glyphicon glyphicon-refresh'
  },
  fields: {
    // 字段名是name属性的值
    brandName: {
      validators: {
        notEmpty: {
          message: '二级分类不能为空'
        }
      }
    }
  }
}).on('success.from.bv',function(e){
// 表单验证成功时
// 点击确定按钮，发送表单
e.preventDefault();
var $form = $(e.target);
console.log($from);
var bv = $form.data('bootstrapValidator');
var data = $form.serialize();
console.log(data)
$.ajax({
  type:'post',
  url:'/category/addSecondCategory',
  data:data,
  success:function(data){
    console.log(data);
  }
})
})






















})