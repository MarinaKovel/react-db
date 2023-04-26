export function Html({ children }: any) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/main/lemon_favicon.ico"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React DB</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa&family=Tilt+Prism&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="index.scss" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
