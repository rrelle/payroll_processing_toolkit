const employees = [
    {name: "Jim Ferguson", hourlyrate:25, hoursworked:50},
    {name: "Pam Idowu", hourlyrate: 28, hoursworked:55},
    {name: "Dwight Francois", hourlyrate:30, hoursworked:60}
];
function calculateBasePay(rate, hours) {
    const standardHours = 40;
    if (hours > standardHours) {
        const overtimeHours = hours - standardHours;
    }
    return rate * standardHours;
}
function calculateOvertimePay(rate, hours) {
    const standardHours = 40;
    if (hours > standardHours) {
        const overtimeHours = hours - standardHours;
        return (rate * 1.5 * overtimeHours);
    }
    return 0;
}
console.log(calculateBasePay(25, 50));
console.log(calculateOvertimePay(25, 50));

function calculateTaxes(grossPay) { 
    return grossPay * 0.15;
}
function processPayroll(employee) {
    const basePay = calculateBasePay(employee.hourlyrate, employee.hoursworked);
    const overtimePay = calculateOvertimePay(employee.hourlyrate, employee.hoursworked);
    const grossPay = basePay + overtimePay;
    const taxes = calculateTaxes(grossPay);
    const netPay = grossPay - taxes;
    return {
        name: employee.name,
        grossPay: grossPay,
        basePay: basePay,
        overtimePay: overtimePay,
        netPay: netPay
    };
}
employees.forEach(employee => {
    const payroll = processPayroll(employee);
    console.log(payroll);
});





