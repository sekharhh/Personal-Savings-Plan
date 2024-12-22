function calculate() {
    const salary = parseFloat(document.getElementById("salary").value) || 0;
    const rentalIncome = parseFloat(document.getElementById("rental-income").value) || 0;
    const otherIncomes = parseFloat(document.getElementById("other-incomes").value) || 0;
    const additionalIncome = parseFloat(document.getElementById("additional-income").value) || 0;
    const customIncome = parseFloat(document.getElementById("custom-income").value) || 0;

    const totalIncome = salary + rentalIncome + otherIncomes + additionalIncome + customIncome;
    document.getElementById("total-income").textContent = totalIncome.toFixed(2);

    const groceries = parseFloat(document.getElementById("groceries").value) || 0;
    const healthInsurance = parseFloat(document.getElementById("health-insurance").value) || 0;
    const termInsurance = parseFloat(document.getElementById("term-insurance").value) || 0;
    const schoolFees = parseFloat(document.getElementById("school-fees").value) || 0;
    const tuitionFees = parseFloat(document.getElementById("tuition-fees").value) || 0;
    const culturalActivity = parseFloat(document.getElementById("cultural-activity").value) || 0;
    const familyDining = parseFloat(document.getElementById("family-dining").value) || 0;
    const familyOuting = parseFloat(document.getElementById("family-outing").value) || 0;
    const otherExpenses = parseFloat(document.getElementById("other-expenses").value) || 0;

    const totalExpenses = groceries + healthInsurance + termInsurance + schoolFees + tuitionFees + culturalActivity + familyDining + familyOuting + otherExpenses;
    document.getElementById("total-expenses").textContent = totalExpenses.toFixed(2);

    const fdMonthly = parseFloat(document.getElementById("fd-monthly").value) || 0;
    const fdSaved = parseFloat(document.getElementById("fd-saved").value) || 0;
    const fdROI = parseFloat(document.getElementById("fd-roi").value) || 0;

    const poMonthly = parseFloat(document.getElementById("po-monthly").value) || 0;
    const poSaved = parseFloat(document.getElementById("po-saved").value) || 0;
    const poROI = parseFloat(document.getElementById("po-roi").value) || 0;

    const mfMonthly = parseFloat(document.getElementById("mf-monthly").value) || 0;
    const mfSaved = parseFloat(document.getElementById("mf-saved").value) || 0;
    const mfROI = parseFloat(document.getElementById("mf-roi").value) || 0;

    const otherMonthly = parseFloat(document.getElementById("other-monthly").value) || 0;
    const otherSaved = parseFloat(document.getElementById("other-saved").value) || 0;
    const otherROI = parseFloat(document.getElementById("other-roi").value) || 0;

    const totalSavings = fdMonthly + poMonthly + mfMonthly + otherMonthly;
    document.getElementById("total-savings").textContent = totalSavings.toFixed(2);

    const netWorth = parseFloat(document.getElementById("net-worth").value) || 0;

    // Calculate the future savings and net worth
    const surplus = totalIncome - (totalExpenses + totalSavings);
    const investedSurplus = surplus * 0.04;  // Default 4% ROI for mutual funds

    const yearlyIncome = totalIncome * 12;
    const yearlyExpenses = totalExpenses * 12;
    const yearlySavings = totalSavings * 12;

    let projections = '';
    for (let year = 2024; year <= 2030; year++) {
        const projectedNetWorth = netWorth + (investedSurplus * (year - 2024));
        projections += `<p><strong>${year}:</strong> Projected Net Worth: ₹${projectedNetWorth.toFixed(2)}</p>`;
    }

    document.getElementById("output").innerHTML = `
        <h3>Summary</h3>
        <p><strong>Total Income (Yearly):</strong> ₹${yearlyIncome.toFixed(2)}</p>
        <p><strong>Total Expenses (Yearly):</strong> ₹${yearlyExpenses.toFixed(2)}</p>
        <p><strong>Total Savings (Yearly):</strong> ₹${yearlySavings.toFixed(2)}</p>
        <p><strong>Surplus:</strong> ₹${surplus.toFixed(2)}</p>
        ${projections}
    `;
}
