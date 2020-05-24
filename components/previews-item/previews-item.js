Component({
  data: {
    // 显示时间
    time: '00:00:00',
  },
  properties: {
    link: String,
    image: String,
    title: String,
    deadline: {
      type: Number,
      value: Date.now(),
      observer(newVal) {
        const now = Date.now();
        if (newVal <= now) return;
        this.countdown((newVal - now) / 1000 ^ 0);
      },
    },
  },
  methods: {
    countdown(time) {
      const timer = setInterval(() => {
        if(time <= 0) {
          clearInterval(timer);
          return;
        }
        const newTime = this.formatTime(time);
        this.setData({ time: newTime });
        time--;
      }, 1000)
    },
    formatTime(time) {
      let hour = (time / 3600) ^ 0;
      time = time - hour * 3600;
      let minute = (time / 60) ^ 0;
      let second = time - minute * 60;
      hour < 10 && (hour = '0' + hour);
      minute < 10 && (minute = '0' + minute);
      second < 10 && (second = '0' + second);
      return hour + ':' + minute + ':' + second;
    },
  },
});
