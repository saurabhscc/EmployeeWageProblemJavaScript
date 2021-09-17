//UC10 -Objection Creation

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
let empDailyHrsMap=new Map();
let empDailyHrsandwageArr =new Array();//UC10
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
empDailyHrsandwageArr.push(
    {
        dayNum: workingDays,
        dailyHours: empHrs,
        dailyWage: CalcDailyWage(empHrs),
        toString() {
            return "\nDay: " + this.dayNum + "\nWorking Hours: " + this.dailyHours + "\nWage Earned: " + this.dailyWage;
        }
    }
);

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
// UC10 Store Day, Daily Hours And Daily Wage In An Object And Print
{
    console.log("UC10 : Display Employee Object Array Containing Day, Daily Hours And Daily Wage" +empDailyHrsandwageArr );
    console.log("-------------------------------------------");
}
//UC11a - UC11d Using Object Functions Along With Arrow Functions
{
    console.log("UC11a - UC11d Using Object Functions Along With Arrow Functions")

    // UC11a Calculate Total Wages And Hours Using Object Functions And Arrow Functions
    console.log("\nUC11a : Calculate Total Wages And Hours Using Object Functions And Arrow Functions");
    let totalWages = empDailyHrsandwageArr.filter(dailyHrsandWage => dailyHrsandWage.dailyWage > 0)
                                 .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);
    let totalHours = empDailyHrsandwageArr.filter(dailyHrsandWage => dailyHrsandWage.dailyHours > 0)
                                 .reduce((totalHours, dailyHrsandWage) => totalHours += dailyHrsandWage.dailyHours, 0);
    console.log("Total Wages: " + totalWages);
    console.log("Total Hours: " + totalHours);
    console.log("---------------------------");

    // UC11b Show Full Working Days Using ForEach And Object Functions
    console.log("\nUC11b : Show Full Working Days Using ForEach And Object Functions");
    process.stdout.write("Full Working Days: ")
    empDailyHrsandwageArr.filter(dailyHrsandWage => dailyHrsandWage.dailyHours == 8)
                  .forEach(dailyHrsandWage => process.stdout.write(dailyHrsandWage.toString()));
    
    // UC11c Show Part Time Working Days Using Map And Object Functions
    console.log("\nUC11c : Show Part Time Working Days Using Map And Object Functions");
    process.stdout.write("Part Time Working Days: ");
    let partWorkingDayStrarray = empDailyHrsandwageArr.filter(dailyHrsandWage => dailyHrsandWage.dailyHours == 4).map(dailyHrsandWage => dailyHrsandWage.toString());
                  
    console.log(partWorkingDayStrarray);
              
     // UC11d Show Non Working Days Using Map Function And Object Function
    console.log("\nUC11d : Show Non Working Days Using Map Function And Object Function")
    process.stdout.write("Non Working Days: ");
    let nonWorkingDaysArray = empDailyHrsandwageArr.filter(dailyHrsandWage => dailyHrsandWage.dailyHours == 0)
                                            .map(dailyHrsandWage => dailyHrsandWage.toString());
    console.log(nonWorkingDaysArray);             
}