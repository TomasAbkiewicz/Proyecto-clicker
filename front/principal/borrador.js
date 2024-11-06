(function() {
    let userId = sessionStorage.getItem("userId")
    if (userId !== "undefined" && userId ){
        postData("loadGame", userId, (game) => {
            console.log(game)
            winodw.contadorMonedas= game.currency.sunflowers;
            window.upgradeStage1 = game.upgrades.up1;
            window.upgradeStage2 = game.upgrades.up2;
            window.upgradeStage3 = game.upgrades.up3;
            window.clickStrength = 0;
            window.passiveStrength= 0;
            if (window.upgradeStage1 !== 0){
                for (i=0; i<upgradeStage1; i++){
                    let currentStage= upgradeStages1[i];
                    
                    window.clickStrength *=   currentStage.extra
                    window.clickStrength +=   currentStage.clickStrength
                    
                }  
            }
            if (window.upgradeStage3 !== 0){
                for (i=0; i<upgradeStage3; i++){
                    let currentStage= upgradeStages3[i];
                    clickStrength *=   currentStage.extra
                    clickStrength +=   currentStage.clickStrength 
                    passiveStrength *=   currentStage.extra
                    passiveStrength +=   currentStage.passiveStrength
                    
                }  
            }
            if (window.upgradeStage2 !==0){
                for (i=0; i<upgradeStage2; i++){
                    let currentStage= upgradeStages2[i];
                    
                    window.passiveStrength *=   currentStage.extra
                    window.passiveStrength +=   currentStage.clickStrength
                    
                }
            }
            mejora.textContent = "Regar Jardin: " + upgradeStages1[window.upgradeStage1].price;
            pMejora.textContent = "Trebol de 4 hojas: " + upgradeStages2[window.upgradeStage2].price;
            mejora3.textContent = "Olla de Oro: " + upgradeStages3[window.upgradeStage3].price;
            setInterval(passiveUpdate,100);
            return game; 
        });
    }else{
        window.contadorMonedas= 10; 
        window.upgradeStage1= 0;
        window.upgradeStage2= 0;
        window.upgradeStage3= 0;
        window.clickStrength= 0;
        window.passiveStrength=0;
        setInterval(passiveUpdate,100);
        alert ("estas jugando sin cuenta, tu progreso no sera guardado y se reiniciara al salir de la pagina o entrar a cualquier modo de juego. Para no perder el progress, crea una cuenta con el boton log in ubicado en la esquina derecha de la pantalla") 
    }  
});