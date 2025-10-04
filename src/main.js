
const app = document.getElementById('app');

app.innerHTML = `
  <h1>Welcome!</h1>
  <button id="clickBtn">Click me</button>
`;

document.getElementById('clickBtn').addEventListener('click', () => {
  alert('Button clicked!');
});
