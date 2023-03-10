
const getAdvice = () => {

fetch('https://api.adviceslip.com/advice')
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Something went wrong');
        }})
    .then(data => {
        console.log(data.slip)
        document.getElementById('advice-id').innerHTML = data.slip.id;
        document.getElementById('advice-text').innerHTML = `"${data.slip.advice}"`;
        }
    )
}
getAdvice();