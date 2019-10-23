

new Vue({
  el: '#login',
  data:{
    show: false,
    isVisible: false,
  

  },
  methods: {
    tiklama: function (email,password) {
    if(email==null && password==null){      this.show=true,
     this.isVisible=true
    }else
    this.show=false
  }}
})