//UC9 -Use daily Wage Map and daily Hrs Map for Op using Arrow Function
// calc of daily wage & total hrs and full,part and no work days
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
let empDailyWageMap = new Map();
let empDailyHrsMap=new Map();//UC9
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
    empDailyHrsMap.set(workingDays, hours);
}

console.log(empDailyWageMap);

//Use of Reduce Function
function totalWages(totalWage,dailyWage){
    return totalWage + dailyWage;
}
console.log(" UC-8 Emp Wage Map totalHrs :- "+Array.from(empDailyWageMap.values()).reduce(totalWages,0));
console.log("------------------------------");

// UC9a : Calculate total wage and total hours using arrow functions
{
    console.log("UC9a : Total Wage And Total Hours Using Arrow Functions");
    console.log("");
    const findTotal = (totalVal, val) => {return totalVal + val;};
    let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
    let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage>0).reduce(findTotal,0);
    console.log("Total hours: " + totalHours);
    console.log("Total wages: " + totalSalary);
    console.log("---------------------------------------");
}

// UC9b : Show Full Working Days, Part Working Days And No Working Days
{
    console.log("UC9b : Show Full Working Days, Part Working Days And No Working Days");
    console.log("");
    let fullWorkingDays = new Array();
    let partWorkingDays = new Array();
    let noWorkingDays = new Array();

    empDailyHrsMap.forEach( (value, key) => {
        if(value == 8)
            fullWorkingDays.push(key);
        else if(value == 4)
            partWorkingDays.push(key);
        else
            noWorkingDays.push(key);
    });

    console.log("Full time working days: " + fullWorkingDays);
    console.log("Part time working days: " + partWorkingDays);
    console.log("Non working days: " + noWorkingDays);
    console.log("---------------------------------------");
}
