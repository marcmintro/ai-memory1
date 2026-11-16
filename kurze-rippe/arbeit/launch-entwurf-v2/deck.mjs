import {build as buildV1} from '../launch-entwurf-v1/deck.mjs';
import {addPillars} from './pillars.mjs';
import {updateFilmSlide} from './film-slide.mjs';
export async function build(presentation){
  await buildV1(presentation);
  addPillars(presentation);
  await updateFilmSlide(presentation);
  return {slides:presentation.slides.items.length};
}
