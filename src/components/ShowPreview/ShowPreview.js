// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.

import React from "react";
import styles from "./ShowPreview.module.css"
import { Link } from "react-router-dom"

const ShowPreview = ({ image, name, id, summary }) => {


    return (
        <div className={`${styles.container} t-preview`}>
            <div>
                <Link to={`show/${id}`} className="t-link">{name}</Link>
                <div>
                    {image && <img src={image} alt={name}/>}
                </div>
            </div>
            <div>{summary}</div>
        </div>
    )
}

export default ShowPreview
