import React from 'react';
import { Card, Image } from 'semantic-ui-react';


class Movie extends React.PureComponent {

    render() {

        return (

            <Card centered>
                <Image src={this.props.imdbURL} size="medium" centered />
                <Card.Content>
                    <Card.Header>
                        {this.props.name}
                    </Card.Header>
                    <Card.Meta>
                        <span className='date'>
                            2015
        </span>
                    </Card.Meta>
                    <Card.Description>
                        Post hanc adclinis Libano monti Phoenice, regio plena gratiarum et venustatis, urbibus decorata magnis et pulchris; in quibus amoenitate celebritateque nominum Tyros excellit, Sidon et Berytus isdemque pares Emissa et Damascus saeculis condita priscis.                     </Card.Description>
                </Card.Content>

            </Card>
        );

    }

}


export default Movie;
