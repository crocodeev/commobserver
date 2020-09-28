class Auth {

  constructor(){
    this.authenticated = false;
    this.user = "";
    this.password = "";
  }

  login(callback) {

    const payload = {
      username: this.user,
      password: this.password
    }


    fetch('api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => {
      
      this.authenticated = true;
      localStorage.setItem('token', data.token);
      callback();
    })
    .catch(err => console.log(err));
  }

  logout(callback) {
    this.authenticated = false;
    callback()
  }

  isAuthenticated() {
    return this.authenticated;
  }


}

export default new Auth();
