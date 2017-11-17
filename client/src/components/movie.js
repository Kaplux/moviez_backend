import React from 'react';
import { connect } from 'react-redux';
import { Card, Image, Icon } from 'semantic-ui-react';


class Movie extends React.PureComponent {

    render() {

        return (

            <Card>
                <Image src={this.props.imdbURL} />
                <Card.Content>
                    <Card.Header>
                        {this.props.name}
                    </Card.Header>
                    <Card.Meta>
                        <span className='date'>
                            Joined in 2015
        </span>
                    </Card.Meta>
                    <Card.Description>
                        Matthew is a musician living in Nashville.
      </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        22 Friends
      </a>
                </Card.Content>
            </Card>
        );

    }

}


export default Movie;
