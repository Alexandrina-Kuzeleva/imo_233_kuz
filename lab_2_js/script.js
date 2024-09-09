const heading = document.getElementById('greeting');
const changeTextButton = document.getElementById('btn-greeting');
const body = document.body;

const originalText = document.getElementById('greeting').textContent;
const originalBackgroundColor = document.body.style.background
const originalTextColor = document.getElementById('greeting').style.color;
const originalTextColorBtn = document.getElementById('btn-greeting').style.color;
const originalBackgroundColorBtn = document.getElementById('btn-greeting').style.backgroundColor;
let isTextChanged = false;


changeTextButton.addEventListener('click', () => {
    if (isTextChanged) {
        heading.textContent = originalText;
        heading.style.color = originalTextColor;

        changeTextButton.style.color = originalTextColorBtn;
        changeTextButton.style.backgroundColor = originalBackgroundColorBtn;

        body.style.backgroundColor = originalBackgroundColor;
    } else {
        heading.textContent = 'By, world!';
        heading.style.color = '#ffffff';

        changeTextButton.style.color = '#000000';
        changeTextButton.style.backgroundColor = '#ffffff';

        body.style.backgroundColor = '#000000';
    }

    isTextChanged = !isTextChanged;
});
