<template>
  <div>
    <div class="page-container">
      <h1>My projects</h1>

      <NuxtLink to="/">Back to Home</NuxtLink>

      <ul class="project-list">
        <li>
          <a
            href="https://hotbox.igor.kalinichev.net/"
            target="_blank"
            class="project-link"
          >
            Hotbox
          </a>
          <span class="release-date">/ 2025 /</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
ul.project-list li a {
  width: 100px;
}
.project-list {
  list-style: none;
  padding-left: 0;
  margin-top: 20px;
}

.project-link {
  position: relative;
  padding-left: 16px;
  color: #63b3ed;
  text-decoration: none;
  display: inline-block;
}
.project-link:hover {
  text-decoration: underline;
  color: #4299e1;
}

.project-link::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 6px;
  height: 6px;
  background-color: white;
  border-radius: 50%;
  transform: translateY(-50%);
}
</style>
