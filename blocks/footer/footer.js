import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';
import { subscribe } from '../form/rules/index.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block,fieldJson, container, formId) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  block.append(footer);


  //Handling the form submit
  // const submitButton = document.querySelector('.field-form-submit #submit-e4581be2d6');
  // console.log(submitButton);

  // submitButton.addEventListener("click",function(e){
  //   e.preventDefault();
  // })


    subscribe(block,formId,(fieldDiv,fieldModel)=>{
      fieldModel.subscribe((e)=>{
        const {payload} = e;
        payload?.changes?.forEach((change)=>{
          console.log("Chages",change);
        })
      })
    })

}
