var özelbuton = new Vue({
el:'#özelbuton',
methods:{
login:function(){
    window.location='login.html';
}

}



})

var borders=new Vue({
    el:'#borders', 
    
    
    data:{

namecolor: 'rgba(255,255,255,0.3)',
tarihcolor:'rgba(255,255,255,0.3)',
daycolor:'rgba(255,255,255,0.3)',
surnamecolor:'rgba(255,255,255,0.3)',
passcolor:'rgba(255,255,255,0.3)',
answercolor:'rgba(255,255,255,0.3)',
yearcolor:'rgba(255,255,255,0.3)',
emailcolor:'rgba(255,255,255,0.3)',



    },
    methods:{
        tiklama:function(Firstname,Surname,Tarih,Day,Year,email,password,answer)
        { 
            
             if(Firstname==null){this.namecolor='red'}
             if(Tarih==null){this.tarihcolor='red'}
             if(Day==null){this.daycolor='red'}
             if(Surname==null){this.surnamecolor='red'}
             if(Year==null){this.yearcolor='red'}
             if(email==null){this.emailcolor='red'}
             if(password==null){this.passcolor='red'}
            
             if(answer==null){this.answercolor='red'}
        
            



    }
}

    


})
