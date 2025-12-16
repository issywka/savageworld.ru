lucide.createIcons();

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

function copyIP() {
    const ip = "savageworld.20tps.ru";
    const btnText = document.getElementById('ip-text');
    
    if (!btnText) {
        navigator.clipboard.writeText(ip);
        alert("IP скопирован: " + ip);
        return;
    }

    const originalText = btnText.innerText;
    
    navigator.clipboard.writeText(ip).then(() => {
        btnText.innerText = "СКОПИРОВАНО!";
        setTimeout(() => {
            btnText.innerText = originalText;
        }, 2000);
    }).catch(err => {
        const textArea = document.createElement("textarea");
        textArea.value = ip;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("Copy");
        textArea.remove();
    });
}