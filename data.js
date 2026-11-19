// ============================================================
//  عدّل هذا الملف فقط لتغيير محتوى الموقع.
//  Edit this file only to change the site content.
//
//  الصور / Images:
//  1) ضع الصورة داخل images/teams أو images/friends أو images/projects
//     Put the picture inside images/teams, images/friends or images/projects
//  2) اكتب مسارها في الحقل image  /  Write its path in the "image" field
//  إذا لم توجد الصورة يظهر الحرف الأول من الاسم تلقائياً.
//  If the image is missing, the first letter of the name is shown.
// ============================================================
window.SITE = {
  discord: "YOUR_DISCORD_USERNAME",

  projects: [
    { name: { en: "Project One", ar: "المشروع الأول" },
      desc: { en: "A responsive website built from scratch.", ar: "موقع متجاوب مبني من الصفر." },
      tags: ["HTML", "CSS", "JavaScript"],
      url: "https://github.com/5j6x/project-one",
      image: "images/projects/project-one.jpg" },
    { name: { en: "Project Two", ar: "المشروع الثاني" },
      desc: { en: "A dynamic web app with a database.", ar: "تطبيق ويب ديناميكي مع قاعدة بيانات." },
      tags: ["PHP", "JavaScript"],
      url: "https://github.com/5j6x/project-two",
      image: "images/projects/project-two.jpg" },
    { name: { en: "Project Three", ar: "المشروع الثالث" },
      desc: { en: "A Java application.", ar: "تطبيق مبني بلغة Java." },
      tags: ["Java"],
      url: "https://github.com/5j6x/project-three",
      image: "" }
  ],

  teams: [
    { name: { en: "Team One", ar: "الفريق الأول" },
      role: { en: "Bot developer", ar: "مطوّر بوتات" },
      desc: { en: "What you built together.", ar: "ما بنيتموه معاً." },
      image: "images/teams/team-one.jpg", url: "" },
    { name: { en: "Team Two", ar: "الفريق الثاني" },
      role: { en: "Web developer", ar: "مطوّر ويب" },
      desc: { en: "What you built together.", ar: "ما بنيتموه معاً." },
      image: "images/teams/team-two.jpg", url: "" },
    { name: { en: "Team Three", ar: "الفريق الثالث" },
      role: { en: "Designer", ar: "مصمم" },
      desc: { en: "What you built together.", ar: "ما بنيتموه معاً." },
      image: "images/teams/team-three.jpg", url: "" }
  ],

  friends: [
    { name: { en: "Friend One", ar: "الصديق الأول" },
      role: { en: "Developer", ar: "مطوّر" },
      image: "images/friends/friend-one.jpg", url: "" },
    { name: { en: "Friend Two", ar: "الصديق الثاني" },
      role: { en: "Designer", ar: "مصمم" },
      image: "images/friends/friend-two.jpg", url: "" },
    { name: { en: "Friend Three", ar: "الصديق الثالث" },
      role: { en: "Writer", ar: "كاتب" },
      image: "images/friends/friend-three.jpg", url: "" }
  ]
};
