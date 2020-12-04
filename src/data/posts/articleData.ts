import {Post} from '../../app/models/post';
import {LF1_POSTS} from './lf-1';
import {LF2_POSTS} from './lf-2';
import {LF3_POSTS} from './lf-3';
import {LF4_1_POSTS} from './lf-4-1';
import {LF4_2_POSTS} from './lf-4-2';
import {LF6_POSTS} from './lf-6';
import {LF7_POSTS} from './lf-7';
import {LF8_POSTS} from './lf-8';
import {LF9_POSTS} from './lf-9';
import {WP_POSTS} from './elective-subject';
import {WISO_POSTS} from './wiso';
import {ENGLISCH_POSTS} from './englisch';
import {DEUTSCH_POSTS} from './deutsch';

export const articleData: Post[] = [
    ...LF1_POSTS,
    ...LF2_POSTS,
    ...LF3_POSTS,
    ...LF4_1_POSTS,
    ...LF4_2_POSTS,
    ...LF6_POSTS,
    ...LF7_POSTS,
    ...LF8_POSTS,
    ...LF9_POSTS,
    ...WP_POSTS,
    ...WISO_POSTS,
    ...ENGLISCH_POSTS,
    ...DEUTSCH_POSTS
];
