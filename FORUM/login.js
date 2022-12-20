//Login
const login = document.getElementById("login");

async function sendData(login) {
    try {
        const formData = new FormData(login)
        const queryString = new URLSearchParams(formData).toString()
        const response = await fetch(baseurl + "/auth/local/", {
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
        localStorage.setItem("Token", data.jwt);
        window.location.href = "inicio.html";

    } catch (error) {
        console.log(error)
    }
}

login.addEventListener('submit', (e) => {
    e.preventDefault();
    sendData(login);
})