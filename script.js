function getCatFacts() {
    console.log("before fetch");

    // method/function chaining
    fetch('https://catfact.ninja/facts')
        .then(res => res.json()) // Anonymous function
        .then(catFacts => {
            console.log('cat Facts Data', catFacts);
            let html = ``;

            catFacts.data.forEach(catFact => {

                html += `                
                    <div class="col-sm-4 col-md-6 col-xl-12">    
                        ${catFact.fact}
                    </div>
                `
            });

            document.getElementById('catFacts').innerHTML = html;
        })

    console.log("after Fetch")
}

getCatFacts()