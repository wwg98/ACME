export function renderHeader() {
  const header = document.querySelector("#header");

  header.innerHTML = `
      <div class="container d-flex justify-content-between align-items-center">
        <h1 class="logo">
          <a href="index.html">
            <img src="images/logo.png" alt="acme logo" />
            <span class="hidden">ACME</span>
          </a>
        </h1>
        <nav>
          <ul class="d-flex align-items-center">
            <li>
              <a href="index.html" class="text-nav">home</a>
              /
              <a href="about.html" class="text-nav">about</a>
            </li>
            <li>
              <a href="signin.html" class="btn btn-secondary"
                ><span class="material-icons">lock</span>sign in</a
              >
            </li>
            <li>
              <a href="signup.html" class="btn btn-primary">sign up for free</a>
            </li>
          </ul>
        </nav>
      </div>
  `;
}
