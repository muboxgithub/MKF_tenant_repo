// // ==UserScript==
// // @name         TEST SCRIPT → khalid-mkfstock.com (Auto-Update from GitHub)
// // @version      2025.12.25
// // @description  Test script – shows big green message on your site
// // @match        https://khalid-mkfstock.com/*
// // @updateURL    https://cdn.jsdelivr.net/gh/muboxgithub/MKF_tenant_repo@main/test_khalid_site.user.js
// // @downloadURL  https://cdn.jsdelivr.net/gh/muboxgithub/MKF_tenant_repo@main/test_khalid_site.user.js
// // @grant        none
// // @run-at       document-body
// // ==/UserScript==

// (function () {
//   "use strict";

//   // Create big floating banner
//   const banner = document.createElement("div");
//   banner.innerHTML = `
//         <div style="
//             position: fixed;
//             top: 20px;
//             left: 50%;
//             transform: translateX(-50%);
//             background: linear-gradient(45deg, #00ff88, #00cc66);
//             color: black;
//             font-weight: bold;
//             font-size: 28px;
//             padding: 20px 40px;
//             border-radius: 20px;
//             box-shadow: 0 10px 30px rgba(0,0,0,0.5);
//             z-index: 999999;
//             border: 5px solid gold;
//             text-align: center;
//             font-family: Arial;
//         ">
//             KHALID-MKFSTOCK.COM<br>
//             ONE-CLICK SCRIPT WORKING 100%!<br>
//             <span style="font-size:18px">GitHub Auto-Update Active</span>
//         </div>
//     `;
//   document.body.appendChild(banner);

//   // Console proof
//   console.log(
//     "%c KHALID-MKFSTOCK.COM SCRIPT LOADED SUCCESSFULLY!",
//     "background:#00ff00;color:black;font-size:20px"
//   );
//   console.log(
//     "%c Auto-update from GitHub is ACTIVE",
//     "color:#00ff00;font-size:16px"
//   );
//   console.log(
//     "Repo: https://github.com/ecxTrader2025/ahmed_ecx_private_scripts"
//   );
//   alert(
//     "M22811 ONE-CLICK v12 IS ACTIVE!\nClick any green price → INSTANT BUY!"
//   );
//   // Auto-remove after 10 seconds
//   setTimeout(() => banner.remove(), 10000);
// })();
