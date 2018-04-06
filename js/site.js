$(document).ready(function(){
     $(".enviar").on("click",function() {
       var erros = "";
       //Nome 
       if($("input.statusnome").val() == "") 
       {
         erros = 1;
         $("input.statusnome").css({
           "color":"red"
         });
         $("input.statusnome").attr("placeholder","Campo nome está vazio")

       }else{
         $("input.statusnome").css({
           "color":"#1dcb19"
         })
       }

        //Telefone
       if($("input.statustelefone").val() == "")
       {
         erros = 1;
         $("input.statustelefone").css({
           "color":"red"
         });
         $("input.statustelefone").attr("placeholder","Campo telefone está vazio")

       }else{
         $("input.statustelefone").css({
           "color":"#1dcb19"
         })
       }

       //E-mail
       if($("input.statusemail").val() == "")
       {
         erros = 1;
         $("input.statusemail").css({
           "color":"red"
         });
         $("input.statusemail").attr("placeholder","Campo email está vazio")

       }else{
         $("input.statusemail").css({
           "color":"#1dcb19"
         });
       }
       
       //Mensagem
       if($("textarea.statusMensagem").val() == "")
       {
         erros = 1;
        $("textarea.statusMensagem").css({
           "color":"red"
         }); 
          $("textarea.statusMensagem").attr("placeholder","Campo mensagem está vazio")
       }else{
         $("textarea.statusMensagem").css({
           "color":"#1dcb19"
         });
       }

       if(erros == "") {

         $.ajax({
                 url: "envia.php",
                 type: 'POST',
                 success: function( data )  
                   { 
                     
                    $(location).attr('href', 'http://apartamentobomretiro.com.br/obrigado.html');

                   },
                   data: {nome:$("input.statusnome").val(), telefone:$("input.statustelefone").val(), email:$("input.statusemail").val(),
                          mensagem:$("textarea.statusMensagem").val() }
             });
       }
 
       return false;
     });
 });
