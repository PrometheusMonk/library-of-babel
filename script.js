const c = window.SITE_CONFIG;

function setText(id, text){
  const el = document.getElementById(id);
  if(el) el.textContent = text;
}
function setHref(id, href){
  const el = document.getElementById(id);
  if(el) el.href = href;
}

setText("latestVersion", c.latest.version);
setText("minecraftVersion", c.latest.minecraft);
setText("loader", c.latest.loader);
setText("downloadTitle", `${c.englishName} ${c.latest.version}`);
setText("downloadMeta", `Minecraft ${c.latest.minecraft} · ${c.latest.loader}`);
setText("year", new Date().getFullYear());

["githubNav","githubHero"].forEach(id => setHref(id, c.githubUrl));
["latestDownload","downloadButton"].forEach(id => setHref(id, c.latest.downloadUrl));
setHref("tipButton", c.tipUrl);
setHref("monthlyButton", c.monthlyUrl);

const changelog = document.getElementById("changelogList");
c.changelog.forEach(r => {
  const box = document.createElement("article");
  box.className = "release";
  box.innerHTML = `
    <div class="release-head">
      <div class="release-title">${r.version}</div>
      <div class="release-date">${r.date}</div>
    </div>
    <ul>${r.items.map(i => `<li>${i}</li>`).join("")}</ul>
  `;
  changelog.appendChild(box);
});
