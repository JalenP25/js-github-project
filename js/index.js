const form = document.getElementById('github-form')
const users = document.getElementById('user-list')
const githubContainer = document.getElementById('github-container')
const repos = document.getElementById('repos-list')
const configObj = {
  headers: { Accept: 'application/vnd.github.v3+json' }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchInput = e.target.search.value

    fetch(`https://api.github.com/search/repositories?q=${searchInput}`, configObj)
    .then(response => response.json())
    .then(results => {
      const repoArray = results.items
      repoArray.forEach(repoObj => repoInfo(repoObj))
    })
  })

function repoInfo(user) {
  users.innerHTML = '';

  const newLi = document.createElement("li")
  const newUl = document.createElement("ul")
  const names = document.createElement("li")
  names.innerText = user.name;

  const urlLi = document.createElement("li")
  const urlTag = document.createElement("a")
  urlTag.href = user.html_url;
  urlTag.innerText = "Repo Link"
  urlLi.append(urlTag);

  const userInfo = document.createElement("li")
  userInfo.innerText = user.description

  newUl.append(names, urlLi, userInfo)
  newLi.append(newUl)
  repos.append(newLi)
}
