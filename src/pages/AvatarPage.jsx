// import React from 'react';
// import '../Styling/AvatarPage.css';

// const AvatarPage = () => {
//   return (
//     <div className="avatar-page-container">
//       <div className="avatar">
//         <div className="avatar-head">
//           <div className="avatar-eyes">
//             <div className="avatar-eye"></div>
//             <div className="avatar-eye"></div>
//           </div>
//           <div className="avatar-lips"></div>
//         </div>
//         <div className="avatar-body">
//           <div className="avatar-hand avatar-hand-left"></div>
//           <div className="avatar-hand avatar-hand-right"></div>
          
//         </div>
        
        
//       </div>
//       <div className="avatar-message" >
//         Your event has been booked!
//       </div>
//     </div>
//   );
// };

// export default AvatarPage;



import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styling/AvatarPage.css';

const AvatarPage = () => {
  const navigate = useNavigate();

  return (
    <div className="avatar-page-container">
      <div className="avatar">
        <div className="avatar-head">
          <div className="avatar-eyes">
            <div className="avatar-eye"></div>
            <div className="avatar-eye"></div>
          </div>
          <div className="avatar-lips"></div>
        </div>
        <div className="avatar-body">
          <div className="avatar-hand avatar-hand-left"></div>
          <div className="avatar-hand avatar-hand-right"></div>
        </div>
        <div className="avatar-legs">
          <div className="avatar-leg"></div>
          <div className="avatar-leg"></div>
        </div>
      </div>
      <div className="avatar-message">
        Your event has been booked!
      </div>
      <div className="avatar-funny-message">
        Our agent will reach you soon... Now, go back to the homepage!
      </div>
      <button className="go-back-button" onClick={() => navigate('/Home')}>
        Go Back to Home
      </button>
    </div>
  );
};

export default AvatarPage;
