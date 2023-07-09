import React from "react";
import PropTypes from "prop-types";
import YoutubeEmbed from "./YoutubeEmbed";


export default function TwoRows(props) {
    return (
        <div className='row rowstyle'>
            <div className='col-6 vid-item'>
                <YoutubeEmbed embedId={props.ID1}/>
            </div>
            <div className='col-6 vid-item'>
                <YoutubeEmbed embedId={props.ID2} />
            </div>
        </div>
        
    )
}