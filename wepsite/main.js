var app=new Vue({
el: '.orta',
data:
{
    image:'orta2.jpg',
    image2:'orta2.2.png',
    parca:'UNLOCK IN-GAME REWARDS',
    buton:'Buy Now',
   


}

,
methods: {
orta1:function(){
this.image='orta1.jpg'
this.image2='orta1.1.png'
this.parca='UNLOCK IN-GAME REWARDS'
this.buton='Buy Now'
},
orta2:function(){
    this.image='orta2.jpg'
    this.image2='orta2.2.png'
    this.parca='PURCHASE AND GET THE XRK WEAPONS PACK AT LAUNCH'
    this.buton='Pre-Purchase'
    },orta3:function(){
        this.image='orta3.jpg'
    this.image2='orta3.3.png'
    this.parca='SAVE BIG ON BATTLE FOR AZEROTH'
    this.buton='Buy Now'


    },
    orta4:function(){
        this.image='orta4.jpg'
    this.image2='orta4.4.png'
    this.parca='THE ALL- NEW SOLO ADVENTURE'
    this.buton='Buy Now'


    }

}
}
)

