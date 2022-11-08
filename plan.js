//taking input code

function getvalue(){
    var myindustry = document.getElementById("myindustry").value;
    var myincome = document.getElementById("myincome").value;
    var longshort = document.getElementById("longshort").value;
    var timeperiod = document.getElementById("timeperiod").value;
    var wantinsurance = document.getElementById("wantinsurance").value;
    var nomembers = document.getElementById("nomembers").value;

    // code for tax amount calculation

    var taxamount = 1 ;

    if (myincome<=250000){
        taxamount = + taxamount*myincome*0;
        document.getElementById("outputvalue1").innerHTML = "Tax amount : " + taxamount + " Rs";
    }else if (myincome >250000 && myincome <=500000){
        taxamount = + taxamount*myincome*0.05;
        document.getElementById("outputvalue1").innerHTML = "Tax amount : " + taxamount + " Rs (tax rebate u/s 87a is available)";
    }else if (myincome >500000 && myincome <=750000){
        taxamount = + taxamount*myincome*0.1; 
        document.getElementById("outputvalue1").innerHTML = "Tax amount : " + taxamount + " Rs";
    }else if(myincome >750000 && myincome <=1000000){
        taxamount = + taxamount*myincome*0.15;
        document.getElementById("outputvalue1").innerHTML = "Tax amount : " + taxamount + " Rs";
    }else if (myincome >1000000 && myincome <=1250000){
        taxamount = + taxamount*myincome*0.2;
        document.getElementById("outputvalue1").innerHTML = "Tax amount : " + taxamount + " Rs";
    }else if (myincome >1250000 && myincome <=1500000){
        taxamount = + taxamount*myincome*0.25;
        document.getElementById("outputvalue1").innerHTML = "Tax amount : " + taxamount + " Rs";
    }else if (myincome >1500000){
        taxamount = + taxamount*myincome*0.3;
        document.getElementById("outputvalue1").innerHTML = "Tax amount : " + taxamount + " Rs";
    }else {
        document.getElementById("outputvalue1").innerHTML = "Fill Income Correctly";
    }


    //code for investment

    var investamount = 1;
    var compoundinterest = 0;
    var totalamount = 0;
    if(myincome<=250000){
        if (timeperiod <= 5){
            compoundinterest += (0.1*myincome)*(Math.pow(1+(4.5/100)),timeperiod);
            totalamount = compoundinterest + (0.1*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 4.5 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.1*myincome)/12;
            document.getElementById("outputvalue4").innerHTML = "Total return you get after investing " + 0.1*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you can invest in 'NIFTY50' or 'SENSEX' for constant low risk returns.";
        }else if (timeperiod >5 && timeperiod<=10){
            compoundinterest += (0.1*myincome)*(Math.pow(1+(8/100)),timeperiod);
            totalamount = compoundinterest + (0.1*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 8 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.1*myincome)/12;
            document.getElementById("outputvalue4").innerHTML = "Total return you get after investing " + 0.1*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you can invest in 'NIFTY50' or 'SENSEX' for constant low risk returns.";
        }else if (timeperiod >10 && timeperiod<=15){
            compoundinterest += (0.1*myincome)*(Math.pow(1+(11.5/100)),timeperiod);
            totalamount = compoundinterest + (0.1*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 11.5 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.1*myincome)/12;
            document.getElementById("outputvalue4").innerHTML = "Total return you get after investing " + 0.1*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you can invest in 'NIFTY50' or 'SENSEX' for constant low risk returns.";
        }else if (timeperiod >15 && timeperiod<=20){
            compoundinterest += (0.1*myincome)*(Math.pow(1+(13.8/100)),timeperiod);
            totalamount = compoundinterest + (0.1*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 13.8 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.1*myincome)/12;
            document.getElementById("outputvalue4").innerHTML = "Total return you get after investing " + 0.1*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you can invest in 'NIFTY50' or 'SENSEX' for constant low risk returns and try some high risk investments.";
        }else if (timeperiod>20){
            compoundinterest += (0.1*myincome)*(Math.pow(1+(16/100)),timeperiod);
            totalamount = compoundinterest + (0.1*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 16 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.1*myincome)/12;
            document.getElementById("outputvalue4").innerHTML = "Total return you get after investing " + 0.1*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you can invest in 'NIFTY50' or 'SENSEX' for constant low risk returns and try some high risk investments.";
        }else{
            document.getElementById("outputvalue2").innerHTML = "Invalid Input"
        }
    }else if(myincome>250000 && myincome<=500000){
        if (timeperiod <= 5){
            compoundinterest += (0.15*myincome)*(Math.pow(1+(4.5/100)),timeperiod);
            totalamount = compoundinterest + (0.1*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 4.5 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.15*myincome)/12;
            document.getElementById("outputvalue4").innerHTML = "Total return you get after investing " + 0.15*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you can invest in 'NIFTY50' or 'SENSEX' for constant low risk returns.";
        }else if (timeperiod >5 && timeperiod<=10){
            compoundinterest += (0.15*myincome)*(Math.pow(1+(8/100)),timeperiod);
            totalamount = compoundinterest + (0.1*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 8 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.15*myincome)/12;
            document.getElementById("outputvalue4").innerHTML = "Total return you get after investing " + 0.15*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you can invest in 'NIFTY50' or 'SENSEX' for constant low risk returns.";
        }else if (timeperiod >10 && timeperiod<=15){
            compoundinterest += (0.15*myincome)*(Math.pow(1+(11.5/100)),timeperiod);
            totalamount = compoundinterest + (0.1*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 11.5 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.15*myincome)/12;
            document.getElementById("outputvalue4").innerHTML = "Total return you get after investing " + 0.15*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you can invest in 'NIFTY50' or 'SENSEX' for constant low risk returns and try some high risk investments.";
        }else if (timeperiod >15 && timeperiod<=20){
            compoundinterest += (0.15*myincome)*(Math.pow(1+(13.8/100)),timeperiod);
            totalamount = compoundinterest + (0.1*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 13.8 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.15*myincome)/12;
            document.getElementById("outputvalue4").innerHTML = "Total return you get after investing " + 0.15*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you can invest in 'NIFTY50' or 'SENSEX' for constant low risk returns and try some high risk investments.";
        }else if (timeperiod>20){
            compoundinterest += (0.15*myincome)*(Math.pow(1+(16/100)),timeperiod);
            totalamount = compoundinterest + (0.15*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 16 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.15*myincome)/12;
            document.getElementById("outputvalue4").innerHTML = "Total return you get after investing " + 0.15*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you can invest in 'NIFTY50' or 'SENSEX' for constant low risk returns and try some high risk investments.";
        }else{
            document.getElementById("outputvalue2").innerHTML = "Invalid Input"
        }
    }else if(myincome>500000 && myincome<=750000){
        if (timeperiod <= 5){
            compoundinterest += (0.18*myincome)*(Math.pow(1+(4.5/100)),timeperiod);
            totalamount = compoundinterest + (0.18*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 4.5 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.18*myincome)/12;
            document.getElementById("outputvalue4").innerHTML = "Total return you get after investing " + 0.18*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you should invest in 'NIFTY50' or 'SENSEX' for constant low risk returns and can invest in volatile High risk companies.";
        }else if (timeperiod >5 && timeperiod<=10){
            compoundinterest += (0.18*myincome)*(Math.pow(1+(8/100)),timeperiod);
            totalamount = compoundinterest + (0.18*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 8 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.18*myincome)/12;
            document.getElementById("outputvalue4").innerHTML = "Total return you get after investing " + 0.18*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you should invest in 'NIFTY50' or 'SENSEX' for constant low risk returns and can invest in volatile High risk companies.";
        }else if (timeperiod >10 && timeperiod<=15){
            compoundinterest += (0.18*myincome)*(Math.pow(1+(11.5/100)),timeperiod);
            totalamount = compoundinterest + (0.18*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 11.5 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.18*myincome)/12;
            document.getElementById("outputvalue4").innerHTML = "Total return you get after investing " + 0.18*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you should invest in 'NIFTY50' or 'SENSEX' for constant low risk returns and can invest in volatile High risk companies.";
        }else if (timeperiod >15 && timeperiod<=20){
            compoundinterest += (0.18*myincome)*(Math.pow(1+(13.8/100)),timeperiod);
            totalamount = compoundinterest + (0.18*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 13.8 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.18*myincome)/12;
            document.getElementById("outputvalue4").innerHTML = "Total return you get after investing " + 0.18*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you should invest in 'NIFTY50' or 'SENSEX' for constant low risk returns and can invest in volatile High risk companies.";
        }else if (timeperiod>20){
            compoundinterest += (0.18*myincome)*(Math.pow(1+(16/100)),timeperiod);
            totalamount = compoundinterest + (0.18*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 16 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.18*myincome)/12;
            document.getElementById("outputvalue3").innerHTML = "Total return you get after investing " + 0.18*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you should invest in 'NIFTY50' or 'SENSEX' for constant low risk returns and can invest in volatile High risk companies.";
        }else{
            document.getElementById("outputvalue2").innerHTML = "Invalid Input"
        }
    }else if(myincome>750000 && myincome<=1000000){
        if (timeperiod <= 5){
            compoundinterest += (0.2*myincome)*(Math.pow(1+(4.5/100)),timeperiod);
            totalamount = compoundinterest + (0.2*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 4.5 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.2*myincome)/12;
            document.getElementById("outputvalue4").innerHTML = "Total return you get after investing " + 0.2*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you should invest in 'NIFTY50' or 'SENSEX' for constant low risk returns and can invest in volatile High risk companies.";
        }else if (timeperiod >5 && timeperiod<=10){
            compoundinterest += (0.2*myincome)*(Math.pow(1+(8/100)),timeperiod);
            totalamount = compoundinterest + (0.2*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 8 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.2*myincome)/12;
            document.getElementById("outputvalue4").innerHTML = "Total return you get after investing " + 0.2*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you should invest in 'NIFTY50' or 'SENSEX' for constant low risk returns and can invest in volatile High risk companies.";
        }else if (timeperiod >10 && timeperiod<=15){
            compoundinterest += (0.2*myincome)*(Math.pow(1+(11.5/100)),timeperiod);
            totalamount = compoundinterest + (0.2*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 11.5 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.2*myincome)/12;
            document.getElementById("outputvalue4").innerHTML = "Total return you get after investing " + 0.2*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you should invest in 'NIFTY50' or 'SENSEX' for constant low risk returns and can invest in volatile High risk companies.";
        }else if (timeperiod >15 && timeperiod<=20){
            compoundinterest += (0.2*myincome)*(Math.pow(1+(13.8/100)),timeperiod);
            totalamount = compoundinterest + (0.2*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 13.8 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.2*myincome)/12;
            document.getElementById("outputvalue4").innerHTML = "Total return you get after investing " + 0.2*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you should invest in 'NIFTY50' or 'SENSEX' for constant low risk returns and can invest in volatile High risk companies.";
        }else if (timeperiod>20){
            compoundinterest += (0.2*myincome)*(Math.pow(1+(16/100)),timeperiod);
            totalamount = compoundinterest + (0.2*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 16 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.2*myincome)/12;
            document.getElementById("outputvalue4").innerHTML = "Total return you get after investing " + 0.2*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you should invest in 'NIFTY50' or 'SENSEX' for constant low risk returns and can invest in volatile High risk companies.";
        }else{
            document.getElementById("outputvalue2").innerHTML = "Invalid Input"
        }
    }else if(myincome>1000000 && myincome<=1250000){
        if (timeperiod <= 5){
            compoundinterest += (0.23*myincome)*(Math.pow(1+(4.5/100)),timeperiod);
            totalamount = compoundinterest + (0.23*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 4.5 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.23*myincome)/12;
            document.getElementById("outputvalue4").innerHTML = "Total return you get after investing " + 0.23*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you can invest in 'NIFTY50' or 'SENSEX' for constant low risk returns and can invest in volatile High risk companies.";
        }else if (timeperiod >5 && timeperiod<=10){
            compoundinterest += (0.23*myincome)*(Math.pow(1+(8/100)),timeperiod);
            totalamount = compoundinterest + (0.23*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 8 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.23*myincome)/12;
            document.getElementById("outputvalue4").innerHTML = "Total return you get after investing " + 0.23*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you should invest in 'NIFTY50' or 'SENSEX' for constant low risk returns and can invest in volatile High risk companies.";
        }else if (timeperiod >10 && timeperiod<=15){
            compoundinterest += (0.23*myincome)*(Math.pow(1+(11.5/100)),timeperiod);
            totalamount = compoundinterest + (0.23*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 11.5 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.23*myincome)/12;
            document.getElementById("outputvalue4").innerHTML = "Total return you get after investing " + 0.23*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you should invest in 'NIFTY50' or 'SENSEX' for constant low risk returns and can invest in volatile High risk companies.";
        }else if (timeperiod >15 && timeperiod<=20){
            compoundinterest += (0.23*myincome)*(Math.pow(1+(13.8/100)),timeperiod);
            totalamount = compoundinterest + (0.23*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 13.8 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.23*myincome)/12;
            document.getElementById("outputvalue4").innerHTML = "Total return you get after investing " + 0.23*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you should invest in 'NIFTY50' or 'SENSEX' for constant low risk returns and can invest some high amount in volatile High risk companies.";
        }else if (timeperiod>20){
            compoundinterest += (0.23*myincome)*(Math.pow(1+(16/100)),timeperiod);
            totalamount = compoundinterest + (0.23*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 16 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.23*myincome)/12;
            document.getElementById("outputvalue4").innerHTML = "Total return you get after investing " + 0.23*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you should invest in 'NIFTY50' or 'SENSEX' for constant low risk returns and can invest some high amount in volatile High risk companies.";
        }else{
            document.getElementById("outputvalue2").innerHTML = "Invalid Input"
        }
    } else if(myincome>1250000 && myincome<=1500000){
        if (timeperiod <= 5){
            compoundinterest += (0.25*myincome)*(Math.pow(1+(4.5/100)),timeperiod);
            totalamount = compoundinterest + (0.25*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 4.5 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.25*myincome)/12;
            document.getElementById("outputvalue4").innerHTML = "Total return you get after investing " + 0.25*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you should invest in 'NIFTY50' or 'SENSEX' for constant low risk returns and can invest some high amount in volatile High risk companies.";
        }else if (timeperiod >5 && timeperiod<=10){
            compoundinterest += (0.25*myincome)*(Math.pow(1+(8/100)),timeperiod);
            totalamount = compoundinterest + (0.25*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 8 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.25*myincome)/12;
            document.getElementById("outputvalue4").innerHTML = "Total return you get after investing " + 0.25*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you should invest in 'NIFTY50' or 'SENSEX' for constant low risk returns and can invest some high amount in volatile High risk companies.";
        }else if (timeperiod >10 && timeperiod<=15){
            compoundinterest += (0.25*myincome)*(Math.pow(1+(11.5/100)),timeperiod);
            totalamount = compoundinterest + (0.25*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 11.5 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.25*myincome)/12;
            document.getElementById("outputvalue4").innerHTML = "Total return you get after investing " + 0.25*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you should invest in 'NIFTY50' or 'SENSEX' for constant low risk returns and can invest some high amount in volatile High risk companies.";
        }else if (timeperiod >15 && timeperiod<=20){
            compoundinterest += (0.25*myincome)*(Math.pow(1+(13.8/100)),timeperiod);
            totalamount = compoundinterest + (0.25*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 13.8 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.25*myincome)/12;
            document.getElementById("outputvalue4").innerHTML = "Total return you get after investing " + 0.25*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you should invest in 'NIFTY50' or 'SENSEX' for constant low risk returns and can invest 50% of amount in volatile High risk companies.";
        }else if (timeperiod>20){
            compoundinterest += (0.25*myincome)*(Math.pow(1+(16/100)),timeperiod);
            totalamount = compoundinterest + (0.25*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 16 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.25*myincome)/12;
            document.getElementById("outputvalue4").innerHTML = "Total return you get after investing " + 0.25*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you should invest in 'NIFTY50' or 'SENSEX' for constant low risk returns and can invest 50% of amount in volatile High risk companies.";
        }else{
            document.getElementById("outputvalue2").innerHTML = "Invalid Input"
        }
    }else if (myincome>1500000){
        if (timeperiod <= 5){
            compoundinterest += (0.3*myincome)*(Math.pow(1+(4.5/100)),timeperiod);
            totalamount = compoundinterest + (0.3*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 4.5 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.3*myincome)/12;
            document.getElementById("outputvalue4").innerHTML = "Total return you get after investing " + 0.3*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you should invest 40% in low risk options and 60% in high risk options";
        }else if (timeperiod >5 && timeperiod<=10){
            compoundinterest += (0.3*myincome)*(Math.pow(1+(8/100)),timeperiod);
            totalamount = compoundinterest + (0.3*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 8 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.3*myincome)/12;
            document.getElementById("outputvalue4").innerHTML = "Total return you get after investing " + 0.3*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you should invest 40% in low risk options and 60% in high risk options";
        }else if (timeperiod >10 && timeperiod<=15){
            compoundinterest += (0.3*myincome)*(Math.pow(1+(11.5/100)),timeperiod);
            totalamount = compoundinterest + (0.3*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 11.5 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.3*myincome)/12;
            document.getElementById("outputvalue4").innerHTML = "Total return you get after investing " + 0.3*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you should invest 40% in low risk options and 60% in high risk options";
        }else if (timeperiod >15 && timeperiod<=20){
            compoundinterest += (0.3*myincome)*(Math.pow(1+(13.8/100)),timeperiod);
            totalamount = compoundinterest + (0.3*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 13.8 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.3*myincome)/12;
            document.getElementById("outputvalue4").innerHTML = "Total return you get after investing " + 0.3*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you should invest 40% in low risk options and 60% in high risk options";
        }else if (timeperiod>20){
            compoundinterest += (0.3*myincome)*(Math.pow(1+(16/100)),timeperiod);
            totalamount = compoundinterest + (0.3*myincome);
            document.getElementById("outputvalue2").innerHTML = "percent growth(assumed) : 16 ";
            document.getElementById("outputvalue3").innerHTML = "Total investment monthly : " + (0.3*myincome)/12;
            document.getElementById("outputvalue4").innerHTML = "Total return you get after investing " + 0.3*myincome+ " yearly is : " + totalamount;
            document.getElementById("outputvalue5").innerHTML = "Investment suggestions : you should invest 40% in low risk options and 60% in high risk options";
        }else{
            document.getElementById("outputvalue2").innerHTML = "Invalid Input";
        }
    }else{
        document.getElementById("outputvalue2").innerHTML = "Invalid Input";
    }

    //code for insurance

    if(wantinsurance==="Y"){
        if(myincome<=500000){
            document.getElementById("outputvalue6").innerHTML = "Buy Insurance(Per Month) Minimum : 300Rs and Maximum : 500Rs";
        }else if(myincome>500000 && myincome<=1000000){
            document.getElementById("outputvalue6").innerHTML = "Buy Insurance(Per Month) Minimum : 1000Rs and Maximum : 2500Rs  ";
        }else if(myincome>1000000 && myincome<=1500000){
            document.getElementById("outputvalue6").innerHTML = "Buy Insurance(Per Month) Minimum : 2500Rs and Maximum : 5000Rs  ";
        }else if(myincome>1500000){
            document.getElementById("outputvalue6").innerHTML = "Buy Insurance(Per Month) Minimum : 5000Rs ";
        }else{
            document.getElementById("outputvalue6").innerHTML = "Invalid Input";
        }
    }else if(wantinsurance==="N"){
        document.getElementById("outputvalue6").innerHTML = "Insurance : you should buy one";
    }else{
        document.getElementById("outputvalue6").innerHTML = "Invalid Input";
    }

    //Emergency funds code

    if(myincome<=500000){
        document.getElementById("outputvalue7").innerHTML = "Save for Emergency Funds(Minimum) : 1000Rs (Monthly)";
    }else if(myincome>500000 && myincome<=1000000){
        document.getElementById("outputvalue7").innerHTML = "Save for Emergency Funds(Minimum) : (1000 - 3000)Rs (Monthly)";
    }else if(myincome>1000000 && myincome<=1500000){
        document.getElementById("outputvalue7").innerHTML = "Save for Emergency Funds(Minimum) : (3000 - 5000)Rs (Monthly)";
    }else if(myincome>1500000){
        document.getElementById("outputvalue7").innerHTML = "Save for Emergency Funds(Minimum) : 5000Rs (Monthly)";
    }else{
        document.getElementById("outputvalue7").innerHTML = "Invalid Input";
    }
}

// document.getElementById("outputvalue1").innerHTML = "Tax amount " + taxamount2 + " Rs";
// document.getElementById("outputvalue2").innerHTML = "Invest per month 2000 Rs (safe investment eg: NIFTY50 , SENSEX etc ) and 1000Rs in Risky ones ";
// document.getElementById("outputvalue3").innerHTML = "you can buy a medical and life insurance of minimum amount (Rs 1000) for all your family members";
// document.getElementById("outputvalue4").innerHTML = "Save '3500Rs' every month for emergency";




