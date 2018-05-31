// Vue.directive('clickg', function (el, binding) {
//   // 设置指令的背景颜色
//   el.onclick=function(){
//     // el.className="jianjileiDJ";
//     // oldVnode.className="jianjileiDJ";
//     $(el).siblings().removeClass(binding.value.color);
//     $(el).addClass(binding.value.color);
//   }
// })
new Vue({
    el:"#headerApp",
    data:{
    },
    computed:{
        jiemubq:function(){
            var bq=showbq();
            return bq[5].split("/");
        }
    }

})
new Vue({
    el:"#sectionApp",
    data:{
        nr:showsp(),
        gaoshu:9,
        dishu:0
    },
    created(){
     this.$nextTick( function() {//先渲染dom后执行console
        this.$refs.spshuzu[0].className="jianjileiDJ";
          console.log(this.$refs.spshuzu.length)//ref 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例
        })
     },
    methods:{
        btnClick:function(index){
            // alert(index);
            // alert(this.$refs.spshuzu.length);
            for(var i=0;i<this.$refs.spshuzu.length;i++){
                // alert(i);
                this.$refs.spshuzu[i].className="";
            }
            this.$refs.spshuzu[index].className="jianjileiDJ";
            this.gaoshu=(index+1)*10-1;
            this.dishu=(index+1)*10-10;
            // alert(this.dishu);
        }
    },
    computed:{
        spshuzu:function(){
            var i = 0,j=1;
            var a=new Array();
            var chang=this.nr.length;
            for(i;j<=chang;i++){
                j=i*10;
                a[i]=j;
            }
            a[i-1]=this.nr.length-1;
            return a;
        },
        changdu:function(){
            return this.spshuzu.length;
        },
        zhcd:function(){
            return this.nr.length-1;
            // return 12;
        },
        // classRenderer:function(index){
        //     alert(index);
        //         return "jianjileiDJ";
        // }
        leiwd:function(){
            // alert(1);
            return ((this.spshuzu.length-1)/3)*100;
        }

    }
})

function showbq(){
        var str=getwyBq();
          if (window.XMLHttpRequest)
                 {// code for IE7+, Firefox, Chrome, Opera, Safari
                 xmlhttp=new XMLHttpRequest();
                 }
                 else
                 {// code for IE6, IE5
                 xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                 }

                 xmlhttp.open("GET","../../houtai/duqu.php?q="+str,false);
                 xmlhttp.send();
                 xmlPHP=xmlhttp.responseText.split(",");
                 xmlPHP;
                 // alert(xmlPHP);
                 return xmlPHP;
};
function showsp(){
    var str=getwyBq();
    if (window.XMLHttpRequest)
                 {// code for IE7+, Firefox, Chrome, Opera, Safari
                 xmlhttp=new XMLHttpRequest();
                 }
                 else
                 {// code for IE6, IE5
                 xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                 }

                 xmlhttp.open("GET","../../houtai/jmSp_dq.php?q="+str,false);
                 xmlhttp.send();
                 xmlPHP=xmlhttp.responseText.split(",");
                 xmlPHP.pop();
                 return xmlPHP;
};
function getwyBq(){
    // alert($(".logo .zhuantinr .zhuantitu img").attr("id"));
    return $(".logo .zhuantinr .zhuantitu img").attr("id");
    // return js;
};