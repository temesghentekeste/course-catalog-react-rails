course = Course.create(title:'Hello World', description: 'Create a React app with Ruby on Rails')

section = Section.create( title: 'Chapter 1', course: course)

episodes = Episode.create([
    {
        title: '1. Setting up a new Ruby on Rails App with React',
        description: 'Lorem ipsum ...',
        url: 'https://www.youtube.com/embed/B0SxxHAImhc', 
        section: section  
      },
      {
        title: '2. Adding React to an existing Rails App',
        description: 'Lorem ipsum ...',
        url: 'https://www.youtube.com/embed/B0SxxHAImhc', 
        section: section
      },
      {
        title: '3. Building a Hello World app',
        description: 'Lorem ipsum ...',
        url: 'https://www.youtube.com/embed/B0SxxHAImhc', 
        section: section      
      },
      {
        title: '4. Adding React Router DOM to your app',
        description: 'Lorem ipsum ...',
        url: 'https://www.youtube.com/embed/B0SxxHAImhc', 
        section: section
      }
])