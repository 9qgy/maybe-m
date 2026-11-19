// ============================================================
//  عدّل هذا الملف فقط لتغيير محتوى الموقع.
//  Edit this file only to change the site content.
//
//  الصور / Images:
//  1) ضع الصورة داخل images/teams أو images/friends أو images/projects
//     Put the picture inside images/teams, images/friends or images/projects
//  2) اكتب مسارها في الحقل image بدون الامتداد، مثل images/friends/ali
//     Write its path in "image" without the extension, e.g. images/friends/ali
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
  ],

  friends: [
    { name: { en: "Friend One", ar: "الصديق الأول" },
      role: { en: "Developer", ar: "مطوّر" },
      desc: { en: "A friend and teammate. We share ideas, review each other’s work and help each other learn. Replace this text with their name and what they do.",
              ar: "صديق وزميل. نتبادل الأفكار ونراجع عمل بعضنا ونساعد بعضنا على التعلّم. استبدل هذا النص باسمه وما يعمله." },
      image: "images/friends/friend-1", url: "" },
    { name: { en: "Friend Two", ar: "الصديق الثاني" },
      role: { en: "Designer", ar: "مصمم" },
      desc: { en: "A friend and teammate. We share ideas, review each other’s work and help each other learn. Replace this text with their name and what they do.",
              ar: "صديق وزميل. نتبادل الأفكار ونراجع عمل بعضنا ونساعد بعضنا على التعلّم. استبدل هذا النص باسمه وما يعمله." },
      image: "images/friends/friend-2", url: "" },
    { name: { en: "Friend Three", ar: "الصديق الثالث" },
      role: { en: "Writer", ar: "كاتب" },
      desc: { en: "A friend and teammate. We share ideas, review each other’s work and help each other learn. Replace this text with their name and what they do.",
              ar: "صديق وزميل. نتبادل الأفكار ونراجع عمل بعضنا ونساعد بعضنا على التعلّم. استبدل هذا النص باسمه وما يعمله." },
      image: "images/friends/friend-3", url: "" },
    { name: { en: "Friend Four", ar: "الصديق الرابع" },
      role: { en: "Bot developer", ar: "مطوّر بوتات" },
      desc: { en: "A friend and teammate. We share ideas, review each other’s work and help each other learn. Replace this text with their name and what they do.",
              ar: "صديق وزميل. نتبادل الأفكار ونراجع عمل بعضنا ونساعد بعضنا على التعلّم. استبدل هذا النص باسمه وما يعمله." },
      image: "images/friends/friend-4", url: "" },
    { name: { en: "Friend Five", ar: "الصديق الخامس" },
      role: { en: "Developer", ar: "مطوّر" },
      desc: { en: "A friend and teammate. We share ideas, review each other’s work and help each other learn. Replace this text with their name and what they do.",
              ar: "صديق وزميل. نتبادل الأفكار ونراجع عمل بعضنا ونساعد بعضنا على التعلّم. استبدل هذا النص باسمه وما يعمله." },
      image: "images/friends/friend-5", url: "" },
    { name: { en: "Friend Six", ar: "الصديق السادس" },
      role: { en: "Designer", ar: "مصمم" },
      desc: { en: "A friend and teammate. We share ideas, review each other’s work and help each other learn. Replace this text with their name and what they do.",
              ar: "صديق وزميل. نتبادل الأفكار ونراجع عمل بعضنا ونساعد بعضنا على التعلّم. استبدل هذا النص باسمه وما يعمله." },
      image: "images/friends/friend-6", url: "" },
    { name: { en: "Friend Seven", ar: "الصديق السابع" },
      role: { en: "Writer", ar: "كاتب" },
      desc: { en: "A friend and teammate. We share ideas, review each other’s work and help each other learn. Replace this text with their name and what they do.",
              ar: "صديق وزميل. نتبادل الأفكار ونراجع عمل بعضنا ونساعد بعضنا على التعلّم. استبدل هذا النص باسمه وما يعمله." },
      image: "images/friends/friend-7", url: "" },
    { name: { en: "Friend Eight", ar: "الصديق الثامن" },
      role: { en: "Bot developer", ar: "مطوّر بوتات" },
      desc: { en: "A friend and teammate. We share ideas, review each other’s work and help each other learn. Replace this text with their name and what they do.",
              ar: "صديق وزميل. نتبادل الأفكار ونراجع عمل بعضنا ونساعد بعضنا على التعلّم. استبدل هذا النص باسمه وما يعمله." },
      image: "images/friends/friend-8", url: "" }
  ]
};
