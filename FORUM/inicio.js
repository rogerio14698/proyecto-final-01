
var HeadToken = localStorage.getItem("Token");

async function sendData() {
    try {
        const formData = new FormData()
        const queryString = new URLSearchParams(formData).toString()
        const response = await fetch('https://proyecto-final-eoi-dhr.onrender.com/api/users/me', {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + HeadToken,
            },
        });


        if (!response.ok) {
            if (response.status == 401) {
                localStorage.removeItem("token");
                window.location.href = "login.html";
            } else {
                const message = `Error: ${response.status}`;
                throw new Error(message);
            }
            const message = `Error: ${response.status}`;
            throw new Error(message);

        }

        const data = await response.json();


        document.getElementById("mostrar").innerHTML = "Bienvenido " + data.name + " " + data.surname;
    } catch (error) {
        console.log(error)
    }
}


sendData();

