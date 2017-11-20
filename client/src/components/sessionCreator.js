import React from 'react';
import { Form, Segment, Header, Button, Grid } from "semantic-ui-react";

class SessionCreator extends React.PureComponent {

    render() {
        return (
            <div>

                <Grid
                    padded
                    textAlign='center'
                    style={{ height: '100%' }}
                    verticalAlign='middle'
                >
                    <Grid.Column style={{ maxWidth: 650 }}>
                        <Header as='h2' primary textAlign='center'>
                            New Session
                        </Header>
                        <Form size='large'>
                            <Segment stacked>

                                <Form.Input placeholder='Session name' required />
                                <Button primary fluid size='large'>Create</Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        );

    }

}


export { SessionCreator };
