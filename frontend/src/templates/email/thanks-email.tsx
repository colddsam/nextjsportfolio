import React from 'react';

export const ThankYouEmail = ({ first }:{first:string}) => {
  const styles = {
    emailContainer: {
      fontFamily: 'Arial, sans-serif',
      lineHeight: 1.6,
      color: '#333',
      backgroundColor:'#ffffff',
      height: '100vh',
      width:'100vw'
    },
    header: {
      backgroundColor: '#f7f7f7',
      padding: '10px',
      borderBottom: '1px solid #ddd',
      textAlign: 'center' as 'center',
    },
    content: {
      padding: '20px',
    },
    footer: {
      backgroundColor: '#f7f7f7',
      padding: '10px',
      borderTop: '1px solid #ddd',
      textAlign: 'center' as 'center',
      fontSize: '12px',
      color: '#777',
    },
    feedbackButton: {
      display: 'inline-block',
      margin: '20px 0',
      padding: '10px 20px',
      backgroundColor: '#f7f7f7',
      borderRadius: '5px',
      textDecoration: 'none',
      color: '#777',
    },
  };

  return (
    <div style={styles.emailContainer}>
      <div style={styles.header}>
        <h2>Thank You for Your Feedback</h2>
      </div>
      <div style={styles.content}>
        <p>Dear {first},</p>
        <p>
          Thank you for taking the time to provide your valuable feedback. I appreciate your input and are committed to continuously improving it.
        </p>
        <p>
          If you have any further comments or questions, please feel free to reach out to me at any time.
        </p>
        <p>
          We look forward to collaborate with you soon!
        </p>
        <p>Best regards,</p>
        <p>colddsam</p>
      </div>
      <div style={styles.footer}>
        <p>colddsam | samrat@colddsam.xyz | www.colddsam.xyz</p>
      </div>
    </div>
  );
};

