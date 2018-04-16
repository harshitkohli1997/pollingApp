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
    });S