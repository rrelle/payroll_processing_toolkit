const employees = [
    {name: "Jim Halpert", hourlyrate:25, hoursworked:50},
    {name: "Pam Beesly", hourlyrate: 28, hoursworked:55},
    {name: "Dwight Schrute", hourlyrate:30, hoursworked:60}
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


