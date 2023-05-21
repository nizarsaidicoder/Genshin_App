<template>
  <div class="navbar">
    <div class="logo">
      <div class="logo-img">
        <!-- <img
          src="@/assets/Icon_Emoji_Raiden_Shogun_1.webp"
          alt="Ei image" /> -->
      </div>
      Genshin
    </div>
    <input
      id="menu-toggle"
      type="checkbox" />
    <label
      class="menu-button-container"
      for="menu-toggle">
      <div class="menu-button"></div>
    </label>
    <div class="menu">
      <li>
        <RouterLink
          class="link-trans"
          to="/characters"
          >Characters
        </RouterLink>
      </li>
      <li>
        <RouterLink
          class="link-trans"
          to="/weapons"
          >Weapons
        </RouterLink>
      </li>
      <li>
        <RouterLink
          class="link-trans"
          to="/tier-list"
          >Tier List
        </RouterLink>
      </li>
      <li>
        <RouterLink
          class="link-trans"
          to="/team-comps">
          Team Comps
        </RouterLink>
      </li>
    </div>
  </div>
</template>

<script setup></script>

<style lang="css" scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem var(--s-space);
    color: white;
    background-color: var(--secondary-color);
  }
  .logo {
    font-size: 2.4rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Genshin";
    gap: 1rem;
  }
  .logo-img {
    width: 6.4rem;
  }
  .logo-img > img {
    width: 100%;
  }

  .navbar-items {
    display: flex;
    gap: var(--m-space);
    font-size: 1.7rem;
  }

  .link-trans {
    position: relative;
  }
  .link-trans::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    border-radius: 12px;
    background-color: #ffffff;
    bottom: -30%;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  .link-trans:active::before {
    transform-origin: left;
    transform: scaleX(1);
  }

  .menu {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .menu > li {
    margin: 0 1rem;
    overflow: hidden;
  }

  .menu-button-container {
    display: none;
    height: 100%;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #menu-toggle {
    display: none;
  }

  .menu-button,
  .menu-button::before,
  .menu-button::after {
    display: block;
    background-color: #fff;
    position: absolute;
    height: 4px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
  }

  .menu-button::before {
    content: "";
    margin-top: -8px;
  }

  .menu-button::after {
    content: "";
    margin-top: 8px;
  }

  #menu-toggle:checked + .menu-button-container .menu-button::before {
    margin-top: 0px;
    transform: rotate(405deg);
  }

  #menu-toggle:checked + .menu-button-container .menu-button {
    background: rgba(255, 255, 255, 0);
  }

  #menu-toggle:checked + .menu-button-container .menu-button::after {
    margin-top: 0px;
    transform: rotate(-405deg);
  }

  @media (max-width: 700px) {
    .menu-button-container {
      display: flex;
    }
    .menu {
      position: absolute;
      top: 0;
      margin-top: 50px;
      left: 0;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
    #menu-toggle ~ .menu li {
      height: 0;
      padding: 0;
      border: 0;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    #menu-toggle:checked ~ .menu li {
      border: 1px solid var(--secondary-color);
      height: 6rem;
      padding: 0.5em;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    #menu-toggle ~ .menu li:first-child {
      margin-top: 2rem;
    }
    .menu > li {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5em 0;
      width: 100%;
      color: white;
      background-color: var(--accent-color);
      z-index: 5;
    }
    /* .menu > li:not(:last-child) {
      border-bottom: 1px solid var(--accent-color);
    } */
  }
</style>
