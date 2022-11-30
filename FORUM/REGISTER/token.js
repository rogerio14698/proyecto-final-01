function FirstRegister() {
    let register = document.getElementById("login").text;
}



function isTokenExpired() {
    const token = localStorage.getItem("{{URL}}/auth/local/register")

    if (!token)
        return true

    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    const now = (Math.floor((new Date).getTime() / 1000))

    return now >= expiry;
}

function checkToken() {
    if (isTokenExpired()) {
        localStorage.removeItem("{{URL}}/auth/local/register")
        window.location.href = "login.html"
    }
}

if (!response.ok) {
    if (response.status == 401) {
        localStorage.removeItem("{{URL}}/auth/local/register")
        window.location.href = "login.html"
    } else {
        const message = `Error: ${response.status}`;
        throw new Error(message);
    }
}