const CONFIG={kickoffUrl:"https://calendly.com/YOUR-LINK",contactEmail:"isaac@openrecovery.com"};
function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.hidden=false;setTimeout(()=>t.hidden=true,1500)}
document.getElementById("kickoffBtn").href=CONFIG.kickoffUrl;
document.getElementById("kickoffBtn2").href=CONFIG.kickoffUrl;
document.getElementById("emailBtn").onclick=()=>{navigator.clipboard.writeText(CONFIG.contactEmail);toast("Email copied")};
document.getElementById("emailBtnTop").onclick=()=>{navigator.clipboard.writeText(CONFIG.contactEmail);toast("Email copied")};
document.getElementById("copyLinkBtn").onclick=()=>{navigator.clipboard.writeText(window.location.href);toast("Link copied")};
document.getElementById("year").textContent=new Date().getFullYear();
