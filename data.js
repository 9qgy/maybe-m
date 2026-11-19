// ============================================================
//  عدّل هذا الملف فقط لتغيير محتوى الموقع.
//  Edit this file only to change the site content.
//
//  الصور / Images:
//  1) ضع الصورة داخل images/teams أو images/projects
//     Put the picture inside images/teams or images/projects
//  2) اكتب مسارها في الحقل image بدون الامتداد، مثل images/teams/my-team
//     Write its path in "image" without the extension, e.g. images/teams/my-team
//     (jpg, png, webp تعمل كلها / all work)
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
      desc: { en: "A small team that builds Discord bots for communities. I wrote the commands, the moderation tools and the database layer. Replace this text with your own story.",
              ar: "فريق صغير يبني بوتات ديسكورد للمجتمعات. كتبت الأوامر وأدوات الإشراف وطبقة قاعدة البيانات. استبدل هذا النص بقصتك أنت." },
      image: "images/teams/team-1", url: "" },
    { name: { en: "Team Two", ar: "الفريق الثاني" },
      role: { en: "Web developer", ar: "مطوّر ويب" },
      desc: { en: "A group of developers building websites for small businesses. I handled the front end and the PHP back end, and we shipped every project on time. Replace this text with your own story.",
              ar: "مجموعة مطوّرين تبني مواقع للأعمال الصغيرة. تولّيت الواجهة الأمامية والجزء الخلفي بـ PHP، وسلّمنا كل مشروع في موعده. استبدل هذا النص بقصتك أنت." },
      image: "images/teams/team-2", url: "" },
    { name: { en: "Team Three", ar: "الفريق الثالث" },
      role: { en: "Designer", ar: "مصمم" },
      desc: { en: "A creative team making logos and interfaces. I designed layouts and brand visuals and worked closely with the developers. Replace this text with your own story.",
              ar: "فريق إبداعي يصمّم شعارات وواجهات. صمّمت التخطيطات والهوية البصرية وعملت عن قرب مع المطوّرين. استبدل هذا النص بقصتك أنت." },
      image: "images/teams/team-3", url: "" }
  ]
};
