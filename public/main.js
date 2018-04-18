const form  = document.getElementById('vote-form');
//event listener for submit button it will respond after someone hit submit btn
form.addEventListener('submit', (e) => {
    //query selector any css method
    const choice = document.querySelector('input[name=os]:checked').value;
     const data = {os: choice};
//info about request 
     fetch('http://localhost:8000/poll', {
         method:'post',
         body: JSON.stringify(data),
         headers : new Headers({
             'content-Type': 'application/json'
         })
     })
     .then(res => res.json())
     .then(data => console.log(data))
     .catch(err => console.log(err));
      e.preventDefault()
    });

    let datapoints = [
        {label:'Windows', y: 0},
        {label:'MacOs', y: 0},
        {label:'Linux', y: 0},
        {label:'Others', y: 0},
    ];

    const chartContainer = document.querySelector('#chartContainer');

    if(chartContainer){
        const chart = new CanvasJS.Chart('chartContainer', {
            animationEnabled: true,
            theme: 'theme1',
            title: {
                text:'OS results'
            },
            data:[ {
                type:'column',
                datapoints:datapoints
            }
        ]
        })
    chart.render();
    }