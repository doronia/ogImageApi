const getHtml = async (title = null, tag = null, author = 'חדשות ספונסר') => {
    if (!title) return;
const svgColor = 'e5e9ee';
    const tagDiv = tag ? `<div class="tag">${tag}</div>` : '';
    const date = '15/11/2021';
    const htmlContainer = `
        <html>
           <head>
              <style> 
                 * { margin: 0; padding: 0; direction: rtl} *, 
                 *:before, 
                 *:after { box-sizing: border-box; } 
                 html, body { margin: 0 auto; width: 1200px; height: 628px; padding: 10px; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; } 
                 h1 { font-size: 72px; line-height: 1.25; color: #1E1E1C; margin: 0; text-align: right; } 
                 
                 .flex-container {
                    display: flex;
                    flex-direction: column;
                    flex-wrap: nowrap;
                    justify-content: space-between;
                    align-content: center;
                    align-items: flex-start;
                    }

                 .container { background: #EFF3F6 ;  width:1160px; height: 590px } 
                 .contnet {
                    
                    height: 100%; 
                    padding: 50px;
                    background-image: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0A%09%20viewBox%3D%220%200%2089%2092.16%22%20%3E%0A%3Cpath%20class%3D%22st0%22%20fill%3D%22%23${svgColor}%22%20d%3D%22M81.69%2C33.68c-6.73-21-29.29-32.61-50.3-25.88c-21%2C6.73-32.61%2C29.3-25.88%2C50.3%0A%09C8.77%2C68.28%2C15.8%2C76.57%2C25.3%2C81.46s20.34%2C5.78%2C30.51%2C2.52c10.18-3.26%2C18.47-10.29%2C23.36-19.79c2.96-5.74%2C4.45-11.97%2C4.45-18.25%0A%09C83.62%2C41.83%2C82.98%2C37.7%2C81.69%2C33.68z%20M70.28%2C59.62c-3.67%2C7.12-9.89%2C12.39-17.52%2C14.84S37%2C76.23%2C29.88%2C72.57%0A%09c-4.06-2.09-7.52-5.01-10.19-8.54l5.88-11.42c0.73-1.42%2C2.48-1.98%2C3.9-1.25l10.96%2C5.52c1.85%2C0.96%2C3.99%2C1.13%2C6%2C0.49%0A%09c2.01-0.64%2C3.65-2.03%2C4.61-3.91l8.05-14.9c0.73%2C2.27%2C1.6%2C4.97%2C2.28%2C7.1s1.18%2C3.69%2C1.18%2C3.69l4.76-1.53l-6.12-19.1l-19.11%2C6.12%0A%09l1.53%2C4.76c0%2C0%2C6.61-2.12%2C11.17-3.58l-8.16%2C15.11c-0.38%2C0.73-0.98%2C1.24-1.72%2C1.48c-0.73%2C0.23-1.52%2C0.17-2.2-0.18l-10.96-5.52%0A%09c-3.85-1.99-8.62-0.46-10.62%2C3.41l-4.49%2C8.72c-0.62-1.28-1.16-2.61-1.6-3.99C9.98%2C39.3%2C18.69%2C22.37%2C34.44%2C17.32%0A%09c15.76-5.05%2C32.68%2C3.66%2C37.73%2C19.41C74.62%2C44.36%2C73.95%2C52.49%2C70.28%2C59.62z%22%2F%3E%0A%3C%2Fsvg%3E");
                    background-size: 1800px;
                    background-position-x: -212px;
                    background-position-y: -570px;
                 }
                 
                 .bordered {
                     -webkit-border-top-left-radius: 10px;
                     -webkit-border-top-right-radius: 10px;
                     -moz-border-radius-topleft: 10px;
                     -moz-border-radius-topright: 10px;
                     border-top-left-radius: 10px;
                     border-top-right-radius: 10px;
                     border: solid 1px #000;
                     overflow: hidden;
                 }
                 .shadow{
                     -webkit-box-shadow: -7px 7px 0px 0px rgba(0,0,0,0.75);
                     -moz-box-shadow: -7px 7px 0px 0px rgba(0,0,0,0.75);
                     box-shadow: -7px 7px 0px 0px rgba(0,0,0,0.75);
                 }
                 .tag {
                     text-align: right;
                     color: #651fff;
                     font-size: 32px;
                 }
                 .meta{
                 display: flex; flex-direction: row; align-items: center; justify-content: start; 
                 height: 30px; 
                 }
                 .author {
                     text-align: right;
                     color: #1E1E1C;
                     font-size: 26px;
                
                     
                     
                 }.timestamp {
                     text-align: right;
                     color: #1E1E1C;
                     font-size: 26px;
                  
                 }
                 .sep{ 
                 font-size: 26px;
                 margin: 0 6px;
                 color: #c2cbd5;
                 
                 }
                 
              </style>
           </head>
           <body>
              <div class="container bordered shadow">
                  <div class="contnet flex-container">
                   
                        <div></div>
                        <div>
                            ${tagDiv}
                         <h1>${title}</h1>
                        </div>
                        <div class="meta">
                            <div class="author">${author}</div>
                            <div class="sep">|</div>
                            <div class="timestamp"><small>${date}</small></div>
                        </div>
                  </div>
              </div>
           </body>
        </html>`;
    console.log('htmlContainer', htmlContainer)

    return htmlContainer;

}

module.exports = getHtml;