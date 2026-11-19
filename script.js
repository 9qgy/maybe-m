(function(){
  var DISCORD = SITE.discord;
  var T = {
    en:{title:"Mohammed – Web Developer",svc:"What I do",navH:"Home",svcI:"The three things I work on, and what you get from each.",prjI:"Things I’ve built and published on GitHub. Each card links to the code.",tmI:"Teams I’ve joined, the role I had and what we built together.",frI:"Developers, designers and writers I work and learn with.",ctI:"The best way to reach me is Discord. You can also see my code on GitHub.",tmH:"Teams I’ve worked with",frH:"Friends",s1t:"Bot programming",s1d:"I build Discord bots and automation tools that handle moderation, commands and repetitive tasks for you.",s2t:"Design",s2d:"I design clean interfaces, logos and layouts that look the same on every screen.",s3t:"Article writing",s3d:"I write clear, well-researched articles on programming and technology.",nav1:"Projects",nav2:"About",nav3:"Contact",theme:"Theme",
      h1:"Hi, I’m Mohammed. I code, design and write.",
      lead:"I build websites and Discord bots, design interfaces and logos, and write articles about programming. Take a look around, and say hello if you want to work together.",
      b1:"See my projects",b2:"GitHub profile",
      
      
      
      aboutH:"About me",
      a1:"I like turning ideas into pages and apps people can actually use. I write the front end in HTML, CSS and JavaScript, and the back end in PHP and Java.",
      a2:"I’m always learning, and I’m open to working on open-source projects with other developers.",
      dc:"Copy Discord username",copied:"Copied: ",show:"Discord: ",foot:"Mohammed. Built with HTML, CSS and JavaScript.",other:"عربي",
      caps:["HTML gives the page its structure.","CSS makes it look right on every screen.","JavaScript makes the page respond to people.","PHP runs on the server and builds dynamic pages.","Java powers larger, long-running applications."]},
    ar:{title:"محمد – مطوّر ويب",svc:"ماذا أقدّم",navH:"الرئيسية",svcI:"الأشياء الثلاثة التي أعمل عليها وما تحصل عليه من كل واحدة.",prjI:"مشاريع بنيتها ونشرتها على GitHub. كل بطاقة تفتح الكود.",tmI:"فرق انضممت إليها ودوري فيها وما بنيناه معاً.",frI:"مطوّرون ومصممون وكتّاب أعمل وأتعلم معهم.",ctI:"أفضل طريقة للتواصل معي هي ديسكورد. وتقدر تشوف كودي على GitHub.",tmH:"فرق عملت معها",frH:"الأصدقاء",s1t:"برمجة البوتات",s1d:"أبني بوتات ديسكورد وأدوات أتمتة تتولى الإشراف والأوامر والمهام المتكررة نيابةً عنك.",s2t:"التصميم",s2d:"أصمّم واجهات وشعارات وتخطيطات نظيفة تظهر بشكل متناسق على كل شاشة.",s3t:"كتابة المقالات",s3d:"أكتب مقالات واضحة ومدروسة عن البرمجة والتقنية.",nav1:"المشاريع",nav2:"نبذة",nav3:"تواصل",theme:"المظهر",
      h1:"أهلاً، أنا محمد. أبرمج وأصمم وأكتب.",
      lead:"أبني مواقع وبوتات ديسكورد، وأصمم واجهات وشعارات، وأكتب مقالات عن البرمجة. تجوّل في الموقع، وتواصل معي إذا أردت أن نعمل معاً.",
      b1:"شاهد مشاريعي",b2:"حسابي على GitHub",
      
      
      
      aboutH:"نبذة عني",
      a1:"أحب تحويل الأفكار إلى صفحات وتطبيقات يستخدمها الناس فعلاً. أكتب الواجهة الأمامية بـ HTML وCSS وJavaScript، والجزء الخلفي بـ PHP وJava.",
      a2:"أتعلّم دائماً، ومستعد للمشاركة في مشاريع مفتوحة المصدر مع مطوّرين آخرين.",
      dc:"انسخ اسم ديسكورد",copied:"تم النسخ: ",show:"ديسكورد: ",foot:"محمد. مبني بـ HTML وCSS وJavaScript.",other:"EN",
      caps:["HTML يعطي الصفحة هيكلها.","CSS يجعلها تظهر بشكل صحيح على كل شاشة.","JavaScript يجعل الصفحة تتفاعل مع الزائر.","PHP يعمل على الخادم ويبني الصفحات الديناميكية.","Java تشغّل التطبيقات الكبيرة طويلة التشغيل."]}
  };
  var langs = [
    {n:"index.html", c:'<h1>Hello, world</h1>\n<button id="go">Say hi</button>\n<script src="app.js"><\/script>'},
    {n:"style.css", c:'button {\n  padding: 0.75rem 1.4rem;\n  border-radius: 10px;\n  background: #111;\n  color: #fff;\n}'},
    {n:"app.js", c:'document.getElementById("go")\n  .addEventListener("click", () => {\n    alert("Hello, world");\n  });'},
    {n:"hello.php", c:'<?php\n$name = $_GET["name"] ?? "world";\necho "Hello, " . htmlspecialchars($name);'},
    {n:"Hello.java", c:'public class Hello {\n  public static void main(String[] args) {\n    System.out.println("Hello, world");\n  }\n}'}
  ];
  var root = document.documentElement, lang = "en", cur = 0;
  var tabs = document.querySelector(".tabs"), code = document.getElementById("code"), cap = document.getElementById("cap"), msg = document.getElementById("copied");

  function show(i){
    cur = i;
    for (var k=0;k<tabs.children.length;k++) tabs.children[k].setAttribute("aria-selected", k===i ? "true":"false");
    code.textContent = langs[i].c; cap.textContent = T[lang].caps[i];
  }
  langs.forEach(function(l,i){
    var b = document.createElement("button");
    b.className="tab"; b.type="button"; b.setAttribute("role","tab"); b.textContent=l.n;
    b.addEventListener("click", function(){ show(i); });
    tabs.appendChild(b);
  });

  function L(o){ return typeof o === "string" ? o : ((o && (o[lang] || o.en)) || ""); }
  function el(tag, cls, text){ var e = document.createElement(tag); if (cls) e.className = cls; if (text) e.textContent = text; return e; }
  function avatar(name, src){
    var box = el("div","avatar"), ini = el("span","",(L(name).trim().charAt(0) || "?").toUpperCase());
    box.appendChild(ini);
    if (src){
      var im = new Image(), exts = /\.\w+$/.test(src) ? [""] : [".jpg",".jpeg",".png",".webp",".svg"], n = 0;
      im.alt = L(name); im.onload = function(){ ini.remove(); box.appendChild(im); };
      (function next(){ if (n < exts.length){ im.onerror = next; im.src = src + exts[n++]; } })();
    }
    return box;
  }
  function card(it, kind){
    var c = el(it.url ? "a" : "div", "card");
    if (it.url){ c.href = it.url; c.target = "_blank"; c.rel = "noopener"; }
    if (kind === "projects"){
      if (it.image){ var cv = new Image(); cv.className = "cover"; cv.alt = L(it.name); cv.onload = function(){ c.insertBefore(cv, c.firstChild); }; cv.src = it.image; }
    } else c.appendChild(avatar(it.name, it.image));
    c.appendChild(el("h3","",L(it.name)));
    if (it.role) c.appendChild(el("p","role",L(it.role)));
    if (it.desc) c.appendChild(el("p","",L(it.desc)));
    if (it.tags){ var ch = el("div","chips"); it.tags.forEach(function(t){ ch.appendChild(el("span","chip",t)); }); c.appendChild(ch); }
    return c;
  }
  function render(){
    ["projects","teams","friends"].forEach(function(k){
      var box = document.getElementById("list-" + k); box.textContent = "";
      (SITE[k] || []).forEach(function(it){ box.appendChild(card(it, k)); });
    });
  }
  function apply(l){
    lang = l;
    root.lang = l; root.dir = l==="ar" ? "rtl" : "ltr";
    document.title = T[l].title;
    var els = document.querySelectorAll("[data-i]");
    for (var k=0;k<els.length;k++){ var key = els[k].getAttribute("data-i"); if (T[l][key]) els[k].textContent = T[l][key]; }
    document.getElementById("lang").textContent = T[l].other;
    document.getElementById("yr").textContent = "© " + new Date().getFullYear();
    msg.textContent = ""; show(cur); render();
    try { localStorage.setItem("lang", l); } catch(e) {}
  }
  document.getElementById("lang").addEventListener("click", function(){ apply(lang==="en" ? "ar" : "en"); });
  document.getElementById("theme").addEventListener("click", function(){
    if (root.getAttribute("data-theme")==="gray") root.removeAttribute("data-theme"); else root.setAttribute("data-theme","gray");
  });
  document.getElementById("discord").addEventListener("click", function(){
    function done(t){ msg.textContent = t + DISCORD; }
    try { navigator.clipboard.writeText(DISCORD).then(function(){ done(T[lang].copied); }, function(){ done(T[lang].show); }); }
    catch(e){ done(T[lang].show); }
  });

  var start = "en";
  try { start = localStorage.getItem("lang") || ((navigator.language||"").indexOf("ar")===0 ? "ar" : "en"); } catch(e) {}
  function route(){
    var id = (location.hash || "").slice(1), pages = document.querySelectorAll(".page"), ok = false, k;
    for (k=0;k<pages.length;k++) if (pages[k].id === id) ok = true;
    if (!ok) id = "home";
    for (k=0;k<pages.length;k++) pages[k].classList.toggle("on", pages[k].id === id);
    var links = document.querySelectorAll("nav.sections a");
    for (k=0;k<links.length;k++){
      if (links[k].getAttribute("href") === "#" + id) links[k].setAttribute("aria-current","page"); else links[k].removeAttribute("aria-current");
    }
    window.scrollTo(0,0);
  }
  window.addEventListener("hashchange", route);
  route();
  apply(start === "ar" ? "ar" : "en");
})();
