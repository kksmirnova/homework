/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
const homeworkContainer = document.querySelector('#homework-container');

/*
 Функция должна создавать и возвращать новый div с классом draggable-div и случайными размерами/цветом/позицией
 Функция должна только создавать элемент и задвать ему случайные размер/позицию/цвет
 Функция НЕ должна добавлять элемент на страницу. На страницу элемент добавляется отдельно

 Пример:
   const newDiv = createDiv();
   homeworkContainer.appendChild(newDiv);
 */
function createDiv() {
    const newDiv = document.createElement('div');

    Object.assign(newDiv.style, {
        width: `${Math.round(Math.random() * 100)}px`,
        height: `${Math.round(Math.random() * 100)}px`,
        boxShadow: '0 2px 3px #ddd',
        border: '1px solid #ddd',
        backgroundColor: '#ddd',
        position: 'absolute',
        top: `${Math.round(Math.random() * 500)}px`,
        left: `${Math.round(Math.random() * 500)}px`,
    });

    newDiv.classList.add('draggable-div');
    newDiv.draggable = true;

    return newDiv;
}

/*
 Функция должна добавлять обработчики событий для перетаскивания элемента при помощи drag and drop

 Пример:
   const newDiv = createDiv();
   homeworkContainer.appendChild(newDiv);
   addListeners(newDiv);
 */
function addListeners(target) {
    target.addEventListener('dragStart', () => {
        //
    });
    target.addEventListener('dragEnd', () => {
        //
    });
    target.addEventListener('drag', () => {
        //
    });
}

let addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {
    const div = createDiv();

    homeworkContainer.appendChild(div);
    addListeners(div);
});

export {
    createDiv
};
