export type Artwork = {
    id: number,
    title: string;
    creators: { description: string }[],
    images: { web: { url: string } };
};

export type ArtworkDetail = Artwork & {
    creation_date: string,
    technique: string,
    measurements: string,
    culture: string[];
};