
//1. Converter Kilometer To Meter

    function KilometerToMeter(Kilometer) {
        if(Kilometer < 0) {
            return "Distance cannot be negative";
        }
        else{
        var meter = Kilometer * 1000;                                   //1 kilometer = 1000 meter
            return meter;
        }
    }
    

//2. Budget Calculator 

    function budgetCalculator (watch, phone, laoptop) {
        var watchPRice = watch*50;                                          //per watch = 50 
        var phonePrice = phone*100;                                          //per phone = 100
        var laoptopPrice = laoptop*500;                                      //per laptop = 500
        var totalPrice = watchPRice + phonePrice + laoptopPrice ;
            return totalPrice;

    
}

//3.Hotel cost

    function hotelCost(perDays){
        var totalCost = 0;
        if(perDays <= 10 ){                                          //1 to 10 days per day cost = 100
            totalCost= perDays * 100;

        }
        else if(perDays<= 20) {
            var first10Days = 10 * 100;
            var remaining = perDays -10;
            var second10Days = remaining *80;                       //11 to 20 days per day cost = 100
            totalCost= perDays * 100;
            totalCost = first10Days +second10Days;
        }
        else{
            var first10Days = 10 * 100;
            var second10Days = 10 *80;
            var remaining = perDays - 20;                                // 21 to indifinite days per day cost = 50 
            totalCost= perDays * 100;
            var indifinteDays = remaining * 50;
            totalCost = first10Days + second10Days +indifinteDays;


        }
        
        return totalCost;
}

//4. Mega friend

function megaFriend(name){
 
    var name = ['Hasan' ,'Kalam','Nasiruddin' ,'Sohan'];
        var long = 0;
        var longest = 0;
    
        for (var i = 0; i < name.length; i++) {
        if (name[i].length > long) {
            var long = name[i].length;
            longest = name[i];
        }
        }
        return longest;
    
    }
    


