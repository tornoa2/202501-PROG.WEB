export interface Cancion {
    id: number;
    nombre: string;
    genero: string;
    artista: string;
}

export const listaCanciones: Cancion[] = [
    {
        id: 1,
        nombre: "Bohemian Rhapsody",
        genero: "Rock",
        artista: "Queen"
    },
    {
        id: 2,
        nombre: "Imagine",
        genero: "Pop",
        artista: "John Lennon"
    },
    {
        id: 3,
        nombre: "Stairway to Heaven",
        genero: "Rock",
        artista: "Led Zeppelin"
    },
    {
        id: 4,
        nombre: "Hotel California",
        genero: "Rock",
        artista: "Eagles"
    },
    {
        id: 5,
        nombre: "Billie Jean",
        genero: "Pop",
        artista: "Michael Jackson"
    },
    {
        id: 6,
        nombre: "Shape of You",
        genero: "Pop",
        artista: "Ed Sheeran"
    },
    {
        id: 7,
        nombre: "Smells Like Teen Spirit",
        genero: "Grunge",
        artista: "Nirvana"
    },
    {
        id: 8,
        nombre: "Rolling in the Deep",
        genero: "Pop",
        artista: "Adele"
    },
    {
        id: 9,
        nombre: "Sweet Child O' Mine",
        genero: "Rock",
        artista: "Guns N' Roses"
    },
    {
        id: 10,
        nombre: "Lose Yourself",
        genero: "Hip Hop",
        artista: "Eminem"
    },
    {
        id: 11,
        nombre: "Despacito",
        genero: "Reggaeton",
        artista: "Luis Fonsi ft. Daddy Yankee"
    },
    {
        id: 12,
        nombre: "Uptown Funk",
        genero: "Funk",
        artista: "Mark Ronson ft. Bruno Mars"
    }
];