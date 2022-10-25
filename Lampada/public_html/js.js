function estadoLampada(valor){
    if(valor === 1){
        
        
        /*Fazer aparecer a lampada ligada*/
        document.getElementById("LampOn").style.display = "block";
        /*Fazer desaparecer a lapada apagada*/
        document.getElementById("LampOff").style.display = "none";
        
        
    }else if(valor === 2){
        
        
        /*Fazer aparecer a lampada apagada*/
        document.getElementById("LampOff").style.display = "block";
        /*Fazer desaparecer a lapada ligada*/
        document.getElementById("LampOn").style.display = "none";
        
        
    }
}