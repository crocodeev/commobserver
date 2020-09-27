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
    .then(data => console.log(data));
    //this.authenticated = true;
    //callback()
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
