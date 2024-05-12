async function fetchDataForYear(year) {
    const months = Array.from({ length: 12 }, (_, i) => i + 1); // Array of months [1, 2, ..., 12]
    const baseUrl = "https://corsproxy.io/?https://services.nvd.nist.gov/rest/json/cves/2.0/?resultsPerPage=1";
    //https://services.nvd.nist.gov/rest/json/cves/2.0
    const results = [];

    for (const month of months) {
        // Get the last day of the month
        const lastDayOfMonth = new Date(year, month, 0).getDate();
        const startDate = `${year}-${month.toString().padStart(2, '0')}-01T00:00:00.000`;
        const endDate = `${year}-${month.toString().padStart(2, '0')}-${lastDayOfMonth.toString().padStart(2, '0')}T00:00:00.000`;
        const url = `${baseUrl}&pubStartDate=${startDate}&pubEndDate=${endDate}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            results.push({ month: month, totalResults: data.totalResults });
        } catch (error) {
            console.error(`Error fetching data for ${year}-${month}:`, error);
        }
    }

    return results;
}

// Usage
const year = 2023;
fetchDataForYear(year)
    .then(results => {
        const xValues = ['JAN', 'FEB', 'MRT', 'APR', 'MEI', 'JUN', 'JUL', 'AUG', 'SEP', 'OKT', 'NOV', 'DEC'];
        const yValues = results.map(data => data.totalResults);

        new Chart("myChart", {
            type: 'line',
            data: {
                labels: xValues,
                datasets: [{
                    label: '# Vulnerabilites / maand in 2023',
                    backgroundColor: "rgba(0,0,255,1.0)",
                    borderColor: "rgba(0,0,255,0.1)",
                    data: yValues,
                    fill: false
                }]
            },
            options: {
                animations: {
                    tension: {
                    duration: 1000,
                    easing: 'linear',
                    from: 0,
                    to: 1,
                    loop: true
                    }
                }
                },
            scales: {
                y: { // defining min and max so hiding the dataset does not change scale range
                    min: 0,
                    max: 3000
                }
            }
        });
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
