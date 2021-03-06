function landingView() {
    let landingView = $(`
    <div className="Landing">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="">
            <img src="https://pixy.org/src/70/707393.gif" alt="UNC Logo" width="70" height="70" />
          </a>
        </div>
        <div id="navbarMain" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">
              Postings
            </a>
            <a class="navbar-item">
              Calendar
            </a>
            <a class="navbar-item">
              Location Recommendations
            </a>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-info">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>

      <section class="hero is-info">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Find a Study Buddy!
            </h1>
            <h2 class="subtitle">
              The #1 place for UNC students to connect
            </h2>
          </div>
        </div>
      </section>
      <br>

      <article class="message is-large is-light">
        <div class="message-header">
          <p>Tired of studying alone?</p>
        </div>
        <div class="message-body">
          Welcome to Find a Study Buddy! Are you tired of struggling on exams because you have no one
          to study with? Need someone to keep you accountable while you study so that you don't spend
          six hours on Twitter? Have a noisy roommate who won't let you study in peace? You've come
          to the right place! Here at Find a Study Buddy, we hope to help you match up with other
          UNC students in your classes so you can find a study partner.
        </div>
      </article>

      <div class="containter has-text-centered">
        <h1 class="title has-text-light">How it works:</h1>
      </div>
      <br>

      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <div class="tile is-child box has-text-centered has-background-info">
            <h1 class="title has-text-white">
              Make an account
            </h1>
            <i class="icon fas fa-user-edit is-large" style="color:white"></i>
          </div>
        </div>
        <div class="tile is-parent">
          <div class="tile is-child box has-text-centered has-background-info">
            <h1 class="title has-text-white">
              Submit a posting
            </h1>
            <i class="icon far fa-keyboard is-large" style="color:white"></i>
          </div>
        </div>
        <div class="tile is-parent">
          <div class="tile is-child box has-text-centered has-background-info">
            <h1 class="title has-text-white">
              Find a buddy!
            </h1>
            <i class="icon fas fa-users is-large" style="color:white"></i>
          </div>
        </div>
      </div>
    `);
    return landingView;
}
