import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async( element ) => {

    const id = "5d86371fd55e2e2a30fe1ccb2p";

    const heroIds = heroes.map( hero => hero.id );

    const heroesPromises = getHeroesAsync( heroIds );

    for await (const hero of heroesPromises) {

        element.innerHTML += `${ hero.name } <br/>`
    };    



    // if (await getHeroAsync( id )){

    //     element.innerHTML = 'Hero found';
    //     return;
    // }

    // element.innerHTML = 'Hero not found';

}



/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync = ( heroIds ) => {
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}

const getHeroAsync = async(id) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 1000)
    });

    return heroes.find( hero => hero.id === id );
}