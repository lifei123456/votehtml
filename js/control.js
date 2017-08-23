/**
 * Created by LiFei on 2017/4/9.
 */
var arr_Name = new Array();
var arr_Value = new Array();
var arr_Url = new Array();
var arr_Name_selected = new Array();
var arr_Value_selected = new Array();
var arr_Url_selected = new Array();
var arr_Name_del =new Array();
var num=0;
var data=
    [
        {name:'1',value:'0'},
        {name:'6101',value:'西安市'},
        {name:'6102',value:'铜川市'},
        {name:'6103',value:'宝鸡市'},
        {name:'6104',value:'咸阳市'},
        {name:'6105',value:'渭南市'},
        {name:'6106',value:'延安市'},
        {name:'6107',value:'汉中市'},
        {name:'6108',value:'榆林市'},
        {name:'6109',value:'安康市'},
        {name:'6110',value:'商洛市'},
        {name:'6111',value:'西安市'},
        {name:'6112',value:'铜川市'},
        {name:'6113',value:'宝鸡市'},
        {name:'6114',value:'咸阳市'},
        {name:'6115',value:'渭南市'},
        {name:'6116',value:'延安市'},
        {name:'6117',value:'汉中市'},
        {name:'6118',value:'榆林市'},
        {name:'6119',value:'安康市'},
        {name:'6120',value:'商洛市'},
        {name:'6121',value:'西安市'},
        {name:'6122',value:'铜川市'},
        {name:'6123',value:'宝鸡市'},
        {name:'6124',value:'咸阳市'},
        {name:'6125',value:'渭南市'},
        {name:'6126',value:'延安市'},
        {name:'6127',value:'汉中市'},
        {name:'6128',value:'榆林市'},
        {name:'6129',value:'安康市'},
        {name:'6130',value:'商洛市'},
        {name:'6131',value:'西安市'},
        {name:'6132',value:'铜川市'},
        {name:'6133',value:'宝鸡市'},
        {name:'6134',value:'咸阳市'},
        {name:'6135',value:'渭南市'},
        {name:'6136',value:'延安市'},
        {name:'6137',value:'汉中市'},
        {name:'6138',value:'榆林市'},
        {name:'6139',value:'安康市'},
        {name:'6140',value:'商洛市'},
        {name:'6141',value:'西安市'},
        {name:'6142',value:'铜川市'},
        {name:'6143',value:'宝鸡市'},
        {name:'6144',value:'咸阳市'},
        {name:'6145',value:'渭南市'},
        {name:'6146',value:'延安市'},
        {name:'6147',value:'汉中市'},
        {name:'6148',value:'榆林市'},
        {name:'6149',value:'安康市'},
        {name:'6150',value:'商洛市'},
        {name:'6151',value:'西安市'},
        {name:'6152',value:'铜川市'},
        {name:'6153',value:'宝鸡市'},
        {name:'6154',value:'咸阳市'},
        {name:'6155',value:'渭南市'},
        {name:'6156',value:'延安市'},
        {name:'6157',value:'汉中市'},
        {name:'6158',value:'榆林市'},
        {name:'6159',value:'安康市'},
        {name:'6160',value:'商洛市'},
        {name:'6161',value:'西安市'},
        {name:'6162',value:'铜川市'},
        {name:'6163',value:'宝鸡市'},
        {name:'6164',value:'咸阳市'},
        {name:'6165',value:'渭南市'},
        {name:'6166',value:'延安市'},
        {name:'6167',value:'汉中市'},
        {name:'6168',value:'榆林市'},
        {name:'6169',value:'安康市'},
        {name:'6170',value:'商洛市'},
        {name:'6101',value:'西安市'},
        {name:'6102',value:'铜川市'},
        {name:'6103',value:'宝鸡市'},
        {name:'6104',value:'咸阳市'},
        {name:'6105',value:'渭南市'},
        {name:'6106',value:'延安市'},
        {name:'6107',value:'汉中市'},
        {name:'6108',value:'榆林市'},
        {name:'6109',value:'安康市'},
        {name:'6110',value:'商洛市'},
        {name:'6111',value:'西安市'},
        {name:'6112',value:'铜川市'},
        {name:'6113',value:'宝鸡市'},
        {name:'6114',value:'咸阳市'},
        {name:'6115',value:'渭南市'},
        {name:'6116',value:'延安市'},
        {name:'6117',value:'汉中市'},
        {name:'6118',value:'榆林市'},
        {name:'6119',value:'安康市'},
        {name:'6120',value:'商洛市'},
        {name:'6121',value:'西安市'},
        {name:'6122',value:'铜川市'},
        {name:'6123',value:'宝鸡市'},
        {name:'6124',value:'咸阳市'},
        {name:'6125',value:'渭南市'},
        {name:'6126',value:'延安市'},
        {name:'6127',value:'汉中市'},
        {name:'6128',value:'榆林市'},
        {name:'6129',value:'安康市'},
        {name:'6130',value:'商洛市'},
        {name:'6131',value:'西安市'},
        {name:'6132',value:'铜川市'},
        {name:'6133',value:'宝鸡市'},
        {name:'6134',value:'咸阳市'},
        {name:'6135',value:'渭南市'},
        {name:'6136',value:'延安市'},
        {name:'6137',value:'汉中市'},
        {name:'6138',value:'榆林市'},
        {name:'6139',value:'安康市'},
        {name:'6140',value:'商洛市'},
        {name:'6141',value:'西安市'},
        {name:'6142',value:'铜川市'},
        {name:'6143',value:'宝鸡市'},
        {name:'6144',value:'咸阳市'},
        {name:'6145',value:'渭南市'},
        {name:'6146',value:'延安市'},
        {name:'6147',value:'汉中市'},
        {name:'6148',value:'榆林市'},
        {name:'6149',value:'安康市'},
        {name:'6150',value:'商洛市'},
        {name:'6151',value:'西安市'},
        {name:'6152',value:'铜川市'},
        {name:'6153',value:'宝鸡市'},
        {name:'6154',value:'咸阳市'},
        {name:'6155',value:'渭南市'},
        {name:'6156',value:'延安市'},
        {name:'6157',value:'汉中市'},
        {name:'6158',value:'榆林市'},
        {name:'6159',value:'安康市'},
        {name:'6160',value:'商洛市'},
        {name:'6161',value:'西安市'},
        {name:'6162',value:'铜川市'},
        {name:'6163',value:'宝鸡市'},
        {name:'6164',value:'咸阳市'},
        {name:'6165',value:'渭南市'},
        {name:'6166',value:'延安市'},
        {name:'6167',value:'汉中市'},
        {name:'6168',value:'榆林市'},
        {name:'6169',value:'安康市'},
        {name:'6170',value:'商洛市'},


    ];
var in_all,in_now=1;
$(function () {
    for(var s in data){//遍历json数组时，这么写p为索引，0,1
        //alert(json[p].name + " " + json[p].value);
        arr_Name.push(data[s].name);
        arr_Value.push(data[s].value);
        //$("#in").append("<tr class='success'><td>"+json[p].name+"</td><td>"+json[p].value+"</td> </tr>");
    };
    for(j=num;j<num+15;j++){
        $("#in").append("<tr class='success'><td>"+arr_Name[j]+"</td><td class='openid'>"+arr_Value[j]+"</td><td class='check'>" +
            "<a  style='float: right' class='check'>查看</a></td><td><a  style='float: right' class='del-all' id="+j+">删除</a></td> </tr>");
    }

    in_all=parseInt((arr_Name.length)/15)+1;
    //alert(in_all);
    $("#page1").html(in_now+"/"+in_all);

});
$(function () {
    for(var s in data){//遍历json数组时，这么写p为索引，0,1
        arr_Name.push(data[s].name);//把数据放入数组中
        arr_Value.push(data[s].value);//把数据放入数组中
    }
    for(j=num;j<num+15;j++){
        $("#in").append("<tr class='success'><td>"+arr_Name[j]+"</td><td class='openid'>"+arr_Value[j]+"</td><td class='check'>" +
            "<a  style='float: right' class='check'>查看</a></td><td><a  style='float: right' class='del-all' id="+j+">删除</a></td> </tr>");
    }//for循环把数据添加到表格中
    in_all=parseInt((arr_Name.length)/15)+1;//假设每页15条数据，arr_Name.length为数据的条数，如果不能整除就会显示不完全，+1是为了让数据完全显示
    $("#page").html(in_now+"/"+in_all);//当前页数in_now，总页数in_all，显示为  1/n
});
$("#in-back").click(
    function () {
        if(in_now>1){
            $(".success").remove();
            $(".del").remove();
            in_now--;
            num=num-15;
            for(j=num;j<num+15;j++){
                if(typeof(arr_Name[j])!=="undefined"){
                        $("#in").append("<tr class='success'><td>"+arr_Name[j]+"</td><td class='openid'>"+arr_Value[j]+
                            "</td><td  class='check'><a  style='float: right' class='check'>查看</a></td><td> <a  style='float: right' id="+j+">删除</a></td> </tr>");
            }
            }
            $("#page1").html(in_now+"/"+in_all);
        }else {
            alert("到顶了")
        }
        //alert(num);

    }
);
$("#in-next").click(
    function () {
        if(in_now<=in_all) {
            $(".success").remove();
            $(".del").remove();
            in_now++;
            num = num + 15;
            for (j = num; j < num + 15; j++) {
                if (typeof(arr_Name[j]) !== "undefined") {

                    $("#in").append("<tr class='success'><td>" + arr_Name[j] + "</td><td class='openid'>" + arr_Value[j] +
                        "</td><td  class='check'><a  style='float: right' class='check'>查看</a></td><td> <a  style='float: right' id=" + j + ">删除</a>&nbsp; &nbsp;</td> </tr>");
                    $("#page1").html(in_now + "/" + in_all);
                    //alert(num);
                }
            }
        }else {
                alert("到底了")
            }
        });


window.now=1;
$("#submit").click(
    function () {
       var TotalFinal=  $("#num").val();
      // //alert(TotalFinal);
       window.PageFinal=parseInt(TotalFinal/15)+1;
      // //alert(PageFinal);
      $("#page2").html(now+"/"+PageFinal);
      //   var arrIndex = Math.floor(Math.random()*arr_Name.length);
        //alert(arrIndex)
       // $("#out").append("<tr class='success' onclick='bd()'><td>"+arr_Name[arrIndex]+"</td><td>"+arr_Value[arrIndex]+"<a>删除</a></td> </tr>");
        $(".hid").css("display","none");
        $(".span4").css("display","");
        $(".span6").css("display","");
    }
);

$("#img-del").click(
    function () {
        $("#img-all").css("display","none");
        $("#mu").css("display","none");
    }
);
$(".back").click(
    function () {
        if(now<=1){
            alert("前面没有了！");
        }else {
            now--;
            $("#page2").html(now+"/"+PageFinal);
        }
    }
);
$(".next").click(
    function () {
        if(now>=PageFinal){
            alert("没有更多了！");
        }else {
            now++;
            $("#page2").html(now+"/"+PageFinal);
        }
    }
);


    $('#in').on('click','.del-all',function (e) {
        if ( $(this).parent().parent().hasClass("del")){
            $(this).parent().parent().removeClass("del");
            $(this).parent().parent().addClass("success");
            var c=$(this).parent().parent().find("td:nth-child(1)").html();
            var d=$(this).parent().parent().find("td:nth-child(2)").html();
            arr_Name.push(c);
            arr_Value.push(d);
            var h=arr_Value[arr_Value.length-1];
            console.log("jbl");
            var id1=$(this).attr("id");
           var id2= $(this).parent().parent().nextAll().children("td:nth-child(4)").children();
           console.log(id2);
            for(var i=0; i<id2.length; i++){
                var t=parseInt(id1)+i;
                var ne=$("#"+t).attr("id")-1;
               console.log(ne);
                $("#"+t).attr("id",ne)
            }
        }else {
            $(this).parent().parent().removeClass("success");
            $(this).parent().parent().addClass("del");
            var m=$(this).parent().parent().find("td:nth-child(1)").html();
            var b=$(this).parent().parent().find("td:nth-child(2)").html();
            arr_Value.splice($.inArray(b,arr_Value),1);
            arr_Name.splice($.inArray(m,arr_Name),1);
        }
    });
$('#in').on('click','.check',function (e) {
            $("#img-all").css("display","");
            $("#mu").css("display","");
        var n=$(this).parent().parent().find("td:nth-child(4)").children("a").attr("id");
        $(".name-preview").remove();
        $(".openid-preview").remove();
        $("#det").append("<span class='name-preview' style='font-size: 18px'>"+arr_Name[n]+
            "</span><br><span style='font-size: 18px' class='openid-preview'>"+arr_Value[n]+"</span>");
            $("#detitle_img").attr("src","./img/cs.png")
        }
    );

$(".myButton").click(function () {
    {
        return arr_Value;
    }
})


