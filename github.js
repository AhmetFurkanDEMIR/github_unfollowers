class Github{
    constructor(){
        this.url = 'https://api.github.com/users/';
        //https://api.github.com/users/batuhanturk/following
    }

    async getGithubData(username){
        const responseUser = await fetch(this.url + username);
        const responseRepo = await fetch(this.url + username + '/repos');
        const responseFollowers = await fetch(this.url + username + "/followers?per_page=100");
        const responseFollowing = await fetch(this.url + username + "/following?per_page=100");

        const userData = await responseUser.json();
        const repoData = await responseRepo.json();
        const FollowersData = await responseFollowers.json();
        const FollowingData = await responseFollowing.json();


        return {
            user:userData,
            repo:repoData,
            followers:FollowersData,
            following:FollowingData
        }
    }
}