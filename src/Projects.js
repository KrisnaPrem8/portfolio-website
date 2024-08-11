import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'TextMiner',
      description: '• Developed a system to extract article titles and text from URLs, filtering out headers and footers. • Conducted textual analysis to compute metrics like Positive Score, Negative Score, Polarity Score, Subjectivity Score, and more. • Automated analysis and structured results in CSV/Excel format. • Technologies Used: BeautifulSoup, Selenium, Scrapy, Python.',
      image: 'path-to-image1.jpg'
    },
    {
      title: 'WeatherGuard',
      description: '• Analyzed weather incident data to identify patterns and high-risk zones using Python. • Data cleaning, preprocessing, exploratory data analysis (EDA) with visualizations, spatial clustering to identify and label high-risk zones, yearly classification to determine the most affected years. • Developed a script to calculate events within a 50 KM radius of a point. • Technologies Used: Matplotlib, Seaborn, Scikit-learn, Pandas, NumPy, Jupyter Notebook, Python',
      image: 'path-to-image2.jpg'
    }
    // Add more projects here
  ];

  return (
    <section id="projects" className="p-6 bg-gray-200">
      <h1 className="text-3xl font-bold text-center text-gray-600">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
