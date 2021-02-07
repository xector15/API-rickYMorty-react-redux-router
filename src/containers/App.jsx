import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getPersonajes, setPersonajesDead, setRobot, setCreature } from '../actions'
import '../assets/styles/App.scss'
import Search from '../components/Search'
import Catergories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import PropType from 'prop-types'
import Header from '../components/Header'

const API = 'https://rickandmortyapi.com/api/character';
const APIdead = 'https://rickandmortyapi.com/api/character/?status=dead'
const APIrobot = 'https://rickandmortyapi.com/api/character/?species=robot'
const APIcreature = 'https://rickandmortyapi.com/api/character/?species=creature'

const Home = props => {
    const { myList, search, personajes, dead, robot, creatures } = props
    
    const [state, setState] = useState({
        loading: true
    })
    const [person, setPerson] = useState([]);
    
    const Get = async () => {
        setState({ loading: true })
        const dead = await fetch(API)
        const deadJSON = await dead.json()
        setState({ loading: false })
        setPerson(deadJSON.results)
    }

    const [personajesDead, setPersonaDead] = useState([]);
    
    const alive = async () => {
        setState({ loading: true })
        const dead = await fetch(APIdead)
        const deadJSON = await dead.json()
        setState({ loading: false })
        setPersonaDead(deadJSON.results)
    }
    const [robots, setRobot] = useState([]);

    const robotx = async () => {
        const dead = await fetch(APIrobot)
        const deadJSON = await dead.json()
        setRobot(deadJSON.results)      
    }

    const [creaturesD, setCreatures] = useState([]);

    const Creatures = async () => {
        const dead = await fetch(APIcreature)
        const deadJSON = await dead.json()
        setCreatures(deadJSON.results)      
    }

    useEffect(() => {
        Get()
        alive()
        robotx()
        Creatures()
    }, [])
    props.setCreature(creaturesD)
    props.setRobot(robots)
    props.getPersonajes(person)
    props.setPersonajesDead(personajesDead)

    return (
        <>
            <Header/>
            
            <Search isHome/>
            
            {Object.keys(search).length > 0 && 
                <Catergories title="Resultados de la busqueda...">
                    <Carousel>
                        {search.map(item =>
                            <CarouselItem 
                                key={item.id} 
                                {...item}
                            />
                        )}
                    </Carousel>
                </Catergories>                                
            }
            
            {myList.length > 0 &&
                <Catergories title="Mi Lista">
                    <Carousel>
                        {myList.map(item =>
                            <CarouselItem
                                key={item.id}
                                {...item}
                                isList
                            />
                        )}  
                    </Carousel>
                </Catergories>
            }

            <Catergories title="Tendencias">
                {state.loading ?
                    <h1>Loading</h1>:
                    <Carousel>
                        {personajes.map(item =>
                            <CarouselItem key={item.id} {...item} />
                        )}   
                    </Carousel>
                } 
            </Catergories>

            <Catergories title="Robots">
                {state.loading ?
                    <h1>Loading</h1>: 
                    <Carousel>
                        {robot.map(item =>
                            <CarouselItem key={item.id} {...item} />
                        )}  
                    </Carousel>
                }
            </Catergories>

            <Catergories title="Criaturas">
                {state.loading ? 
                    <h1>loading</h1>:
                        <Carousel>
                            {creatures.map(item =>
                                <CarouselItem key={item.id} {...item} />
                            )}  
                        </Carousel>
                }
            </Catergories>
            
            
        </>
    )
};

Home.propType = {
    myList: PropType.bool,
    trends: PropType.array,
    originals: PropType.array,
    search: PropType.array
}

const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
        search: state.search,
        personajes: state.personajes,
        dead: state.dead,
        robot: state.robot,
        creatures: state.creatures,
    };
};

const mapDispathToProps = {
    getPersonajes,
    setPersonajesDead,
    setRobot,
    setCreature
}

export default connect(mapStateToProps, mapDispathToProps)(Home);