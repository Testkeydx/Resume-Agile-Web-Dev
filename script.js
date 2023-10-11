function toggleAllSections() {
    const sections = document.querySelectorAll('.toggle-section');
    sections.forEach(section => {
        if (section.style.display === 'none') {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

function changeButtonColor(btnElement) {
    const colors = ['#E8E4DF', '#D3C8C2', '#D9D1C7', '#5E5750'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    btnElement.style.backgroundColor = randomColor;
    btnElement.style.color = randomColor === '#5E5750' ? '#E8E4DF' : '#5E5750'; 
}

function downloadResume(btnElement) {
    changeButtonColor(btnElement);
    window.open('/Users/nicholasvasilescu/Downloads/Nicholas_Vasilescu_Resume_2023 copy.pdf', '_blank');
}

function updateTimestamp() {
    const date = new Date();
    document.getElementById('timestamp').innerText = `Last Updated: ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}

setInterval(updateTimestamp, 1000);
