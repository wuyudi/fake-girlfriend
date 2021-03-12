<script>
  // https://stackoverflow.com/a/56489832/13040423
  import { writable } from "svelte/store";
  const currentInput = writable(localStorage.getItem("currentInput") || "");
  currentInput.subscribe((val) => localStorage.setItem("currentInput", val));
  let getTime = () => {
    // https://linuxhint.com/how_to_get_current_date_and_time_in_javascript/
    let now = new Date();
    return now.toLocaleString();
  };
  let getMsg = () => {
    // https://stackoverflow.com/a/5915122/13040423
    return girlfriendWord[Math.floor(Math.random() * girlfriendWord.length)];
  };
  let sleep = (ms) => {
    // https://stackoverflow.com/a/39914235/13040423
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  let addGirlMsg = async () => {
    await sleep(Math.floor(Math.random() * 2000));
    msgList = [...msgList, { msg: getMsg(), sendTime: getTime(), from: "her" }];
    saveLog();
  };
  let msgList = [];
  let girlfriendWord = ["嗯", "哦"];
  let saveLog = () => localStorage.setItem("chatLog", JSON.stringify(msgList));
  let cleanLog = () => {
    msgList = [];
    localStorage.setItem("chatLog", JSON.stringify(msgList));
  };
  document.addEventListener("DOMContentLoaded", () => {
    // https://stackoverflow.com/a/10367736/13040423
    msgList = JSON.parse(localStorage.getItem("chatLog") || "[]");
  });
</script>

<a
  href="https://github.com/wuyudi/fake-girlfriend"
  style="text-decoration:none;">github repo</a
>

{#each msgList as msg}
  <div>-------------------------------------------------</div>
  <div>send time: {msg.sendTime}</div>
  <div>from: {msg.from}</div>
  <div>{msg.msg}</div>
{/each}

<input bind:value={$currentInput} />
<button
  on:click={() => {
    msgList = [
      ...msgList,
      { msg: $currentInput, sendTime: getTime(), from: "you" },
    ];
    $currentInput = "";
    saveLog();
    addGirlMsg();
  }}>send message</button
>
<button on:click={() => cleanLog()}>clean log</button>
