fetch('https://phishstats.info:2096/api/phishing?_where=(score,gt,7)&_size=10&_sort=-date')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        let htmlBuilder = `<h2>Phishedstats.io</h1><p class="lead">Recente domeinen waarmee gephished wordt waarvan score > 7</p>`;
        htmlBuilder += `<table class="table table-sm"><thead><tr><th scope="col">Titel</th><th scope="col">Domein</th><th scope="col">Score</th><th scope="col">Datum</th></tr></thead>`;
        for (let i = 0; i < json.length; i++) {
            const phishing = json[i];
            const title = phishing.title ? phishing.title : 'Title of website not found';
            const dateString = phishing.date;
            const date = new Date(dateString);
        
            const options = {
            hour: 'numeric',
            minute: 'numeric',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
            };
        
            const formattedDate = new Intl.DateTimeFormat('nl-BE', options).format(date);
            console.log(formattedDate);
        
            htmlBuilder += `<tr><td>${title}</td><td>${phishing.host}</td><td>${phishing.score}</td><td>${formattedDate}</td></tr>`;
        }
        htmlBuilder += "</table>";
        console.log(htmlBuilder);
        document.getElementById("phishingstatscard2").innerHTML = htmlBuilder;
    });