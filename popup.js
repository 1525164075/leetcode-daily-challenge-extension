// LeetCode 题目数据源 (根据用户提供的 CSV 解析)
// 结构: { day: number, problems: [{ title: string, slug: string, difficulty: '简单'|'中等'|'困难', id: number }] }
const challengeData = [
  {
    day: 1,
    problems: [
      { id: 1, title: "两数之和", slug: "two-sum", difficulty: "简单" },
      {
        id: 20,
        title: "有效的括号",
        slug: "valid-parentheses",
        difficulty: "简单",
      },
      {
        id: 21,
        title: "合并两个有序链表",
        slug: "merge-two-sorted-lists",
        difficulty: "简单",
      },
    ],
  },
  {
    day: 2,
    problems: [
      {
        id: 121,
        title: "买卖股票的最佳时机",
        slug: "best-time-to-buy-and-sell-stock",
        difficulty: "简单",
      },
      { id: 70, title: "爬楼梯", slug: "climbing-stairs", difficulty: "简单" },
      {
        id: 141,
        title: "环形链表",
        slug: "linked-list-cycle",
        difficulty: "简单",
      },
    ],
  },
  {
    day: 3,
    problems: [
      {
        id: 226,
        title: "翻转二叉树",
        slug: "invert-binary-tree",
        difficulty: "简单",
      },
      {
        id: 169,
        title: "多数元素",
        slug: "majority-element",
        difficulty: "简单",
      },
      {
        id: 160,
        title: "相交链表",
        slug: "intersection-of-two-linked-lists",
        difficulty: "简单",
      },
    ],
  },
  {
    day: 4,
    problems: [
      {
        id: 104,
        title: "二叉树的最大深度",
        slug: "maximum-depth-of-binary-tree",
        difficulty: "简单",
      },
      {
        id: 53,
        title: "最大子数组和",
        slug: "maximum-subarray",
        difficulty: "中等",
      },
      { id: 283, title: "移动零", slug: "move-zeroes", difficulty: "简单" },
    ],
  },
  {
    day: 5,
    problems: [
      {
        id: 448,
        title: "找到所有数组中消失的数字",
        slug: "find-all-numbers-disappeared-in-an-array",
        difficulty: "简单",
      },
      {
        id: 94,
        title: "二叉树的中序遍历",
        slug: "binary-tree-inorder-traversal",
        difficulty: "简单",
      },
      {
        id: 206,
        title: "反转链表",
        slug: "reverse-linked-list",
        difficulty: "简单",
      },
    ],
  },
  {
    day: 6,
    problems: [
      {
        id: 101,
        title: "对称二叉树",
        slug: "symmetric-tree",
        difficulty: "简单",
      },
      {
        id: 438,
        title: "找到字符串中所有字母异位词",
        slug: "find-all-anagrams-in-a-string",
        difficulty: "中等",
      },
      {
        id: 543,
        title: "二叉树的直径",
        slug: "diameter-of-binary-tree",
        difficulty: "简单",
      },
    ],
  },
  {
    day: 7,
    problems: [
      {
        id: 23,
        title: "合并K个升序链表",
        slug: "merge-k-sorted-lists",
        difficulty: "困难",
      },
      { id: 46, title: "全排列", slug: "permutations", difficulty: "中等" },
      { id: 78, title: "子集", slug: "subsets", difficulty: "中等" },
    ],
  },
  {
    day: 8,
    problems: [
      {
        id: 142,
        title: "环形链表 II",
        slug: "linked-list-cycle-ii",
        difficulty: "中等",
      },
      { id: 15, title: "三数之和", slug: "3sum", difficulty: "中等" },
      {
        id: 11,
        title: "盛最多水的容器",
        slug: "container-with-most-water",
        difficulty: "中等",
      },
    ],
  },
  {
    day: 9,
    problems: [
      {
        id: 19,
        title: "删除链表的倒数第 N 个结点",
        slug: "remove-nth-node-from-end-of-list",
        difficulty: "中等",
      },
      { id: 146, title: "LRU 缓存", slug: "lru-cache", difficulty: "中等" },
      {
        id: 25,
        title: "K 个一组翻转链表",
        slug: "reverse-nodes-in-k-group",
        difficulty: "困难",
      },
    ],
  },
  {
    day: 10,
    problems: [
      {
        id: 239,
        title: "滑动窗口最大值",
        slug: "sliding-window-maximum",
        difficulty: "困难",
      },
      {
        id: 300,
        title: "最长递增子序列",
        slug: "longest-increasing-subsequence",
        difficulty: "中等",
      },
      {
        id: 56,
        title: "合并区间",
        slug: "merge-intervals",
        difficulty: "中等",
      },
    ],
  },
  {
    day: 11,
    problems: [
      {
        id: 102,
        title: "二叉树的层序遍历",
        slug: "binary-tree-level-order-traversal",
        difficulty: "中等",
      },
      {
        id: 103,
        title: "二叉树的锯齿形层序遍历",
        slug: "binary-tree-zigzag-level-order-traversal",
        difficulty: "中等",
      },
      {
        id: 199,
        title: "二叉树的右视图",
        slug: "binary-tree-right-side-view",
        difficulty: "中等",
      },
    ],
  },
  {
    day: 12,
    problems: [
      {
        id: 236,
        title: "二叉树的最近公共祖先",
        slug: "lowest-common-ancestor-of-a-binary-tree",
        difficulty: "中等",
      },
      {
        id: 98,
        title: "验证二叉搜索树",
        slug: "validate-binary-search-tree",
        difficulty: "中等",
      },
      {
        id: 105,
        title: "从前序与中序遍历序列构造二叉树",
        slug: "construct-binary-tree-from-preorder-and-inorder-traversal",
        difficulty: "中等",
      },
    ],
  },
  {
    day: 13,
    problems: [
      {
        id: 230,
        title: "二叉搜索树中第K小的元素",
        slug: "kth-smallest-element-in-a-bst",
        difficulty: "中等",
      },
      {
        id: 114,
        title: "二叉树展开为链表",
        slug: "flatten-binary-tree-to-linked-list",
        difficulty: "中等",
      },
      {
        id: 437,
        title: "路径总和 III",
        slug: "path-sum-iii",
        difficulty: "中等",
      },
    ],
  },
  {
    day: 14,
    problems: [
      {
        id: 39,
        title: "组合总和",
        slug: "combination-sum",
        difficulty: "中等",
      },
      {
        id: 47,
        title: "全排列 II",
        slug: "permutations-ii",
        difficulty: "中等",
      },
      { id: 79, title: "单词搜索", slug: "word-search", difficulty: "中等" },
    ],
  },
  {
    day: 15,
    problems: [
      {
        id: 22,
        title: "括号生成",
        slug: "generate-parentheses",
        difficulty: "中等",
      },
      { id: 55, title: "跳跃游戏", slug: "jump-game", difficulty: "中等" },
      {
        id: 45,
        title: "跳跃游戏 II",
        slug: "jump-game-ii",
        difficulty: "中等",
      },
    ],
  },
  {
    day: 16,
    problems: [
      {
        id: 3,
        title: "无重复字符的最长子串",
        slug: "longest-substring-without-repeating-characters",
        difficulty: "中等",
      },
      {
        id: 49,
        title: "字母异位词分组",
        slug: "group-anagrams",
        difficulty: "中等",
      },
      {
        id: 128,
        title: "最长连续序列",
        slug: "longest-consecutive-sequence",
        difficulty: "中等",
      },
    ],
  },
  {
    day: 17,
    problems: [
      { id: 62, title: "不同路径", slug: "unique-paths", difficulty: "中等" },
      {
        id: 64,
        title: "最小路径和",
        slug: "minimum-path-sum",
        difficulty: "中等",
      },
      { id: 72, title: "编辑距离", slug: "edit-distance", difficulty: "困难" },
    ],
  },
  {
    day: 18,
    problems: [
      { id: 139, title: "单词拆分", slug: "word-break", difficulty: "中等" },
      { id: 322, title: "零钱兑换", slug: "coin-change", difficulty: "中等" },
      {
        id: 5,
        title: "最长回文子串",
        slug: "longest-palindromic-substring",
        difficulty: "中等",
      },
    ],
  },
  {
    day: 19,
    problems: [
      {
        id: 200,
        title: "岛屿数量",
        slug: "number-of-islands",
        difficulty: "中等",
      },
      { id: 207, title: "课程表", slug: "course-schedule", difficulty: "中等" },
      {
        id: 210,
        title: "课程表 II",
        slug: "course-schedule-ii",
        difficulty: "中等",
      },
    ],
  },
  {
    day: 20,
    problems: [
      {
        id: 994,
        title: "腐烂的橘子",
        slug: "rotting-oranges",
        difficulty: "中等",
      },
      { id: 127, title: "单词接龙", slug: "word-ladder", difficulty: "困难" },
      {
        id: 42,
        title: "接雨水",
        slug: "trapping-rain-water",
        difficulty: "困难",
      },
    ],
  },
  {
    day: 21,
    problems: [
      { id: 155, title: "最小栈", slug: "min-stack", difficulty: "简单" },
      {
        id: 208,
        title: "实现 Trie (前缀树)",
        slug: "implement-trie-prefix-tree",
        difficulty: "中等",
      },
      {
        id: 215,
        title: "数组中的第K个最大元素",
        slug: "kth-largest-element-in-an-array",
        difficulty: "中等",
      },
    ],
  },
  {
    day: 22,
    problems: [
      {
        id: 309,
        title: "最佳买卖股票时机含冷冻期",
        slug: "best-time-to-buy-and-sell-stock-with-cooldown",
        difficulty: "中等",
      },
      { id: 75, title: "颜色分类", slug: "sort-colors", difficulty: "中等" },
      {
        id: 240,
        title: "搜索二维矩阵 II",
        slug: "search-a-2d-matrix-ii",
        difficulty: "中等",
      },
    ],
  },
  {
    day: 23,
    problems: [
      {
        id: 287,
        title: "寻找重复数",
        slug: "find-the-duplicate-number",
        difficulty: "中等",
      },
      {
        id: 31,
        title: "下一个排列",
        slug: "next-permutation",
        difficulty: "中等",
      },
      {
        id: 4,
        title: "寻找两个正序数组的中位数",
        slug: "median-of-two-sorted-arrays",
        difficulty: "困难",
      },
    ],
  },
  {
    day: 24,
    problems: [
      {
        id: 17,
        title: "电话号码的字母组合",
        slug: "letter-combinations-of-a-phone-number",
        difficulty: "中等",
      },
      {
        id: 221,
        title: "最大正方形",
        slug: "maximal-square",
        difficulty: "中等",
      },
      {
        id: 33,
        title: "搜索旋转排序数组",
        slug: "search-in-rotated-sorted-array",
        difficulty: "中等",
      },
    ],
  },
  {
    day: 25,
    problems: [
      {
        id: 34,
        title: "在排序数组中查找元素的第一个和最后一个位置",
        slug: "find-first-and-last-position-of-element-in-sorted-array",
        difficulty: "中等",
      },
      {
        id: 208,
        title: "实现 Trie (前缀树)",
        slug: "implement-trie-prefix-tree",
        difficulty: "中等",
      },
      {
        id: 234,
        title: "回文链表",
        slug: "palindrome-linked-list",
        difficulty: "简单",
      },
    ],
  },
  {
    day: 26,
    problems: [
      {
        id: 347,
        title: "前 K 个高频元素",
        slug: "top-k-frequent-elements",
        difficulty: "中等",
      },
      {
        id: 64,
        title: "最小路径和",
        slug: "minimum-path-sum",
        difficulty: "中等",
      },
      {
        id: 76,
        title: "最小覆盖子串",
        slug: "minimum-window-substring",
        difficulty: "困难",
      },
    ],
  },
  {
    day: 27,
    problems: [
      {
        id: 84,
        title: "柱状图中最大的矩形",
        slug: "largest-rectangle-in-histogram",
        difficulty: "困难",
      },
      {
        id: 297,
        title: "二叉树的序列化与反序列化",
        slug: "serialize-and-deserialize-binary-tree",
        difficulty: "困难",
      },
      { id: 494, title: "目标和", slug: "target-sum", difficulty: "中等" },
    ],
  },
  {
    day: 28,
    problems: [
      {
        id: 152,
        title: "乘积最大子数组",
        slug: "maximum-product-subarray",
        difficulty: "中等",
      },
      { id: 312, title: "戳气球", slug: "burst-balloons", difficulty: "困难" },
      {
        id: 23,
        title: "合并 K 个升序链表",
        slug: "merge-k-sorted-lists",
        difficulty: "困难",
      },
    ],
  },
  {
    day: 29,
    problems: [
      {
        id: 124,
        title: "二叉树中的最大路径和",
        slug: "binary-tree-maximum-path-sum",
        difficulty: "困难",
      },
      { id: 72, title: "编辑距离", slug: "edit-distance", difficulty: "困难" },
      {
        id: 295,
        title: "数据流的中位数",
        slug: "find-median-from-data-stream",
        difficulty: "困难",
      },
    ],
  },
  {
    day: 30,
    problems: [
      {
        id: 416,
        title: "分割等和子集",
        slug: "partition-equal-subset-sum",
        difficulty: "中等",
      },
      {
        id: 560,
        title: "和为 K 的子数组",
        slug: "subarray-sum-equals-k",
        difficulty: "中等",
      },
      {
        id: 337,
        title: "打家劫舍 III",
        slug: "house-robber-iii",
        difficulty: "中等",
      },
    ],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  // DOM 元素引用
  const views = {
    setup: document.getElementById("setup-view"),
    future: document.getElementById("future-view"),
    finished: document.getElementById("finished-view"),
    tasks: document.getElementById("tasks-view"),
    allDone: document.getElementById("all-tasks-done-view"),
  };
  const datePicker = document.getElementById("start-date-picker");
  const dayCounter = document.getElementById("day-counter");
  const taskList = document.getElementById("task-list");
  const futureDateSpan = document.getElementById("future-date");
  const closeButton = document.getElementById("close-button");
  const resetButtons = [
    document.getElementById("reset-date-button-future"),
    document.getElementById("reset-date-button-finished"),
    document.getElementById("reset-date-button-tasks"),
  ];

  // 初始化应用
  initializeApp();

  // 事件监听
  datePicker.addEventListener("change", handleDateSet);
  closeButton.addEventListener("click", () => window.close());
  resetButtons.forEach((button) =>
    button.addEventListener("click", resetChallenge)
  );

  /**
   * 获取 YYYY-MM-DD 格式的日期字符串
   * @param {Date} date - 日期对象
   * @returns {string}
   */
  function getFormattedDate(date) {
    return date.toISOString().split("T")[0];
  }

  /**
   * 初始化应用
   */
  function initializeApp() {
    const todayStr = getFormattedDate(new Date());

    chrome.storage.sync.get(
      ["startDate", "completedTasks", "lastOpenedDate", "currentChallengeDay"],
      (data) => {
        let {
          startDate,
          completedTasks = {},
          lastOpenedDate,
          currentChallengeDay = 0,
        } = data;

        if (!startDate) {
          showView("setup");
          return;
        }

        // 如果今天还没打开过，并且不是挑战开始的第一天，则天数+1
        if (lastOpenedDate !== todayStr) {
          const startDateObj = new Date(startDate + "T00:00:00");
          const today = new Date();
          today.setHours(0, 0, 0, 0);

          if (today >= startDateObj) {
            currentChallengeDay++;
          }

          lastOpenedDate = todayStr;
          // 将更新后的数据存回
          chrome.storage.sync.set(
            { lastOpenedDate, currentChallengeDay },
            () => {
              renderMainView(startDate, completedTasks, currentChallengeDay);
            }
          );
        } else {
          // 如果今天已经打开过，直接渲染
          renderMainView(startDate, completedTasks, currentChallengeDay);
        }
      }
    );
  }

  /**
   * 处理日期设置
   */
  function handleDateSet(e) {
    const selectedDate = e.target.value;
    if (selectedDate) {
      const todayStr = getFormattedDate(new Date());
      chrome.storage.sync.set(
        {
          startDate: selectedDate,
          completedTasks: {},
          currentChallengeDay: 0, // 开始时挑战天数为0，第一次打开时会变为1
          lastOpenedDate: null, // 清空上次打开日期
        },
        () => {
          initializeApp();
        }
      );
    }
  }

  /**
   * 重置整个挑战
   */
  function resetChallenge() {
    chrome.storage.sync.remove(
      ["startDate", "completedTasks", "lastOpenedDate", "currentChallengeDay"],
      () => {
        showView("setup");
      }
    );
  }

  /**
   * 渲染主视图
   */
  function renderMainView(startDateStr, completedTasks, currentDay) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const startDate = new Date(startDateStr + "T00:00:00");

    if (today < startDate) {
      futureDateSpan.textContent = startDateStr;
      showView("future");
      return;
    }

    dayCounter.textContent = `第 ${currentDay} 天`;
    dayCounter.classList.remove("hidden");

    if (currentDay > challengeData.length) {
      showView("finished");
    } else if (currentDay >= 1) {
      const todaysChallenge = challengeData.find((c) => c.day === currentDay);
      if (todaysChallenge) {
        renderTasks(todaysChallenge.problems, completedTasks);
        showView("tasks");
      } else {
        taskList.innerHTML = `<li class="text-center text-gray-500 p-4">今天没有安排任务。</li>`;
        showView("tasks");
      }
    } else {
      // currentDay 为 0 的情况，说明是设置日期的当天，但还未到第二天
      taskList.innerHTML = `<li class="text-center text-gray-500 p-4">您的挑战已设置！<br>明天将解锁第一天的任务。</li>`;
      showView("tasks");
    }
  }

  /**
   * 渲染任务列表
   */
  function renderTasks(problems, completedTasks) {
    taskList.innerHTML = "";
    problems.forEach((problem) => {
      const isCompleted = completedTasks[problem.id] || false;
      const li = document.createElement("li");
      li.className = `flex items-center p-3 bg-white rounded-lg shadow-sm border transition-all duration-200 ${
        isCompleted ? "border-green-300 bg-green-50" : "border-transparent"
      }`;

      const difficultyClasses = getDifficultyClass(problem.difficulty);

      li.innerHTML = `
                <input type="checkbox" id="task-${problem.id}" data-task-id="${
        problem.id
      }" class="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" ${
        isCompleted ? "checked" : ""
      }>
                <div class="ml-3 flex-grow">
                    <a href="https://leetcode.cn/problems/${
                      problem.slug
                    }/" target="_blank" class="text-sm font-medium text-gray-800 hover:text-indigo-600 hover:underline" title="${
        problem.title
      }">
                        ${problem.title}
                    </a>
                </div>
                <span class="text-xs font-semibold px-2 py-1 rounded-full ${
                  difficultyClasses.bg
                } ${difficultyClasses.text}">
                    ${problem.difficulty}
                </span>
            `;
      taskList.appendChild(li);
    });

    taskList.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.addEventListener("change", (e) => handleTaskToggle(e, problems));
    });

    checkAllTasksCompleted(problems, completedTasks);
  }

  /**
   * 处理任务状态切换
   */
  function handleTaskToggle(e, problems) {
    const taskId = e.target.dataset.taskId;
    const isChecked = e.target.checked;

    const listItem = e.target.closest("li");
    if (isChecked) {
      listItem.classList.add("border-green-300", "bg-green-50");
    } else {
      listItem.classList.remove("border-green-300", "bg-green-50");
    }

    chrome.storage.sync.get("completedTasks", (data) => {
      const completedTasks = data.completedTasks || {};
      completedTasks[taskId] = isChecked;
      chrome.storage.sync.set({ completedTasks }, () => {
        checkAllTasksCompleted(problems, completedTasks);
      });
    });
  }

  /**
   * 检查当天所有任务是否完成
   */
  function checkAllTasksCompleted(problems, completedTasks) {
    const allDone = problems.every((p) => completedTasks[p.id]);
    if (allDone) {
      views.allDone.classList.remove("hidden");
    } else {
      views.allDone.classList.add("hidden");
    }
  }

  /**
   * 获取难度对应的样式
   */
  function getDifficultyClass(difficulty) {
    switch (difficulty) {
      case "简单":
        return { bg: "bg-green-100", text: "text-green-800" };
      case "中等":
        return { bg: "bg-yellow-100", text: "text-yellow-800" };
      case "困难":
        return { bg: "bg-red-100", text: "text-red-800" };
      default:
        return { bg: "bg-gray-100", text: "text-gray-800" };
    }
  }

  /**
   * 控制显示哪个视图
   */
  function showView(viewName) {
    Object.keys(views).forEach((key) => {
      views[key].classList.toggle("hidden", key !== viewName);
    });
    if (viewName !== "tasks") {
      views.allDone.classList.add("hidden");
    }
    if (
      viewName === "setup" ||
      viewName === "future" ||
      viewName === "finished"
    ) {
      dayCounter.classList.add("hidden");
    }
  }
});
