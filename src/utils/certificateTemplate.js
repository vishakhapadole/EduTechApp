export const generateCertificateHTML = (user, certificate) => {
  return `
    <html>
      <head>
        <style>
          body { font-family: Arial; text-align: center; padding: 50px; }
          .certificate {
            border: 10px solid #4f46e5;
            padding: 30px;
            border-radius: 10px;
          }
          h1 { color: #4f46e5; }
        </style>
      </head>
      <body>
        <div class="certificate">
          <h1>Certificate of Completion</h1>
          <p>This certifies that</p>
          <h2>${user?.email}</h2>
          <p>has successfully completed the course</p>
          <h3>${certificate.courseTitle}</h3>
          <p>with a score of ${certificate.score}%</p>
        </div>
      </body>
    </html>
  `;
};
