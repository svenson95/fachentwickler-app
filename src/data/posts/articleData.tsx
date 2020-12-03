import {Post} from "../../app/models/post";
import {lf1_posts} from "./lf-1";
import {lf2_posts} from "./lf-2";
import {lf3_posts} from "./lf-3";
import {lf4_1_posts} from "./lf-4-1";
import {lf4_2_posts} from "./lf-4-2";
import {lf6_posts} from "./lf-6";
import {lf7_posts} from "./lf-7";
import {lf8_posts} from "./lf-8";
import {lf9_posts} from "./lf-9";
import {wp_posts} from "./elective-subject";
import {wiso_posts} from "./wiso";
import {englisch_posts} from "./englisch";
import {deutsch_posts} from "./deutsch";

export const articleData: Post[] = [
    ...lf1_posts,
    ...lf2_posts,
    ...lf3_posts,
    ...lf4_1_posts,
    ...lf4_2_posts,
    ...lf6_posts,
    ...lf7_posts,
    ...lf8_posts,
    ...lf9_posts,
    ...wp_posts,
    ...wiso_posts,
    ...englisch_posts,
    ...deutsch_posts
];
