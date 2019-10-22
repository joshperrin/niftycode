import styled from 'styled-components'

const ProfileImage = styled.img`
  display: block;
  width: ${props => props.size ? props.size : '90px'};
  height: ${props => props.size ? props.size : '90px'};
  border-radius: 50%;
  margin: 0 auto;
  border: 2px solid #FFFFFF;
  background: #D8D8D8;
`

export default ProfileImage
