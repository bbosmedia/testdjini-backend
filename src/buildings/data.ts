export interface IHomeData{
  id: number
  title: string
  address: string
  cost: number
  bathrooms: number
  bedrooms: number
  type: string
  date: Date
  img: string
}

export const homeData:IHomeData[] = [
    {
      id: 1,
      title: 'Villa in Tashkent',
      img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      address: 'Yakkasaroy, Tashkent, Uzbekistan',
      cost: 300000,
      type: 'Villa',
      bathrooms: 2,
      bedrooms: 3,
      date: new Date('2022-01-28')
    },
    {
      id: 2,
      title: 'Modern Appartment in Moscow',
      img: 'https://images.unsplash.com/photo-1583377519891-1eea1c2e3947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXBwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      address: 'Moscow City, Moscow, Russia',
      cost: 250000,
      type: 'Appartment',
      bathrooms: 2,
      bedrooms: 3,
      date: new Date('2022-01-28')
    },
    {
      id: 3,
      title: 'Modern Appartment in Moscow',
      img: 'https://images.unsplash.com/photo-1629371997433-d11e6161a8b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXBwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      address: 'Moscow City, Moscow, Russia',
      cost: 120000,
      type: 'Apartment',
      bathrooms: 2,
      bedrooms: 3,
      date: new Date('2022-01-28')
    },
    {
      id: 4,
      title: 'Modern Appartment in Astana',
      img: 'https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      address: 'Astana City, Astana, Kazakhstan',
      cost: 100000,
      type: 'Apartment',
      bathrooms: 1,
      bedrooms: 2,
      date: new Date('2022-01-28')
    },
    {
      id: 5,
      title: 'Modern Appartment in Moscow',
      img: 'https://images.unsplash.com/photo-1571236673892-13d222da2019?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFwcGFydG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      address: 'Moscow City, Moscow, Russia',
      cost: 500000,
      type: 'Apartment',
      bathrooms: 2,
      bedrooms: 6,
      date: new Date('2022-04-28')
    },
    {
      id: 6,
      title: 'Modern Appartment in Moscow',
      img: 'https://images.unsplash.com/photo-1466098672325-c9ddda4b7975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwcGFydG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      address: 'Moscow City, Moscow, Russia',
      cost: 305000,
      type: 'Apartment',
      bathrooms: 2,
      bedrooms: 3,
      date: new Date('2022-05-25')
    },
    {
      id: 7,
      title: 'Modern Villa in Moscow',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmlsbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      address: 'Moscow City, Moscow, Russia',
      cost: 500000,
      type: 'Villa',
      bathrooms: 2,
      bedrooms: 3,
      date: new Date('2022-05-25')
    },
    {
      id: 8,
      title: 'Modern Villa in Moscow',
      img: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      address: 'Moscow City, Moscow, Russia',
      cost: 450000,
      type: 'Villa',
      bathrooms: 2,
      bedrooms: 3,
      date: new Date('2022-05-25')
    },
    {
      id: 9,
      title: 'Modern Villa in Moscow',
      img: 'https://plus.unsplash.com/premium_photo-1661883982941-50af7720a6ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dmlsbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      address: 'Moscow City, Moscow, Russia',
      cost: 400000,
      type: 'Villa',
      bathrooms: 2,
      bedrooms: 3,
      date: new Date('2022-05-25')
    },
    {
      id: 10,
      title: 'Luxury Villa in Tashkent',
      img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dmlsbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      address: 'Tashkent, Uzbekistan',
      cost: 900000,
      type: 'Villa',
      bathrooms: 2,
      bedrooms: 3,
      date: new Date('2022-06-25')
    },
    {
      id: 11,
      title: 'Modern Villa in Moscow',
      img: 'https://images.unsplash.com/photo-1597211833712-5e41faa202ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHZpbGxhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      address: 'Moscow City, Moscow, Russia',
      cost: 100000,
      type: 'Villa',
      bathrooms: 2,
      bedrooms: 3,
      date: new Date('2022-10-21')
    },
    {
      id: 12,
      title: 'Modern Town House in Tashkent',
      img: 'https://images.unsplash.com/photo-1577593980495-6e7f66a54ee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG93bmhvdXNlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      address: 'Tashkent, Uzbkeistan',
      cost: 200000,
      type: 'Town House',
      bathrooms: 2,
      bedrooms: 3,
      date: new Date('2022-10-25')
    },
    {
      id: 13,
      title: 'Modern Town House in Moscow',
      img: 'https://images.unsplash.com/photo-1519227355453-8f982e425321?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dG93bmhvdXNlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      address: 'Moscow City, Moscow, Russia',
      cost: 200000,
      type: 'Town House',
      bathrooms: 2,
      bedrooms: 3,
      date: new Date('2022-12-25')
    },
    {
      id: 14,
      title: 'Modern Town House in Dubai',
      img: 'https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dG93bmhvdXNlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      address: 'Dubai, UAE',
      cost: 200000,
      type: 'Town House',
      bathrooms: 2,
      bedrooms: 3,
      date: new Date('2022-07-07')
    },
    {
      id: 15,
      title: 'Modern Town House in Uzbekistan',
      img: 'https://images.unsplash.com/photo-1603661764782-a3c9812afada?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRvd25ob3VzZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
      address: 'Tashkent, Uzbekistan',
      cost: 200000,
      type: 'Town House',
      bathrooms: 2,
      bedrooms: 3,
      date: new Date('2022-08-08')
    },
    {
      id: 16,
      title: 'Modern Town House in Moscow',
      img: 'https://plus.unsplash.com/premium_photo-1661313639796-8c38ae96756f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRvd25ob3VzZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
      address: 'Moscow City, Moscow, Russia',
      cost: 200000,
      type: 'Town House',
      bathrooms: 2,
      bedrooms: 3,
      date: new Date('2022-03-23')
    },
    {
      id: 17,
      title: 'Modern Town House in Ottawa',
      img: 'https://images.unsplash.com/photo-1464082354059-27db6ce50048?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRvd25ob3VzZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
      address: 'Ottawa, Canada',
      cost: 200000,
      type: 'Town House',
      bathrooms: 2,
      bedrooms: 3,
      date: new Date('2022-12-01')
    },
    {
      id: 18,
      title: 'Modern Town House in Moscow',
      img: 'https://images.unsplash.com/photo-1629371997433-d11e6161a8b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRvd25ob3VzZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
      address: 'Moscow City, Moscow, Russia',
      cost: 200000,
      type: 'Town House',
      bathrooms: 2,
      bedrooms: 3,
      date: new Date('2022-06-05')
    },
    {
      id: 19,
      title: 'Modern Town House in Paris',
      img: 'https://plus.unsplash.com/premium_photo-1661293864119-9c689ca0a1de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHRvd25ob3VzZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
      address: 'Paris, France',
      cost: 200000,
      type: 'Town House',
      bathrooms: 2,
      bedrooms: 3,
      date: new Date('2022-12-28')
    },
    {
      id: 20,
      title: 'Modern Town House in Rome',
      img: 'https://images.unsplash.com/photo-1508516605172-d5e7a427f514?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHRvd25ob3VzZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
      address: 'Rome, Italy',
      cost: 240000,
      type: 'Town House',
      bathrooms: 2,
      bedrooms: 3,
      date: new Date('2022-12-25')
    },
]