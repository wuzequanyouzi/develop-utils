<template>
  <div class="author-wrap">
    <div class="header"></div>
    <div class="img">
      <img src="../../../../assets/imgs/show.jpg" alt="动感超人" />
    </div>
    <div class="information">
      <span @click="handleClick('https://juejin.cn/user/1187128290064439/posts')">
        <svg
          t="1696843080965"
          class="icon"
          viewBox="0 0 1316 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4090"
          width="28"
          height="28"
        >
          <path
            d="M643.181714 247.698286l154.916572-123.172572L643.181714 0.256 643.072 0l-154.660571 124.269714 154.660571 123.245715 0.109714 0.182857z m0 388.461714h0.109715l399.579428-315.245714-108.361143-87.04-291.218285 229.888h-0.146286l-0.109714 0.146285L351.817143 234.093714l-108.251429 87.04 399.433143 315.136 0.146286-0.146285z m-0.146285 215.552l0.146285-0.146286 534.893715-422.034285 108.397714 87.04-243.309714 192L643.145143 1024 10.422857 525.056 0 516.754286l108.251429-86.893715L643.035429 851.748571z"
            fill="#1E80FF"
            p-id="4091"
          ></path>
        </svg>
      </span>
      <span @click="handleClick('https://github.com/wuzequanyouzi')">
        <svg
          t="1696843254608"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5423"
          width="24"
          height="24"
        >
          <path
            d="M512 12.64c-282.752 0-512 229.216-512 512 0 226.208 146.72 418.144 350.144 485.824 25.6 4.736 35.008-11.104 35.008-24.64 0-12.192-0.48-52.544-0.704-95.328-142.464 30.976-172.512-60.416-172.512-60.416-23.296-59.168-56.832-74.912-56.832-74.912-46.464-31.776 3.52-31.136 3.52-31.136 51.392 3.616 78.464 52.768 78.464 52.768 45.664 78.272 119.776 55.648 148.992 42.56 4.576-33.088 17.856-55.68 32.512-68.48-113.728-12.928-233.28-56.864-233.28-253.024 0-55.904 20-101.568 52.768-137.44-5.312-12.896-22.848-64.96 4.96-135.488 0 0 43.008-13.76 140.832 52.48 40.832-11.36 84.64-17.024 128.16-17.248 43.488 0.192 87.328 5.888 128.256 17.248 97.728-66.24 140.64-52.48 140.64-52.48 27.872 70.528 10.336 122.592 5.024 135.488 32.832 35.84 52.704 81.536 52.704 137.44 0 196.64-119.776 239.936-233.792 252.64 18.368 15.904 34.72 47.04 34.72 94.816 0 68.512-0.608 123.648-0.608 140.512 0 13.632 9.216 29.6 35.168 24.576 203.328-67.776 349.856-259.616 349.856-485.76 0-282.784-229.248-512-512-512z"
            fill="#353535"
            p-id="5424"
          ></path>
        </svg>
      </span>
    </div>
    <div class="card-content">
      <h4 class="nickname">吴泽权</h4>
      <div class="tag">
        <div>💡学习</div>
        <div><img class="icon" src="../../../../assets/imgs/guga.png"/><span>特摄</span></div>
        <div>🍟美食</div>
      </div>
      <div class="desc">
        学习以及工作中遇到的问题记录，希望可以帮到其他人。
        正在学习vite、vue3、electron，欢迎多多交流。
      </div>
    </div>
  </div>
</template>

<script setup>
const handleClick = (url) => {
  window.open(url)
}
</script>

<style lang="scss" scoped>
.author-wrap {
  width: 300px;
  height: 600px;
  border: 1px solid #ddd;
  border-radius: 16px;
  overflow: hidden;
  background-color: #fff;
  .header {
    width: 100%;
    height: 20px;
    display: flex;
    background: #e3e3e3;
  }
  .img {
    margin: 30px auto 20px;
    width: 268px;
    height: 200px;
    background-color: #eee;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .information {
    margin: 0 20px;
    padding-bottom: 20px;
    height: 26px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 1px solid #bbb;
    span {
      cursor: pointer;
    }
  }
  .card-content {
    .nickname {
      margin: 0 20px;
      color: #476582;
      height: 40px;
      line-height: 40px;
      font-size: 20px;
      padding-left: 5px;
    }
    .tag {
      display: flex;
      justify-content: space-evenly;
      margin: 16px 0 24px;
      cursor: pointer;
      div {
        width: 76px;
        height: 30px;
        line-height: 30px;
        background-color: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        font-size: 14px;
      }
      .icon {
        width: 24px;
      }
    }
    .desc {
      margin: 0 20px;
      text-indent: 2em;
      line-height: 1.6;
    }
  }
}
</style>
