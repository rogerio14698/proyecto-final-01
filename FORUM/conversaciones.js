var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("http://localhost:1337/api/conversacions/?filters[categoria][id][$eq]=4", requestOptions)
    .then(response => response.text())
    .then(result => {
        let data = JSON.parse(result)
        let conversacions = ''
        data.data.array.forEach(element => {
            console.log(element.attributes.Mensaje)
        });

    })
    .catch(error => console.log('error', error));

