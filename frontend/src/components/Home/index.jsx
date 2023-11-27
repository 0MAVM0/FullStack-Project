import Carousel from '../Carousel'

function  Home() {
    return (
        <main>
            <Carousel
                dynamicHeight={true}
                width="100%"
                imgHeight="600px"
                autoPlay={true}
            />

        </main>
    )
}

export default Home
