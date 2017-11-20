import React from 'react';
import Movie from './movie.js';
import { Container, Card, Header } from 'semantic-ui-react';


export class Session extends React.PureComponent {

    render() {
        let movies = this.props.movies || [];
        return (
            <div>
                <Container >
                    <Header size="huge">{this.props.name}</Header>
                    <Card.Group horizontal="true">
                        {movies.map((movie) =>
                            <Movie key={movie.get('id')} name={movie.get('name')} imdbURL={movie.get('imdbURL')} />
                        )}
                    </Card.Group>
                </Container>
            </div>
        );

    }

}

