<script>
  let getTime = () => {
    // https://linuxhint.com/how_to_get_current_date_and_time_in_javascript/
    let now = new Date();
    return now.toLocaleString();
  };
  let getMsg = () => {
    // https://stackoverflow.com/a/5915122/13040423
    return girlfriendWord[Math.floor(Math.random() * girlfriendWord.length)];
  };
  function sleep(ms) {
    // https://stackoverflow.com/a/39914235/13040423
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async function addGirlMsg() {
    await sleep(Math.floor(Math.random() * 2000));
    msgList = [...msgList, { msg: getMsg(), sendTime: getTime(), from: "her" }];
    saveLog();
  }
  let currentInput = "";
  let msgList = [];
  let girlfriendWord = ["嗯", "哦"];
  let saveLog = () => {
    localStorage.setItem("chatLog", JSON.stringify(msgList));
  };
  let loadLog = () => {
    // https://stackoverflow.com/a/41462498/13040423
    msgList = JSON.parse(
      localStorage.hasOwnProperty("chatLog")
        ? localStorage.getItem("chatLog")
        : "[]"
    );
  };
  let cleanLog = () => {
    msgList = [];
    localStorage.setItem("chatLog", JSON.stringify(msgList));
  };
  document.addEventListener("DOMContentLoaded", function () {
    // https://stackoverflow.com/a/10367736/13040423
    loadLog();
  });
</script>

{#each msgList as msg}
  <div>-------------------------------------------------</div>
  <div>send time: {msg.sendTime}</div>
  <div>from: {msg.from}</div>
  <div>{msg.msg}</div>
{/each}

<input bind:value={currentInput} />
<button
  on:click={() => {
    msgList = [
      ...msgList,
      { msg: currentInput, sendTime: getTime(), from: "you" },
    ];
    currentInput = "";
    saveLog();
    addGirlMsg();
  }}>send message</button
>
<button on:click={() => cleanLog()}>clean log</button>
