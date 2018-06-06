Vue.component('jmbox', {
    props: ['jmboxms'],
  template:'<a v-bind:href=lujin v-bind:title=jmboxms[1]><img alt="" v-bind:src=jmboxms[8]><div class="card-mark"><p class="title">{{"【"+jmboxms[1]+"】"+" "+jmboxms[4].substr(0,20)}}</p><p class="gtime">更新时间：{{jmboxms[10].substr(0,10)}}</p><p class="play">播放：{{jmboxms[12]}}次</p></div></img></a>',
  data: function () {
    return {
      lujin: "./"+this.jmboxms[11]+"/"+this.jmboxms[2]
    }
  },

})
Vue.component('spbox', {
    props: ['spboxms'],
  template:'<a v-bind:href=splujin v-bind:title=spboxms[1]><img alt="" v-bind:src=spboxms[8]><div class="nr_xx"><p class="title">{{"【"+spboxms[6]+"】"+" "+spboxms[9].substr(0,20)}}</p><p class="gtime">更新时间：{{spboxms[10].substr(0,10)}}</p><p class="play">播放：{{spboxms[12]}}次</p></div></img></a>',
  data: function () {
    return {
      splujin: "./"+this.spboxms[11]+"/"+this.spboxms[2]+"/"+this.spboxms[0]
    }
  },

})
new Vue({
    el:"#sectionApp",
    data:{
    },
    methods:{
        jmxx:function(str){
            if (window.XMLHttpRequest)
                 {// code for IE7+, Firefox, Chrome, Opera, Safari
                 xmlhttp=new XMLHttpRequest();
                 }
                 else
                 {// code for IE6, IE5
                 xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                 }

                 xmlhttp.open("GET","houtai/duqu_bt.php?q="+str,false);
                 xmlhttp.send();
                 // alert(xmlhttp.responseText);
                 var xmlPHP=xmlhttp.responseText.split(",");
                 // alert(xmlPHP);
                 return xmlPHP;
        },
        spxx:function(str){
            if (window.XMLHttpRequest)
                 {// code for IE7+, Firefox, Chrome, Opera, Safari
                 xmlhttp=new XMLHttpRequest();
                 }
                 else
                 {// code for IE6, IE5
                 xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                 }

                 xmlhttp.open("GET","houtai/duqu_sp.php?q="+str,false);
                 xmlhttp.send();
                 // alert(xmlhttp.responseText);
                 var xmlPHP=xmlhttp.responseText.split(",");
                 // alert(xmlPHP);
                 return xmlPHP;
        },

    },
    computed:{
        sjsz:function(){
            if (window.XMLHttpRequest)
                 {// code for IE7+, Firefox, Chrome, Opera, Safari
                 xmlhttp=new XMLHttpRequest();
                 }
                 else
                 {// code for IE6, IE5
                 xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                 }

                 xmlhttp.open("GET","houtai/qu_id_rand.php",false);
                 xmlhttp.send();
                 // alert(xmlhttp.responseText);
                 var xmlPHP=xmlhttp.responseText.split(",");
                 // alert(xmlPHP);
                 return xmlPHP;
        },
        sjsp:function(){
            return this.sjsz[7]+"&autoplay=1";
        },
        sjlj:function(){
            return "./"+this.sjsz[11]+"/"+this.sjsz[2]+"/"+this.sjsz[0];
        }
    }

})
new Vue({
    el:"#headerApp",
    data:{
        dheight: {height:"48px"},
        yyp:1,
        zyl:1,
        mht:1,
        zhl:1,
        xw:1,
        jm:1,
        zx:1,
    },
    methods:{
        say:function(message){
             // alert(this.dheight);
            if(this.dheight.height=="48px")
                this.dheight.height='96px';
            else
                this.dheight.height='48px';
        }
    },
    computed:{
        gdg:function(){
            return 1;
        },
        jmxx:function(str){
            return str;
            // $get("houtai/duqu.php",function(data,status){
            //     return data.responseText.split(",");
            // })
        }
    },
    watch:{
    }
})
