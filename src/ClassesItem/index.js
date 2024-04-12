import React from 'react'; // Import React library
import './index.css'; // Import CSS file for styling

// Functional component ClassesItem which receives props as { item }
const ClassesItem = ({ item }) => {
  return (
    <li className="classes-item"> {/* Container for each class item */}
      <div className="video-con"> {/* Container for video and class details */}
        <div className="video-container"> {/* Container for the video */}
          {/* Embed YouTube video */}
          <iframe
            className="video videoCon" // Apply CSS classes
            src={`https://www.youtube.com/embed/${item.videoUrl}`} // Embed URL dynamically based on item's videoUrl
            title={item.name} // Set title attribute
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" // Allow certain permissions
            allowFullScreen // Allow fullscreen mode
          ></iframe>
        </div>
        <div className="class-details"> {/* Container for class details */}
          <h2 className="class-title">{item.name}</h2> {/* Class title */}
          <p className="class-description">{item.description}</p> {/* Class description */}
          <button className="btn">Practice</button> {/* Practice button */}
        </div>
      </div>
      <hr className="divider" /> {/* Divider line */}
    </li>
  );
};

export default ClassesItem; // Export the ClassesItem component
