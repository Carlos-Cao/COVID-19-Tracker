function trackData() {
    const fetchPromise = fetch("https://api.covid19api.com/summary",
        {
            headers: {
                "Accept": "application/json",
            }
        },
    );
    const streamPromise = fetchPromise.then((response) => response.json());
    streamPromise.then((data) => {
        console.log(data);
        data.Countries.forEach((item) => {
            console.log(item);
            document.getElementById("data").innerHTML +=
                ("<table><tr><td><u><b>" + item.Country + "</b></u><tr><td>" +
                    "<tr><td> Country Code: " + item.CountryCode + "</tr></td>" +
                    "<tr><td> Date Updated: " + item.Date + "</tr></td>" +
                    "<tr><td><br><u> Cases Confirmed </u><td><tr>" +
                    "<tr><td> New Confirmed: " + item.NewConfirmed + "</td></tr>" +
                    "<tr><td> Total Confirmed: " + item.TotalConfirmed + "</td></tr>" +
                    "<tr><td><br><u> Cases Recovered </u><td><tr>" +
                    "<tr><td> New Recovered: " + item.NewRecovered + "</td></tr>" +
                    "<tr><td> Total Recovered: " + item.TotalRecovered + "</td></tr>" +
                    "<tr><td><br><u> Deaths </u><td><tr>" +
                    "<tr><td> New Deaths: " + item.NewDeaths + "</td></tr>" +
                    "<tr><td> Total Deaths: " + item.TotalDeaths + "</td></tr>" +
                    "</table><hr>"
                )
        });
    });
}
