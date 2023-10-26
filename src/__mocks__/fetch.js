const mockResponse = 
{
    "page": 1,
    "results": [
    {
    "adult": false,
    "backdrop_path": "/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
    "id": 575264,
    "title": "Mission: Impossible - Dead Reckoning Part One",
    "original_language": "en",
    "original_title": "Mission: Impossible - Dead Reckoning Part One",
    "overview": "Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With control of the future and the world's fate at stake and dark forces from Ethan's past closing in, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan must consider that nothing can matter more than his mission—not even the lives of those he cares about most.",
    "poster_path": "/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    "media_type": "movie",
    "genre_ids": [
    28,
    53
    ],
    "popularity": 1397.469,
    "release_date": "2023-07-08",
    "video": false,
    "vote_average": 7.728,
    "vote_count": 1863
    },
    {
    "adult": false,
    "backdrop_path": "/H6j5smdpRqP9a8UnhWp6zfl0SC.jpg",
    "id": 565770,
    "title": "Blue Beetle",
    "original_language": "en",
    "original_title": "Blue Beetle",
    "overview": "Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.",
    "poster_path": "/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg",
    "media_type": "movie",
    "genre_ids": [
    28,
    878,
    12
    ],
    "popularity": 675.916,
    "release_date": "2023-08-16",
    "video": false,
    "vote_average": 7.05,
    "vote_count": 1387
    }
    ],
    "total_pages": 1000,
    "total_results": 20000
    }
    
export default {
    fetch: jest.fn().mockResolvedValue(mockResponse)
}