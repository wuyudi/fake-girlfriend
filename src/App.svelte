<script>
  // https://stackoverflow.com/a/56489832/13040423
  import { writable } from "svelte/store";
  const currentInput = writable(localStorage.getItem("currentInput") ?? "");
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
    msgList = JSON.parse(localStorage.getItem("chatLog") ?? "[]");
  });
</script>

<a
  href="https://github.com/wuyudi/fake-girlfriend"
  style="text-decoration:none;">github repo</a
>
<div class="chat-box" id="chat-box">
  {#each msgList as msg}
    <p class={msg.from}>{msg.sendTime}</p>
    <p class={msg.from}>{msg.msg}</p>
  {/each}
</div>
<div>
  <center>
    <input bind:value={$currentInput} placeholder="hi" />
    <button
      on:click={() => {
        msgList = [
          ...msgList,
          { msg: $currentInput || "hi", sendTime: getTime(), from: "you" },
        ];
        $currentInput = "";
        saveLog();
        addGirlMsg();
      }}>send message</button
    >
    <button on:click={() => cleanLog()}>clean log</button>
  </center>
</div>

<style>
  /* https://stackoverflow.com/a/50183768/13040423 */
  .chat-box {
    margin: auto;
    background-color: darkslategrey;
    padding: 10px;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 600px;
    overflow: auto; /* thanks to https://github.com/flaribbit*/
  }

  .her {
    background-color: aquamarine;
    padding: 1px;
  }

  .you {
    background-color: aqua;
    align-self: flex-end;
  }
  .input-text {
    margin-left: auto;
    margin-right: auto;
  }
</style>
