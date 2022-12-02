const form = document.getElementById("form");
//const url = "";

async function sendData(form) {
    try {
        const formData = new FormData(form)
        const queryString = new URLSearchParams(formData).toString()
        const response = await fetch('http://localhost:1337/api/auth/local/register', {
            method: "POST",
            body: queryString, headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });

        if (!response.ok) {
            const message = `Error: ${response.status}`;
            throw new Error(message);
        }


        const data = await response.json();
        console.log(data)

        localStorage.setItem("Token", data.jwt);
        window.location.href = "login.html";
        //setTimeout(function () { window.location.href = "index.html"; }, 1000);*/
    } catch (error) {
        console.log(error)
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById("username").value = document.getElementById("email").value;

    //console.log(isTokenExpired);

    sendData(form)
})