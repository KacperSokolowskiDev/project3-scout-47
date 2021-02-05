import axios from 'axios';

class MediaPlayer {
    constructor(path){
        console.log("construction")
        console.log(path)
        this.path = 'api'
        this.port = 5000
        this.url = `http://localhost:${this.port}/${this.path}`
        this.video = ""
    }

    getMyCurrentPlaybackState = async () => {
        return this.video
        // try {
        //     console.log("get my current playback state")

        //     // const players = axios.get(`${this.url}/players`, { ...params })
        //     // return players
        //     return await true
            
        // } catch (error) {
        //     // throw new Error(error)
        // }
    }

    skipToPrevious = async () => {
        try {
            console.log("skipping to prev")

            // const players = axios.get(`${this.url}/players`, { ...params })
            // return players
            return await true
            
        } catch (error) {
            // throw new Error(error)
        }
    }

    skipToNext = async () => {
        try {
            console.log("skipping to next")

            // const players = axios.get(`${this.url}/players`, { ...params })
            // return players
            return await true
            
        } catch (error) {
            // throw new Error(error)
        }
    }

    getMyCurrentPlayingTrack = async (id) => {
        try {
            console.log("getMyCurrentTrackPlaying")

            const res = await axios.get(`${this.url}/evaluations/${id}`)
            console.log('yaaa', res.data)
            // this.video = evaluation.video
            // console.log(evaluation)
            // return players
            return res.data

            
        } catch (error) {
            // throw new Error(error)
        }
    }

    play = async () => {
        try {
            console.log("playing")

            // const players = axios.get(`${this.url}/players`, { ...params })
            // return players
            return await true

            
        } catch (error) {
            // throw new Error(error)
        }
    }


    pause = async () => {
        try {
            console.log("pausing")

            // const players = axios.get(`${this.url}/players`, { ...params })
            // return players
            return await true
            
        } catch (error) {
            // throw new Error(error)
        }
    }

    getPlayer = async (id) => {
        try {
            console.log("getting Ppllayer ?")
            // const player = await axios.get(`${this.url}/players/${id}`)
            // return player
            
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default MediaPlayer