

            

            function insert(num){

                 var numero =document.getElementById("resultado").innerHTML;
                
                document.getElementById("resultado").innerHTML= numero + num;
            }


            function clean(){

                document.getElementById("resultado").innerHTML="";

                
            }

            function back(){

                var voltar=document.getElementById("resultado").innerHTML;

                document.getElementById("resultado").innerHTML = voltar.substring(0,voltar.length-1);

            }


            function calcular(){

                var resultado=document.getElementById("resultado").innerHTML;

                if(resultado){
                   

                   document.getElementById("resultado").innerHTML= eval(resultado);
                }

                else{

                    document.getElementById("resultado").innerHTML= "Não há nada para calcular";


                }
            }
           


        
