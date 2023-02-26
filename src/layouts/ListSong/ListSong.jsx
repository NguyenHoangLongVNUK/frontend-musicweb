import React from "react"

export default class ListSong extends React.Component {
    properties
    constructor(props) {
        super(props)
        this.properties= props
        this.showListBaiHat= this.showListBaiHat.bind(this)
    }
    showListBaiHat() {
        console.log(1234)
    }
    render() {
        return( 
            <div>
            </div>
        )
    }
}