import {FC} from "hono/jsx"

export const Layout: FC = ({children}) => {
  return (
      <html lang="en">
      <head>
        <title>Ραφαήλ Ντυμένος</title>
        <meta name="keywords" content="Ντυμένος Ραφαήλ,Ntymenos Rafail,Δημιουργία site,Καλαμάτα"/>
        <link rel="icon" type="image/jpeg" href="/static/img/logo.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>
        <link rel="stylesheet" href="/static/style.css"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lightgallery/css/lightgallery.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lightgallery/css/lg-zoom.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lightgallery/css/lg-thumbnail.min.css" />


      </head>
      <body>
      <header>
        <div className="navbar container">
          <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="jobs.html">Jobs</a></li>
          </ul>
        </div>
      </header>
      <section className="section-content">
        <div className="content container">{children}</div>
      </section>
      <section className="section-footer">
        <div className="social-icons">
          <div>
            <a href="https://www.facebook.com/profile.php?id=100005466162693" target="_blank">
              <i className="fab fa-facebook-square" style="font-size: 50px;color: black;"></i>
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/rafail_ntymenos/" target="_blank">
              <i className="fab fa-instagram" style="font-size: 50px;color: black;"></i>
            </a>
          </div>
          <div>
            <a href="mailto:rafailntymenos01@gmail.com" target="_blank"
               style="text-decoration: none; color: black; margin-left: 10px;">
                <i className="fas fa-envelope" style="font-size: 50px; color: black;"></i>
            </a>
          </div>
            <div>
                <a href="https://www.linkedin.com/in/rafail-ntymenos-760189330/" target="_blank"
                   style="text-decoration: none; color: black; margin-left: 10px;">
                    <i className="fab fa-linkedin" style="font-size: 50px; color: black;"></i>
                </a>
            </div>

        </div>
      </section>
      </body>
      </html>
  )
}