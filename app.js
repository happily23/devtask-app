const tasks = [];

const input = document.querySelector('.js-textbox-input');
const button = document.querySelector('.js-add-button');
const container = document.querySelector('.task-container');

button.addEventListener('click',
    () => {
        const task = input.value;
        tasks.push(task);

        let html = "";

        tasks.forEach(
            (task) => 
            {
                html += `<div> ${task}
                <button> Complete </button>
                </div>`;
            }
        );

        container.innerHTML = html;
        input.value = "";
    }
)