import { ListGroup, Card } from "react-bootstrap"
import Container from "react-bootstrap"

export default function Packages(props) {
    const displayPackages = props.packages.map((eachPackage, i) => <ListGroup.Item key ={i} >{eachPackage}</ListGroup.Item>)

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>
                        OurPackages
                    </Card.Title>
                    <Card.Text>
                        Check out these awesome expensive treatements
                    </Card.Text>
                </Card.Body>
            </Card>
            <ListGroup>
               {displayPackages} 
            </ListGroup>
        </Container>
    )
}