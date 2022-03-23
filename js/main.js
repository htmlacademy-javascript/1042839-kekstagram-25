import {generateData} from './data.js';
import {renderPhotos} from './rendering-content.js';
// import { uploadFile } from './form.js';

const COMMENTS_COUNT = 25;

const photos = generateData(COMMENTS_COUNT);

renderPhotos(photos);
