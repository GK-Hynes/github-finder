class GitHub {
  constructor() {
    this.client_id = "298afac4b5bc721c9bc1";
    this.client_secret = " b40f70083b481cde557f9f951b0dc69ab006f0dd";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id${
        this.client_id
      }&client_secret${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      // object short notation for profile: profile
      profile
    };
  }
}
