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

<svelte:head
  ><link
    type="text/css"
    href="https://lab.morfans.cn/LiteWebChat_Frame/litewebchat.min.css"
    rel="stylesheet"
  /></svelte:head
>

<a
  href="https://github.com/wuyudi/fake-girlfriend"
  style="text-decoration:none;">github repo</a
>

<div class="lite-chatbox chat-box">
  {#each msgList as msg}
    <div class={(msg.from === "her" ? "cleft" : "cright") + " cmsg"}>
      {#if msg.from === "her"}
        <img
          alt=""
          class="headIcon radius"
          ondragstart="return false;"
          oncontextmenu="return false;"
          src="./img/ningning.jpg"
        />
      {/if}
      <span class="name">{msg.from}</span>
      <span class="content">{msg.msg} <sub><br />{msg.sendTime}</sub></span>
    </div>
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
    <button on:click={cleanLog}>clean log</button>
  </center>
</div>

<style>
  /* https://stackoverflow.com/a/50183768/13040423 */
  .chat-box {
    margin: auto;
    width: 500px;
    display: flex;
    flex-direction: column;
    height: 600px;
    overflow: auto; /* thanks to https://github.com/flaribbit*/
  }

  .input-text {
    margin-left: auto;
    margin-right: auto;
  }
</style>
