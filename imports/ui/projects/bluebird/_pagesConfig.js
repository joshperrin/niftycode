import Admin from './admin/admin'
import Profile from './profile/profile'

//* This array configures the pages which will appear in the account section, the order is sequential
const pages = [{
  id: 1,
  name: 'Admin',
  pathname: '/bluebird/code/admin',
  component: Admin,
}, {
  id: 2,
  name: 'Profile',
  pathname: '/bluebird/code/profile',
  component: Profile,
  menu: 'exclude',
}]

export default pages
