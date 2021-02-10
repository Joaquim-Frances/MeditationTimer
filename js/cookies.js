class Cookier {

    
    constructor(cookieName, cookieValue, cookieDays){

        this.name = cookieName;
        this.value = cookieValue;
        this.days = cookieDays;
                
    }

    writeCookie(){

        let now = new Date();
        now.setTime(now.getTime() + (this.days*24*60*60*1000))
        let caducidad = "expires = " + now.toUTCString();
        document.cookie = this.name + "=" + this.value + ";" + caducidad + "path=/;";
    }

    static getCookie(cookieName){

        let name = cookieName + "=";
        let decoded2Cookie = decodeURIComponent(document.cookie);
        let infoCookie = decoded2Cookie.split(";");
        for (var i = 0; i < infoCookie.length; i++){
            var c = infoCookie[i];
            while (c.charAt(0)==" "){
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0){
                let cookieMinutes = c.substring(name.length, c.lenght);
                cookieMinutes = Number(cookieMinutes);
                return cookieMinutes;
            }
        }
        console.log("No cookies found!");
    }

    static getTheCookie(cvalue){
        let value = "=" + cvalue;
        
        let allCookies = decodeURIComponent(document.cookie); 
        
        let arrayAllCookies = allCookies.split(";");
        
        for (var i = 0; i < arrayAllCookies.length; i++){
            var c = arrayAllCookies[i];  
            if (c.indexOf(value) == c.length - 4){  
                let restaLetras = c.length - 4;  
                let fcookieName = c.substring(1, restaLetras);
                let cookieArrayOfValues = fcookieName.split(",");
                valuesList = cookieArrayOfValues;
            }
        }

    }

    static deleteCookie108(){
        let value = "=" + cvalue;
        
        let allCookies = decodeURIComponent(document.cookie); 
        
        let arrayAllCookies = allCookies.split(";");
        
        for (var i = 0; i < arrayAllCookies.length; i++){
            var c = arrayAllCookies[i];  
            if (c.indexOf(value) == c.length - 4){  
                let restaLetras = c.length - 4;  
                let fcookieName = c.substring(1, restaLetras);
                let deletor = new Cookier(fcookieName, 0, 0);
                deletor.writeCookie();
            }
        }
    }



}