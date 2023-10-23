document.addEventListener('DOMContentLoaded', function () {
    const ideaForm = document.getElementById('idea-form');
    const ideaList = document.getElementById('idea-list');

    ideaForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const priority = document.getElementById('priority').value;

        const newIdea = document.createElement('li');
        newIdea.innerHTML = `<strong>${title}</strong> (${priority}): ${description} <button class="edit-button">Edit</button> <button class="delete-button">Delete</button>`;
        ideaList.appendChild(newIdea);

        // Clear the form
        ideaForm.reset();
    });

    ideaList.addEventListener('click', function (e) {
        if (e.target.classList.contains('edit-button')) {
            const ideaItem = e.target.parentElement;
            const [title, description, priority] = ideaItem.textContent.match(/(.+) \((.+)\): (.+)/).slice(1, 4);

            // Pre-fill the form with the selected idea's details
            document.getElementById('title').value = title;
            document.getElementById('description').value = description;
            document.getElementById('priority').value = priority;

            // Remove the selected idea
            ideaList.removeChild(ideaItem);
        } else if (e.target.classList.contains('delete-button')) {
            ideaList.removeChild(e.target.parentElement);
        }
    });
});