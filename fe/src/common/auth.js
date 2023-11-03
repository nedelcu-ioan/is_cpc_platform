import axios from 'axios';

be_ip = "172.40.0.11"

export function authenticate(email, password) {

    const response = axios.post(
        "http://${be_ip}:8090/api/v1/auth/users/authenticate",
        {
            'email': email,
            'password': password
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );

    if (200 === response.status) {
        localStorage.setItem("token", response.token);  
        return true;
    } else {
        return false;
    }
}

export function register(firstname, lastname, email, password) {
    const response = axios.post(
        'http://${be_ip}:8090/api/v1/auth/users/register',
        {
          'firstname': firstname,
          'lastname': lastname,
          'email': email,
          'password': password
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
    );

    if (200 === response.status) {
        localStorage.setItem("token", response.token);
        return true;
    } else {
        return false;
    }
}

export function logout() {
    localStorage.setItem("token", null);
}