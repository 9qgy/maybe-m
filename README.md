# Portfolio / موقعي الشخصي

موقع شخصي بلغتين (عربي / English) مبني بـ HTML و CSS و JavaScript.

## الرفع على GitHub Pages
1. أنشئ repository جديد باسم `5j6x.github.io` (Public).
2. اضغط **Add file → Upload files**، واسحب كل محتويات هذا المجلد (وليس المجلد نفسه).
3. اضغط **Commit changes**.
4. من **Settings → Pages** اختر الفرع `main` والمجلد `/ (root)`.
5. بعد دقيقة يفتح الموقع على `https://5j6x.github.io`.

## إضافة صور الفريق والأصدقاء
1. ضع الصورة داخل `images/teams/` أو `images/friends/` (يفضّل صورة مربعة، أقل من 500 KB).
2. افتح `data.js` واكتب مسار الصورة في الحقل `image`، مثلاً:
   `image: "images/friends/ali.jpg"`
3. لإضافة صديق أو فريق جديد، انسخ كتلة `{ ... }` كاملة داخل `friends` أو `teams` وعدّل الاسم والدور.

إذا لم توجد الصورة يظهر الحرف الأول من الاسم بدلها. نفس الشيء للمشاريع بمجلد `images/projects/`.

## Files
- `index.html`: page structure
- `style.css`: design
- `script.js`: language switch, pages, rendering
- `data.js`: **your content** (projects, teams, friends, Discord)
