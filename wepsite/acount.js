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

namecolor: '#10a1de',
tarihcolor:'#10a1de',
daycolor:'#10a1de',
surnamecolor:'#10a1de',
passcolor:'#10a1de',
answercolor:'#10a1de',
yearcolor:'#10a1de',
emailcolor:'#10a1de',



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
            
             if(answer==null){this.namecolor='red'}
        
            



    }
}

    


})
