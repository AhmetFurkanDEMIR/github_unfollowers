class Github {
  constructor() {
    this.url = "https://api.github.com/users/";
    //https://api.github.com/users/batuhanturk/following
    this.followingArray = [];
    this.followersArray = [];
    this.ui = new UI();
  }

  async getGithubData(username) {
    const responseUser = await fetch(this.url + username);
    const responseRepo = await fetch(this.url + username + "/repos");

    const userData = await responseUser.json();
    const repoData = await responseRepo.json();

    if (userData.followers > 5000 || userData.followings > 5000) {
      this.ui.showError(
        "Takipçi sayın veya takip sayın 5000'den fazla ise Geri takip etmeyenleri göremezsin !!"
      );
    } else {
      let page = 1;
      for (let a = 1; a < userData.followers; a += 100) {
        const responseFollowers = await fetch(
          this.url + username + "/followers?per_page=100&page=" + page
        );
        const responseFollowing = await fetch(
          this.url + username + "/following?per_page=100&page=" + page
        );
        page++;
        const FollowersData = await responseFollowers.json();
        const FollowingData = await responseFollowing.json();

        for (let i = 0; i < FollowingData.length; i++) {
          this.followingArray.push(FollowingData[i].login);
        }
        for (let i = 0; i < FollowersData.length; i++) {
          this.followersArray.push(FollowersData[i].login);
        }
      }
      page = 1;
      for (let a = 1; a * 100 < userData.following; a++) {
        const responseFollowers = await fetch(
          this.url + username + "/followers?per_page=100&page=" + page
        );
        const responseFollowing = await fetch(
          this.url + username + "/following?per_page=100&page=" + page
        );
        page++;
        const FollowersData = await responseFollowers.json();
        const FollowingData = await responseFollowing.json();

        for (let i = 0; i < FollowingData.length; i++) {
          this.followingArray.push(FollowingData[i].login);
        }
        for (let i = 0; i < FollowersData.length; i++) {
          this.followersArray.push(FollowersData[i].login);
        }
      }
    }

    return {
      user: userData,
      repo: repoData,
    };
  }
}
