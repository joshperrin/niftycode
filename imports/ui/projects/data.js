
import Artisan from './artisan/artisan'
import BlueBird from './bluebird/bluebird'

export default [
  {
    key: 1,
    title: 'Artisan',
    desc: 'An intuitive and beautiful tool for artists, makers, and creators to know their products profits, track their costs, and organize their inventory',
    projectRoute: '/artisan/code',
    projectComponent: Artisan,
    sections: [
      {
        key: 1,
        title: 'Landing Page',
        image: '/images/artisan-landing.jpg',
        mockupRoute: '/artisan/mockup/landing',
        codeRoute: '/artisan/code/landing',
      }, {
        key: 2,
        title: 'Products',
        image: '/images/artisan-products.jpg',
        mockupRoute: '/artisan/mockup/products',
        codeRoute: '/artisan/code/products',
      }, {
        key: 3,
        title: 'Product View',
        image: '/images/artisan-product-view.jpg',
        mockupRoute: '/artisan/mockup/product',
        codeRoute: '/artisan/code/product',
      },
    ],
  }, {
    key: 2,
    title: 'BlueBird Payroll',
    desc: 'A simple payroll application for small business to pay their employees',
    projectRoute: '/bluebird/code',
    projectComponent: BlueBird,
    sections: [{
      key: 1,
      title: 'Landing Page',
      image: '/images/bluebird-landing.jpg',
      mockupRoute: '/bluebird/mockup/landing',
      codeRoute: '/bluebird/code/landing',
    }, {
      key: 2,
      title: 'Profile',
      image: '/images/bluebird-profile.jpg',
      mockupRoute: '/bluebird/mockup/profile',
      codeRoute: '/bluebird/code/profile',
    }, {
      key: 3,
      title: 'Admin',
      image: '/images/bluebird-admin.jpg',
      mockupRoute: '/bluebird/mockup/admin',
      codeRoute: '/bluebird/code/admin',
    }],
  }, {
    key: 3,
    title: 'Wetpaint TV',
    desc: 'a web video destination for celebrity news',
    sections: [
      {
        key: 1,
        title: 'Live TV Menu',
        image: '/images/wetpaintTV-live-menu.jpg',
        mockupRoute: '/wetpaintTV/mockup/livemenu',
      }, {
        key: 2,
        title: 'Live Video',
        image: '/images/wetpaintTV-live-video.jpg',
        mockupRoute: '/wetpaintTV/mockup/employees',
      }, {
        key: 3,
        title: 'Search',
        image: '/images/wetpaintTV-search.jpg',
        mockupRoute: '/wetpaintTV/mockup/search',
      },
    ],
  },
]
