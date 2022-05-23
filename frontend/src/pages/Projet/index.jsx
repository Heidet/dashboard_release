import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useFetch, useTheme } from '../../utils/hooks'
import { StyledLink, Loader } from '../../utils/style/Atoms'
import Col from 'react-bootstrap/Col';
import * as React from 'react';
import { Row } from 'react-bootstrap';
import Grid from './grid';
import  IframeCommit from './iframeCommit';

import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid';

import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardText,
    Button,
    CardFooter,
    Container,
    ListGroup,
    ListGroupItem
  } from "reactstrap";


const StyledTitle = styled.h1`
  text-align: center;
  padding-bottom: 30px;
  line-height: 50px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const ContainerGrid = styled.div`
    // display: flex;
    width: '100%';
    height: 400;
    padding-top: 2%;
    justify-content: center;
`

const HomeWrapper = styled.div`
  // display: flex;
  width: '100%';
  height: 400;
  justify-content: center;
`


const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`


function Projet(props) {
  const { theme } = useTheme()
  const { id } = props.match.params
  const title = props.match.params.id
  const { data, isLoading, error } = useFetch(`https://api.github.com/repos/Heidet/${id}/commits`)
  

  if (error) {
    return <span>Il y a un problème</span>
  }
  return isLoading ? (
      <LoaderWrapper>
        <Loader data-testid="loader" />
      </LoaderWrapper>
    ) : (
    //   console.log(data),
      <HomeWrapper theme={theme}>
        <StyledTitle theme={theme}>
            Projet {title}
        </StyledTitle>
        <Container fluid="lg">
            <Card>
                <CardHeader>
                    File
                </CardHeader>
                <CardBody>
                    <CardTitle tag="h5">
                        Special Title Treatment
                    </CardTitle>
                    <CardText>
                        
                    <ListGroup>
                        <ListGroupItem href="#" tag="a">
                            Vestibulum at eros
                        </ListGroupItem>
                    </ListGroup>
                    </CardText>
                </CardBody>
            </Card>
        </Container>

        <Container fluid="lg">
            <ContainerGrid>
                <Grid id={id}/>
            </ContainerGrid>
        </Container>
        <Container fluid="lg">
              <IframeCommit id={id}/>
        </Container>
      </HomeWrapper>
  );
}


export default Projet
