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
                if(cookieMinutes.includes(',')){
                    let arrayMinutes = cookieMinutes.split(",");
                    return arrayMinutes;
                }
                cookieMinutes = Number(cookieMinutes);
                return cookieMinutes;
            }
        }
        console.log("No cookies found!");
    }

    

}