'use client'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import ProjectCard, { ProjectType } from '../projectCard/ProjectCard';

interface Props {
  projects: ProjectType[]
}

export default function Slide({ projects }: Props) {
  let slideCount = 0

  if (projects.length >= 3) {
    slideCount = 3
  } else if (projects.length < 3) {
    slideCount = projects.length
  }

  let slideWidth
  if (slideCount > 2) {
    slideWidth = 1100
  } else if (slideCount < 2) {
    slideWidth = 430
  } else {
    slideWidth = 750
  }

  return (
    <>
      <div className='pb-5'>
        <Splide
          hasTrack={true}
          options={{
            type: 'loop',
            perPage: slideCount,
            perMove: 1,
            width: slideCount * 400,
            gap: '1rem',
            pagination: false,
            arrows: projects.length > 3 ? true : false,
            drag: projects.length > 3 ? true : false,
            breakpoints: {
              1400: {
                width: slideWidth
              },
              1200: {
                perPage: slideCount < 2 ? 1 : 2,
                width: slideCount < 2 ? 400 : 750,
                arrows: true
              },
              768: {
                perPage: 1,
                width: 400,
                arrows: true
              },
              420: {
                width: 350
              },
              368: {
                width: 300,
                arrows: true
              }
            }
          }}
        >
          {Array.isArray(projects) && projects.map((project) => (
            <SplideSlide key={project.id}>
              <ProjectCard project={project} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  )
}