import { Data } from "./assets/data.js";

const PROJECTS = [...Data];

function getElementUsingID(ID) {
  return document.getElementById(ID);
}

function createElement(
  name,
  className,
  id = null,
  textContent = "",
  father = null,
) {
  const element = document.createElement(name);
  if (className) element.classList.add(className);

  if (textContent !== "") {
    element.textContent = textContent;
  }

  if (id) {
    element.id = id;
  }

  if (father) {
    const parent = getElementUsingID(father);
    parent.appendChild(element);
  } else {
    document.body.appendChild(element);
  }

  return element;
}

function createSectionNotExisting(secID) {
  createElement("h2", "title", "", secID, "main");
  createElement("section", "", secID, "", "main");
}

function createProjectButton(projectName, projectURL, Note, secType, ID) {
  if (!getElementUsingID(secType)) {
    createSectionNotExisting(secType);
  }

  const link = createElement("a", "", `${secType}-${ID}`, "", secType);
  link.href = projectURL;
  link.target = "_blank";

  createElement("button", "", "", projectName, `${secType}-${ID}`).title = Note;
}

function createProjects() {
  for (let index = 0; index < PROJECTS.length; index++) {
    createProjectButton(
      PROJECTS[index].ProjectName,
      PROJECTS[index].ProjectUrl,
      PROJECTS[index].Note,
      PROJECTS[index].Type,
      index,
    );
  }
}

createProjects();
