import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel variant="dark">
        
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.civitatis.com/blog/wp-content/uploads/2021/06/shutterstock_257674933-1920x1280.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Paris</h5>
          <p> Paris est monumentale, par sa taille bien-sûr mais aussi par son riche patrimoine architectural !</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.grazia.fr/wp-content/uploads/grazia/2021/06/voyage-europe-villes-meconnues-italie-pour-vivre-dolce-vita-loin-foule.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Italie</h5>
          <p>Venise est célèbre pour ses canaux bordés de luxueux palais construits depuis le Moyen Âge, le palais des Doges, la place et la basilique Saint-Marc, et aussi pour son carnaval.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img-4.linternaute.com/23zOi-ExMTRW9cQosiTFjwHl59c=/1500x/smart/6849d902f9a24af1baff8c7fbe8768ff/ccmcms-linternaute/11429275.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Cappadoce</h5>
          <p>
          La Turquie offre de nombreuses visites culturelles avec de magnifiques sites archéologiques très bien préservés mais également des merveilles naturelles à explorer. 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default DarkVariantExample;