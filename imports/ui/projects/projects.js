import React from 'react'
import { useHistory } from 'react-router-dom'

import Title from '../components/title'
import Link from '../components/link'
import Header from '../components/header'
import Description from '../components/description'
import Project from '../components/project'
import projects from './data'
import Logo from '../components/logo'
import { Content, Page } from '../components/content'
import { Item, ItemImage, ItemTitle, ItemBtns, ItemBtn } from '../components/items'


const Projects = () => {
  const history = useHistory()
  return (
    <Content>
      <Page>

        <Logo width="450px" />

        <Title>
          Code Examples
        </Title>

        <Link href="http://www.github.com">
          view on github
        </Link>

        {projects.map(({ key, title, desc, sections }) => (
          <Project key={key}>
            <Header>{title}</Header>
            <Description>{desc}</Description>
            {sections.map(({ key, title, image, mockupRoute, codeRoute }) => (
              <Item key={key}>
                <ItemImage image={image}>
                  <ItemBtns>
                    {mockupRoute && (
                      <ItemBtn onClick={() => history.push(mockupRoute)}>
                        mockup
                      </ItemBtn>
                    )}
                    { codeRoute && (
                      <ItemBtn onClick={() => history.push(codeRoute)}>
                        live
                      </ItemBtn>
                    )}
                  </ItemBtns>
                </ItemImage>
                <ItemTitle>
                  {title}
                </ItemTitle>
              </Item>
            ))}
          </Project>
        ))}

      </Page>
    </Content>
  )
}

export default Projects
