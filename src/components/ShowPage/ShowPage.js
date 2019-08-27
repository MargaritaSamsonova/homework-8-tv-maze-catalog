// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action

import React, { PureComponent, Component } from "react";
import { connect } from 'react-redux';
import styles from './ShowPage.module.css'
import {showRequest, searchRequest} from "../../modules/actions";


class ShowPage extends PureComponent {
    componentDidMount() {
        const { showRequest, match } = this.props;
        const id = match.params && match.params.id;

        showRequest(id);
    }

    render() {
        const { shows } = this.props;
        const oneSeries = shows.oneSeries;

        return (
            <div>
                {oneSeries ?
                    (<>
                        <p>{oneSeries.name}</p>
                        <img src={oneSeries.image.medium} alt={oneSeries.name}/>
                        <div>{oneSeries.summary}</div>
                        <div className={styles.cast}>
                            {oneSeries._embedded.cast.map((cast) => (
                                <div className="t-person">
                                    <p>{cast.person.name}</p>
                                    <img src={cast.person.image.medium} alt=""/>
                                </div>
                            ))}
                        </div>
                    </>) : (<div>Loading...</div>)
                }

            </div>
        )
    }
}

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps  = { searchRequest, showRequest };


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowPage)
