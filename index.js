
document.getElementById('generateButton').addEventListener('click', function () {
    const inputCheck = document.getElementById('namesInput').value
    if (inputCheck == "") {
        alert("Please enter some names it should not be empty");
    } else {
        const names = document.getElementById('namesInput').value.split(',');
        const shuffledNames = names.sort(() => 0.5 - Math.random());
        console.log(shuffledNames)
        const team1 = [];
        const team2 = [];

        shuffledNames.forEach((name, index) => {
            if (index % 2 === 0) {
                team1.push(name.trim());
            } else {
                team2.push(name.trim());
            }
        });

        document.getElementById('team1').innerHTML = team1.map(name => `<li>${name}</li>`).join('');
        document.getElementById('team2').innerHTML = team2.map(name => `<li>${name}</li>`).join('');
    }

});
