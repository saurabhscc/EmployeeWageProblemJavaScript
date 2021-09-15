//UC7 -Array Helper Function
const IS_PART_TIME =1;
const IS_FULL_TIME =2;
const PART_TIME_HOURS =4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
const WORKING_DAYS=20;
const MAX_HOURS=160;
let empHrs=0;
let workingDays=0
let empDailyWageArr = new Array();
function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
function CalcDailyWage(empHrs)
{
    return empHrs*WAGE_PER_HOUR;;
}
while(empHrs<=MAX_HOURS && workingDays <= WORKING_DAYS){
    workingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
    //empDailyWageArr.push(CalcDailyWage(empHrs));//add new element
    let hours = getWorkingHours(empCheck);
    empDailyWageArr.push(CalcDailyWage(hours));
}
let TotalWorkingDays=workingDays-1;
//let empWage= empHrs * WAGE_PER_HOUR;
let empWage = CalcDailyWage(empHrs);
console.log("\nTotal Days : "+TotalWorkingDays+"\nTotal Hours : "+empHrs+"\nEmployee Wage: "+ empWage);


//Array Helper Functions
//UC 7A -Cal total Wage Using Array forEach traversal or reduce method
// foreach traversal
let totalEmpWage =0 ;
function sum(dailyWage){
    totalEmpWage +=dailyWage;
}
empDailyWageArr.forEach(sum);
console.log(" UC-7A For Each : Total Working Days:- " + workingDays +  
            " Total Hours:-  "+ empHrs + "  EMP WAGE :-  "+totalEmpWage);

//Use of Reduce Function
function totalWages(totalWage,dailyWage){
    return totalWage + dailyWage;
}
console.log(" UC-7A Emp Wage With reduce : "+empDailyWageArr.reduce(totalWages,0));
console.log("----------------------------------");

//UC-7B Show the Day along with Daily wage  using array map helper function
let dailyCounter =0 ;
function mapDailyWithWage (dailyWage){
    dailyCounter++;
    return "Day "+dailyCounter + " = "+dailyWage;
}
let mapDailyWageArr = empDailyWageArr.map(mapDailyWithWage);
console.log("UC-7B: Daily Wage");
console.log(mapDailyWageArr);
console.log("-----------------");

//UC 7C - Show Days When Full Time Wage of 160 were earned
function fulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDailyWageArr.filter(fulltimeWage);
console.log("UC-7C :Daily Wage Filter When FullTime Wage Earned");
console.log(fullDayWageArr);
console.log("--------------------------------------------------");

//UC 7D - Find the first Occurance when Full Time Wage was earned using find Function
function findfulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC-7D :First time FullTime Wage was Earned on: " +
            mapDailyWageArr.find(findfulltimeWage) );
            console.log("------------------------------------------");

// UC-7E Check if Every Element of Full Time Wage Is Truely holding Full Time Wage            
function isAllfulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC-7E:Check All Element have FullTime Wage:"+
            mapDailyWageArr.every(isAllfulltimeWage));
            console.log("--------------------------------");

// UC-7F Check there is any Part Time Wage 
function isAnyfulltimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("UC-7F :Check If any have Part-Time Wage: "+
            mapDailyWageArr.some(isAnyfulltimeWage));
            console.log("------------------------------");
            
//UC-7G Find the number of Days the Employee Worked
function totalDaysWorked(numOfDays,dailyWage){
    if(dailyWage > 0)
        return numOfDays+1;
        return numOfDays;
}
console.log("UC-7G Number of Days the Employee Worked: "+
            empDailyWageArr.reduce(totalDaysWorked,0)); 
            console.log("------------------------------");
