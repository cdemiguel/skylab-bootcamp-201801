/**
 * Spotify API client.
 *
 * @version 2.0.0
 */
var spotifyApi;
"use strict";

spotifyApi = {

    token: "BQCnswRBWYNi3XZl4BE9nd-R2mBNZyibgK8i9pn_007HEIJneAsVF0LRT39GBEfbs1cl5ak6OQ8vjEQGAIv_-DDnOOA8CPflZqQfSCDQdDs_8kjZ27SCjDKpQXUlWVrnlyt5gqteZEWCjhc",

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
        var baseUrl = "https://api.spotify.com/v1/";
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
        var baseUrl = "https://api.spotify.com/v1/";
        let path = baseUrl + "artists/" + query +"/albums";
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
            let path = query
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
    retrieveTrack: function (query) {
        let path = query;
        return this.call(path).then(res => res)
    }

}

