<template>
  <section
    v-show="activeSection"
    class="profile"
  >
    <div class="profile_user">
      <div class="profile_user_avatar">
        <img
          :src="userInfo.avatar_url"
          alt=""
          width="240"
        >
      </div>
      <div class="profile_content">
        <p>{{userInfo.login}}</p>
        <p v-show="userInfo.company">Company: {{userInfo.company}}</p>
        <p v-show="userInfo.location">Location: {{userInfo.location}}</p>
        <p v-show="userInfo.blog">Website: <a :href="userInfo.blog">{{userInfo.blog.replace(/(^\w+:|^)\/\//, '')}}</a></p>
      </div>
    </div>

    <div class="profile_repo">
      <div
        v-for="(repo,key) in userRepo.reverse().slice(0, 4)"
        :key="key"
        class="profile_repo_card"
      >
        <p>{{repo.name}}</p>
        <span v-if="repo.description<60">{{repo.description}}</span>
        <span v-else>{{repo.description.substring(0,45)+"..."}}</span>
        <div class="profile_repo_info">
          <span>
            <eva-icon
              name="code-outline"
              width="18"
              height="18"
              fill="grey"
            ></eva-icon> {{repo.language}}
          </span>
          <span>
            <eva-icon
              name="star"
              width="18"
              height="18"
              fill="grey"
            ></eva-icon> {{repo.stargazers_count}}
          </span>
          <span>
            <eva-icon
              name="copy"
              width="18"
              height="18"
              fill="grey"
            ></eva-icon> {{repo.forks}}
          </span>
        </div>
      </div>

    </div>
  </section>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'profile',
  data: () => ({

  }),
  methods: {
  },
  computed: {
    ...mapState(['userInfo', 'userRepo', 'activeSection'])
  }
}
</script>
<style lang="scss">
.profile {
  display: flex;
  margin: 4em 0 0 0;
  .profile_user_avatar {
    img {
      border-radius: 8px;
    }
  }
  .profile_content {
    a {
      text-decoration: none;
      color: #007fff;
    }
  }
  .profile_repo {
    display: flex;
    flex-wrap: wrap;
    height: 240px;
    .profile_repo_card {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 396px;
      height: 113px;
      margin: 0 0 14px 14px;
      padding: 0em 1em;
      background-color: #fafafa;
      border-radius: 8px;
      p {
        margin: 1em 0 0.5em 0;
        color: #007fff;
      }
      span {
        margin: 0 0 1em 0;
      }
    }
  }
  .profile_repo_info {
    width: 16em;
    display: flex;
    justify-content: space-between;
    // padding: 0.5em 0;
    font-size: 12px;
    span {
      display: flex;
      align-items: center;
      i {
        padding: 3px 3px 0 0;
      }
    }
  }
}
</style>
