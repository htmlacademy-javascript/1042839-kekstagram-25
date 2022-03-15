import {generateData} from './data.js';
import {renderPhotos} from './rendering-content.js';

const COMMENTS_COUNT = 25;

const photos = generateData(COMMENTS_COUNT);

renderPhotos(photos);
