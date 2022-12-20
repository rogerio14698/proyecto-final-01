var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://proyecto-final-eoi-dhr.onrender.com/api/conversacions/?filters[categoria][id][$eq]=4", requestOptions)
    .then(response => response.text())
    .then(result => {
        let data = JSON.parse(result)
        let conversacions = ''
        data.data.array.forEach(element => {
            console.log(element.attributes.Mensaje)
        });

    })
    .catch(error => console.log('error', error));

