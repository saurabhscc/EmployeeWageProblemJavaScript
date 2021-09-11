//UC1-Check Attendance of Employee
const IS_ABSENT =0;
let empCheck=Math.floor(Math.random()*10)%2;
if(empCheck == IS_ABSENT)
{
    console.log("Employee Is Absent");
    return;
}
else
{
    console.log("Employee Is present");
}