class UserModel {
  constructor(id, apodo, avatar_url, website, bio, location, session, email) {
    this.id = id;
    this.avatar_url = avatar_url;
    this.apodo = apodo;
    this.website = website;
    this.bio = bio;
    this.location = location;
    this.session = session;
    this.email = email;
  }
}

export default UserModel;
