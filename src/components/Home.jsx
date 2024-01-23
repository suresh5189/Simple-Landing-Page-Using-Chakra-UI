import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';
import {
  Box,
  Container,
  Heading,
  Img as Image,
  Stack,
  Text,
} from '@chakra-ui/react';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: ' uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
            dignissimos facilis laboriosam pariatur dolorem, excepturi
            architecto soluta eum ab! Tenetur eum voluptate, consequuntur
            obcaecati maxime, impedit illo consequatur vero, earum nostrum in
            quia ad quidem recusandae itaque accusantium consectetur eveniet.
            Quasi dolorum, exercitationem autem repellat dolores, laborum
            dignissimos illum nesciunt at facilis quisquam obcaecati cupiditate
            cum ratione vero inventore sit recusandae odit? Expedita quia nihil
            itaque neque est ea atque recusandae asperiores maiores molestias
            unde dicta illo, corrupti quos, ex id ad enim aut quibusdam eligendi
            iste animi! Eius cum magnam deserunt repudiandae ipsam aliquid id
            eaque, sunt ab quam rem officia iste delectus ducimus ut, eum,
            explicabo nostrum ipsa totam amet. Reprehenderit magni unde dolorum
            quibusdam laudantium nam excepturi dolor dolorem, ipsa eos possimus
            nemo enim illo pariatur accusantium esse, aut ipsum, ut neque quas
            vel.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} h={'full'} w={'full'} objectFit={'cover'}/>
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} h={'full'} w={'full'} objectFit={'cover'}/>
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Future Is Gaming
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img3} h={'full'} w={'full'} objectFit={'cover'}/>
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming On Console
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img4} h={'full'} w={'full'} objectFit={'cover'}/>
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Night Life Is Cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
