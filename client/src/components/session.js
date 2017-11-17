import React from 'react';
import { connect } from 'react-redux';
import Movie from './movie.js';
import { Container, Card, Segment, Header } from 'semantic-ui-react';


class Session extends React.PureComponent {

    render() {
        let movies = this.props.movies || [];
        return (
            <div>
                <Container >
                    <Header size="huge">{this.props.name}</Header>
                    <Card.Group horizontal>
                        {movies.map((movie) =>
                            <Movie name={movie.get('name')} imdbURL={movie.get('imdbURL')} />
                        )}
                    </Card.Group>
                </Container>
            </div>
        );

    }

}


function mapStateToProps(state) {
    return {
        name: state.session.getIn(['currentSession', 'name']),
        movies: state.session.getIn(['currentSession', 'movies'])
    };
}

export { Session };
export const CurrentSessionContainer = connect(mapStateToProps)(Session);
