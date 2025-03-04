function copyScript() {
    const scriptBox = document.getElementById("script-box");
    scriptBox.select();
    document.execCommand("copy");
    document.getElementById("copy-message").style.display = "block";
    setTimeout(() => {
        document.getElementById("copy-message").style.display = "none";
    }, 2000);
}
