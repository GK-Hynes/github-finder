class GitHub {
  constructor() {
    this.client_id = "298afac4b5bc721c9bc1";
    this.client_secret = "b9fb36198a91f52704ae47b5a6685d940afd0a6a";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${
        this.repos_count
      }&&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${
        this.client_secret
      }`
    );

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      // object short notation for profile: profile
      profile,
      repos
    };
  }
}
