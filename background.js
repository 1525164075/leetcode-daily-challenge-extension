// 当浏览器启动时触发
chrome.runtime.onStartup.addListener(() => {
  // 为了确保浏览器完全准备好，延迟1秒执行
  chrome.alarms.create("openWindowOnStartup", { when: Date.now() + 1000 });
});

// 监听闹钟事件
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "openWindowOnStartup") {
    const windowWidth = 420; // 窗口宽度 (比内容区稍宽)
    const windowHeight = 600; // 窗口高度

    // 获取显示器信息以计算位置
    chrome.system.display.getInfo((displays) => {
      // 找到主显示器
      const primaryDisplay = displays.find((d) => d.isPrimary) || displays[0];

      // 从工作区尺寸计算右上角位置 (workArea 会排除任务栏等系统UI)
      const left = primaryDisplay.workArea.width - windowWidth;
      const top = 0; // 屏幕顶部

      // 创建一个新的 popup 类型的窗口，它没有边框和地址栏
      chrome.windows.create({
        url: "popup.html",
        type: "popup",
        width: windowWidth,
        height: windowHeight,
        left: Math.round(left),
        top: Math.round(top),
      });
    });
  }
});
