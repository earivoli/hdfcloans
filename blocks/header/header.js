export default function decorate(block){
  const element = document.querySelector('.header.block');
  const containerElement = document.createElement('div');
  containerElement.classList.add('container-header');
  element.appendChild(containerElement);
  appendHeader(containerElement);

}

async function appendHeader(containerElement) {
  const res = await fetch('/nav.plain.html');
  if(res.ok){
    //document.querySelector('header').innerHTML = await res.text();
    containerElement.innerHTML = await res.text();
  }
}