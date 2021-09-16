//UC8 -Store daily Wage In Map 
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
let empDailyWageMap = new Map();//UC8

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
    
    let hours = getWorkingHours(empCheck);
    empDailyWageArr.push(CalcDailyWage(hours));
    empDailyWageMap.set(workingDays,CalcDailyWage(hours));//UC8
}
console.log(empDailyWageMap);

//Use of Reduce Function
function totalWages(totalWage,dailyWage){
    return totalWage + dailyWage;
}
console.log(" UC-8 Emp Wage Map totalHrs :- "+Array.from(empDailyWageMap.values()).reduce(totalWages,0));
console.log("------------------------------");
