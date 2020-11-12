import React from 'react';
import { Row, Col } from 'antd';

export default function About() {
    return (
        <div>
            <Row align="top" justify="center">
                <Col
                    span={24}>
                    <h1>About</h1>
                    <p>This is the About Page.</p>
                </Col>
            </Row>
        </div>
    )
}
