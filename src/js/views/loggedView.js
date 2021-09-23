class loggedView {
  _userLoggedIcons = document.querySelectorAll('.user');
  _userNoLoggedIcons = document.querySelectorAll('.no-user');
  _signoutBtn = document.querySelector('#signoutBtn');
  constructor() {
    this._signoutBtn.addEventListener('click', this.userSignout.bind(this));
  }
  _userLogged() {
    const user = localStorage.getItem('user');
    if (!user) return false;
    return true;
  }

  _removeUserLoggedIcons() {
    this._userLoggedIcons.forEach(icon => icon.classList.add('hidden'));
  }

  _removeNoUserLoggedIcons() {
    this._userNoLoggedIcons.forEach(icon => icon.classList.add('hidden'));
  }

  userLoggedActions() {
    this._userLogged()
      ? this._removeNoUserLoggedIcons()
      : this._removeUserLoggedIcons();
  }
  userLogged(userData) {
    const user = userData.data.user;
    localStorage.setItem(
      'user',
      JSON.stringify({
        name: user.name,
        email: user.email,
        photo: user.photo,
        role: user.role,
        token: userData.token,
      })
    );
    location.reload();
  }

  userSignout() {
    localStorage.removeItem('user');
    location.reload();
  }
}

export default new loggedView();
