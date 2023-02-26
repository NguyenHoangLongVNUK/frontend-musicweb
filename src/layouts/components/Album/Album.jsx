import React from 'react'
import ListSong from '~/layouts/ListSong/ListSong'

// kế thừa
class Album extends ListSong {
    properties
    constructor(props) {
        super(props)
        this.properties= props
        this.showListBaiHat= this.showListBaiHat.bind(this)
    }
    category= ()=> {
        return (
            <div>Album nhạc</div>
        )
    }
    render() {
        return (
            // tính trừu tượng
            <div style={{padding: 10}} onClick={()=> this.showListBaiHat()}>
                Album 
            </div>
        )
    }
}

export class AlbumRock extends Album {
    category= ()=> {
        return (
            <div>Album nhạc rock</div>
        )
    }
    render() {
        return (
            <>
                {
                    this.category()
                }
            </>
        )
    }
}

export class AlbumCountry extends Album {
    category= ()=> {
        return (
            <div>Album nhạc country</div>
        )
    }
    render() {
        return (
            <>
                {
                    this.category()
                }
            </>
        )
    }
}

export class AlbumJazz extends Album {
    category= ()=> {
        return (
            <div>Album nhạc jazz</div>
        )
    }
    render() {
        return (
            <>
                {
                    this.category()
                }
            </>
        )
    }
}
export default Album