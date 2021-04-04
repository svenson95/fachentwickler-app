export interface Matching {
    url: string;
    _id: string;
    topicId: string;
    title: string;
    description: string;
    subject: string;
    schoolWeek: string;
    type: string;
    lessonDate: string;
    lastUpdate: string;
    pairs: MatchingPair[][];
}

export interface MatchingPair {
    leftpart: string;
    rightpart: string;
    pairNumber: number;
}
