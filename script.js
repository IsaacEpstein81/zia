// ---- QUICK CONFIG (edit these) ----
const CONFIG = {
  kickoffUrl: "https://calendly.com/YOUR-LINK-HERE",     // <-- put your scheduling link
  contactEmail: "isaac@openrecovery.com",               // <-- put your email
  videoUrl: "https://www.loom.com/share/YOUR-VIDEO-ID", // <-- optional
  // If you have an embed URL (iframe src), put it here. Example Loom embed:
  // https://www.loom.com/embed/VIDEO_ID
  videoEmbedUrl: ""                                     // <-- optional
};

function $(sel){ return document.querySelector(sel); }
function toast(msg){
  const t = $("#toast");
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(()=>{ t.hidden = true; }, 1800);
}

function setLinks(){
  const kickoffBtn = $("#kickoffBtn");
  const kickoffBtn2 = $("#kickoffBtn2");
  const loomLink = $("#loomLink");

  if (CONFIG.kickoffUrl && CONFIG.kickoffUrl.includes("http")) {
    kickoffBtn.href = CONFIG.kickoffUrl;
    kickoffBtn2.href = CONFIG.kickoffUrl;
  } else {
    kickoffBtn.href = "#next-steps";
    kickoffBtn2.href = "#next-steps";
  }

  if (CONFIG.videoUrl && CONFIG.videoUrl.includes("http")) {
    loomLink.href = CONFIG.videoUrl;
  } else {
    loomLink.href = "#video";
  }

  if (CONFIG.videoEmbedUrl && CONFIG.videoEmbedUrl.includes("http")) {
    const frame = $("#videoFrame");
    frame.innerHTML = `
      <iframe
        title="Proposal walkthrough"
        src="${CONFIG.videoEmbedUrl}"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        style="width:100%; height:100%; border:0;"
      ></iframe>
    `;
  }
}

function setupTabs(){
  const tabA = $("#tabA");
  const tabB = $("#tabB");
  const paneA = $("#phaseA");
  const paneB = $("#phaseB");

  function activate(which){
    const isA = which === "A";
    tabA.classList.toggle("is-active", isA);
    tabB.classList.toggle("is-active", !isA);
    tabA.setAttribute("aria-selected", String(isA));
    tabB.setAttribute("aria-selected", String(!isA));
    paneA.classList.toggle("is-active", isA);
    paneB.classList.toggle("is-active", !isA);
  }

  tabA.addEventListener("click", ()=>activate("A"));
  tabB.addEventListener("click", ()=>activate("B"));
}

function setupCopyButtons(){
  $("#copyLinkBtn").addEventListener("click", async ()=>{
    try{
      await navigator.clipboard.writeText(window.location.href);
      toast("Link copied");
    }catch(e){
      toast("Couldn’t copy link");
    }
  });

  $("#emailBtn").addEventListener("click", async ()=>{
    try{
      await navigator.clipboard.writeText(CONFIG.contactEmail);
      toast("Email copied");
    }catch(e){
      toast("Couldn’t copy email");
    }
  });
}

function setupPrint(){
  $("#printBtn").addEventListener("click", ()=>window.print());
}



function setYear(){
  $("#year").textContent = new Date().getFullYear();
}

setLinks();
setupTabs();
setupCopyButtons();
setupPrint();
setYear();
