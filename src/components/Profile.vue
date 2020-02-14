<template>
  <section class="profile">
    <div class="profile_user">
      <div class="profile_user_avatar">
        <img
          src="https://avatars0.githubusercontent.com/u/36362784?v=4"
          alt=""
          width="240"
        >
      </div>
      <div class="profile_content">
        <p>Alireza Hamid</p>
        <p>Company: TickTech</p>
        <p>Location: Ahvaz</p>
        <p>Website: <a href="http://alirezahamid.com">alirezahamid.com</a></p>
      </div>
    </div>

    <div class="profile_repo">
      <div class="profile_repo_card">
        <p>name of repo</p>
        <span>desc of repo</span>
        <div class="profile_repo_info">
          <span>
            <eva-icon
              name="code-outline"
              width="18"
              height="18"
              fill="grey"
            ></eva-icon> Javascript
          </span>
          <span>
            <eva-icon
              name="star"
              width="18"
              height="18"
              fill="grey"
            ></eva-icon> 23
          </span>
          <span>
            <eva-icon
              name="copy"
              width="18"
              height="18"
              fill="grey"
            ></eva-icon> 6
          </span>
        </div>
      </div>
      <div class="profile_repo_card">
        <p>name of repo</p>
        <span>desc of repo</span>
        <div class="profile_repo_info">
          <span>
            <eva-icon
              name="code-outline"
              width="18"
              height="18"
              fill="grey"
            ></eva-icon> Javascript
          </span>
          <span>
            <eva-icon
              name="star"
              width="18"
              height="18"
              fill="grey"
            ></eva-icon> 23
          </span>
          <span>
            <eva-icon
              name="copy"
              width="18"
              height="18"
              fill="grey"
            ></eva-icon> 6
          </span>
        </div>
      </div>
      <div class="profile_repo_card">
        <p>name of repo</p>
        <span>desc of repo</span>
        <div class="profile_repo_info">
          <span>
            <eva-icon
              name="code-outline"
              width="18"
              height="18"
              fill="grey"
            ></eva-icon> Javascript
          </span>
          <span>
            <eva-icon
              name="star"
              width="18"
              height="18"
              fill="grey"
            ></eva-icon> 23
          </span>
          <span>
            <eva-icon
              name="copy"
              width="18"
              height="18"
              fill="grey"
            ></eva-icon> 6
          </span>
        </div>
      </div>
      <div class="profile_repo_card">
        <p>name of repo</p>
        <span>desc of repo</span>
        <div class="profile_repo_info">
          <span>
            <eva-icon
              name="code-outline"
              width="18"
              height="18"
              fill="grey"
            ></eva-icon> Javascript
          </span>
          <span>
            <eva-icon
              name="star"
              width="18"
              height="18"
              fill="grey"
            ></eva-icon> 23
          </span>
          <span>
            <eva-icon
              name="copy"
              width="18"
              height="18"
              fill="grey"
            ></eva-icon> 6
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
  computed: {
    ...mapState(['userInfo'])
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
  .profile_repo {
    display: flex;
    flex-wrap: wrap;
    height: 240px;
    .profile_repo_card {
      width: 396px;
      height: 113px;
      margin: 0 0 14px 14px;
      padding: 0 1em;
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
    padding: 0.5em 0;
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
