const films = {
  "full-moon": {
    title: "中秋快乐",
    meta: "FULL MOON · 编剧、导演 · 2022 · 剧情 / 亲情 · 23mins",
    description:
      "一个高中生在中秋节这天孤身前往父亲的小三家里，但却意外地发现了自己同父异母的妹妹。在与小三和“妹妹”短暂的相处中，他逐渐意识到了两个家庭的对等关系，最后无奈放弃驱逐这两人，继续暗流涌动的生活。",
    awards:
      "入围第3届IM两岸青年影展\n入围2022年伦敦升空电影节\n入围第15届斋浦尔国际电影节\n入围2022年蒙特利尔独立电影节，获最佳学生作品荣誉提名",
    link: "https://vimeo.com/1198353524?share=copy&fl=sv&fe=ci",
    embed: "https://player.vimeo.com/video/1198353524",
  },
  "future-song": {
    title: "未来赞美诗",
    meta: "A FUTURE SONG · 执行制片 · 2025 · 科幻 / 剧情 · 23mins",
    description:
      "「芯片」成为思念的容器，「重逢」变成按秒计费的商品，我们是否还能触摸到爱的本质？\n导演：韩延\n主演：张新成 叶童",
    awards: "",
    link: "https://www.bilibili.com/video/BV1anbmzLEdc/",
    embed: "https://player.bilibili.com/player.html?bvid=BV1anbmzLEdc&page=1&autoplay=0",
  },
  "per-aspera": {
    title: "星河入梦",
    meta: "PER ASPERA AD ASTRA · 制片协调 · 2026 · 科幻 / 动作 / 冒险 · 111mins",
    description:
      "近未来，虚拟梦境系统“良梦”问世，人们可以在自己定制的梦境中随时“圆梦”。然而，一场由“梦”引发的危机悄然而至。\n导演：韩延\n主演：王鹤棣  宋茜  汪铎  祖峰",
    awards: "",
    link: "https://www.bilibili.com/bangumi/play/ep3680369?theme=movie",
  },
  "beijing-chicken": {
    title: "北京的鸡",
    meta: "BEIJING CHICKEN · 编剧、导演 · 2021 · 喜剧 / 爱情 · 15mins",
    description:
      "疫情期间，来自广东的北漂青年林家俊要在租来的房子里杀鸡拜神，以佑家人，却遇到了各种意想不到的阻碍。",
    awards: "第二届“冇”国际青年影像周·禁止沮丧单元入围作品",
    link: "https://www.xinpianchang.com/a11643387?from=UserProfile",
  },
  "fragrant-shadow": {
    title: "暗香",
    meta: "FRAGANT SHADOW · 编剧、导演 · 2017 · 悬疑 / 犯罪 / 爱情 · 10mins",
    description: "在一次绑架中，杀手以特殊的手法结束了人质的生命，但背后居然是浪漫的救赎。",
    awards: "第3届海南微电影节入围作品",
    link: "https://www.bilibili.com/video/BV1DJ41127wS/",
    embed: "https://player.bilibili.com/player.html?bvid=BV1DJ41127wS&page=1&autoplay=0",
  },
  "coconut-bus": {
    title: "公交牌椰汁",
    meta: "COCONUT BUS · 声音设计 · 2020 · 悬疑 / 犯罪 · 40mins",
    description:
      "小偷在公交车上偷手机，却意外遇上精神分裂的歹徒劫车，一段癫狂的公交之旅就此开启。",
    awards: "",
    link: "https://www.bilibili.com/bangumi/play/ep746346?theme=movie",
  },
  "i-am": {
    title: "I AM",
    meta: "I AM · 独立制作 · 2026 · AI / 科幻 / 爱情 · 10mins",
    description: "如果 AI 有了五官，有了欲望，它要如何探索自己。",
    awards: "",
    link: "https://www.bilibili.com/video/BV1CTApzoEzc/",
    embed: "https://player.bilibili.com/player.html?bvid=BV1CTApzoEzc&page=1&autoplay=0",
  },
};

const dialog = document.querySelector(".film-dialog");
const dialogMedia = document.querySelector("#dialog-media");
const dialogTitle = document.querySelector("#dialog-title");
const dialogMeta = document.querySelector("#dialog-meta");
const dialogDescription = document.querySelector("#dialog-description");
const dialogAwards = document.querySelector("#dialog-awards");
const dialogLink = document.querySelector("#dialog-link");
const closeDialog = document.querySelector(".close-dialog");
const revealContact = document.querySelector("#reveal-contact");
const contactValue = document.querySelector("#contact-value");

document.querySelectorAll("[data-film]").forEach((button) => {
  button.addEventListener("click", () => {
    const film = films[button.dataset.film];
    dialogTitle.textContent = film.title;
    dialogMeta.textContent = film.meta;
    dialogDescription.textContent = film.description;
    dialogAwards.textContent = film.awards;
    dialogLink.href = film.link;

    if (film.embed) {
      dialogMedia.innerHTML = `<iframe src="${film.embed}" title="${film.title}" allowfullscreen></iframe>`;
    } else {
      dialogMedia.innerHTML =
        '<div class="video-fallback"><p>该平台暂不稳定支持站内嵌入，请点击右侧按钮打开播放页面。</p></div>';
    }

    dialog.showModal();
  });
});

closeDialog.addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("close", () => {
  dialogMedia.innerHTML = "";
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

revealContact.addEventListener("click", () => {
  contactValue.hidden = false;
  revealContact.textContent = "电话 / 微信";
});
