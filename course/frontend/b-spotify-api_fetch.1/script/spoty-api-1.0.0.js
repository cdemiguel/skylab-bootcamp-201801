/**
 * Spotify API client.
 *
 * @version 2.0.0
 */
var spotifyApi;
"use strict";

spotifyApi = {

    token: "BQB2hikuMVi-ZAduBiC_pfWrxap5cNfi6570bm_LYsnPNSqen3pE9lBR0N4s30Cbm5cmd-_ed1njOq609IJpQcj2IDP-Ajs1s80HHgZ0hvCUPA2bWpvSc_9-gO2YPJFljMS-0gba5VPtkK0",

    getHeaders: function () {
        return {
            headers: {
                'Authorization': 'Bearer ' + this.token
            }
        }
    },

    baseUrl: "https://api.spotify.com/v1/",
    timeout: 2000,

    call: function (url) {
        return fetch(url, this.getHeaders()).then(res => {
            return res.json()
        })
            .catch(err => {
                console.log("ERROOOOR")
            })
    },

    /**
     * Searches artists by matching a text.
     *
     * @see https://developer.spotify.com/web-api/console/get-search-item/
     *
     * @param {String} query - The text to search.
     * @param {Function} handleResults - Handles the results.
     * @param {Function} handleError - Handles an error.
     */
    searchArtists: function (query, baseUrl) {
        let path = baseUrl + "search?type=artist&q=" + query;
        return this.call(path).then(res => res.artists.items)
    },

    /**
     * Retrieve albums from an artist (by artist id).
     *
     * @see https://developer.spotify.com/web-api/console/get-artist-albums/
     *
     * @param {String} artistId - The id of the artist to retrieve the albums from.
     * @param {Function} handleResults - Handles the results.
     * @param {Function} handleError - Handles an error.
     */
    retrieveAlbums: function (query, baseUrl) {
        let path = query;
        return this.call(path).then(res => res.items)
    },
    
    /**
     * Retrieve tracks from an album (by album id).
     *
     * @see https://developer.spotify.com/web-api/console/get-album-tracks/
     *
     * @param {String} albumId - The id of the album to retrieve the tracks from.
     * @param {Function} handleResults - Handles the results.
     * @param {Function} handleError - Handles an error.
     */
    retrieveTracks: function (query, baseUrl) {
            let path = query;
            return this.call(path).then(res => res.items)
    },

    /**
     * Retrieve track by id.
     *
     * @see https://developer.spotify.com/web-api/console/get-track/
     *
     * @param {String} id - The id of the track to retrieve information from.
     * @param {Function} handleResults - Handles the results.
     * @param {Function} handleError - Handles an error.
     */
    retrieveTrack: function (query, baseUrl) {
        let path = baseUrl + query;
        return this.call(path).then(res => res.items)
    }

}

