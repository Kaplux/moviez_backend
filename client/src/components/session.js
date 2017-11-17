import React from 'react';
import { connect } from 'react-redux';
import Movie from './movie.js';
import { Container, Segment } from 'semantic-ui-react';


class Session extends React.PureComponent {

    render() {
        let movies = this.props.movies || [];
        console.log(movies);
        return (
            <div>
                <Container>
                    <Segment>
                        Current Session : {this.props.name}
                        {movies.map((movie) =>
                            <Movie name={movie.get('name')} imdbURL={movie.get('imdbURL')} />
                        )}
                    </Segment>
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
