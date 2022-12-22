let money = +prompt("Ваш бюджет на месяц?", ''), 
    time = +prompt("Введите дату в формате YYYY-MM-DD", ''); 
    let appData = { 
    Budget: money, 
    expenses: {}, 
    optionalExpenses: {}, 
    income: [], 
    timeData: time, 
        saving: false              
    }; 

    for(let i = 0; i<2; i++){
      let a = +prompt("Введите обязательную статью расходов в этом месяце", '');
          b = prompt("Во сколько обойдется?", ''); 

          if(typeof(a)==='string'&& typeof(a) !=null && typeof(b) !=null  && a!='' && b!='' && a.length<50) {
            console.log("сделано всё правильно");
            appData.expenses[a] = b;
        }else {
            i = i -1;
        }

    } 
    


    appData.moneyPerDay = appData.Budget /30

    alert("ежедневный бюджет:" + appData.moneyPerDay);

    if(appData.moneyPerDay < 100){
        console.log("минимальный уровень достатка:");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        console.log("средний уровень достатка")
    } else if (appData.moneyPerDay > 2000) {
        console.log("высокоий уровент достатка")
    } else {
        console.log("произошла ошибка")
    }