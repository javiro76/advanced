import { heroes } from '../data/heroes';



/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = ( element ) => {

  console.log('callbacksComponent');

  const id = "5d86371f2343e37870b91ef1";
  findHero( id, (error, hero) => {

    if ( error ){
      element.innerHTML = error;
      return;
    }
    element.innerHTML = hero.name;

  } )


}

/**
 * 
 * @param {String} id 
 * @param { ( error: String|null, hero: Object)=> void } callback 
 */


const findHero = ( id, callback ) => {

  const hero = heroes.find( hero => hero.id === id);

  if ( !hero ) {
    callback(`Hero with id ${ id } , not found.`);
    return; // Undefined;
  }

  callback( null, hero )

};





