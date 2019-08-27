// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.

import React, { Component, PureComponent  } from "react"
import styles from './Search.module.css';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { searchRequest, showRequest } from './../../modules/actions';
import ShowPreview from '../ShowPreview'

class Search extends PureComponent  {
    constructor(props) {
        super(props);
        this.handlSubmit = this.handlSubmit.bind(this);
        /*this.handlClick = this.handlClick.bind(this);*/
    }

/*
    handlClick = (event) => {
        const { showRequest } = this.props;
        showRequest(event.target.dataset.id)
    }
*/

    handlSubmit = (event) => {
        event.preventDefault();

        const { searchRequest } = this.props;

        searchRequest(event.target.search.value);
    }

    render() {
        const { search } = this.props;

        return (
            <div>
                <div className={styles.previewList}>
                    <form action="" onSubmit={this.handlSubmit}>
                        <input type="text"
                        name="search"
                        className={`${styles.input} t-input`} />
                        <div className={styles.buttonWrapper}>
                            <button type="submit"
                                    className={`${styles.button} t-search-button`}>
                                Найти
                            </button>
                        </div>
                    </form>
                    </div>
                    <div className={`${styles.searchPanel} t-search-result`}>
                        {search.series && search.series.map((item) => (
                            <ShowPreview
                                id={item.id}
                                name={item.name}
                                image={item.image.medium}
                                summary={item.summary}
                                handlClick = {this.handlClick}
                            />
                        ))}
                </div>
            </div>

        )

    }
}

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps  = { searchRequest };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Search)
